import Link from "next/link";

export const NoLoginPost = () => {
  return (
    <div className="bg-pink-400 mb-5 text-center">
      <p>You are not allowed to see this post</p>
      <b>
        <Link href="/login">Login</Link>
      </b>
    </div>
  );
};
