// app/page.tsx (This is a Server Component)

// 🚨 Remove 'import dynamic from 'next/dynamic';' and the VantaBackground declaration

import ClientVantaWrapper from '../components/ClientVantaWrapper'; // Import the new wrapper
import Header from '../components/Header.jsx';
import Introduction from '../components/introduction.jsx';
import Introduction2 from '../components/introduction2.jsx';
import Projects from '../components/projects.jsx';
import Contact from '../components/contact.jsx';

export default function HomePage() {
  return (
    // 1. Wrap your entire page content with the Client Wrapper
    <ClientVantaWrapper>
      <Header></Header>
      <Introduction></Introduction>
      <Introduction2></Introduction2>
      <Projects></Projects>
      <Contact></Contact>

    </ClientVantaWrapper>
  );
}