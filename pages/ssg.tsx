import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

const Static = ({ cats }: any) => {
  return (
    <div>
      <Head>
        <title>SSG</title>
      </Head>
      <h1>Коты</h1>
      <div className={styles.cats}>
        {cats.map((cat: any) => (
          <div key={cat._id}>
            <Image
              width="200"
              height="200"
              src={`https://cataas.com/cat/${cat._id}`}
              alt={cat._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const url = "https://cataas.com/api/cats?limit=20";
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const cats = await res.json();

  return {
    props: {
      cats,
    },
  };
}

export default Static;
