import React, {createContext, useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const StoreContext = createContext();

const useStore = () => {
    //const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [appleList, setApples] = useState([]); // Initial empty array of apples
  const [initialized, setInitialized] = useState(false);
const [store, setStore] = useState({appleList: [], });

  useEffect(() => {
    const appleCollection = firestore()
    .collection('apples')
    .onSnapshot(querySnapshot => {
      const appleList = [];

      querySnapshot.forEach(documentSnapshot => {
        appleList.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setApples(appleList);
      setLoading(false);
    });

    // Unsubscribe from events when no longer in use
    return () => appleCollection();
  }, []);

  setStore({...store, appleList});
  setInitialized(true);



  const getApples = (id) =>
    store.appleList.find((location) => id === location.id);

  return {...store, getApples, initialized};
};

export const StoreProvider = ({children}) => {
  const store = useStore();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export default useStoreContext;