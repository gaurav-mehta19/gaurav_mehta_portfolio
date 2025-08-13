/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined)[]) {
  return twMerge(clsx(inputs));
}
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: (e: React.MouseEvent) => void }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: (e: React.MouseEvent) => void }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <button
                  onClick={(e) => {
                    if (item.onClick) {
                      item.onClick(e);
                    } else {
                      window.open(item.href, item.href.startsWith('mailto:') ? '_self' : '_blank');
                    }
                  }}
                  key={item.title}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700/30 hover:bg-slate-600/40 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/60 backdrop-blur-md border border-slate-600/50 hover:bg-slate-700/60 transition-all duration-300 shadow-lg"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: (e: React.MouseEvent) => void }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-center justify-center gap-7 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-slate-600/50 px-8 shadow-xl md:flex min-w-[270px]",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-80, 0, 80], [50, 80, 50]);
  const heightTransform = useTransform(distance, [-80, 0, 80], [50, 80, 50]);

  const widthTransformIcon = useTransform(distance, [-80, 0, 80], [22, 34, 22]);
  const heightTransformIcon = useTransform(
    distance,
    [-80, 0, 80],
    [22, 34, 22],
  );

  const width = useSpring(widthTransform, {
    mass: 0.01,
    stiffness: 800,
    damping: 35,
  });
  const height = useSpring(heightTransform, {
    mass: 0.01,
    stiffness: 800,
    damping: 35,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.01,
    stiffness: 800,
    damping: 35,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.01,
    stiffness: 800,
    damping: 35,
  });

  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      window.open(href, href.startsWith('mailto:') ? '_self' : '_blank');
    }
  };

  return (
    <button onClick={handleClick}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-xl bg-slate-700/30 hover:bg-slate-600/40 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute -top-14 left-1/2 min-w-[80px] rounded-xl border border-slate-500/30 bg-slate-800/90 backdrop-blur-lg px-5 py-3 text-sm font-semibold whitespace-nowrap text-slate-100 shadow-2xl"
              style={{
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1)'
              }}
            >
              {title}
              {/* Tooltip arrow */}
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800/90"
                style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </button>
  );
}
