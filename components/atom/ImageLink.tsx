type TProps = {
  href: string;
  imgLink: string;
  className?: string;
};
export const ImageLink = ({ href, imgLink, className }: TProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" class={className}>
      <img src={imgLink} alt="logo" class="w-6 h-6" />
    </a>
  );
};
