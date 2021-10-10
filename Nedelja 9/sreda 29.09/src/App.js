import { useState } from 'react';

const App = () => {
   const [sum, setSum] = useState(0);
   const [number, setNumber] = useState(0);
   const [sumP, setSumP] = useState('');
   return (
      <div>
         <input value={sum} disabled />
         <input
            type='number'
            value={number}
            onChange={e => {
               setNumber(e.target.value);
            }}
         />
         <button
            onClick={() => {
               setSum(Number(sum) + Number(number));
               setSumP(sumP + '+' + number);
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               setSum(Number(sum) - Number(number));
               setSumP(sumP + '-' + number);
            }}
         >
            -
         </button>
         <button
            onClick={() => {
               setSum(Number(sum) * Number(number));
               setSumP(sumP + '*' + number);
            }}
         >
            *
         </button>
         <button
            onClick={() => {
               setSum(Number(sum) / Number(number));
               setSumP(sumP + '/' + number);
            }}
         >
            /
         </button>
         <button
            onClick={() => {
               setSum(0);
               setNumber(0);
               setSumP('');
            }}
         >
            Clear
         </button>
         <br />
         <p>{sumP}</p>
      </div>
   );
};

export default App;
