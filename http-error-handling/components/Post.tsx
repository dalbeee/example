import { FC } from "react";

const Post: FC<{ post?: any }> = ({ post }) => {
  return (
    <div>
      <div className="">{post.title}</div>
      {post.author}
    </div>
  );
};

export default Post;
