import { BurgerIcon } from "@shared/ui/icons/BurgerIcon/BurgerIcon";
import styles from "./ButtonBurger.module.scss";
import { useMenuActions } from "features/Buttons/burgerButton";
import { MenuWrapper } from "@entities/Header/MenuWrapper/MenuWrapper";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useRef } from "react";

type Props = {
  activeId: string;
};

export const ButtonBurger = ({ activeId }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useMenuActions(ref);
  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.button} onClick={setIsOpen}>
        <BurgerIcon className={styles.icon} close={isOpen} />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <MenuWrapper>
            <BurgerMenu activeId={activeId} />
          </MenuWrapper>
        </div>
      )}
    </div>
  );
};
