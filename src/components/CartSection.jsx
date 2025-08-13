import React from 'react';

const CartSection = ( ) => {
  const cartHasItems = Object.values(cart).some(qty => qty > 0);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-red-600 mb-4 border-b pb-2">🛒 Your Cart</h2>

      {!cartHasItems ? (
        <div className="text-center text-gray-500">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Empty Cart"
            className="w-24 mx-auto mb-2"
          />
          <p>Your added items will appear here.</p>
        </div>
      ) : (
        <>
          <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {Object.entries(cart)
              .filter(([_, qty]) => qty > 0)
              .map(([id, qty]) => {
                const item = items.find((i) => i.id === parseInt(id));
                if (!item) return null;

                return (
                  <div
                    key={id}
                    className="flex items-center justify-between gap-2 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {qty}</p>
                      </div>
                    </div>
                    <span className="font-medium text-green-700">
                      ₹{(item.price * qty).toFixed(2)}
                    </span>
                  </div>
                );
              })}
          </div>

          <div className="mt-4 border-t pt-3">
            <div className="flex justify-between text-lg font-bold text-green-800">
              <span>Total:</span>
              <span>{formatRupees(total)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSection;
