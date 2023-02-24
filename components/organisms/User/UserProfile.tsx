import { UserLinks } from '../../molecules/User/UserLinks.tsx';
import { UserName } from '../../molecules/User/UserName.tsx';

export const UserProfile = () => {
  return (
    <>
      <div class="flex justify-center items-center gap-2 py-2">
        <UserName />
        <div class="ml-auto">
          <UserLinks />
        </div>
      </div>
    </>
  );
};
