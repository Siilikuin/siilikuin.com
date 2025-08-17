'use client';

import { useState, useEffect, useMemo } from 'react';
import './city.css';

interface Window {
  id: number;
  x: number; // percentage from left
  y: number; // percentage from top
  width: number; // percentage
  height: number; // percentage
  flickerDelay: number; // animation delay in seconds
  flickerDuration: number; // animation duration in seconds
}

interface Building {
  id: number;
  left: number;
  width: number;
  height: number;
  layer: 'far' | 'mid' | 'near';
  initialBottom: number;
  scrollMultiplier: number;
  windows: Window[];
}

function generateWindows(buildingWidth: number, buildingHeight: number): Window[] {
  const windows: Window[] = [];
  const windowCount = Math.floor(Math.random() * 12) + 8; // 8-20 windows per building
  
  // Standard window size like real skyscrapers (tall rectangles)
  const windowWidth = 3; // 3% width - narrow
  const windowHeight = 5; // 5% height - taller than wide
  
  for (let i = 0; i < windowCount; i++) {
    windows.push({
      id: i,
      x: 5 + Math.random() * 87, // 5-92% from left (accounting for window width)
      y: 5 + Math.random() * 85, // 5-90% from top (accounting for window height)
      width: windowWidth + (Math.random() * 0.5 - 0.25), // 2.75-3.25% (slight variation)
      height: windowHeight + (Math.random() * 0.5 - 0.25), // 4.75-5.25% (slight variation)
      flickerDelay: Math.random() * 20, // 0-20s delay
      flickerDuration: 6 + Math.random() * 8 // 6-14s duration (slower)
    });
  }
  
  return windows;
}

function generateBuildings(): Building[] {
  const buildings: Building[] = [];
  let id = 0;

  // Far layer buildings - tallest
  for (let i = 0; i < 8; i++) {
    const width = 6 + Math.random() * 6;
    const height = 80 + Math.random() * 90;
    buildings.push({
      id: id++,
      left: Math.random() * 95, // 0-95% to account for width
      width: width, // 6-12% width
      height: height, // 80-170vh tall
      layer: 'far',
      initialBottom: 60 + Math.random() * 40, // Start 60-100vh below viewport
      scrollMultiplier: 60 + Math.random() * 30, // Rise 60-90vh with scroll
      windows: generateWindows(width, height)
    });
  }

  // Mid layer buildings - medium height
  for (let i = 0; i < 10; i++) {
    const width = 7 + Math.random() * 7;
    const height = 60 + Math.random() * 70;
    buildings.push({
      id: id++,
      left: Math.random() * 93, // 0-93% to account for width
      width: width, // 7-14% width
      height: height, // 60-130vh tall
      layer: 'mid',
      initialBottom: 40 + Math.random() * 40, // Start 40-80vh below viewport
      scrollMultiplier: 50 + Math.random() * 30, // Rise 50-80vh with scroll
      windows: generateWindows(width, height)
    });
  }

  // Near layer buildings - shorter but more numerous
  for (let i = 0; i < 12; i++) {
    const width = 8 + Math.random() * 8;
    const height = 40 + Math.random() * 60;
    buildings.push({
      id: id++,
      left: Math.random() * 91, // 0-91% to account for width
      width: width, // 8-16% width
      height: height, // 40-100vh tall
      layer: 'near',
      initialBottom: 20 + Math.random() * 40, // Start 20-60vh below viewport
      scrollMultiplier: 40 + Math.random() * 30, // Rise 40-70vh with scroll
      windows: generateWindows(width, height)
    });
  }

  return buildings;
}

export default function CityBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  
  // Generate buildings once and memoize them
  const buildings = useMemo(() => generateBuildings(), []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => setWindowHeight(window.innerHeight));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => setWindowHeight(window.innerHeight));
    };
  }, []);

  // Calculate how far down the page we've scrolled (0 to 1 and beyond)
  const scrollProgress = windowHeight > 0 ? scrollY / windowHeight : 0;
  const skylineProgress = scrollProgress * 3; // Responsive to scroll

  return (
    <div className="city-container">
      {/* Far background buildings */}
      <div 
        className="building-layer building-layer-far"
        style={{
          transform: `translateY(${scrollY * 0.2}px)` // Slowest parallax
        }}
      >
        {buildings
          .filter(b => b.layer === 'far')
          .map(building => (
            <div 
              key={building.id}
              className="building" 
              style={{ 
                left: `${building.left}%`, 
                width: `${building.width}%`, 
                height: `${building.height}vh`,
                bottom: `-${building.initialBottom - skylineProgress * building.scrollMultiplier}vh`
              }}
            >
              {building.windows.map(window => (
                <div
                  key={window.id}
                  className="building-window"
                  style={{
                    left: `${window.x}%`,
                    top: `${window.y}%`,
                    width: `${window.width}%`,
                    height: `${window.height}%`,
                    animationDelay: `${window.flickerDelay}s`,
                    animationDuration: `${window.flickerDuration}s`
                  }}
                />
              ))}
            </div>
          ))}
      </div>

      {/* Middle layer buildings */}
      <div 
        className="building-layer building-layer-mid"
        style={{
          transform: `translateY(${scrollY * 0.35}px)` // Medium parallax
        }}
      >
        {buildings
          .filter(b => b.layer === 'mid')
          .map(building => (
            <div 
              key={building.id}
              className="building" 
              style={{ 
                left: `${building.left}%`, 
                width: `${building.width}%`, 
                height: `${building.height}vh`,
                bottom: `-${building.initialBottom - skylineProgress * building.scrollMultiplier}vh`
              }}
            >
              {building.windows.map(window => (
                <div
                  key={window.id}
                  className="building-window"
                  style={{
                    left: `${window.x}%`,
                    top: `${window.y}%`,
                    width: `${window.width}%`,
                    height: `${window.height}%`,
                    animationDelay: `${window.flickerDelay}s`,
                    animationDuration: `${window.flickerDuration}s`
                  }}
                />
              ))}
            </div>
          ))}
      </div>

      {/* Near buildings */}
      <div 
        className="building-layer building-layer-near"
        style={{
          transform: `translateY(${scrollY * 0.5}px)` // Fastest parallax
        }}
      >
        {buildings
          .filter(b => b.layer === 'near')
          .map(building => (
            <div 
              key={building.id}
              className="building" 
              style={{ 
                left: `${building.left}%`, 
                width: `${building.width}%`, 
                height: `${building.height}vh`,
                bottom: `-${building.initialBottom - skylineProgress * building.scrollMultiplier}vh`
              }}
            >
              {building.windows.map(window => (
                <div
                  key={window.id}
                  className="building-window"
                  style={{
                    left: `${window.x}%`,
                    top: `${window.y}%`,
                    width: `${window.width}%`,
                    height: `${window.height}%`,
                    animationDelay: `${window.flickerDelay}s`,
                    animationDuration: `${window.flickerDuration}s`
                  }}
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}