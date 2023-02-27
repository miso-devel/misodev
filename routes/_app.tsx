import { AppProps } from '$fresh/server.ts';
import Tracking from '../islands/Tracking.tsx';
import { Head } from '$fresh/runtime.ts';
export default function App({ Component }: AppProps) {
  const trackingId = Deno.env.get('GOOGLE_ANALYTICS_STREAM_KEY');
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/App.css" />
      </Head>
      <Tracking trackingId={trackingId as string} />
      <Component />
      {/* <ParticleComponent /> */}
    </>
  );
}
