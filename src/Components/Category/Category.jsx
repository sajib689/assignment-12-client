import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [data, setData] = useState([]);
  const { category_name } = useParams();

  useEffect(() => {
    // Fetch data based on the category_name and update the state
    fetch(`http://localhost:3000/mobiles/${category_name}`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category_name]);
  // console.log(data[0]?.others)
  // console.log(data)

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols gap-4">
      {data[0]?.others?.map((mobiles) => (
        <CategoryCard key={mobiles._id} mobiles={mobiles}></CategoryCard>
      ))}
    </div>
  );
};

export default Category;
