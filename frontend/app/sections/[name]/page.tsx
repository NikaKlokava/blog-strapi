type Props = {
  params: { name: string };
};

const SectionPage = ({ params }: Props) => {
  return <div className=" text-center">{params.name} Page</div>;
};

export default SectionPage;
