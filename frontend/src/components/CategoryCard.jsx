const CategoryCard = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-200 dark:bg-gray-700 px-4 py-6 rounded-lg text-center cursor-pointer hover:scale-105 transition duration-200 shadow-md hover:shadow-lg"
    >
      <p className="font-medium text-gray-800 dark:text-gray-200">{title}</p>
    </div>
  );
};

export default CategoryCard;

  