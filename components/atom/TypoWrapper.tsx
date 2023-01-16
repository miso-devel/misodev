type TProps = {
  element: "p" | "h1" | "h2" | "h3";
  className?: string;
  children: string;
};
export const TypoWrapper = ({ element, className, children }: TProps) => {
  let text;
  if (element === "p") {
    text = <p className={className}>{children}</p>;
  } else if (element === "h1") {
    text = (
      <h1 className={`${className} text-3xl font-extrabold`}>{children}</h1>
    );
  } else if (element === "h2") {
    text = <h2 className={`${className} text-xl font-bold`}>{children}</h2>;
  } else if (element === "h3") {
    text = <h3 className={`${className} text-base font-medium`}>{children}</h3>;
  }
  return <>{text}</>;
};
