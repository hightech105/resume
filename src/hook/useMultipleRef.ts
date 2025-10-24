import { ElementRefsType } from "common/type";
import { useRef } from "react";

type useMultipleRefType<T> = {
  keys: string[];
  getRef: (refName: string) => T;
  setRef: (refName: string, element: T) => void
}

export const useMultipleRef = <T> (): useMultipleRefType<T> => {
  const refs = useRef<ElementRefsType<T>>({});
  const getRef = (refName: string): T => refs.current[refName];
  const setRef = (refName: string, element: T) => refs.current[refName] = element;
  return {
    keys: Object.keys(refs), 
    getRef, setRef
  };
}
