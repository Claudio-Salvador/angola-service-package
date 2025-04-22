import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import formatarKwanza from '../util/formatcoin.js';
import { feriados, verificarFeriado } from "../util/holiday.js";
import {validarIBANAngolano} from '../util/validaiban.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loadJson = async (path) => {
    const data = await readFile(path, 'utf8');
    return JSON.parse(data);
};

const angolaService = async () => {
    const provincias = await loadJson(join(__dirname, '../data/provincias.json'));
    const operadoras = await loadJson(join(__dirname, '../data/operadoras.json'));
    const bancos = await loadJson(join(__dirname, '../data/bancos.json'));
    const times = await loadJson(join(__dirname, '../data/times.json'));
    const hospitais = await loadJson(join(__dirname, '../data/hospitais.json'));
    const continente = await loadJson(join(__dirname, '../data/paises-code.json'));


    return {
        provincias: provincias.provincias,
        operadoras: operadoras.operadoras,
        bancos: bancos.bancos,
        times: times.times,
        hospitais: hospitais.hospitais,
        continentes: continente,
        africa: continente.africa,
        america: continente.americas,
        asia: continente.asia,
        europa: continente.europa,
        oceania: continente.oceania,
        formatarKwanza: (valor) => formatarKwanza(valor),
        feriados: (ano) => feriados(ano),
        verificarFeriado: (data) => verificarFeriado(data),
        validarIBANAngolano: (iban) => validarIBANAngolano(iban)
    };
};

export default angolaService;



