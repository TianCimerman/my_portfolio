// components/ClientVantaWrapper.jsx
"use client"; // 👈 THIS IS THE CRUCIAL LINE

import dynamic from 'next/dynamic';
import React from 'react';

// 1. Use dynamic import with ssr: false inside this client file
const VantaBackground = dynamic(
  () => import('./VantaBackground'), // Import the actual Vanta component
  { ssr: false }
);

/**
 * This component is a Client Component that handles the dynamic
 * and client-side rendering of the Vanta background.
 * It is a reusable container for the background and its content.
 */
export default function ClientVantaWrapper({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* 2. The Vanta component loads here, only on the client */}
      <VantaBackground /> 

      {/* 3. Render the page content on top, with zIndex: 1 */}
      <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
        {children}
      </div>
    </div>
  );
}