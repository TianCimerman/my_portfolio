import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="relative z-20 w-full p-4">
      <div className="
          max-w-7xl mx-auto 
          flex justify-between items-center 
          h-20 
          bg-gray-800/70 border border-gray-700/50 
          rounded-full backdrop-blur-sm 
          px-8 shadow-2xl
      ">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-500/50">
            <span className="text-white text-lg font-bold">T</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="
                text-gray-300 hover:text-white 
                transition-colors text-lg
                hover:opacity-100 opacity-80 cursor-pointer
              "
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
