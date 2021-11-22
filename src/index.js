import React from "react";
import ReactDOM from "react-dom";

//import App from "./components/app";
import App from "./containers/app";


ReactDOM.render(<App/>,document.querySelector('.container'));
/*
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.querySelector(".container")
);
*/