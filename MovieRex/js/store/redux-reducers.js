import { WatchlistActions } from './redux-actions.js';

const initialState = {
  watchlist: []
};

export function watchlistReducer(state = initialState, action) {
  switch (action.type) {
    case WatchlistActions.ADD_ITEM:
      return { watchlist: [...state.watchlist, action.item] };
    case WatchlistActions.REMOVE_ITEM:
      return { watchlist: state.watchlist.filter(item => item.id !== action.item.id) };
    default:
      return state;
  }
}
