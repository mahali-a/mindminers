import React from 'react';
import { toast, Toaster } from 'sonner';

export type ToastProps = React.ComponentProps<typeof Toaster>;

export type ToastActionElement = React.ReactElement;

export interface UseToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
}

/**
 * Custom hook for using sonner toast
 * Provides a more consistent API with the previous toast implementation
 */
export function useToast() {
  const toastFn = (options: UseToastOptions = {}) => {
    const { title, description, variant = 'default', duration = 5000, action } = options;

    // Determine toast type based on variant
    if (variant === 'destructive') {
      return toast.error(title as string, {
        description: description as string,
        duration,
        action,
      });
    } else if (variant === 'success') {
      return toast.success(title as string, {
        description: description as string,
        duration,
        action,
      });
    } else {
      return toast(title as string, {
        description: description as string,
        duration,
        action,
      });
    }
  };

  return {
    toast: toastFn,
    dismiss: toast.dismiss,
    // We still expose Sonner's original methods for flexibility
    success: toast.success,
    error: toast.error,
    info: toast.info,
    warning: toast.warning,
    promise: toast.promise,
    custom: toast.custom,
  };
}

// Export the Toaster component for use in layout
export { Toaster };

// Also export the direct toast function for convenience
export { toast };
