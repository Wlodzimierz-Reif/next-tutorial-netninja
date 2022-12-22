import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt in
        unde iure laboriosam praesentium a nostrum tempora ducimus libero.
        Quaerat delectus maiores laudantium tempore eum temporibus nulla
        distinctio blanditiis, inventore sequi totam esse voluptas tenetur iure!
        Mollitia, cumque. Earum illo eaque soluta quasi dolorem hic cupiditate
        saepe maxime vero quibusdam?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet eveniet
        facilis laudantium magnam porro sapiente rerum iste quibusdam ipsum! Ab
        placeat natus ipsum accusamus suscipit. Minima cumque officia ea
        suscipit!
      </p>
      <Footer />
    </div>
  );
}
