import styles from "../../styles/Ninjas.module.css";

import { useContext } from "react";
import HeadContext from "../../context/HeadContext";
import Link from "next/link";

// this function runs at build time(for server rendering componentd)
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  const { setPageTitle } = useContext(HeadContext);
  setPageTitle("Ninja Listing");
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <div className={styles.single}>
            <h3>{ninja.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
