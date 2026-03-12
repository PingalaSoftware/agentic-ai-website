import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-navy-500 text-white hover:bg-navy-600 shadow-lg shadow-navy-500/20",
        primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
        secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20",
        outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
        ghost: "text-white hover:bg-white/10",
        link: "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
