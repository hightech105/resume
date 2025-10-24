import { animateScroll as scroll } from "react-scroll";

/**
 * Scroll view to tag element by id
 * 
 * @param viewId
 */
export const scrollInView = (viewId: string) => {
  const view = document.getElementById(viewId);
  const viewTop = view?.getBoundingClientRect().top;
  scroll.scrollTo(viewTop ?? 0);
}

/**
 * Check element is in view or not
 * 
 * @param element HTML element
 * @returns 
 */
export const isInView = (element: HTMLElement | null): boolean => {
  if (element) {
    const rect = element.getBoundingClientRect();
    if (
      (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
      (rect.top <= 0 && rect.bottom >= window.innerHeight)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Check the number is even or not
 * 
 * @param number 
 * @returns 
 */
export const isEvenNumber = (number: number) => number % 2 === 0

/**
 * Check the input is email or not
 *
 * @param email
 */
export const isEmail = (email: string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}