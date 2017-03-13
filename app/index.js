import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStoreWithMiddleware(reducers);

var configure = (initialState = {}) => {
  
  var store = createStore(reducers, initialState, compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};


// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Provider store={createStoreWithMiddleware(reducers)}>  
//         <Component />
//       </Provider>  
//     </AppContainer>,
//     document.getElementById('app')
//   );
// };


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configure()}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index');
    store.replaceReducer(nextRootReducer);
  });
  module.hot.accept('./components/app', () => {
    render(App)
  });

}