'use client';

import React, { useState, useEffect } from 'react';
import './clouds.css';

const CloudBackground = () => {
  const [clouds, setClouds] = useState<Array<{ 
    id: number; 
    width: number; 
    height: number; 
    shape: (width: number, height: number) => string; 
    color: string; 
    layer: string; 
    animationClass: string; 
    top: number; 
    delay: number; 
  }>>([]);

  // Define various cloud shapes
  const cloudShapes = [
    // Type 1: Tapered both ends
    (width: number, height: number) => `
      M ${width * 0.05} ${height * 0.8}
      Q ${width * 0.02} ${height * 0.5}, ${width * 0.13} ${height * 0.35}
      Q ${width * 0.2} ${height * 0.1}, ${width * 0.33} ${height * 0.3}
      Q ${width * 0.47} ${height * 0.05}, ${width * 0.6} ${height * 0.35}
      Q ${width * 0.73} ${height * 0.15}, ${width * 0.87} ${height * 0.4}
      Q ${width * 0.97} ${height * 0.3}, ${width * 0.95} ${height * 0.8}
      Z
    `,
    
    // Type 2: Soft fade left, tapered right
    (width: number, height: number) => `
      M ${width * 0.03} ${height * 0.85}
      Q ${width * 0.02} ${height * 0.55}, ${width * 0.12} ${height * 0.25}
      Q ${width * 0.18} ${height * 0.05}, ${width * 0.32} ${height * 0.2}
      Q ${width * 0.45} ${height * 0.08}, ${width * 0.58} ${height * 0.28}
      Q ${width * 0.72} ${height * 0.1}, ${width * 0.85} ${height * 0.32}
      Q ${width * 0.96} ${height * 0.45}, ${width * 0.97} ${height * 0.85}
      Z
    `,
    
    // Type 3: Wispy trailing edge
    (width: number, height: number) => `
      M ${width * 0.03} ${height * 0.75}
      Q ${width * 0.01} ${height * 0.4}, ${width * 0.1} ${height * 0.3}
      Q ${width * 0.15} ${height * 0.12}, ${width * 0.28} ${height * 0.25}
      Q ${width * 0.4} ${height * 0.1}, ${width * 0.52} ${height * 0.28}
      Q ${width * 0.65} ${height * 0.08}, ${width * 0.78} ${height * 0.3}
      Q ${width * 0.9} ${height * 0.35}, ${width * 0.98} ${height * 0.75}
      Q ${width * 0.95} ${height * 0.72}, ${width * 0.92} ${height * 0.73}
      Q ${width * 0.88} ${height * 0.74}, ${width * 0.85} ${height * 0.75}
      Z
    `,
    
    // Type 4: Multiple peaks
    (width: number, height: number) => `
      M ${width * 0.06} ${height * 0.8}
      Q ${width * 0.03} ${height * 0.45}, ${width * 0.08} ${height * 0.25}
      Q ${width * 0.12} ${height * 0.15}, ${width * 0.18} ${height * 0.22}
      Q ${width * 0.24} ${height * 0.08}, ${width * 0.32} ${height * 0.18}
      Q ${width * 0.38} ${height * 0.12}, ${width * 0.45} ${height * 0.2}
      Q ${width * 0.52} ${height * 0.05}, ${width * 0.6} ${height * 0.15}
      Q ${width * 0.68} ${height * 0.1}, ${width * 0.75} ${height * 0.22}
      Q ${width * 0.82} ${height * 0.08}, ${width * 0.88} ${height * 0.25}
      Q ${width * 0.95} ${height * 0.4}, ${width * 0.94} ${height * 0.8}
      Z
    `,
    
    // Type 5: Soft cumulus with tapered edges
    (width: number, height: number) => `
      M ${width * 0.08} ${height * 0.82}
      Q ${width * 0.05} ${height * 0.5}, ${width * 0.15} ${height * 0.32}
      Q ${width * 0.22} ${height * 0.18}, ${width * 0.35} ${height * 0.28}
      Q ${width * 0.45} ${height * 0.15}, ${width * 0.58} ${height * 0.3}
      Q ${width * 0.7} ${height * 0.2}, ${width * 0.82} ${height * 0.35}
      Q ${width * 0.92} ${height * 0.45}, ${width * 0.92} ${height * 0.82}
      Z
    `,
    
    // Type 6: Asymmetric
    (width: number, height: number) => `
      M ${width * 0.02} ${height * 0.78}
      Q ${width * 0.01} ${height * 0.6}, ${width * 0.06} ${height * 0.4}
      Q ${width * 0.1} ${height * 0.25}, ${width * 0.2} ${height * 0.32}
      Q ${width * 0.3} ${height * 0.2}, ${width * 0.42} ${height * 0.35}
      Q ${width * 0.55} ${height * 0.1}, ${width * 0.7} ${height * 0.25}
      Q ${width * 0.85} ${height * 0.18}, ${width * 0.96} ${height * 0.78}
      Z
    `,
    
    // Type 7: Feathered edges
    (width: number, height: number) => `
      M ${width * 0.04} ${height * 0.76}
      Q ${width * 0.02} ${height * 0.55}, ${width * 0.07} ${height * 0.38}
      Q ${width * 0.09} ${height * 0.32}, ${width * 0.12} ${height * 0.3}
      Q ${width * 0.16} ${height * 0.2}, ${width * 0.25} ${height * 0.28}
      Q ${width * 0.35} ${height * 0.12}, ${width * 0.48} ${height * 0.25}
      Q ${width * 0.6} ${height * 0.08}, ${width * 0.72} ${height * 0.28}
      Q ${width * 0.82} ${height * 0.15}, ${width * 0.9} ${height * 0.35}
      Q ${width * 0.94} ${height * 0.42}, ${width * 0.96} ${height * 0.55}
      Q ${width * 0.97} ${height * 0.65}, ${width * 0.96} ${height * 0.76}
      Z
    `,
    
    // Type 8: Gentle wave
    (width: number, height: number) => `
      M ${width * 0.03} ${height * 0.8}
      Q ${width * 0.02} ${height * 0.48}, ${width * 0.15} ${height * 0.35}
      Q ${width * 0.3} ${height * 0.25}, ${width * 0.45} ${height * 0.32}
      Q ${width * 0.6} ${height * 0.28}, ${width * 0.75} ${height * 0.35}
      Q ${width * 0.9} ${height * 0.42}, ${width * 0.97} ${height * 0.8}
      Z
    `,
    
    // Type 9: Sharp peaks
    (width: number, height: number) => `
      M ${width * 0.05} ${height * 0.82}
      Q ${width * 0.03} ${height * 0.5}, ${width * 0.1} ${height * 0.28}
      Q ${width * 0.14} ${height * 0.05}, ${width * 0.22} ${height * 0.18}
      Q ${width * 0.28} ${height * 0.08}, ${width * 0.36} ${height * 0.22}
      Q ${width * 0.44} ${height * 0.03}, ${width * 0.53} ${height * 0.2}
      Q ${width * 0.62} ${height * 0.06}, ${width * 0.7} ${height * 0.25}
      Q ${width * 0.78} ${height * 0.04}, ${width * 0.85} ${height * 0.28}
      Q ${width * 0.93} ${height * 0.45}, ${width * 0.95} ${height * 0.82}
      Z
    `,
    
    // Type 10: Soft billowy
    (width: number, height: number) => `
      M ${width * 0.07} ${height * 0.78}
      Q ${width * 0.04} ${height * 0.52}, ${width * 0.12} ${height * 0.38}
      Q ${width * 0.2} ${height * 0.22}, ${width * 0.32} ${height * 0.32}
      Q ${width * 0.44} ${height * 0.18}, ${width * 0.56} ${height * 0.34}
      Q ${width * 0.68} ${height * 0.2}, ${width * 0.8} ${height * 0.36}
      Q ${width * 0.91} ${height * 0.48}, ${width * 0.93} ${height * 0.78}
      Z
    `,
    
    // Type 11: Stretched with soft ends
    (width: number, height: number) => `
      M ${width * 0.03} ${height * 0.85}
      Q ${width * 0.02} ${height * 0.55}, ${width * 0.2} ${height * 0.4}
      Q ${width * 0.4} ${height * 0.35}, ${width * 0.6} ${height * 0.38}
      Q ${width * 0.8} ${height * 0.36}, ${width * 0.97} ${height * 0.52}
      Q ${width * 0.98} ${height * 0.68}, ${width * 0.97} ${height * 0.85}
      Z
    `,
    
    // Type 12: Undulating
    (width: number, height: number) => `
      M ${width * 0.06} ${height * 0.77}
      Q ${width * 0.03} ${height * 0.48}, ${width * 0.11} ${height * 0.32}
      Q ${width * 0.17} ${height * 0.22}, ${width * 0.24} ${height * 0.28}
      Q ${width * 0.31} ${height * 0.18}, ${width * 0.39} ${height * 0.26}
      Q ${width * 0.47} ${height * 0.15}, ${width * 0.55} ${height * 0.24}
      Q ${width * 0.63} ${height * 0.12}, ${width * 0.71} ${height * 0.26}
      Q ${width * 0.79} ${height * 0.16}, ${width * 0.86} ${height * 0.3}
      Q ${width * 0.94} ${height * 0.45}, ${width * 0.94} ${height * 0.77}
      Z
    `,
  ];

  const colors = [
    'text-fg-violet',
    'text-bg-seafoam', 
    'text-bg-gray',
    'text-bg-violet',
    'text-fg-seafoam',
    'text-fg-gray'
  ];

  useEffect(() => {
    // Generate random clouds on mount
    const generatedClouds = [];
    const numClouds = 15;
    
    for (let i = 0; i < numClouds; i++) {
      const width = 400 + Math.random() * 300; // 400-700px wide
      const height = 80 + Math.random() * 60; // 80-140px tall
      const shapeIndex = Math.floor(Math.random() * cloudShapes.length);
      const colorIndex = Math.floor(Math.random() * colors.length);
      const layer = Math.random() < 0.33 ? 'back' : Math.random() < 0.66 ? 'mid' : 'front';
      const animationClass = `cloud-${(i % 6) + 1}`;
      const top = 5 + Math.random() * 85; // 5-90% from top
      // Random negative delay to start clouds at different positions
      const delay = -Math.random() * 100; // Random starting position in animation
      
      generatedClouds.push({
        id: i,
        width,
        height,
        shape: cloudShapes[shapeIndex],
        color: colors[colorIndex],
        layer,
        animationClass,
        top,
        delay
      });
    }
    
    setClouds(generatedClouds);
  }, []);

  return (
    <div className="cloud-container">
      {clouds.map((cloud) => (
        <svg
          key={cloud.id}
          className={`cloud ${cloud.animationClass} cloud-layer-${cloud.layer}`}
          width={cloud.width}
          height={cloud.height}
          viewBox={`0 0 ${cloud.width} ${cloud.height}`}
          style={{ 
            top: `${cloud.top}%`,
            animationDelay: `${cloud.delay}s`
          }}
        >
          <defs>
            <pattern 
              id={`cloudGrain-${cloud.id}`} 
              patternUnits="userSpaceOnUse" 
              width="200" 
              height="200"
            >
              <image 
                href="/noise.svg" 
                width="200" 
                height="200" 
                opacity="0.4"
              />
            </pattern>
            <mask id={`cloudMask-${cloud.id}`}>
              <path
                d={cloud.shape(cloud.width, cloud.height)}
                fill="white"
              />
            </mask>
          </defs>
          
          {/* Base cloud color */}
          <path
            d={cloud.shape(cloud.width, cloud.height)}
            fill="currentColor"
            className={cloud.color}
          />
          
          {/* Grainy overlay */}
          <rect 
            width={cloud.width} 
            height={cloud.height}
            fill={`url(#cloudGrain-${cloud.id})`}
            mask={`url(#cloudMask-${cloud.id})`}
            style={{
              mixBlendMode: 'multiply',
              filter: 'contrast(150%) brightness(120%)'
            }}
          />
        </svg>
      ))}
    </div>
  );
};

export default CloudBackground;