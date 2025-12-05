'use client';

import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import { PATHS } from 'configuration/navigationConfig';
import Search from '@components/header/Search';

const itemsText = {
  toIndex: 'Go search',
  toAbout: 'About us',
};

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      {pathname === PATHS.about
        ? getLink(itemsText.toIndex, PATHS.empty)
        : getLink(itemsText.toAbout, PATHS.about)}
      {pathname !== PATHS.about && <Search />}
    </nav>
  );
}

function getLink(text: string, path: string) {
  return (
    <Link href={path} className={styles.about}>
      {text}
    </Link>
  );
}
