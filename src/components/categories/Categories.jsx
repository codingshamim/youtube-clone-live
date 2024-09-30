import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <div className="categories mt-2">
      <ul className="flex items-center gap-2 ulContainer">
        <CategoryItem link="/?category=all">All</CategoryItem>
      </ul>
    </div>
  );
}
