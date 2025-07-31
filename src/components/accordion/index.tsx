import { useState, useRef } from "react";

interface IAccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col border-t border-app-light-gray">
      <button 
        className="flex items-center justify-between p-5 cursor-pointer w-full" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-3xl font-bold text-black font-dm-sans">{title}</h1>
        <img 
          src={isOpen ? "/minus.svg" : "/plus.svg"} 
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