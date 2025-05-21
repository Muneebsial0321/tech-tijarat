import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const carouselVariants = cva(
  "relative w-full overflow-hidden touch-none",
  {
    variants: {
      variant: {
        default: "",
        "with-dots": "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof carouselVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(carouselVariants({ variant }), className)}
    {...props}
  />
))
Carousel.displayName = "Carousel"

const carouselContentVariants = cva(
  "flex w-full",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof carouselContentVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(carouselContentVariants({ variant }), className)}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

const carouselItemVariants = cva(
  "flex-shrink-0",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof carouselItemVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(carouselItemVariants({ variant }), className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const carouselNextVariants = cva(
  "absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof carouselNextVariants>
>(({ className, variant, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(carouselNextVariants({ variant }), className)}
    {...props}
  />
))
CarouselNext.displayName = "CarouselNext"

const carouselPreviousVariants = cva(
  "absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof carouselPreviousVariants>
>(({ className, variant, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(carouselPreviousVariants({ variant }), className)}
    {...props}
  />
))
CarouselPrevious.displayName = "CarouselPrevious"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
