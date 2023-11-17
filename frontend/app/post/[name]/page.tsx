type Props = {
    params: { name: string };
  };
  
  const PostPage = ({ params }: Props) => {
    return <div>{params.name} Page</div>;
  };
  
  export default PostPage;