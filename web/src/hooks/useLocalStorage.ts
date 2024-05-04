const useLocalStorage = () => {
  const addToLocalStorage = (key: string, payload: string) => {
    localStorage.setItem(key, payload);
  };

  const deleteOnFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return { addToLocalStorage, deleteOnFromLocalStorage, clearLocalStorage };
};

export { useLocalStorage };
