import { useEffect, useState } from "react";

export function useResponsive() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width < 640, //  'sm'
    isTablet: width >= 640 && width < 1024, // 'md'
    isDesktop: width >= 1024, // 'lg'
  };
}
