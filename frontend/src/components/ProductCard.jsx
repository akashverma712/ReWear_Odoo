const ProductCard = ({ name, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg p-4 cursor-pointer transition-transform hover:scale-105 w-full max-w-xs"
    >
      <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded mb-3 overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500 dark:text-gray-300 text-sm">No Image</span>
        )}
      </div>
      <h2 className="text-center font-medium text-gray-800 dark:text-gray-100">{name}</h2>
    </div>
  );
};

export default ProductCard;
