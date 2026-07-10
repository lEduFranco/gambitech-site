"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/contact";

type ContactMenuVariant = "nav" | "secondary" | "primary" | "ghost";
type ContactMenuAlign = "left" | "right" | "center";

type ContactMenuProps = {
  label?: string;
  variant?: ContactMenuVariant;
  align?: ContactMenuAlign;
};

const MENU_WIDTH = 224;
/** Navbar uses z-[100]; menu stays one layer below. */
const MENU_Z_INDEX = 90;

const triggerStyles: Record<ContactMenuVariant, string> = {
  nav: "inline-flex items-center gap-1.5 text-[13px] font-semibold bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors",
  secondary:
    "inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors",
  primary:
    "inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-[16px] px-8 py-4 rounded-xl transition-colors shadow-xl shadow-violet-600/30",
  ghost:
    "inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-300 transition-colors",
};

const menuItems = [
  {
    label: "E-mail",
    description: "Envie sua mensagem",
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    description: "Converse com a equipe",
    href: CONTACT.whatsapp,
    icon: MessageCircle,
    external: true,
  },
] as const;

function getMenuLeft(rect: DOMRect, align: ContactMenuAlign) {
  if (align === "right") return rect.right - MENU_WIDTH;
  if (align === "center") return rect.left + rect.width / 2 - MENU_WIDTH / 2;
  return rect.left;
}

export function ContactMenu({
  label = "Contato",
  variant = "secondary",
  align = "right",
}: ContactMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const navBottom = 72;
    setPosition({
      top: Math.max(rect.bottom + 8, navBottom),
      left: getMenuLeft(rect, align),
    });
  }, [align]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    updatePosition();

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function handleScroll() {
      setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, updatePosition]);

  const menu =
    open && mounted
      ? createPortal(
          <div
            ref={menuRef}
            role="menu"
            aria-label="Opções de contato"
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              width: MENU_WIDTH,
              zIndex: MENU_Z_INDEX,
            }}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#12121a] shadow-2xl shadow-black/50"
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  role="menuitem"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 px-4 py-3.5 hover:bg-white/[0.06] transition-colors border-b border-white/5 last:border-b-0"
                >
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      item.label === "WhatsApp"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-violet-500/15 text-violet-400"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-[14px] font-semibold text-white">{item.label}</span>
                    <span className="block text-[12px] text-gray-500 mt-0.5">{item.description}</span>
                  </span>
                </a>
              );
            })}
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setOpen((current) => !current);
          if (!open) requestAnimationFrame(updatePosition);
        }}
        aria-expanded={open}
        aria-haspopup="menu"
        className={triggerStyles[variant]}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {menu}
    </>
  );
}
