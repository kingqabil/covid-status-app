import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { getAllData } from './API';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import InfoPage from './pages/InfoPage';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/infopage/:country" element={<InfoPage />}>

          </Route>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
