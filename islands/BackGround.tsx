import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'preact/hooks';
export default function ParticleComponent() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);
  return (
    <></>
    // <Particles
    //   id="tsparticles"
    //   init={particlesInit}
    //   options={{
    //     background: {
    //       color: {
    //         value: '#8FB6D9',
    //       },
    //     },
    //     backgroundMask: {
    //       cover: {
    //         color: {
    //           value: '#fff',
    //         },
    //         opacity: 1,
    //       },
    //       enable: false,
    //     },
    //     fullScreen: {
    //       enable: true,
    //       zIndex: -1,
    //     },
    //     fpsLimit: 60,
    //     particles: {
    //       move: {
    //         enable: true,
    //         gravity: {
    //           enable: true,
    //           maxSpeed: 1,
    //         },
    //         speed: 1,
    //       },
    //       number: {
    //         value: 100,
    //       },
    //       opacity: {
    //         value: {
    //           min: 0.3,
    //           max: 0.9,
    //         },
    //         animation: {
    //           enable: true,
    //           speed: 1,
    //           sync: true,
    //         },
    //       },
    //       size: {
    //         random: {
    //           enable: true,
    //           minimumValue: 5,
    //         },
    //         value: {
    //           min: 1,
    //           max: 3,
    //         },
    //       },
    //     },
    //   }}
    // />
  );
}
