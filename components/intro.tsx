import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  const { user, setUser } = useContext(AuthContext) as AuthContext;
  const router = useRouter();
  const handleLogout = () => {
    setUser(null);
    router.push("/");
  };

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {user && (
        <div className="mb-2 self-end text-center">
          <p>Hello {user.userName}. Welcome!!</p>
          <button className="font-bold" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      )}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
};

export default Intro;
