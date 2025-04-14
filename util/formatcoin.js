export default function formatarKwanza(valor) {
    return new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA'
    }).format(valor);
}
