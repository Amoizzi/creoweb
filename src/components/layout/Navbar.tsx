import Button from "../ui/Button";

const navLinks = [
  { label: "Послуги", href: "#services" },
  { label: "Портфоліо", href: "#portfolio" },
  { label: "Кейси", href: "#portfolio" },
  { label: "Контакти", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="font-display font-bold text-2xl text-white">Cre<span className="text-purple-500">o</span>Web</span>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="primary" href="#contact" size="sm">
          Отримати пропозицію
        </Button>
      </div>
    </nav>
  );
}
