const FeatureCard = ({ feature }) => {
  const { id, img, title, description } = feature;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex ">
          <div className="w-8 ">
            <p className="bg-[#42C8B7] p-2 flex items-center justify-center border rounded-[50%] font-bold text-white text-xl">
              {id}
            </p>
          </div>
          <h2 className="ms-1 card-title">{title}</h2>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
