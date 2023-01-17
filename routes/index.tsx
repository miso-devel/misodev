import { MyProfile } from '../components/molecules/User/MyProfile.tsx';
import { BasicTemplate } from '../components/Template/BasicTemplate.tsx';
import { ProfileTemplate } from '../components/Template/ProfileTemplate.tsx';
export default function Home() {
  return (
    <ProfileTemplate>
      <MyProfile />
    </ProfileTemplate>
  );
}
