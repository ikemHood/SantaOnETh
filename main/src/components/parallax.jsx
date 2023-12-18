import React, { useRef, useEffect, useState } from 'react';

export default function ParallaxComponent({ children }) {
  const refContainer = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const bounds = refContainer.current.getBoundingClientRect();
    const x = (clientX - bounds.left) / bounds.width - 0.5;
    const y = (clientY - bounds.top) / bounds.height - 0.5;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const container = refContainer.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const layerStyle = (depth) => {
    const movementX = depth * mousePosition.x * 80; // Adjust for effect strength
    const movementY = depth * mousePosition.y * 80;
    return {
      transform: `translate3d(${movementX}px, ${movementY}px, 0)`,
      position: 'absolute',
    //   top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '75%'
    };
  };

  return (
    <div ref={refContainer} className="relative overflow-hidden w-full h-full">
      {React.Children.map(children, (child, index) => (
        <div style={layerStyle((index + 1) * 0.1)}>
          {child}
        </div>
      ))}
    </div>
  );
};
