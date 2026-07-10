import { LogoMarkSmall } from "./Logo";
import { ContactMenu } from "./ContactMenu";

export function SiteFooter() {
  return (
    <footer id="contato" className="py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <LogoMarkSmall size={26} />
          <span className="font-black text-[15px] text-white">Gambit Tech</span>
        </div>
        <p className="text-[12px] text-gray-600 text-center">
          © {new Date().getFullYear()} Gambit Tech · LUIZ E F SA TECNOLOGIA · CNPJ 40.311.947/0001-38
        </p>
        <ContactMenu variant="ghost" align="right" />
      </div>
    </footer>
  );
}
