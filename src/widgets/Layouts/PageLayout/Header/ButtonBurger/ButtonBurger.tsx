import { BurgerIcon } from "@shared/ui/icons/BurgerIcon/BurgerIcon";
import styles from "./ButtonBurger.module.scss";
import { useMenuActions } from "features/Buttons/burgerButton";
import { MenuWrapper } from "@entities/Header/MenuWrapper/MenuWrapper";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useRef } from "react";

export const ButtonBurger = () => {
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
            <BurgerMenu />
          </MenuWrapper>
        </div>
      )}
    </div>
  );
};
