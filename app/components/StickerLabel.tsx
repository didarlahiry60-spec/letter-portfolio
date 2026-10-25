// app/components/StickerLabel.tsx

interface StickerLabelProps {
  text: string;
  containerClassName?: string;
}

const StickerLabel: React.FC<StickerLabelProps> = ({ text, containerClassName }) => {
  return (
    <div
      className={`${containerClassName || ""} absolute m-[1.2vw] bg-white text-gray-800 px-3 py-1.5 sm:py-2 rounded-lg shadow-sm [@media(max-height:450px)]:py-[1vh] [@media(max-height:450px)]:m-[1vh] select-none`}>
      <p className={`font-permanent -rotate-3 whitespace-nowrap text-[2.4vw] md:text-xl lg:text-2xl [@media(max-height:450px)]:text-sm`}>{text}</p>
    </div>
  );
};

export default StickerLabel;
