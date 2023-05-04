import { ThemeSwitcher } from "components/ThemeSwitcher";
import { ReactComponent as LogoIcon } from "assets/icon-logo.svg";
import styles from "./TheHeader.module.scss";

export const TheHeader = () => (
    <div className={styles.header}>
        <div className={styles.logo}>
            <LogoIcon />
            useFinder
        </div>
        <ThemeSwitcher />
    </div>
);
