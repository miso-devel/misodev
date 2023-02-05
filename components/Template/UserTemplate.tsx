import { UserSkills } from '../molecules/User/UserSkills.tsx';
import { UserCareers } from '../organisms/User/UserCareers.tsx';
import { UserProducts } from '../organisms/User/UserProducts.tsx';
import { UserProfile } from '../organisms/User/UserProfile.tsx';

export const UserTemplate = () => {
  return (
    <div class="px-5">
      <UserProfile />
      <UserSkills />
      <UserProducts />
    </div>
  );
};
