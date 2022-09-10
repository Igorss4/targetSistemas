var sp = {estado:"São Paulo", valorFaturamento:67836.43, porcentagem:0};
var rj = {estado:"Rio de Janeiro", valorFaturamento:36678.66, porcentagem:0};
var mg = {estado:"Minas Gerais", valorFaturamento:29229.88, porcentagem:0};
var es = {estado:"Espirito Santo", valorFaturamento:27165.48, porcentagem:0};
var outros = {estado:"Outros", valorFaturamento:19849.53, porcentagem:0};

var faturamentos = {sp, rj, mg, es, outros}
var valorTotal= sp.valorFaturamento+rj.valorFaturamento+
                mg.valorFaturamento+es.valorFaturamento+outros.valorFaturamento;

function calculoPorcentagem(){
    sp.porcentagem = parseFloat((sp.valorFaturamento*100)/valorTotal).toFixed(2)
    rj.porcentagem = parseFloat((rj.valorFaturamento*100)/valorTotal).toFixed(2)
    mg.porcentagem = parseFloat((mg.valorFaturamento*100)/valorTotal).toFixed(2)
    es.porcentagem = parseFloat((es.valorFaturamento*100)/valorTotal).toFixed(2)
    outros.porcentagem = parseFloat((outros.valorFaturamento*100)/valorTotal).toFixed(2)
    // return `O estado de: ${sp.estado[0]}, representa a porcentagem de ${sp.porcentagem}%`
}

calculoPorcentagem()
console.log(faturamentos);