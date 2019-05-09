import 'antd/lib/alert/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/date-picker/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/spin/style/css';
import 'antd/lib/table/style/css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import 'whatwg-fetch';
import './css/index.css';
import { App } from './pages/app';
import { reducers } from './redux/reducers';

const store: any = createStore(reducers, devToolsEnhancer({}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
