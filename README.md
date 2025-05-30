

# Angola Service Package

A comprehensive package containing essential data about various services and information from Angola.

## Features

- **Provinces**: Complete list of Angolan provinces with details
- **Mobile Operators**: Major telecommunications companies
- **Banks**: Banking institutions operating in Angola
- **Sports Teams**: Main football teams
- **Hospitals**: Healthcare facilities across the country
- **Currency Formatter**: Utility to format values in Kwanza (AOA)
- **Countries**: list of countries with details about , continent,capital ,region, subregion, languages, etc.
- **Holidays**: List of Angolan national holidays (fixed and movable) and utility to check if a date is a holiday
- **Validate IBAN**: Utility to validate IBAN numbers

## Installation

```bash
npm install angola-service-package

```
## Usage

```
import angolaService from 'angola-service-package';
// Get all data
const data = await angolaService();

// Access specific data
(async () => {
    const { provincias, operadoras, bancos, times, hospitais,continentes } = await angolaService();

    console.log(provincias);
})();



```
### Provinces Data

```
const { provincias } = await angolaService();

// Get all provinces
console.log(provincias);

// Get specific province
const luanda = provincias.find(p => p.nome === 'Luanda');
```
### Mobile Operators

```const { operadoras } = await angolaService();
// Get all operators
console.log(operadoras);

// Filter by prefix
const unitel = operadoras.find(op => op.prefixos.includes('99'));`

```
### Banks

```
const { bancos } = await angolaService();

// Get all banks
console.log(bancos);

// Find by SWIFT code
const bai = bancos.find(b => b.swift === 'BAIPAOLU');

```
### Sports Teams

```
const { times } = await angolaService();

// Get all teams
console.log(times);

// Filter teams by city
const luandaTeams = times.filter(t => t.cidade === 'Luanda');

```
### Hospitals
```
const { hospitais } = await angolaService();

// Get all hospitals
console.log(hospitais);

// Filter by type
const publicHospitals = hospitais.filter(h => h.tipo === 'Público');

```

### Currency Formatter

```
const { formatarKwanza } = await angolaService();;
// Format currency
console.log(formatarKwanza(1000)); // Output: 1.000,00 Kz

```
### Continents, contries and other data

```
const { continentes,africa,europa,asia,america,oceania } = await angolaService();;
// Get all continents joined with all contries
console.log(continentes);

// Filter by individual continent join with all contries 
console.log(africa);
const AfricaContries = africa.filter(item => item.paises.Nome === 'angola');

```
### Holidays
```
const { feriados, verificarFeriado } = await angolaService();

// Get all holidays for a specific year
console.log(feriados(2023));

// Check if a date is a holiday
console.log(verificarFeriado('2023-01-01')); // true (Ano Novo)
console.log(verificarFeriado('2023-01-02')); // false

```

### Validate IBAN
```
const { validarIBANAngolano } = await angolaService();

// Validate IBAN
const ibanTeste = "AO06000600009555963930175";
const resultado = validarIBANAngolano(ibanTeste);
console.log(resultado); 
// Resultado:
//{
   //valido: true,
   //ibanFormatado: 'AO06 0006 0000 9555 9639 3017 5',
   //banco: 'Banco de Fomento Angola (BFA)',
   //codigoBanco: '0006'
}//


```






# Data Structure
## Provinces (provincias.json)
```
{
  id: Number,
  nome: String,
  capital: String,
  area: Number,
  populacao: Number,
  municipios: Array
}
```
## Mobile Operators (operadoras.json)
```
{
  id: Number,
  nome: String,
  prefixos: Array,
  website: String,
  tipo: String,
  servicos: Array
}
```
## Banks (bancos.json)
```
{
  id: Number,
  nome: String,
  sigla: String,
  swift: String,
  website: String,
  tipo: String
}
```

## Sports Teams (times.json)
```
{
  id: Number,
  nome: String,
  cidade: String,
  estadio: String,
  fundacao: Number,
  cores: Array
}
```
## Hospitals (hospitais.json)
```
{
  id: Number,
  nome: String,
  tipo: String,
  cidade: String,
  endereco: String,
  especialidades: Array
}
```
	
## Continents (paises-code.json)
```
{
  "africa":{
    "quantidade": int,
    "dimensao_km2": int,
    "populacao_total": int,
    "densidade_demografica": int,
    "maior_pais": string,
    "menor_pais": string,
    "idiomas_mais_falados":Array,
    "moedas_utilizadas": Array,
    "paises": [
      {
        "Nome": string,
        "Sigla":string,
        "indicativo": string,
        "Capital": string,
        "bandeira_url": "https://flagpedia.net/data/flags/h80/<data>.png"
      }
    ]
  },
 ...
}
```
	
## Holidays 
```
{
  nome: String,
  data: String // Format: YYYY-MM-DD
}
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### SEE ALL CONTRIBUTORS

😊 <a href="https://github.com/Claudio-Salvador">Cláudio Fernando</a>
😁 <a href="https://github.com/FranciiscoCampos170">Francisco Campos</a>

## License
MIT

## Author
[Cláudio Fernando]

## Support
If you have any questions or need help, please open an issue in the repository.
https://github.com/Claudio-Salvador/angola-service-package