import Link from "next/link";
import { LogoMark } from "./Logo";
import { ContactMenu } from "./ContactMenu";

export function SiteNav() {
  return (
    <header>
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl" aria-label="Navegação principal">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={34} />
          <span className="font-black text-[17px] tracking-tight text-white">Gambit Tech</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-[14px] text-gray-400 hover:text-white transition-colors hidden sm:block"
          >
            Blog
          </Link>
          <Link
            href="/#produtos"
            className="text-[14px] text-gray-400 hover:text-white transition-colors hidden sm:block"
          >
            Portfólio
          </Link>
          <ContactMenu variant="nav" align="right" />
        </div>
      </div>
    </nav>
    </header>
  );
}
