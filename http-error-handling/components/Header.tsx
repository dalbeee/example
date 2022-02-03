import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href={`/`}>home</Link>
      <Link href={`/posts-clientside/1`}>{`client side - post1`}</Link>
      <Link href={`/posts-clientside/2`}>{`client side - post2`}</Link>
      <Link href={`/posts-serverside/1`}>{`server side - post1`}</Link>
      <Link href={`/posts-serverside/2`}>{`server side - post2`}</Link>
    </div>
  );
};

export default Header;
