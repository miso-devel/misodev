import { UserDetail } from '../molecules/User/UserDetail.tsx';
import { UserSkills } from '../molecules/User/UserSkills.tsx';
import { UserProducts } from '../organisms/User/UserProducts.tsx';
import { UserProfile } from '../organisms/User/UserProfile.tsx';

export const UserTemplate = () => {
  return (
    <div class="px-5">
      <UserProfile />
      <UserDetail />
      <UserSkills />
      <UserProducts />
    </div>
  );
};
