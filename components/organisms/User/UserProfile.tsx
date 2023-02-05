import { UserDetail } from '../../molecules/User/UserDetail.tsx';
import { UserName } from '../../molecules/User/UserName.tsx';
import { UserLinks } from '../../molecules/User/UserLinks.tsx';

export const UserProfile = () => {
  return (
    <>
      <div class="flex justify-start items-center gap-2 border-b-2 py-2">
        <UserName />
        <UserLinks />
      </div>
      <UserDetail />
    </>
  );
};
