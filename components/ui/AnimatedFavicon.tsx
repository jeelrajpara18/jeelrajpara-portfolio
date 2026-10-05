'use client';

import { useEffect } from 'react';

export function AnimatedFavicon() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.type = 'image/png';
      link.rel = 'shortcut icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = '/about-image.png';

    img.onload = () => {
      const startTime = performance.now();
      const duration = 650; // ms

      // Spring ease curve: starts at 0, overshoots to 1.15, settles at 1.0
      const easeOutBack = (x: number): number => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
      };

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const scale = Math.max(0, easeOutBack(progress));

        ctx.clearRect(0, 0, 64, 64);
        ctx.save();

        // Center transformation
        ctx.translate(32, 32);
        ctx.scale(scale, scale);
        ctx.translate(-32, -32);

        // Draw circular gradient badge
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#dbeafe';
        ctx.fill();

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#3b82f6';
        ctx.stroke();

        // Clip to circle and draw zoomed avatar
        ctx.save();
        ctx.beginPath();
        ctx.arc(32, 32, 28, 0, Math.PI * 2);
        ctx.clip();

        ctx.drawImage(img, 2, 2, 60, 60);
        ctx.restore();

        ctx.restore();

        if (link) {
          link.href = canvas.toDataURL('image/png');
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };
  }, []);

  return null;
}
