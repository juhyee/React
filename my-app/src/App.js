import logo from './logo.svg';
import './App.css';
import Composition from './components/2-4.Props/Composition';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponents from './components/2-5.State/ClassComponents';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponents />
      <Extraction />
      <Composition />
    </div>
  );
}

export default App;
