"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    asMotion?: boolean;
    href?: string;
    asChild?: boolean; // Keep for compatibility but ignore or handle
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading,
            leftIcon,
            rightIcon,
            children,
            disabled,
            asMotion = true,
            href,
            asChild,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

        const variants = {
            primary:
                "bg-primary text-white shadow-glow hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5",
            secondary:
                "bg-white text-secondary border border-secondary/10 shadow-soft hover:bg-zinc-50 hover:border-secondary/20 hover:-translate-y-0.5",
            outline:
                "border-2 border-primary text-primary hover:bg-primary/5",
            ghost:
                "text-secondary hover:bg-secondary/5 hover:text-primary",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const combinedClassName = cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
        );

        const content = (
            <>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </>
        );

        if (href) {
            return (
                <Link
                    href={href}
                    className={combinedClassName}
                    // Type assertion to quiet TS if needed, though proper approach is separating props
                    {...(props as any)}
                >
                    {content}
                </Link>
            );
        }

        if (asMotion) {
            return (
                <motion.button
                    ref={ref as any}
                    className={combinedClassName}
                    whileTap={{ scale: 0.98 }}
                    disabled={disabled || isLoading}
                    {...(props as any)}
                >
                    {content}
                </motion.button>
            );
        }

        return (
            <button
                ref={ref}
                className={combinedClassName}
                disabled={disabled || isLoading}
                {...props}
            >
                {content}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
