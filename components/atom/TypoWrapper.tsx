type TProps = {
  element: 'p' | 'h1' | 'h2' | 'h3';
  className?: string;
  word: string;
};
export const TypoWrapper = ({ element, className, word }: TProps) => {
  let text;
  if (element === 'p') {
    text = <p className={className}>{word}</p>;
  } else if (element === 'h1') {
    text = (
      <h1 className={`${className} md:text-3xl text-2xl font-extrabold`}>
        {word}
      </h1>
    );
  } else if (element === 'h2') {
    text = <h2 className={`${className} text-xl font-bold`}>{word}</h2>;
  } else if (element === 'h3') {
    text = <h3 className={`${className} text-base font-medium`}>{word}</h3>;
  }
  return <>{text}</>;
};
