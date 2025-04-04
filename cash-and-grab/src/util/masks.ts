const phoneMask = (value: string) =>
  value.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{0,4})$/, '+$1 $2-$3');
// .replace(/(\d{4})(\d)/, '($1) $2')
// .replace(/(\d{7})(\d)/, '$1-$2');

export { phoneMask };
