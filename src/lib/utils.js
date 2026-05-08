import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines classNames with proper merging
 * @param {...any[]} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 


export const isIframe = window.self !== window.top;
