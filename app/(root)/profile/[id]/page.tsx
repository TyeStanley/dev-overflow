import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";

const Page = async ({ params, searchParams }: URLProps) => {
  const userInfo = await getUserInfo({ userId: params.id });

  return <div>{params.id}</div>;
};

export default Page;
