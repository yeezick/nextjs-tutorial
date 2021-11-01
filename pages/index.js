import Head from "next/head";
import Layout, {siteTitle} from '../components/layout';
import { getSortedPostsData } from "../lib/posts";
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}



export default function Home({allPostsData}) {
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
      <section className={`${utilStyles.headingMD} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul classname={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listitem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}


// styling info 
// https://nextjs.org/learn/basics/assets-metadata-css/styling-tips

