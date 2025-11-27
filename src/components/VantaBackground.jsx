// components/VantaBackground.jsx

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// 🚨 IMPORTANT: Change the import from WAVES to FOG
import FOG from 'vanta/dist/vanta.fog.min'; 

const VantaBackground = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        // 🚨 Initialize the FOG effect
        FOG({
          el: vantaRef.current,
          THREE: THREE, 
          
          // --- CUSTOM CONFIGURATION FROM YOUR IMAGE ---
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          
          // Color & Effect Properties
          highlightColor: 0x43139d, // Purple
          midtoneColor: 0x871d11,   // Deep Red/Maroon
          lowlightColor: 0x2d00ff,  // Blue
          baseColor: 0x0,          // Black (0x0 is same as 0x000000)
          blurFactor: 0.71,
          speed: 0.50,
          zoom: 0.70,
          // ---------------------------------------------

          ...props, // Spread any extra props passed to this component
        })
      );
    }
    
    // Cleanup function
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  // The container div for the Vanta animation
  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed', // Use 'fixed' to keep it locked to the viewport
        top: 0,
        left: 0,
        zIndex: -1, // Sits behind all your content
      }}
    />
  );
};

export default VantaBackground;