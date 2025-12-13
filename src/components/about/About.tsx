'use client';
import { GIT_HUB_INFO } from '@assets/gitHubInfo';
import styles from './about.module.scss';
import GitHubLogo from '@assets/img/github-logo';
import { useRef } from 'react';
import saveFile from 'fileSystem/saveFile';

const INFO = {
  name: 'Yuliya Adamovich',
  role: 'Frontend Developer',
  image: 'yuliadam.webp',
  github: 'YuliAdam',
};

export default function About() {
  const downloadRef = useRef<HTMLAnchorElement>(null);
  return (
    <section className={styles.about}>
      <div>
        <div className={styles.about_info}>
          <h1>{INFO.name}</h1>
          <p>{INFO.role}</p>
          <a href={GIT_HUB_INFO.href}>
            <div className={styles.about_gitHub}>
              <GitHubLogo className={styles.about_gitHub_logo} />
              <p>{INFO.github}</p>
            </div>
          </a>
        </div>
        <a
          className={styles.about_cv}
          ref={downloadRef}
          onClick={() => saveFile(downloadRef.current)}
        >
         &#8681; Download my CV &#8681;
        </a>
        <div className={styles.about_text}>
          <p>
            Hi! My name is Yuliya Adamovich and I&apos;m a full-stack developer
            junior!
          </p>
          <span>
            Job searcher - is my application for search a job in remote mood. I
            hope it&apos;s can help you start your career. Good luck!
          </span>
          <p>Thank you for attention and enjoy my application!</p>
        </div>
      </div>
      <img src={INFO.image} alt={INFO.name} />
    </section>
  );
}
