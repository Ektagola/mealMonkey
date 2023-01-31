import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "./sections/banner";
import Categories from "./sections/categories";
import Delivery from "./sections/delivery";
import Order from "./sections/order";
import Serve from "./sections/serve";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Meal Monkey Zero Contact Delivery - Great Taste, Delivered Safe
        </title>
        <meta name="description" content="Best and unique food recipes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/short_logo.png" />
      </Head>
      <Banner />
      <Categories />
      <Delivery />
      <Serve/>
    </>
  );
}
