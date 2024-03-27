import Image from 'next/image';
import { Button } from '@components/Button/Button';
import styles from './Header.module.scss';
import Logo from '@assets/images/logo.svg';

import { FC } from 'react';

export const Header: FC = () => {
    return (
        <nav className={styles.header}>
            <Image src={Logo} alt="Логотип" className={styles.logo} />
            <ul className={styles.navList}>
                <li>Главная</li>
                <li>Обучение</li>
                <li>Тренажеры</li>
                <li>Разговорный клуб</li>
                <li>О нас</li>
                <li>Организациям</li>
                <li>Контакты</li>
            </ul>
            <div className={styles.buttons}>
                <Button theme="primary" variant="filled">
                    Вход
                </Button>
                <Button theme="primary" variant="filled">
                    Регистрация
                </Button>
            </div>
        </nav>
    );
};
