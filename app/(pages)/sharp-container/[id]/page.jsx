import SharpContainerDetails from "./SharpContainerDetails";

const page = async ({ params }) => {
  const { id } = await params;
  return <SharpContainerDetails productId={id}/>;
};

export default page;
