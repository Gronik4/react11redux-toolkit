import './css/App.css';
import './css/stamp.css';
import { ShowTask1 } from './components/ShowTask1';
import {ShowTask2} from './components/ShowTask2';

function App() {
  return (
    <div className="App">
      <ShowTask1/>
      <ShowTask2/>
    </div>
  );
}

export default App;
