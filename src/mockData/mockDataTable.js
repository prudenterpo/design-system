export const docTableHead = [
  "Tipo de consulta",
  "CPF ou CNPJ",
  "Tipo de produtor",
  "Agroindústria",
  "Produto",
  "Garantia",
  "Cultura",
  "Finalidade",
  "Modalidade",
  "Id_controle_taxa"
];

export const filterFieldData = [ 
  ['Presignup', 'Portifólio'],
  ['textInput'],
  ['F', 'J'],
  [ 'Avenorte','Bello', 'Coopeavi', 'Pluma', 'Plusval', 'Vigor'],
  ['Adequação', 'Custeio'],
  ['Tipo de garantia 1', 'Tipo de garantia 2'],
  ['Frango de corte', 'Leite', 'Suinocultura', 'Café', 'Cana-de-açúcar'],
  ['Finalidade 1', 'Finalidade 2'],
  ['Modalidade 1', 'Modalidade 2'],
  ['textInput']
];

export const mockData = [
  {
    portifolio_or_presignup: "Presignup",
    cpfOrCnpj: "23434565789",
    typeOfPerson: "F",
    agroindustry: "Coopeavi",
    product: "Custeio",
    guarantees: "Tipo de garantia 1",
    production: "Frango de corte",
    destination: "Finalidade 1",
    modality: "Modalidade 1",
    id_tax: "2342"
  },
  {
    portifolio_or_presignup: "Portifólio",
    cpfOrCnpj: "23434565789",
    typeOfPerson: "F",
    agroindustry: "Coopeavi",
    product: "Custeio",
    guarantees: "Tipo de garantia 1",
    production: "Frango de corte",
    destination: "Finalidade 1",
    modality: "Modalidade 1",
    id_tax: "2342"
  },
]; 