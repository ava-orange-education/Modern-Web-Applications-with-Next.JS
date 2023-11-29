import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './main-header.module.css';

function MainHeader() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextCommercePro</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li className={router.pathname === '/books' ? styles.active : ''}>
            <Link href="/books">Browse All Books</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
