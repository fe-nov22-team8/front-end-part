/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import React, { useMemo, useState } from 'react';
import { Item } from 'types/Item';
import { Product } from 'types/productType';
import { useLocalStorage } from 'utils/customHook';

export type ItemCart = {
  good: Item;
  count: number;
};

type ContextType = {
  cartItems: ItemCart[] | undefined;
  favoritesItems: Product[] | undefined;
  isModalVisible: boolean;
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  removeFavoritesItems: (phone: Product) => void;
  removeOneItem: (item: Item) => void;
  addToFavorites: (phone: Product) => void;
  removeAll: () => void;
  handleModal: () => void;
};

export const LocalStorageContext = React.createContext<ContextType>(
  {} as ContextType,
);

interface Props {
  children: React.ReactNode;
}

export const LocalStorageProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<ItemCart[]>('cart', []);
  const [favoritesItems, setFavoritesItems] = useLocalStorage<Product[]>(
    'favorite',
    [],
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible((prevVal) => !prevVal);
  };

  // const [totalGoods, setTotalGoods] = useState(0);

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

  const removeOneItem = (item: Item) => {
    const cartItem = cartItems.find(({ good }) => good.id === item.id);

    if (cartItem?.count === 1) {
      return;
    }

    if (cartItem) {
      cartItem.count--;
      setCartItems([...cartItems]);
    }
  };

  const removeFavoritesItems = (phone: Product) => {
    const filteredFavorites = favoritesItems.filter(
      (item) => item.id !== phone.id,
    );

    setFavoritesItems(filteredFavorites);
  };

  const addToFavorites = (phone: Product) => {
    setFavoritesItems((prevState) => [...prevState, phone]);
  };

  const removeAll = (): void => {
    setCartItems([]);
  };

  // useEffect(() => {
  //   setTotalGoods(cartItems.reduce((acc, item) => acc + item.count, 0));
  // }, [cartItems]);

  const contextVariables = useMemo(() => {
    return {
      cartItems,
      favoritesItems,
      isModalVisible,
      addToCart,
      removeFromCart,
      removeFavoritesItems,
      removeOneItem,
      addToFavorites,
      removeAll,
      handleModal,
    };
  }, [cartItems, favoritesItems, isModalVisible]);

  return (
    <LocalStorageContext.Provider value={contextVariables}>
      {children}
    </LocalStorageContext.Provider>
  );
};
