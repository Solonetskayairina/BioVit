    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { ROUTES } from "../../utils/routes";
    import styles from "../../style/Header.module.css";
    import LOGO1 from "../../images/LOGO1.svg";

    const BottomHeader = () => {
        const [isSearchOpen, setSearchOpen] = useState(false);

        const toggleSearch = () => {
            setSearchOpen(!isSearchOpen);
        };

        return (
            <div className={styles.bottomHeader}>
                <div className={styles.categoryMenu}>
                    <svg width="24" height="24">
                        <use href="./sprite.svg#menu" />
                    </svg>
                    <h2>Menu</h2>
                </div>
                <div className={styles.icons}>
                    <img className={styles.image} src={LOGO1} alt="BioVit" />
                    <form className={styles.form}>
                        <div className={styles.inputWithIcon}>
                            <input
                                type="search"
                                name="search"
                                autoComplete="off"
                                className={isSearchOpen ? styles.visible : styles.hidden}
                            />
                            <div className={styles.iconSearch} onClick={toggleSearch}>
                                <svg width="36" height="36">
                                    <use href="./sprite.svg#search" />
                                </svg>
                            </div>
                        </div>
                    </form>
                    <div className={styles.icon}>
                        <Link to={ROUTES.HOME}>
                            <svg width="36" height="36">
                                <use href="./sprite.svg#heart" />
                            </svg>
                        </Link>
                        <Link to={ROUTES.PROFILE}>
                            <svg width="24" height="30">
                                <use href="./sprite.svg#group" />
                            </svg>
                        </Link>
                        <Link to={ROUTES.CART} className={styles.cartCount}>
                            <svg width="36" height="36">
                                <use href="./sprite.svg#cart" />
                            </svg>
                            <svg width="14" height="14" className={styles.ellipse}>
                                <use href="./sprite.svg#ellipse" />
                            </svg>
                            <span className={styles.count}>1</span>
                        </Link>
                        <div className={styles.mobile}>
                            <svg width="24" height="24" className={styles.mobile}>
                                <use href="./sprite.svg#phone" />
                            </svg>
                            <svg width="24" height="24" className={styles.mobile_down}>
                                <use href="./sprite.svg#chevron-down" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        );
    };

    export default BottomHeader;