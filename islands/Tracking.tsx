import { useEffect } from 'preact/hooks';
import ReactGA from 'react-ga4';
type TProps = {
  trackingId: string;
};
export default function Tracking({ trackingId }: TProps) {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.send({
      hitType: 'pageview',
      page: location.href,
    });
  }, []);
  return <div></div>;
}
