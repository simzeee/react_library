const PostItem = (props) => {
  const { post } = props;
  return (
    <div className="m-4 rounded-lg overflow-clip relative shadow-xl">
      <img className="h-64 w-64 object-cover" src={post.image} />
      <div className="absolute top-0 right-0 m-2 px-2 bg-gray-800/70 text-white rounded-full text-sm">
        <i className="fa-regular fa-heart text-rose-300 mr-1" />
        {post.likes}
      </div>
    </div>
  );
};

export default PostItem;
