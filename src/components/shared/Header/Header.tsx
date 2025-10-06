import Link from "next/link";
import styles from './Header.module.scss'


export const Header = () => {
    return (
        <header>
            <nav>
                <ul className={styles.Header__list}>
                    <Link href="">
                        <li>Home</li>
                    </Link>
                    <Link href="/store">
                        <li>Store</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

