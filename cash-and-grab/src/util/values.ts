const genderValues = [
  { id: 1, label: 'Masculino', value: 'masc' },
  { id: 2, label: 'Feminino', value: 'fem' },
  { id: 3, label: 'Outro', value: 'other' },
];

const cardsHomePage = [
  {
    id: 1,
    type: 'category',
    title: 'categorias',
  },
  {
    id: 2,
    type: 'product',
    title: 'em promoção',
  },
  {
    id: 3,
    type: 'product',
    title: 'recentes',
  },
];

const query = {
  limit: '5',
  offset: '0',
};

export { genderValues, cardsHomePage, query };
