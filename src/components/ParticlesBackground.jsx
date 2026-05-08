import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../context/ThemeContext';

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [init, setInit] = useState(false);

  // Initialize the engine once on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.5,
            color: isDark ? '#06b6d4' : '#3b82f6',
          },
        },
        push: {
          quantity: 3,
        },
      },
    },
    particles: {
      color: {
        value: isDark ? ['#06b6d4', '#8b5cf6', '#3b82f6'] : ['#3b82f6', '#6366f1', '#0ea5e9'],
      },
      links: {
        color: isDark ? '#475569' : '#cbd5e1',
        distance: 150,
        enable: true,
        opacity: isDark ? 0.3 : 0.6,
        width: 1,
        triangles: {
          enable: true,
          opacity: isDark ? 0.03 : 0.05,
        }
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70,
      },
      opacity: {
        value: { min: 0.2, max: 0.5 },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 2.5 },
      },
    },
    detectRetina: true,
  }), [isDark]);

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        options={options}
        className="h-full w-full"
      />
    </div>
  );
}
