import { ImageLink } from '../../atom/ImageLink.tsx';

export const UserLinks = () => {
  return (
    <div class="flex gap-5 py-3 ml-auto">
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
