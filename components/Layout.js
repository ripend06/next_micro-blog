import Head from "next/head";
import styles from "./layout.module.css";
import utilstyles from "../styles/utils.module.css";

const name = "ripend06";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/images/profile.png" alt="" className={utilstyles.borderCircle} />
                <h1 className={utilstyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;