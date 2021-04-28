import Head from "next/head";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>User List | About</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
      </div>
    </>
  );
};

export default About;
