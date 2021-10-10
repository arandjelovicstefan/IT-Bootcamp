import PrihodRashod from './PriohodRashod';

const Visual = ({ pr, setPr }) => {
   return (
      <>
         {pr.map(pr => (
            <PrihodRashod key={pr.id} pr={pr} setPr={setPr} />
         ))}
      </>
   );
};

export default Visual;
