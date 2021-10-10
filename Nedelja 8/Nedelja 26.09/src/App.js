import { useState } from 'react';
import Form from './Components/Form';
import Visual from './Components/PrihodRashodVisual';
import Budzet from './Components/Budzet';

const App = () => {
   const [prihod, setPrihod] = useState([]);
   const [rashod, setRashod] = useState([]);

   return (
      <div>
         <h3>Dostupan budzet u Oktobru 2021:</h3>
         <Budzet prihod={prihod} rashod={rashod} setPrihod={setPrihod} setRashod={setRashod} />
         <Form prihod={prihod} setPrihod={setPrihod} rashod={rashod} setRashod={setRashod} />
         <Visual pr={prihod} setPr={setPrihod} />
         <Visual pr={rashod} setPr={setRashod} />
      </div>
   );
};

export default App;
