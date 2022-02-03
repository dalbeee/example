import { GetServerSideProps } from "next";

import Post from "../../components/Post";
import { WithServerSideHttpHandler } from "../../components/WithServerSideHttpHandler";
import httpClient from "../../share/httpClient/httpClient";

export const getServerSideProps: GetServerSideProps = WithServerSideHttpHandler(
  async (context) => {
    const post = await httpClient.get(`/posts/${context.params?.id as string}`);

    return { props: { post } };
  }
);

const post = ({ post }: any) => {
  return <Post post={post} />;
};

export default post;
