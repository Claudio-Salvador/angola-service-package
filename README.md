

# Angola Service Package

A comprehensive package containing essential data about various services and information from Angola.

## Features

- **Provinces**: Complete list of Angolan provinces with details
- **Mobile Operators**: Major telecommunications companies
- **Banks**: Banking institutions operating in Angola
- **Sports Teams**: Main football teams
- **Hospitals**: Healthcare facilities across the country
- **Currency Formatter**: Utility to format values in Kwanza (AOA)

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
    const { provincias, operadoras, bancos, times, hospitais } = await angolaService();

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
	


## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
MIT

## Author
[Cláudio Fernando]

## Support
If you have any questions or need help, please open an issue in the repository.