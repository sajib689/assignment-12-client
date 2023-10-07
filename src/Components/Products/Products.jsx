import useMobiles from "../../Hooks/UseMobiles/UseMobiles";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [mobiles] = useMobiles();
  // const apple = mobiles.filter(item => item.category === 'apple')
  // const vivo = mobiles.filter(item => item.category === 'vivo')
  // const samsung = mobiles.filter(item => item.category === 'samsung')
  return (
    <div className="mt-24 mb-24">
      <h1 className="text-center font-bold text-4xl mb-24">Old Mobile Category</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols gap-4">
        {mobiles.map((mobile) => (
          <ProductsCard key={mobile._id} mobile={mobile}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
