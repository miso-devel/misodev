import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Tracking from '../islands/Tracking.tsx';
export default function App({ Component }: AppProps) {
  const trackingId = Deno.env.get('GOOGLE_ANALYTICS_STREAM_KEY');
  return (
    <>
      <Head>
        <title>miso.dev</title>
        <link rel="stylesheet" href="/styles/App.css" />
      </Head>
      <Tracking trackingId={trackingId as string} />
      <Component />
      {/* <ParticleComponent /> */}
    </>
  );
}
