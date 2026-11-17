
"use client";

import { useRef } from "react";

export default function MobileNavigation() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  const links = [
    { label: "Projects", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <details ref={menuRef} className="group relative md:hidden">
      <summary
        className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 [&::-webkit-details-marker]:hidden"
        aria-label="Toggle navigation menu"
      >
        Menu
        <span className="text-blue-400 transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>

      <div className="absolute right-0 top-full z-50 mt-3 flex w-44 flex-col gap-1 rounded-xl border border-slate-700 bg-[#111A27] p-2 shadow-xl">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-blue-400"
          >
            {link.label}
          </a>
        ))}
      </div>
    </details>
  );
}
