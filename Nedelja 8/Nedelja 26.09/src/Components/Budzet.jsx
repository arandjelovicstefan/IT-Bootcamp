const Budzet = ({ prihod, setPrihoda, rashod, setRashoda }) => {
   let sumPrihod = prihod.map(prihod => Number(prihod.iznos)).reduce((a, b) => a + b, 0);
   let sumRashod = rashod.map(rashod => Number(rashod.iznos)).reduce((a, b) => a + b, 0);
   return (
      <>
         <div>Ukupno: {sumPrihod - sumRashod}</div>
         <div>Prihod: {sumPrihod}</div>
         <div>
            Rashod: {sumRashod} Procenat: {((100 * sumRashod) / sumPrihod).toFixed(2)} %
         </div>
      </>
   );
};

export default Budzet;
