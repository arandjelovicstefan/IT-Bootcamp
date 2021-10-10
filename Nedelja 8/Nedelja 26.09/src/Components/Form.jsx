import { nanoid } from 'nanoid';
import { useState } from 'react';

const Form = ({ prihod, setPrihod, rashod, setRashod }) => {
   const [inputText, setInputText] = useState('');
   const [inputIznos, setInputIznos] = useState('');
   const [inputSelect, setInputSelect] = useState('');
   let sumPrihod = prihod.map(prihod => Number(prihod.iznos)).reduce((a, b) => a + b, 0);
   return (
      <>
         <select
            value={inputSelect}
            onChange={e => {
               setInputSelect(e.target.value);
            }}
         >
            <option defaultValue='0'>-</option>
            <option value='prihod'>Prihod</option>
            <option value='rashod'>Rashod</option>
         </select>
         <input
            placeholder={'Opis'}
            value={inputText}
            onChange={e => {
               setInputText(e.target.value);
            }}
         />
         <input
            type={'number'}
            placeholder={'Iznos'}
            value={inputIznos}
            onChange={e => {
               setInputIznos(e.target.value);
            }}
         />
         <button
            onClick={() => {
               if (inputSelect === 'prihod') {
                  setPrihod(prev => {
                     return [
                        ...prev,
                        {
                           id: nanoid(),
                           text: inputText,
                           iznos: inputIznos,
                        },
                     ];
                  });
                  setInputText('');
                  setInputIznos('');
                  setInputSelect('0');
               } else if (inputSelect === 'rashod') {
                  setRashod(prev => {
                     return [
                        ...prev,
                        {
                           id: nanoid(),
                           text: inputText,
                           iznos: inputIznos,
                           procenat: ((100 * inputIznos) / sumPrihod).toFixed(2),
                        },
                     ];
                  });
                  setInputText('');
                  setInputIznos('');
                  setInputSelect('0');
               }
            }}
         >
            Add
         </button>
      </>
   );
};

export default Form;
