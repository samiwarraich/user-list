import styles from "../../styles/Users.module.css";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>User List | Users Listing</title>
      </Head>
      <div>
        <h1 className={styles.heading}>All users</h1>
        {users.map((user) => (
          <Link
            className={styles.single}
            href={"/users/" + user.id}
            key={user.id}
          >
            <h3>{user.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
