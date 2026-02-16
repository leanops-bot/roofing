import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    bg?: "white" | "light" | "dark" | "blue";
    fullWidth?: boolean;
}

export const Section = ({
    children,
    className,
    bg = "white",
    fullWidth = false,
    ...props
}: SectionProps) => {
    const bgStyles = {
        white: "bg-surface",
        light: "bg-background",
        dark: "bg-secondary text-white",
        blue: "bg-primary text-white",
    };

    return (
        <section
            className={cn("py-16 md:py-24 relative overflow-hidden", bgStyles[bg], className)}
            {...props}
        >
            <div className={cn(fullWidth ? "w-full" : "container-custom")}>
                {children}
            </div>
        </section>
    );
};
