import './App.css';
import Header from './components/Header';
import History from './components/History/History';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <History />
      {/* <Header />
      <Main />
      <History />
      <Footer /> */}
    </div>
  );
}

export default App;