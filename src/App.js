import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { transactions } from './transactions';

function App() {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState('')

  const handleChange1 = (e) => {
    setStartDate(e.target.value)
  }
  const handleChange2 = (e) => {
    setEndDate(e.target.value)
  }

  const searchTransaction = () => {
    const filterDates = transactions.filter(p => Date.parse(startDate) <  Date.parse(p.date) && Date.parse(p.date) < Date.parse(endDate) )
    setResult(filterDates)
  }

  const resetDate = () => {
    setEndDate('');
    setStartDate('');
  }



  return (
    <>
    <p>Start Date</p>
    <input type='text' value={startDate} onChange={handleChange1}></input>
     <p>End Date</p>
    <input type='text' value={endDate} onChange={handleChange2}></input>
    <button onClick={searchTransaction}>Fund transactions</button>
    <button onClick={resetDate}>Reset DAtes</button>





    <div className="App">
    { transactions.map(t => <div key={t.id}>{`${t.start} - ${t.end}`}</div> ) }
    <p></p>
    <p>Filter Dates</p>
    { result }
    </div>
  </>
  );
}

export default App;
