import PostPreview from "./post-preview";
import Post from "../types/post";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NoLoginPost } from "./no-login-post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  const { user } = useContext(AuthContext) as AuthContext;
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) =>
          user ? (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ) : (
            <NoLoginPost key={post.slug} />
          )
        )}
      </div>
    </section>
  );
};

export default MoreStories;
