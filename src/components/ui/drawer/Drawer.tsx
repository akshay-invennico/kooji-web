import React from 'react';

interface DrawerProps {
  item: {
    title: string;
    content: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`
        flex-shrink-0 
        h-full 
        rounded-lg 
        shadow-lg 
        transition-all 
        duration-500 
        ease-in-out
        ${isOpen ? 'w-full lg:w-[480px] p-6 sm:p-8 bg-white border border-gray-200' : 'w-24 lg:w-32 cursor-pointer p-4 bg-gray-50 hover:bg-[#F8F8F8]'}
      `}
      onClick={!isOpen ? onToggle : undefined}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-900 transition-colors">
          {item.title}
        </h3>

        <div
          className={`
            mt-4 
            text-sm 
            text-[#67696B] 
            overflow-hidden 
            transition-all 
            duration-500 
            ease-in-out
            ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {item.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-3 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;