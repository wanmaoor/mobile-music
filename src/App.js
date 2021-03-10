/*
 * @Description:
 * @version:
 * @Author: wanmao
 * @LastEditors: wanmao
 */
import './App.css';
import { GlobalStyle } from './style';
import { renderRoutes } from 'react-router-config';
import routeList from './routes/index';
import { HashRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <GlobalStyle />
          {renderRoutes(routeList)}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
