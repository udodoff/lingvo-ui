import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '@components/Button/Button';
import { Container } from '@components/Container/Container';
import styles from './Header.module.scss';
import Logo from '@assets/images/logo.svg';

export const Header: FC = () => {
    return (
        <Container>
            <nav className={styles.header}>
                <Link href="/">
                    <Image src={Logo} alt="Логотип" className={styles.logo} />
                </Link>
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
        </Container>
    );
};
