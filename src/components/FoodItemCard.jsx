import React from 'react';

const FoodItemCard = ({ item, addToCart, removeFromCart, quantity }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-3 font-bold text-lg">{item.name}</h3>
      <p className="text-gray-700 font-semibold">₹{item.price.toFixed(2)} INR</p>
      <p className="text-sm text-gray-500">Stock: {item.stock}</p>

      <div className="mt-3">
        {quantity === 0 ? (
          <button
            onClick={() => addToCart(item.id)}
            disabled={item.stock === 0}
            className={`w-full py-2 px-4 rounded-full text-sm font-semibold transition ${
              item.stock === 0
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-orange-700 hover:bg-orange-600 text-white'
            }`}
          >
            🛒 {item.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded-full text-lg"
            >
              ➖
            </button>
            <span className="font-bold text-md">{quantity}</span>
            <button
              onClick={() => addToCart(item.id)}
              disabled={item.stock === 0}
              className={`px-3 py-1 rounded-full text-lg ${
                item.stock === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              ➕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
