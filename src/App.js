import logo from './logo.svg';
import './App.css';
import { look } from './Ecmascript/fonction';
import { findLongestWord } from './Ecmascript/findLongestWord';
import { countDistinctElements } from './Ecmascript/countDistinctElements';
import { totalStudent } from './Ecmascript/calculateTotal';

function App() {
  let Tab = [];
  let currentId = 0;
  Tab.push({ name: 'acil', age: 20, city: 'Paris' });
  Tab.push({ name: 'nour', age: 11, city: 'Tunis' });
  Tab.push({ name: 'rahma', age: 60, city: 'London' });
  Tab.unshift({ name: 'khitem', age: 50, city: 'Spain' });
  Tab.forEach(obj => obj.id = ++currentId);
  Tab[0].id = ++currentId;

  let result = look(Tab, 3);
  console.log(result);

   const words = ['hi', 'home', 'class', 'eat'];
   const results = findLongestWord(words);
   console.log(results);


   const input = [['bed', 'table', 'door'], ['window', 'tap']];
   const counts = countDistinctElements(input);
   console.log(counts);


   const marks = [10, 55, 31, 20, 15, 14];
   const total = totalStudent(marks);
   console.log(total); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

