import React from "react";

const Page = ({ params, searchParams }) => {
  console.log(searchParams);
  return <div>{params.id}</div>;
};

export default Page;
