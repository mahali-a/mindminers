'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import type { VariantProps } from 'class-variance-authority';

const customButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-[#0056D2] text-white hover:bg-[#0056D2]/90',
        secondary: 'bg-[#FEDE70] text-[#0056D2] hover:bg-[#FEDE70]/90',
        outline: 'border-2 border-[#0056D2] text-[#0056D2] bg-transparent hover:bg-[#0056D2]/10',
        ghost: 'bg-transparent text-[#0056D2] hover:bg-[#0056D2]/10',
        destructive: 'bg-red-600 text-white hover:bg-red-600/90',
        cta: 'bg-[#0056D2] text-[#FEDE70] hover:bg-[#0056D2]/90',
        light: 'bg-white text-[#0056D2] hover:bg-gray-100',
        subtle: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      },
      size: {
        sm: 'h-8 px-3 py-1.5 text-xs rounded-md',
        md: 'h-10 px-4 py-2 text-sm rounded-md',
        lg: 'h-12 px-6 py-3 text-base rounded-md',
        xl: 'h-14 px-8 py-4 text-lg rounded-lg',
      },
      rounded: {
        default: '',
        full: 'rounded-full',
      },
      withIcon: {
        true: 'inline-flex items-center gap-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'default',
      withIcon: false,
    },
  }
);

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  asChild?: boolean;
  href?: string;
  target?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      withIcon,
      href,
      target,
      startIcon,
      endIcon,
      isLoading = false,
      loadingText,
      children,
      ...props
    },
    ref
  ) => {
    const combinedClassName = cn(customButtonVariants({ variant, size, rounded, withIcon, className }));

    if (href) {
      return (
        <Link href={href} target={target} className={combinedClassName} {...(props as any)}>
          {isLoading ? (
            <>
              <span className="animate-spin mr-2">⟳</span>
              {loadingText || children}
            </>
          ) : (
            <>
              {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
              {children}
              {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
            </>
          )}
        </Link>
      );
    }

    return (
      <Button ref={ref} className={combinedClassName} {...props}>
        {isLoading ? (
          <>
            <span className="animate-spin mr-2">⟳</span>
            {loadingText || children}
          </>
        ) : (
          <>
            {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
            {children}
            {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
          </>
        )}
      </Button>
    );
  }
);

CustomButton.displayName = 'CustomButton';
