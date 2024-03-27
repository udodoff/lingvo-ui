import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Главная | LingvoDiving',
};

export default function Home() {
    return <div className={styles.root}></div>;
}
