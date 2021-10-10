const PrihodRashod = ({ pr, setPr }) => {
   return (
      <>
         <p>
            Opis: {pr.text}
            <br />
            Iznos: {pr.iznos}
            <br />
            {pr.procenat}
         </p>
         <button
            onClick={() => {
               setPr(prev => {
                  let copy = [...prev];
                  let index = copy.findIndex(el => el.id === pr.id);
                  copy.splice(index, 1);
                  return copy;
               });
            }}
         >
            Delete
         </button>
      </>
   );
};

export default PrihodRashod;
