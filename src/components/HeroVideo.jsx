import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable HeroVideo Component
 * - Supports responsive source selection (Mobile < 768px vs Desktop)
 * - Autoplay with muted + playsInline for iOS Safari compliance
 * - Catches play() promise to avoid console errors
 * - IntersectionObserver to pause video when hero is scrolled out of view (saves CPU/battery)
 * - Respects prefers-reduced-motion, navigator.connection.saveData, and slow connections
 */
export default function HeroVideo({ className = '', onLoadedData }) {
  const videoRef = useRef(null);
  const [useReducedMotion, setUseReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Check reduced motion & data saver / slow connections
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSaveData = Boolean(navigator.connection?.saveData);
    const isSlowConnection = ['slow-2g', '2g'].includes(navigator.connection?.effectiveType || '');

    if (prefersReduced || isSaveData || isSlowConnection) {
      setUseReducedMotion(true);
    }

    // Media query check for mobile
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mobileQuery.matches);

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mobileQuery.addEventListener('change', handleResize);
    return () => mobileQuery.removeEventListener('change', handleResize);
  }, []);

  // IntersectionObserver to pause video when out of viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video || useReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Autoplay prevented by browser policy; muted poster fallback
              });
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [useReducedMotion]);

  // Poster paths
  const posterSrc = isMobile ? '/images/hero-poster-mobile.jpg' : '/images/hero-poster.jpg';

  // If user requested reduced motion or is on slow network, show only optimized poster
  if (useReducedMotion) {
    return (
      <img
        src={posterSrc}
        alt="Kanha Hospitals - Urology and Nephrology"
        className={`w-full h-full object-cover ${
          isMobile ? 'object-[85%_center]' : 'object-[right_center]'
        } ${className}`}
      />
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fallback poster while video loads */}
      <img
        src={posterSrc}
        alt="Kanha Hospitals - Glowing Blue Kidneys"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } ${isMobile ? 'object-[85%_center]' : 'object-[right_center]'}`}
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        onLoadedData={() => {
          setVideoLoaded(true);
          if (onLoadedData) onLoadedData();
        }}
        className={`w-full h-full object-cover ${
          isMobile ? 'object-[85%_center]' : 'object-[right_center]'
        } ${className}`}
      >
        {isMobile ? (
          <source src="/videos/hero-kidneys-mobile.mp4" type="video/mp4" />
        ) : (
          <>
            <source src="/videos/hero-kidneys.webm" type="video/webm" />
            <source src="/videos/hero-kidneys.mp4" type="video/mp4" />
          </>
        )}
      </video>
    </div>
  );
}

