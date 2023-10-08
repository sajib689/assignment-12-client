import { Link } from "react-router-dom";

const ProductsCard = ({ mobile }) => {
    const {category_img, category_name} = mobile
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={category_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-cols items-center">
        <h2 className="card-title uppercase">{category_name}</h2>
        <div className="card-actions ">
          <Link to={`/category/${category_name}`} className="btn hover:bg-[#42C8B7] bg-[#42C8B7] text-white">See all</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
