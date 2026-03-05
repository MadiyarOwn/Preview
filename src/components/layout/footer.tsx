import Link from "next/link";
import { Container } from "@/components/layout/container";

const nav = [
  { label: "Home", href: "#" },
  { label: "Advantages", href: "#advantages" },
  { label: "Testimonials", href: "#testimonials" },
];

const product = [
  { label: "Features", href: "#advantages" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                ✦
              </span>
              <span className="font-display text-lg text-white">AstraAI</span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              AI-powered platform to automate workflows and turn data into
              actionable insights.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navigation</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Product</p>
            <ul className="mt-4 space-y-3">
              {product.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                Email:{" "}
                <a
                  className="hover:text-white transition"
                  href="mailto:hello@astraai.com"
                >
                  hello@astraai.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  className="hover:text-white transition"
                  href="tel:+10000000000"
                >
                  +1 (000) 000-0000
                </a>
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  X
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  GH
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  IN
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AstraAI. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}