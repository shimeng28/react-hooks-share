import React, {
  useReducer, useCallback
} from 'react';
import { Input, Button } from 'antd';

const initialState = {
  name: 'jokking',
  age: 24,
};

function reducer(state, action) {
   switch(action.type) {
     case 'addAge':
       return {
         ...state,
         age: ++state.age,
       };
     case 'modifiedName':
       return {
         ...state,
         name: action.payload,
       };
    default:
      return state;
   }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputChange = useCallback(
    (e) => {
      dispatch({
        type: 'modifiedName',
        payload: e.currentTarget.value,
      })
    },
    [],
  )
  return (
    <>
      <Input
        type="text"
        value={state.name}
        onChange={inputChange}
      />
      <Button onClick={() => dispatch({type: 'addAge'})}>increment age</Button>
      <p>name: {state.name}, age: {state.age}</p>
    </>
  );
}