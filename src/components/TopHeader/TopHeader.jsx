    import React from "react";
    import { Link } from "react-router-dom";
    import { ROUTES } from "../../utils/routes";
    import styles from "../../style/Header.module.css";
    import LOGO from "../../images/Logo.svg";

    const TopHeader = () => {
        return (
            <div className={styles.topHeader}>
                <div className={styles.img}>
                    <Link to={ROUTES.HOME}>
                        <img src={LOGO} alt="BioVit" />
                    </Link>
                </div>
                <div className={styles.navigation_menu}>
                    <div className={styles.menu}>
                        <div className={styles.phone}>
                            <ul>
                                <li>
                                    <svg width="24" height="24">
                                        <use href="./sprite.svg#phone" />
                                    </svg>
                                    <a href="#">+1 (123) 123-45-67</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.navigation}>
                            <ul>
                                <li>
                                    <Link to={ROUTES.SALE}>SALE</Link>
                                </li>
                                <li>
                                    <Link to={ROUTES.BLOG}>Blog</Link>
                                </li>
                                <li>
                                    <Link to={ROUTES.PARTNERS}>For partners</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.language}>
                            <ul>
                                <li>
                                    <a href="#">ENG</a>
                                </li>
                                <li>
                                    <svg width="24" height="24">
                                        <use href="./sprite.svg#chevron-down" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default TopHeader;