import React from "react";

import { RecentPosts, PopularPosts, ArchivedPosts } from "../PostList";

const Posts = (props) => {
  console.log(props);
  return (
    <article>
      <section>
        <h2>Recent Posts</h2>
        <RecentPosts />
      </section>
      <section>
        <h2>Popular Posts</h2>
        <PopularPosts />
      </section>
      <section>
        <h2>Archived Posts</h2>
        <ArchivedPosts />
      </section>
    </article>
  );
};
export default Posts;
