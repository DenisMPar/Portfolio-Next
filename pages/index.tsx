import type { NextPage } from "next";
import { ToastContainer } from "react-toastify";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Proyects } from "../components/proyects";
import { Footer } from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { getCmsContent } from "lib/api";
import { SWRConfig } from "swr";
import Head from "next/head";

export async function getStaticProps() {
  const data = await getCmsContent();
  return {
    props: {
      fallback: {
        "/api/content": data,
      }, // will be passed to the page component as props
      revalidate: 300,
    },
  };
}
type Props = {
  fallback: any;
};

const Home: NextPage<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Porfolio Denis</title>
      </Head>
      <div>
        <Header />
        <ToastContainer autoClose={false} />
        <Hero />
        <AboutMe />
        <Proyects></Proyects>
        <Services />
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </SWRConfig>
  );
};

export default Home;
