import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux-saga/actions';

const mapDispatchToProps = {
  addItem: addTodo,
};

export type TodoAddProps = & typeof mapDispatchToProps;

const TodoAdd = (
  { addItem }:TodoAddProps,
) => {
 
  useEffect(() => { 
    addItem('test again');
    console.log('trigger');
  }, []);


  return (
    <div>
      Hello add
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TodoAdd);
