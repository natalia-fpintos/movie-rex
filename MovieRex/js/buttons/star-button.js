import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { addItem, removeItem } from '../store/redux-actions.js';


const StarButton = ({ id, watchlist, addOnClick, removeOnClick }) => {
  const [selected, setSelected] = useState(false);
  const icon = selected ? 'ios-star' : 'ios-star-outline';
  const onClick = selected ? removeOnClick : addOnClick;

  useEffect(() => {
    console.log('using effect')
    console.log('selected', selected)
    console.log('watchlist', watchlist)
    console.log('state.includes(id)', watchlist.includes(id))
    watchlist.includes(id) ? setSelected(true) : setSelected(false);
  });

  return (
    <TouchableOpacity onPress={() => onClick(id)}>
      <Ionicons name={icon} size={25} color={'#fcba03'} />
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOnClick: id => {
      dispatch(addItem(id))
    },
    removeOnClick: id => {
      dispatch(removeItem(id))
    }
  }
}

const connectedStarButton = connect(mapStateToProps, mapDispatchToProps)(StarButton)
export default connectedStarButton;