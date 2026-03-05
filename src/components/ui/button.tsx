import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/40";
  const styles =
    variant === "primary"
      ? "bg-primary text-fg hover:bg-primary/90"
      : "bg-transparent text-fg hover:bg-white/5";

  const cls = `${base} ${styles} ${className}`;

  if (href) return <Link href={href} className={cls}>{children}</Link>;

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}