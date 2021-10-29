import Head from "next/head";
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello world! I'm Erick! I'm a restaurant specialist turned full-stack engineer! In March 2021 I took a leap of faith and began sftware development. I'm a huge believer in evolution and technology is the tip of the spear, it's a place I <i>had</i> to be!</p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.rg/learn">our Next.js tutorial</a>)
        </p>
      </section>
    </Layout>
  );
}


// styling info 
// https://nextjs.org/learn/basics/assets-metadata-css/styling-tips

// left off @https://nextjs.org/learn/basics/data-fetching