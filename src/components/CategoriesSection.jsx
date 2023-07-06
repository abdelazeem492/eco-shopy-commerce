import Heading from "./Heading";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import SingleCategory from "./SingleCategory";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="container py-5" id="categories">
      <Heading head="Categories" body="Our Popular Categories" />
      <Categories categories={categories} />
      {categories.map((category, idx) => (
        <SingleCategory key={idx} category={category} />
      ))}
    </div>
  );
};

export default CategoriesSection;
