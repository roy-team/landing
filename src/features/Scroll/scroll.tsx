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

      const sorted = children
        .map((el) => {
          return {
            id: el.id,
            position: el.getBoundingClientRect().top,
          };
        })
        .filter((el) => el.id !== "")
        .sort((a, b) => {
          if (a.id === "") {
            return 1;
          }
          return Math.abs(a.position) - Math.abs(b.position);
        });
      setActiveId(sorted[0].id);
    };

    window.addEventListener("scrollend", checkScroll);

    return () => {
      window.removeEventListener("scrollend", checkScroll);
    };
  }, [ref, router.asPath]);
  return { activeId };
};
