// app/components/Tab.tsx

interface TabProps {
  bgColor: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tab: React.FC<TabProps> = ({ bgColor, text, onClick }) => {
  const commonTabClasses = `
    flex items-center justify-center h-full rounded-t-lg px-1 sm:px-3 pb-1 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-stone-900 shadow-md
    transition duration-200 ease-in-out hover:-translate-y-1 active:translate-y-0.5 cursor-pointer select-none
  `;

  return (
    <li className="flex-grow h-full">
      <button
        type="button"
        onClick={onClick}
        className={`${commonTabClasses} ${bgColor} w-full`}
        aria-label={`Open ${text} section`}>
        <span className="font-permanent tracking-wider whitespace-nowrap">{text}</span>
      </button>
    </li>
  );
};

export default Tab;
