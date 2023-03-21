/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import React, { useMemo } from 'react';
import { Item } from 'types/Item';
import { Phone } from 'types/phoneTypes';
import { useLocalStorage } from 'utils/customHook';

export type CartItem = {
  good: Item;
  count: number;
};

type ContextType = {
  cartItems: CartItem[] | undefined;
  favoritesItems: Phone[] | undefined;
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  changeFavoritesItems: (phone: Phone) => void;
};

export const LocalStorageContext = React.createContext<ContextType>(
  {} as ContextType,
);

interface Props {
  children: React.ReactNode;
}

export const LocalStorageProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);
  const [favoritesItems, setFavoritesItems] = useLocalStorage<Phone[]>(
    'favorite',
    [],
  );

  const addToCart = (item: Item) => {
    const cartItem = cartItems.find(({ good }) => good.id === item.id);

    if (!cartItem) {
      const cartToAdd = { good: item, count: 1 };

      setCartItems((prevCartItems) => [...prevCartItems, cartToAdd]);

      return;
    }

    cartItem.count++;
    setCartItems([...cartItems]);
  };

  const removeFromCart = (item: Item) => {
    const updatedCart = cartItems.filter(({ good }) => good.id !== item.id);

    setCartItems(updatedCart);
  };

  const changeFavoritesItems = (phone: Phone) => {
    const hasToFavorite = favoritesItems.find((item) => item.id === phone.id);

    if (hasToFavorite) {
      setFavoritesItems(favoritesItems.filter((item) => item.id !== phone.id));

      // return;
    }

    // setFavoritesItems((prevState) => [...prevState, hasToFavorite]);
  };

  const contextVariables = useMemo(() => {
    return {
      cartItems,
      favoritesItems,
      addToCart,
      removeFromCart,
      changeFavoritesItems,
    };
  }, [cartItems]);

  return (
    <LocalStorageContext.Provider value={contextVariables}>
      {children}
    </LocalStorageContext.Provider>
  );
};
