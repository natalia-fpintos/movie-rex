export const WatchlistActions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
};

export const addItem = id => {
  return {
    type: WatchlistActions.ADD_ITEM,
    id
  };
};

export const removeItem = id => {
  return {
    type: WatchlistActions.REMOVE_ITEM,
    id
  };
};
