import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

const LandingPage = () => {
  const categories = ['Shirts', 'Jeans', 'Jackets', 'Shoes', 'Accessories', 'Dresses'];
  const products = [
    { name: 'Item 1', image: '' },
    { name: 'Item 2', image: '' },
    { name: 'Item 3', image: '' },
    { name: 'Item 4', image: '' },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-black text-black dark:text-white min-h-screen">
      {/* Carousel Section */}
      <section className="bg-gray-200 dark:bg-gray-800 h-52 rounded-lg mb-8 flex items-center justify-center">
        <h2 className="text-xl font-semibold">[Image Carousel Placeholder]</h2>
      </section>

      {/* Categories */}
      <section className="mb-10">
        <h3 className="text-lg font-bold mb-4">Browse by Category</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={i} title={cat} />
          ))}
        </div>
      </section>

      {/* Products */}
      <section>
        <h3 className="text-lg font-bold mb-4">Featured Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((prod, i) => (
            <ProductCard key={i} name={prod.name} image={prod.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
