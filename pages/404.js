import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.history.length > 2 ? router.back() : router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>User List | 404 Not Found</title>
      </Head>
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <h2>Sorry, the page you're looking for doesn't exist.</h2>
        <p>
          <a
            onClick={() =>
              window.history.length > 2 ? router.back() : router.push("/")
            }
          >
            Go back
          </a>
        </p>
      </div>
    </>
  );
};

export default NotFound;
