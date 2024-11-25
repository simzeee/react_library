const FeatureItem = (props) => {
  const { image, title, description } = props;

  return (
    <div className="w-[260px] mx-4 my-6">
      <img src={image} className="w-[120px]" />
      <div className="text-violet-900 font-ubuntu my-2 text-xl">{title}</div>
      <div className="text-slate-600">{description}</div>
    </div>
  );
};

export default FeatureItem;
