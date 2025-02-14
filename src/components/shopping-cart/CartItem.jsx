/* eslint-disable react/prop-types */


const CartItem = ({ product, onDelete, onQuantityChange }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center space-x-4">
        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
        <div>
          <p className="font-medium">{product.name}</p>
          <p className="text-gray-500">Code: {product.code}</p>
        </div>
      </div>
      <div className="text-gray-500">{product.color}</div>
      <div className="text-gray-500">${product.price.toFixed(2)}</div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onQuantityChange(product.id, 'increase')} className="p-2 bg-gray-200 rounded">
          +
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => onQuantityChange(product.id, 'decrease')} className="p-2 bg-gray-200 rounded">
          -
        </button>
      </div>
      <div className="text-gray-500">${(product.price * product.quantity).toFixed(2)}</div>
      <button onClick={() => onDelete(product.id)} className="text-red-500">
        <i className="fas fa-trash"></i> {/* You can replace this with an actual trash icon */}
      </button>
    </div>
  );
};



export default CartItem;
