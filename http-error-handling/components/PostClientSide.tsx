import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import httpClient from "../share/httpClient/httpClient";

const PostClientSide = () => {
  const [post, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    httpClient.get(`/posts/${router.query.id}`).then((r: any) => {
      setData(r);
    });
  }, [router]);

  if (!post) return null;

  return (
    <div>
      <div className="">{post.title}</div>
      {post.author}
    </div>
  );
};

export default PostClientSide;
