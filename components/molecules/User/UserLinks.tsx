import { ImageLink } from '../../atom/ImageLink.tsx';

export const UserLinks = () => {
  return (
    <div class="flex px-2 gap-2">
      <ImageLink
        href="https://twitter.com/donennnn"
        imgLink="/images/Twitter.png"
      />
      <ImageLink
        href="https://github.com/nisi0929"
        imgLink="/images/Github.png"
      />
    </div>
  );
};
