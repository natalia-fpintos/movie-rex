export const WatchlistActions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
};

export const addItem = item => {
  return {
    type: WatchlistActions.ADD_ITEM,
    item
  };
};

export const removeItem = item => {
  return {
    type: WatchlistActions.REMOVE_ITEM,
    item
  };
};
