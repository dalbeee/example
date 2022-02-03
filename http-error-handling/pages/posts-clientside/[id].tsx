import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Post from "../../components/Post";
import httpClient from "../../share/httpClient/httpClient";

const post = () => {
  const [post, setPost] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    httpClient.get(`/posts/${router.query.id}`).then((r) => {
      setPost(r);
    });
  }, [router]);

  if (!post) return null;

  return <Post post={post} />;
};

export default post;
