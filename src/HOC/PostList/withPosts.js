import React, { useState, useEffect } from "react";

const withPosts = (Component, getPosts) => {
  return function (props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      setPosts(getPosts());
    }, []);

    return <Component posts={posts} {...props} />;
  };
};
export default withPosts;
