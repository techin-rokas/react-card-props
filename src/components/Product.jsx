function Product(props) {
  const { title, price, onSale } = props;
  return (
    <div className="bg-amber-200 p-4 rounded w-48 h-27 shadow-xl">
      <h1>{title}</h1>
      <p>{price}</p>
      {onSale && <p className="text-red-500">SALE!</p>}
    </div>
  );
}

export default Product;
