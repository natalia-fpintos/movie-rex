export function watchlistReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.item.id);
    default:
      return state;
  }
}
