import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../component/Navbar";
import Fee from "../component/Fee";

import FeeEth from "./FeeEth";
import { QueryClient, QueryClientProvider } from "react-query";
import Providers from "../component/Providers";
import TsParticle from "../component/TsParticle";
const Home: NextPage = () => {
  const query = new QueryClient();
  return (
    <div>
      <Navbar logo = "https://www.img.in.th/images/349092f50f3b2479fa890dc5f2f2cfc8.png"/>
      <QueryClientProvider client={query}>
        <Fee />
        <Providers/>
        <TsParticle currency ="https://imgz.io/images/2022/02/16/opengraph.png"/>
      </QueryClientProvider>
      
    </div>
  );
};

export default Home;
