import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css"
import Link from 'next/link'
import Layout from '@/components/Layout'
import utilStyle from "../styles/utils.module.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <p>
            私はフロントエンドエンジニアとして活動してます。好きな言語は、javascriptです
          </p>
        </section>

        <section>
          <h2 className={utilStyle.textCenter}>エンジニアのブログ📝</h2>
          <div className={styles.grid}>
            <article className={utilStyle.textCenter}>
              <Link href="/">
                <img src="images/thumbnail01.jpg" alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" legacyBehavior>
                <a className={utilStyle.boldText}>
                  記事のタイトルです１。
                </a>
              </Link>
              <br />
              <small classNmae={utilStyle.lightText}>
                Debrually 23, 2023
              </small>
            </article>
            <article className={utilStyle.textCenter}>
              <Link href="/">
                <img src="images/thumbnail01.jpg" alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" legacyBehavior>
                <a className={utilStyle.boldText}>
                  記事のタイトルです１。
                </a>
              </Link>
              <br />
              <small classNmae={utilStyle.lightText}>
                Debrually 23, 2023
              </small>
            </article>
            <article className={utilStyle.textCenter}>
              <Link href="/">
                <img src="images/thumbnail01.jpg" alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" legacyBehavior>
                <a className={utilStyle.boldText}>
                  記事のタイトルです１。
                </a>
              </Link>
              <br />
              <small classNmae={utilStyle.lightText}>
                Debrually 23, 2023
              </small>
            </article>
            <article className={utilStyle.textCenter}>
              <Link href="/">
                <img src="images/thumbnail01.jpg" alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" legacyBehavior>
                <a className={utilStyle.boldText}>
                  記事のタイトルです１。
                </a>
              </Link>
              <br />
              <small classNmae={utilStyle.lightText}>
                Debrually 23, 2023
              </small>
            </article>
          </div>
        </section>

      </Layout>
    </>
  )
}
