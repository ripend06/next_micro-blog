import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css"
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilStyle from "../styles/utils.module.css"
import { getPostsData }  from "../lib/post";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}


//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントにわたすためのprops
//     },
//   };
// }



const inter = Inter({ subsets: ['latin'] })

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <p>
            私はフロントエンドエンジニアとして活動してます。好きな言語は、javascriptです
          </p>
        </section>

        <section>
          <h2 className={utilStyle.textCenter}>エンジニアのブログ📝</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id} className={utilStyle.textCenter}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} alt=""
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link href={`/posts/${id}`} legacyBehavior>
                  <a className={utilStyle.boldText}>
                    {title}
                  </a>
                </Link>
                <br />
                <small className={utilStyle.lightText}>
                  {date}
                </small>
              </article>
            ))}

          </div>
        </section>

      </Layout>
    </>
  )
}
