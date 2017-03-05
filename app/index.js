import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// ReactDOM.render(
//   <App />,
  
//   document.getElementById('app')
// );





// AppContainer is a necessary wrapper component for HMR

//import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={createStoreWithMiddleware(reducers)}>  
        <Component />
      </Provider>  
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App)
  });
}