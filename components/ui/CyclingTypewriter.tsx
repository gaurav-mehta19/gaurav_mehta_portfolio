'use client';

import { useState, useEffect } from 'react';


interface SimpleTypewriterProps {
  texts: string[];
  className?: string;
}

export function SimpleTypewriter({ 
  texts, 
  className = ""
}: SimpleTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (currentText.length < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, 80);
      } else {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting animation
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 40);
      } else {
        // Move to next text
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentIndex, texts]);

  return (
    <div className={className}>
      <span className="text-slate-300">
        {currentText}
      </span>
    </div>
  );
}