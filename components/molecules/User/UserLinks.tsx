import { ImageLink } from "../../atom/ImageLink.tsx";

export const UserLinks = () => {
  return (
    <div class="flex px-2 gap-2">
      <ImageLink
        href="https://twitter.com/mis0dev"
        imgLink="/images/Twitter.png"
      />
      <ImageLink
        href="https://github.com/miso-devel"
        imgLink="/images/Github.png"
      />
    </div>
  );
};
