import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyles from "../../styles/utils.module.css";
import Head from "next/head";

export async function getStaticPaths() { //getStaticPaths next.jsで用意されてる関数
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false, //上で設定したpaths以外にアクセスすると４０４found
    }
}

export async function getStaticProps({ params }) { //params = titile、記事の本文、URLのID、
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>{postData.date}</div>
                <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}/>
            </article>
        </Layout>
    );
}