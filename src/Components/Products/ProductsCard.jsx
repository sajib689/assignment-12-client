import { Link } from "react-router-dom";

const ProductsCard = ({ mobile }) => {
    const {img, category} = mobile
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-cols items-center">
        <h2 className="card-title uppercase">{category}</h2>
        <div className="card-actions ">
          <Link className="btn bg-[#42C8B7] text-white">See all</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
