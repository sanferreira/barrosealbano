import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light shadow-[0_8px_24px_rgba(201,162,39,0.28)]",
  secondary:
    "bg-transparent text-white border border-white/25 hover:border-gold/60 hover:text-gold",
  ghost: "bg-transparent text-navy hover:text-gold-dark",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-[0_8px_24px_rgba(37,211,102,0.28)]",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";
