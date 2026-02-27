import NeedleCutterDetail from "./NeedleCutterDetail";

const page = async ({ params }) => {
  const { id } = await params;
  return <NeedleCutterDetail productId={id}/>;
};

export default page;
