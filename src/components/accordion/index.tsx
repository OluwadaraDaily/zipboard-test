import { useState, useRef } from "react";
import { useTheme } from "../../context/useTheme";

interface IAccordionProps {
  title: string;
  children: React.ReactNode;
  lastTile?: boolean;
}

const Accordion = ({ title, children, lastTile = false }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  const getIconPath = () => {
    if (isOpen) {
      return isDark ? "/minus_white.svg" : "/minus.svg";
    }
    return isDark ? "/plus_white.svg" : "/plus.svg";
  };

  return (
    <div className={`flex flex-col border-t border-app-light-gray ${lastTile ? 'border-b' : ''}`}>
      <button 
        className="flex items-center justify-between md:p-5 p-3 gap-4 cursor-pointer w-full" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="md:text-3xl text-2xl text-left font-bold font-dm-sans">{title}</h2>
        <img 
          src={getIconPath()} 
          alt="chevron" 
          className={`w-6 h-6 transition-transform duration-5200 ease-in-out`} 
        />
      </button>
      <div 
        ref={contentRef}
        className={`overflow-hidden transition-[height] duration-800 ease-in-out`}
        style={{ 
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <div className="p-5 text-left text-[22px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion;