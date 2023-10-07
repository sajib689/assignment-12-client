const WhyUsCard = ({ data }) => {
  const { title, img, description } = data;
  return (
    <div className="flex card card-compact w-96 bg-base-100 shadow-xl">
      <img className="w-20" src={img} alt="Shoes" />

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
