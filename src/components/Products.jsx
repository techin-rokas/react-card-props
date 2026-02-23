import Product from "./Product";

function Products() {
  const products = [
    { id: 1, title: "Monitor", price: 200, onSale: true },
    { id: 2, title: "Keyboard", price: 50, onSale: false },
    {
      id: 3,
      title: "Mouse",
      price: 20,
      onSale: true,
    },
  ];

  return (
    <div className="product-list flex gap-8 flex-wrap justify-center">
      {products.map((product) => {
        const { id, title, price, onSale } = product;
        return <Product key={id} title={title} price={price} onSale={onSale} />;
      })}
    </div>
  );
}

export default Products;
