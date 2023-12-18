import React, { useRef, useEffect } from 'react';

const SnowVolume = 800; // Number of snowflakes

class Snowflake {
    constructor(width, height) {
        this.reset = function () {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.vy = 1 + Math.random() * 3;
            this.vx = 0.5 - Math.random();
            this.r = 1 + Math.random() * 2;
            this.o = 0.5 + Math.random() * 0.5;
        };

        this.reset();
    }
}

const SnowEffect = () => {
  const canvasRef = useRef(null);
  let snowflakes = [];
  let animationFrameId;

  const updateSnowflakes = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFF'; // Ensure fill style is white

    snowflakes.forEach(snowflake => {
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      ctx.globalAlpha = snowflake.o;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();

      if (snowflake.y > height) {
        snowflake.reset();
      }
    });

    animationFrameId = requestAnimationFrame(() => updateSnowflakes(ctx, width, height));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#FFF'; // Set initial fill style

    snowflakes = Array.from({ length: SnowVolume }, () => new Snowflake(width, height));
    
    updateSnowflakes(ctx, width, height);

    const handleResize = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#FFF'; // Reset fill style after resize
      snowflakes.forEach(snowflake => snowflake.reset());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId); // Cancel the animation frame on unmount
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed z-10 top-0 left-0 w-full h-full" />;
};

export default SnowEffect;
