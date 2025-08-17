'use client';

import { useState, useEffect, useCallback, memo } from 'react';


interface SimpleTypewriterProps {
  texts: string[];
  className?: string;
}

const SimpleTypewriter = memo(function SimpleTypewriter({ 
  texts, 
  className = ""
}: SimpleTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const updateText = useCallback(() => {
    const text = texts[currentIndex];
    
    if (isTyping) {
      if (currentText.length < text.length) {
        setCurrentText(text.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentIndex, texts]);

  useEffect(() => {
    const timeout = setTimeout(updateText, isTyping ? 80 : 40);
    return () => clearTimeout(timeout);
  }, [updateText, isTyping]);

  return (
    <div className={className}>
      <span className="text-slate-300">
        {currentText}
      </span>
    </div>
  );
});

export { SimpleTypewriter };