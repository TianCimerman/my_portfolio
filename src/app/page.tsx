// app/page.tsx (This is a Server Component)

import dynamic from 'next/dynamic';
import ClientVantaWrapper from '../components/ClientVantaWrapper'; // Import the new wrapper
import Header from '../components/Header.jsx';

import Introduction2 from '../components/introduction2.jsx';
import Projects from '../components/projects.jsx';
import Contact from '../components/contact.jsx';


const Introduction = dynamic(() => import('../components/introduction'), { ssr: false });

export default function HomePage() {
  return (
    // 1. Wrap your entire page content with the Client Wrapper
    <ClientVantaWrapper>
      <Header></Header>
      <Introduction />


    </ClientVantaWrapper>
  );
}