import { useEffect, useState, useCallback } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Don't show on touch/mobile
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const updatePos = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Smooth trail using requestAnimationFrame
    let animFrame;
    let currentTrail = { x: -100, y: -100 };
    let targetPos = { x: -100, y: -100 };

    const onMove = (e) => {
      targetPos = { x: e.clientX, y: e.clientY };
      updatePos(e);
    };

    const animate = () => {
      currentTrail.x += (targetPos.x - currentTrail.x) * 0.12;
      currentTrail.y += (targetPos.y - currentTrail.y) * 0.12;
      setTrail({ x: currentTrail.x, y: currentTrail.y });
      animFrame = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      const el = e.target;
      const isInteractive =
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('cursor-pointer') ||
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA';
      setIsHovering(!!isInteractive);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(animFrame);
    };
  }, [isMobile, updatePos]);

  if (isMobile) return null;

  return (
    <>
      {/* Small sharp dot — follows cursor exactly */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.08s ease',
        }}
      >
        <div
          style={{
            width: isClicking ? '6px' : isHovering ? '0px' : '8px',
            height: isClicking ? '6px' : isHovering ? '0px' : '8px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            boxShadow: '0 0 8px rgba(6,182,212,0.8)',
            transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
            opacity: isHovering ? 0 : 1,
          }}
        />
      </div>

      {/* Outer trailing ring — lags behind smoothly */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: trail.x,
          top: trail.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          style={{
            width: isClicking ? '28px' : isHovering ? '44px' : '36px',
            height: isClicking ? '28px' : isHovering ? '44px' : '36px',
            borderRadius: '50%',
            border: isHovering
              ? '2px solid rgba(6,182,212,0.9)'
              : '1.5px solid rgba(6,182,212,0.5)',
            background: isHovering
              ? 'rgba(6,182,212,0.08)'
              : 'transparent',
            boxShadow: isHovering
              ? '0 0 16px rgba(6,182,212,0.25), inset 0 0 8px rgba(6,182,212,0.05)'
              : '0 0 6px rgba(6,182,212,0.15)',
            transition: 'width 0.25s ease, height 0.25s ease, border 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
          }}
        />
      </div>
    </>
  );
}
