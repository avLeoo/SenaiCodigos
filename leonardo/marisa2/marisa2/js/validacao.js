function validarData(id) {
    let data = document.getElementById(id).value;
    // Verifica o formato básico dd/mm/yyyy
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(data)) {
        return false;
    }

    const partes = data.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    // Verifica intervalo básico de mês e dia
    if (mes < 1 || mes > 12) return false;
    if (dia < 1) return false;

    // Dias por mês
    const diasNoMes = [31, (isBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dia > diasNoMes[mes - 1]) return false;

    return true;
}

function isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Exemplos
console.log(validarData("29/02/2024")); // true (bissexto)
console.log(validarData("31/04/2023")); // false (abril só tem 30 dias)
console.log(validarData("15/13/2023")); // false (mês inválido)
console.log(validarData("01/01/2023")); // true




function validarCPF(id) {
    let cpf = document.getElementById(id).value;
    // Verifica formato xxx.xxx.xxx-xx
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!regex.test(cpf)) {
        return false;
    }

    // Remove pontos e traço
    cpf = cpf.replace(/\D/g, '');

    // Verifica se todos os números são iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    if (digito1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    if (digito2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

// Exemplos
console.log(validarCPF("123.456.789-09")); // false
console.log(validarCPF("529.982.247-25")); // true
console.log(validarCPF("111.111.111-11")); // false



function validarCNPJ(id) {
    let cnpj = document.getElementById(id).value;
    // Verifica formato XX.XXX.XXX/XXXX-XX
    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    if (!regex.test(cnpj)) {
        return false;
    }

    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cnpj)) {
        return false;
    }

    // Validação do primeiro dígito verificador
    let tamanho = 12;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);

    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
        return false;
    }

    // Validação do segundo dígito verificador
    tamanho = 13;
    numeros = cnpj.substring(0, tamanho);

    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
        return false;
    }

    return true;
}

// Exemplos
console.log(validarCNPJ("11.444.777/0001-61")); // true
console.log(validarCNPJ("00.000.000/0000-00")); // false
console.log(validarCNPJ("12.345.678/0001-00")); // false



function validarEmail(id) {
  const email = document.getElementById(id).value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarGenero(){
    if(document.getElementById("gen1_id").checked == false
        && document.getElementById("gen2_id").checked == false
        && document.getElementById("gen3_id").checked == false
    ){
        return false;
    }else{
        return true;
    }
}

function validarNomePf(){
    let nome = document.getElementById(id).value;
    if(nome.length >= 5){
        return true;
    }else{
        return false;
    }
}

function validarToken(id){
    let token = document.getElementById(id).value;
    if(token.length >= 9){
        return true;
    }else{
        return false;
    }
}

function validarSenha(id){
    let senha = document.getElementById(id).value;
    if(senha.length >= 8){
        return true;
    }else{
        return false;
    }
}

function comparaSenhas(){
    let senha = document.getElementById("senha_id").value;
    let cfsenha = document.getElementById("cfsenha_id").value;
    if(senha === cfsenha){
        return true;
    }else{
        return false;
    }
}

function validarTermoPf(id){
    if(document.getElementById(id).checked == true){
        return true;
    }else{
        return false;
    }
}

function validaDddCel(id){
    let dddcel = document.getElementById(id).value;
    if(dddcel.length == 4){
         return true;
    }else{
        return false;
    }
}
    
function validaCel(id){
    let ncelular = document.getElementById(id).value;
    if(ncelular.length == 10){
        return true;
    }else{
        return false;
    }
}

function validaDddTel(id){
    let dddtel = document.getElementById(id).value;
    if(dddtel.length == 4){
        return true;
    }else{
        return false;
    }
}
    
function validaTel(id){
    let ntel = document.getElementById(id).value;
    if(ntel.length == 9){
        return true;
    }else{
        return false;
    }
}

