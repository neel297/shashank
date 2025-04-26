
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center",
          "hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-pharma-500",
          {
            "bg-gradient-to-r from-pharma-600 to-teal-500 text-white hover:-translate-y-1": variant === "primary",
            "border-2 border-pharma-500 text-pharma-700 hover:bg-pharma-50 hover:-translate-y-1": variant === "outline",
            "text-pharma-700 hover:bg-pharma-50": variant === "ghost",
            "text-sm px-3 py-1.5": size === "sm",
            "px-5 py-2.5": size === "md",
            "text-lg px-6 py-3": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
