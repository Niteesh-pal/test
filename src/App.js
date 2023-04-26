// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App(){
  const [age,setAge] = useState(0);

  const [sib,setSib] = useState(0);

  const updateAge= ()=>{
    setAge(age+1);
    alert("age is "+ (age+1))
  }
  const updateSib = ()=>{
    setSib(sib+1);

  }

  return (<>

  <h1>Niteesh kumar pal</h1>

    <h1 className='style'>
      age is {age}
    </h1>
    <h2 className='style'>sib is{sib}</h2>
    <button className='style' onClick={updateAge}>age</button>
    <button className='style' onClick={updateSib}>sib</button>
  </>);
}

export default App;




// function App() {
//   const [query, setQuery] = useState("");
//   const fruits = ["apple", "banana", "orange", "kiwi", "pineapple"];
  
//   const handleQueryChange = (event) => {
//   setQuery(event.target.value);
//   };
  
//   const filteredFruits = fruits.filter((fruit) =>
//   fruit.toLowerCase().includes(query.toLowerCase())
//   );
  
//   return (
//   <div className='style'>
//   <input type="text" value={query} onChange={handleQueryChange} />
//   <ul>
//   {filteredFruits.map((fruit) => (
//   <li className='licon' key={fruit}>{fruit} </li>
//   ))}
//   </ul>
//   </div>
//   );
// }
// export default App;
