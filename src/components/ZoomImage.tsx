"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useRef, useCallback } from "react";

interface ZoomImageProps {
  src: StaticImageData;
  className: string;
}

export default function ZoomImage({ src, className }: ZoomImageProps) {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => setShowZoom(true);
  const handleMouseLeave = () => setShowZoom(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
    }
  }, []);

  return (
    <div className={`w-full relative`}>
      <Image
        ref={imageRef}
        src={src.src}
        alt={"alt"}
        height={1000}
        width={1000}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      {showZoom && (
        <div
          className="absolute w-48 h-48 border-2 border-white pointer-events-none"
          style={{
            top: `calc(${zoomPosition.y}% - 96px)`,
            left: `calc(${zoomPosition.x}% - 96px)`,
            backgroundImage: `url(${src.src})`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            backgroundSize: `${500 * 2}px ${500 * 2}px`,
          }}
        />
      )}
    </div>
  );
}
