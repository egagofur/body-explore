import { cn } from '@/utils/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';

const buttonVariants = cva(
  'rounded-lg w-full py-3 transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-secondary hover:bg-primaryHover',
        outline: 'border border-primary hover:bg-primaryActive text-primary',
      },
      defaultVariants: {
        variant: 'default',
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  link: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, link, asChild, ...props }, ref) => {
    const classes = cn(
      buttonVariants(props),
      'font-dragonSlayer text-xl font-normal',
      className
    );
    if (asChild) {
      return (
        <button ref={ref} className={classes} {...props}>
          {children}
        </button>
      );
    }
    return (
      <Link href={link}>
        <button ref={ref} className={classes} {...props}>
          {children}
        </button>
      </Link>
    );
  }
);
Button.displayName = 'Button';
export { Button, buttonVariants };
