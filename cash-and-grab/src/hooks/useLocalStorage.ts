const useLocalStorage = () => {
  const addToLocalStorage = (key: string, payload: string) => {
    localStorage.setItem(key, payload);
  };

  const getLocalStorageKey = (key: string) => {
    return localStorage.getItem(key);
  };

  const deleteOnFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return {
    addToLocalStorage,
    deleteOnFromLocalStorage,
    clearLocalStorage,
    getLocalStorageKey,
  };
};

export { useLocalStorage };
