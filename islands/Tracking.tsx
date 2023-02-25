import { useEffect } from 'preact/hooks';
import ReactGA from 'react-ga4';
export default function Tracking() {
  useEffect(() => {
    ReactGA.initialize('G-4MWGG1LLJL');
    ReactGA.send({
      hitType: 'pageview',
      page: location.href,
    });
  }, []);
  return <div></div>;
}
