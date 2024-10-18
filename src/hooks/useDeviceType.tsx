import { useState, useEffect } from "react";

export function useDeviceType() {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDevice("desktop");
      } else if (width >= 768) {
        setDevice("tablet");
      } else {
        setDevice("mobile");
      }
    }

    // Detect initial device type
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
}
