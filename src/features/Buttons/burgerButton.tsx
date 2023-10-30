import { useState, useEffect, RefObject } from "react";

export const useMenuActions = (ref: RefObject<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);

  return {
    isOpen,
    setIsOpen: handleOpenMenu,
  };
};
