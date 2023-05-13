const redux = require("redux");

const somefunc = (state, action) => {
  if (action.type === "") {
    //do something
    return state;
  }
  return state;
};

const store = redux.createStore(somefunc);
