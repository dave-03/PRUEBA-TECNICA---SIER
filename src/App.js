import './App.css';
import MainRouter from './Router/MainRouter';
import NavBar from './Component/NavBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavBar></NavBar>
        </nav>
       <MainRouter></MainRouter>
      </header>
    </div>
  );
}

export default App;
