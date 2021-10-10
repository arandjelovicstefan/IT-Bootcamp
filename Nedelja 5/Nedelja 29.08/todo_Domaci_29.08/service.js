const data = [
   {
      id: 1,
      desc: "dsadassaf",
      done: true,
   },
   {
      id: 2,
      desc: "lioljloklj",
      done: false,
   },
   {
      id: 3,
      desc: "bvnv",
      done: true,
   },
   {
      id: 4,
      desc: "ghjkhgjh",
      done: false,
   },
];

const add = item => {
   data.push(item);
};

const deleteById = id => {
   let index = data.findIndex(item => item.id == id);
   data.splice(index, 1);
};

const changeById = (id, noviItem) => {
   let index = data.findIndex(item => item.id == id);
   data.splice(index, 1, noviItem);
};

export { data, add, deleteById, changeById };
