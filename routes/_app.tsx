import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import ParticleComponent from '../islands/BackGround.tsx';
export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>miso.dev</title>
        <link rel="stylesheet" href="/styles/App.css" />
      </Head>
      <ParticleComponent />
      <Component />
    </>
  );
}
