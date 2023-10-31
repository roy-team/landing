import { BLOCKS_ID } from "@entities/constants/navigation";
import { useRouter } from "next/router";
import { RefObject, useEffect, useState } from "react";

export const useScroll = (ref: RefObject<HTMLDivElement>) => {
  const [activeId, setActiveId] = useState("main");
  const router = useRouter();

  useEffect(() => {
    if (BLOCKS_ID[router.asPath.slice(2)]) {
      setActiveId(router.asPath.slice(2));
    }
    const checkScroll = () => {
      if (!ref || !ref.current) {
        return;
      }
      const children = Array.from(ref.current.children);
      children.forEach(async (el) => {
        if (!el.id) {
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top >= -320 && rect.bottom <= window.innerHeight + 320) {
          /* await router.push(`#${el.id}`); */
          setActiveId(el.id);
        }
      });
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [ref, router.asPath]);
  return { activeId };
};
