import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 🛒 سبد خرید
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // ❤️ علاقه‌مندی‌ها
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.find((item) => item.id === product.id)
        ? prevFavorites.filter((item) => item.id !== product.id)
        : [...prevFavorites, product]
    );
  };

  // 🔖 ذخیره‌شده‌ها
  const [savedItems, setSavedItems] = useState([]);

  const toggleSave = (product) => {
    setSavedItems((prevSaved) =>
      prevSaved.find((item) => item.id === product.id)
        ? prevSaved.filter((item) => item.id !== product.id)
        : [...prevSaved, product]
    );
  };

  // 💬 کامنت‌ها
  const [comments, setComments] = useState({});

  const addComment = (productId, text) => {
    if (!text.trim()) return;
    setComments((prevComments) => ({
      ...prevComments,
      [productId]: [...(prevComments[productId] || []), text],
    }));
  };

  const removeComment = (productId, index) => {
    setComments((prevComments) => ({
      ...prevComments,
      [productId]: prevComments[productId].filter((_, i) => i !== index),
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity, 
        favorites,
        toggleFavorite,
        savedItems,
        toggleSave,
        comments,
        addComment,
        removeComment, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
