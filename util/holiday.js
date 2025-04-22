const feriadosFixos = [
    { nome: 'Ano Novo', data: '01-01' },
    { nome: 'Dia do Início da Luta Armada', data: '02-04' },
    { nome: 'Dia da Paz e Reconciliação Nacional', data: '04-04' },
    { nome: 'Dia do Trabalhador', data: '05-01' },
    { nome: 'Dia do Herói Nacional', data: '09-17' },
    { nome: 'Dia dos Finados', data: '11-02' },
    { nome: 'Dia da Independência', data: '11-11' },
    { nome: 'Natal', data: '12-25' },
];

function calcularPascoa(ano) {
    const a = ano % 19;
    const b = Math.floor(ano / 100);
    const c = ano % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mes = Math.floor((h + l - 7 * m + 114) / 31);
    const dia = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(ano, mes - 1, dia);
}

function getFeriadosMoveis(ano) {
    const pascoa = calcularPascoa(ano);
    const carnaval = new Date(pascoa);
    carnaval.setDate(pascoa.getDate() - 47);
    const sextaSanta = new Date(pascoa);
    sextaSanta.setDate(pascoa.getDate() - 2);
    return [
        { nome: 'Carnaval', data: carnaval },
        { nome: 'Sexta-feira Santa', data: sextaSanta },
    ];
}

const cache = {};

export function feriados(ano) {
    if (!cache[ano]) {
        const feriados = [];
        feriadosFixos.forEach(f => {
            const data = `${ano}-${f.data}`;
            feriados.push({ nome: f.nome, data });
        });
        const moveis = getFeriadosMoveis(ano);
        moveis.forEach(m => {
            const data = m.data.toISOString().split('T')[0];
            feriados.push({ nome: m.nome, data });
        });
        cache[ano] = feriados;
    }
    return cache[ano];
}

export function verificarFeriado(data) {
    const ano = data.split('-')[0];
    const listaFeriados = feriados(ano); // Renomeei para evitar confusão
    return listaFeriados.some(f => f.data === data);
}