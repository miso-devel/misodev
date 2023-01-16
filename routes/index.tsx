import { Head } from "$fresh/runtime.ts";
import { BasicTemplate } from "../components/templates/BasicTemplate.tsx";
import MyProfile from "../islands/MyProfile.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>miso.dev</title>
      </Head>
      <BasicTemplate>
        <MyProfile />
      </BasicTemplate>
    </>
  );
}
