'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 192; // 0 to 191

function padWithZeroes(index: number, length: number) {
  return String(index).padStart(length, '0');
}

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    const drawInitial = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const firstValidImg = loadedImages.find(img => img && img.complete && img.naturalWidth > 0);
      if (canvas && ctx && firstValidImg) {
        drawImageCover(ctx, canvas, firstValidImg);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${padWithZeroes(i, 3)}_delay-0.041s.webp`;
      img.onload = () => {
        if (!canvasRef.current?.getAttribute('data-initialized')) {
          canvasRef.current?.setAttribute('data-initialized', 'true');
          drawInitial();
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImageCover = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;
    let renderableWidth, renderableHeight, xStart, yStart;

    if (canvasAspect > imgAspect) {
      renderableWidth = canvas.width;
      renderableHeight = canvas.width / imgAspect;
      xStart = 0;
      yStart = (canvas.height - renderableHeight) / 2;
    } else {
      renderableHeight = canvas.height;
      renderableWidth = canvas.height * imgAspect;
      yStart = 0;
      xStart = (canvas.width - renderableWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, xStart, yStart, renderableWidth, renderableHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // redraw
        const frameIndex = Math.floor(currentFrameIndex.get());
        if (images[frameIndex]?.complete) {
          const ctx = canvas.getContext('2d');
          if (ctx) drawImageCover(ctx, canvas, images[frameIndex]);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, currentFrameIndex]);

  useMotionValueEvent(currentFrameIndex, "change", (latest) => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameIndex = Math.floor(latest);
    let imgToDraw: HTMLImageElement | null = null;
    
    // Look backwards for the most recent successfully loaded image
    for (let i = frameIndex; i >= 0; i--) {
        const img = images[i];
        if (img && img.complete && img.naturalWidth > 0) {
            imgToDraw = img;
            break;
        }
    }
    
    // If not found backwards, look forwards (in case they jumped ahead and no previous frames exist)
    if (!imgToDraw) {
        for (let i = frameIndex; i < images.length; i++) {
             const img = images[i];
             if (img && img.complete && img.naturalWidth > 0) {
                 imgToDraw = img;
                 break;
             }
        }
    }

    if (imgToDraw) {
      drawImageCover(ctx, canvas, imgToDraw);
    }
  });

  return (
    <div ref={scrollContainerRef} className="relative w-full" style={{ height: '500vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/40 z-[5]" />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
