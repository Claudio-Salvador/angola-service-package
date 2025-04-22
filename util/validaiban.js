const BANCOS_ANGOLA = {
    '0001': 'Banco Nacional de Angola (BNA)',
    '0040': 'Banco Angolano de Investimentos (BAI)',
    '0010': 'Banco de Poupança e Crédito (BPC)',
    '0006': 'Banco de Fomento Angola (BFA)',
    '0055': 'Banco Millennium Atlântico (BPA)',
    '0045': 'Banco Económico (BE)',
    '0060': 'Standard Bank de Angola (SBA)',
    '0052': 'Banco de Negócios Internacional (BNI)',
    '0044': 'Banco Sol (BSOL)',
    '0004': 'Banco Caixa Geral de Angola (BCGA)',
    '0062': 'Banco Valor (BVB)',
    '0005': 'Banco de Comércio e Indústria (BCI)',
    '0047': 'Banco Keve (BKEVE)',
    '0066': 'Banco Yetu (BYETU)',
    '0054': 'Banco de Desenvolvimento de Angola (BDA)',
    '0064': 'Banco Prestígio (BPG)',
    '0018': 'Banco Millennium BIM (BMB)',
    '0043': 'Banco Comercial Angolano (BCA)',
    '0059': 'Banco Comercial do Huambo (BCH)',
    '0057': 'Banco Kwanza Invest (BKI)',
    '0053': 'Banco Angolano de Negócios e Comércio (BANC)',
    '0048': 'Banco BAI Microfinanças (BMF)',
    '0051': 'Banco BIC (BIC)',
    '0067': 'Banco de Investimento Rural (BIR)',
    '0065': 'Banco Mais (MBAIS)',
    '0056': 'Banco VYB África (VTB)',
    '0058': 'Finibanco Angola (FNB)',
    '0063': 'Standard Chartered Bank de Angola (SCBA)',
    '0070': 'Banco de Crédito Sul (BCS)',
    '0069': 'Banco Postal (BPT)',
    '0071': 'Banco da China (BOLCB)'
};

export function validarIBANAngolano(iban) {
    iban = iban.replace(/\s+/g, '').toUpperCase();
    if (!/^AO\d{23}$/.test(iban)) {
        return { valido: false, erro: "Formato inválido. O IBAN angolano deve ter 25 caracteres no formato AOkkXXXXXXXXXXXXXXX." };
    }

    const codigoPais = iban.substring(0, 2);
    const digitosControle = iban.substring(2, 4);
    const numeroConta = iban.substring(4);

    const ibanRearranjado = numeroConta + codigoPais + digitosControle;

    let ibanNumerico = '';
    for (const char of ibanRearranjado) {
        if (/[A-Z]/.test(char)) {
            const valorLetra = char.charCodeAt(0) - 55; // A=10, B=11, etc.
            ibanNumerico += valorLetra.toString();
        } else {
            ibanNumerico += char;
        }
    }

    let resto = 0;
    for (let i = 0; i < ibanNumerico.length; i++) {
        resto = (resto * 10 + parseInt(ibanNumerico[i], 10)) % 97;
    }

    const valido = resto === 1;

    let banco = null;
    if (valido) {
        const codigoBanco = numeroConta.substring(0, 4);
        banco = BANCOS_ANGOLA[codigoBanco] || 'Banco desconhecido';
    }

    return {
        valido: valido,
        ibanFormatado: formatarIBAN(iban),
        banco: banco,
        codigoBanco: valido ? numeroConta.substring(0, 4) : null
    };
}


function formatarIBAN(iban) {
    iban = iban.replace(/\s+/g, '');
    return iban.match(/.{1,4}/g).join(' ');
}