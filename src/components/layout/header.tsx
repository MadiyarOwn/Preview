import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";

const nav = [
  { label: "Smart Contracts", href: "#smart-contracts" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Whitepaper", href: "#whitepaper" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50  bg-bg/70 backdrop-blur text-white">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-header">AstraAI</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-header-text hover:text-fg transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#"><Image src="/headerSvg/mdi_discord.svg" alt="icon" width={20} height={20} /></a>
          <a href="#"><Image src="/headerSvg/mdi_twitter.svg" alt="icon" width={20} height={20} /></a>
          <a href="#"><Image src="/headerSvg/mdi_github.svg" alt="icon" width={20} height={20} /></a>
          <a href="#"><Image src="/headerSvg/mdi_twitter.svg" alt="icon" width={20} height={20} /></a>
        </div>
      </Container>
    </header>
  );
}