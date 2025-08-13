import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodItemCard from "../components/FoodItemCard";
import CartSection from "../components/CartSection";

// Currency formatter
const formatRupees = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);

// Sample food items
const initialItems = [
  {
    id: 1,
    name: "Waffle with Berries",
    price: 150,
    stock: 5,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 2,
    name: "Pastry",
    price: 25,
    stock: 3,
    image: "https://wallpapercave.com/wp/wp3717766.jpg",
  },
  {
    id: 3,
    name: "Cupcake",
    price: 80,
    stock: 2,
    image: "https://images5.alphacoders.com/462/thumb-1920-462109.jpg",
  },
  {
    id: 4,
    name: "Pasta",
    price: 220,
    stock: 4,
    image: "https://pngimg.com/uploads/pasta/pasta_PNG70.png",
  },
  {
    id: 5,
    name: "Gulab Jamun",
    price: 70,
    stock: 3,
    image: "https://i.ytimg.com/vi/dGGY3aIken4/maxresdefault.jpg",
  },
  {
    id: 6,
    name: "Pizza",
    price: 140,
    stock: 2,
    image:
      "https://supercurioso.com/wp-content/uploads/2023/04/persona-recibiendo-un-pedazo-de-pizza-de-pepperoni-con-queso.jpg_s1024x1024wisk20cokpgZ7WhSGy-697KHu_dT5N8dfYatJ7VWHouPzGmGBs.jpg",
  },
  {
    id: 7,
    name: "Burger",
    price: 60,
    stock: 4,
    image: "https://images3.alphacoders.com/131/thumb-1920-1313839.jpg",
  },
  {
    id: 8,
    name: "Malai-Chaap",
    price: 170,
    stock: 3,
    image: "https://i.ytimg.com/vi/XPAuMhvTge0/maxresdefault.jpg",
  },
  {
    id: 9,
    name: "Pistachio Ice Cream",
    price: 80,
    stock: 2,
    image:
      "https://thesaltedpepper.com/wp-content/uploads/2020/09/pistachio-ice-cream-web.jpg",
  },
];

const FoodMenuPage = () => {
  const [items, setItems] = useState(initialItems);
  const [cart, setCart] = useState({}); // change from array to object
  const navigate = useNavigate();

  const addToCart = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item
      )
    );

    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    if (!cart[id]) return;

    setItems((prevItems) =>
      prevItems.map ((item) =>
        item.id === id ? { ...item, stock: item.stock + 1 } : item
      )
    );

    setCart((prevCart) => {
      const updatedQty = prevCart[id] - 1;
      if (updatedQty <= 0) {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      } else {
        return { ...prevCart, [id]: updatedQty };
      }
    });
  };

  const confirmOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    alert("🎉 Order Confirmed!\nThank you for your purchase.");
    setCart({});
    setItems(initialItems); // reset stock
  };

  const handleLogout = () => {
    // Optional: clear local storage or session
    navigate("/");
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = items.find((item) => item.id === parseInt(id));
    return item ? sum + item.price * qty : sum;
  }, 0);

  return (
    <div className="bg-[#fffaf4] min-h-screen p-6 overflow-y-auto">
      {/* Top Navbar */}
      <div className="flex justify-between items-center py-2 mb-8">
        <h1 className="text-4xl font-extrabold text-red-600 text-center flex-1">
          Food Menu
        </h1>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          🔒 Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="md:flex gap-6">
        {/* Food Items Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <FoodItemCard
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                quantity={cart[item.id] || 0}
              />
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="md:w-1/3 mt-6 md:mt-0 bg-white p-6 shadow-lg rounded-lg h-fit sticky top-6">
          <CartSection cart={cart} items={items} total={total} formatRupees={formatRupees} />

          {/* {cart.length > 0 && ( */}
            <button
              onClick={confirmOrder}
              className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
              ✅ Confirm Order
            </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default FoodMenuPage;
