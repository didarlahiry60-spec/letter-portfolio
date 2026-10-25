// app/components/Tab.tsx

interface TabProps {
  bgColor: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tab: React.FC<TabProps> = ({ bgColor, text, onClick }) => {
  // All the repeated styling classes are stored here in one place.
  const commonTabClasses = `
    flex items-center justify-center h-full rounded-t-md py-1.5 sm:py-2 text-xs sm:text-base md:text-xl font-medium text-stone-800 shadow-md
    transition duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 cursor-pointer select-none
  `;

  return (
    <li className="flex-grow">
      <button type="button" onClick={onClick} className={`${commonTabClasses} ${bgColor} w-full`}>
        <p className={`font-permanent -rotate-3`}>{text}</p>
      </button>
    </li>
  );
};

export default Tab;
