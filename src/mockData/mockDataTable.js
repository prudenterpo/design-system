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

export const COLUMNS = [
  { Header: "Tipo de consulta", accessor: "portifolio_or_presignup"},
  { Header: "CPF ou CNPJ", accessor: "cpf_or_cnpj"},
  { Header: "Tipo de produtor", accessor: "type_of_person"},
  { Header: "Agroindústria", accessor: "agroindustry"},
  { Header: "Produto", accessor: "product"},
  { Header: "Garantia", accessor: "guarantee"},
  { Header: "Cultura", accessor: "production"},
  { Header: "Finalidade", accessor: "destination"},
  { Header: "Modalidade", accessor: "modality"},
  { Header: "Id_controle_taxa", accessor: "id_tax"}
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
    cpf_or_cnpj: "23434565789",
    type_of_person: "F",
    agroindustry: "Coopeavi",
    product: "Custeio",
    guarantee: "Tipo de garantia 1",
    production: "Frango de corte",
    destination: "Finalidade 1",
    modality: "Modalidade 1",
    id_tax: "2342"
  },
  {
    portifolio_or_presignup: "Portifólio",
    cpf_or_cnpj: "23434565789",
    type_of_person: "F",
    agroindustry: "Coopeavi",
    product: "Custeio",
    guarantees: "Tipo de garantia 1",
    production: "Frango de corte",
    destination: "Finalidade 1",
    modality: "Modalidade 1",
    id_tax: "2342"
  },
]; 