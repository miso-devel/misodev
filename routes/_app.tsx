import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Header } from '../components/Template/Header.tsx';

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>miso.dev</title>
        <link rel="stylesheet" href="/styles/App.css" />
      </Head>
      <Header />
      <Component />
    </>
  );
}
