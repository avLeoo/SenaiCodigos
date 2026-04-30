function mostraPj(id){
    //$(".form1").fadeOut("slow");
    $(".form1").hide();
    $(".form1_1").show();

    $(".termo_cpf").hide();
    $(".termo_cnpj").show();
}

function mostraPf(id){
    $(".form1_1").hide();
    $(".form1").show();

    $(".termo_cnpj").hide();
    $(".termo_cpf").show();
}

function enviarDadosCpf(){

    /*if(validarData("dtnasc_id")){
        alert("Data Válida");
    }else{
        alert("Data com erro!");
    }

    if(validarEmail("email_id")){
        alert("E-Mail válido");
    }else{
        alert("E-mail incorreto");
    }

    if(validarGenero()){
        alert("Genêro escolhido");
    }else{
        alert("Escolha um GENÊRO");
    }

    if(validarNomePf("nome_id")){
        alert("Nome válido");
    }else{
        alert("Erro: Digite um nome com no mínimo 5 caracteres!");
    }

    if(validarToken("token_id")){
        alert("Token válido");
    }else{
        alert("Token errado");
    }

    if(validarSenha("senha_id")){
        alert("Senha válido");
    }else{
        alert("Senha errada");
    }

    if(comparaSenhas()){
        alert("Senha são iguais!");
    }else{
        alert("Erro: As senhas não são identicas!");
    }

    if(validarTermoPf("validacao_id")){
        alert("Eu aceito os termos!");
    }else{
        alert("Por favor, clique em aceitar os termos!");
    }

    if(validaDddCel("dddcel_id")){
        alert("DDD correto!");
    }else{
        alert("DDD inválido!");
    }

    if(validaCel("ncel_id")){
        alert("Número de celular correto");
    }else{
        alert("Número de celular incorreto");
    }

    if(validaDddTel("dddtel_id")){
        alert("DDD correto!");
    }else{
        alert("DDD inválido!");
    }

    if(validaTel("ntel_id")){
        alert("Número de teleone correto");
    }else{
        alert("Número de telefone incorreto");
    }*/

if(validarNomePf("nome_id") && validarData("dtnasc_id") && validarCPF("cpf_id")
    && validarCNPJ("cnpj_id") &&validarEmail("email_id") &&validarGenero() && validarToken("token_id") 
    && validarSenha("senha_id") && comparaSenhas() && validarTermoPf("termo_id") && validaDddCel("dddcel_id") 
    && validaCel("ncel_id") && validaDddTel("dddtel_id") && validaTel("ntel_id")
){

    var nome = document.getElementById("nome_id").value;
    var dtnasc = document.getElementById("dtnasc_id").value;
    var cpf = document.getElementById("cpf_id").value;
    var genero1 = document.getElementById("gen1_id").value;
    var genero2 = document.getElementById("gen2_id").value;
    var genero3 = document.getElementById("gen3_id").value;
    var dddcel = document.getElementById("dddcel_id").value;
    var ncelular = document.getElementById("ncel_id").value;
    var dddtel = document.getElementById("dddtel_id").value;
    var ntel = document.getElementById("ntel_id").value;
    var email = document.getElementById("email_id").value;
    var token = document.getElementById("token_id").value;
    var senha = document.getElementById("senha_id").value;
    var cfsenha = document.getElementById("cfsenha_id").value;

    /*if(document.getElementById("gen1_id").checked==true){
        alert("acessado")
    }*/
    alert(nome + " | " + dtnasc + " | " + cpf + " | " + genero1 + " | " + genero2 + " | " + genero3 + " | " + dddcel + " | " + ncelular + " | " + dddtel + " | " + ntel + " | " + email + " | " + token + " | " + senha + " | " + cfsenha);
}

function enviarDadosCnpj(){

    if(validarCNPJ("cnpj_id")){
        alert("CNPJ Válido");
    }else{
        alert("CNPJ Inválido");
    }

    var nome = document.getElementById("nomepj_id").value;
    var responsavel = document.getElementById("responsa_id").value;
    var cnpj = document.getElementById("cnpj_id").value;
    var uf = document.getElementById("uf_id").value;
    var situacao = document.getElementById("sit_id").value;
    var inscricao = document.getElementById("inscriest_id").value;
    var dddcel = document.getElementById("dddcel_pj_id").value;
    var ncelular = document.getElementById("ncel_pj_id").value;
    var dddtel = document.getElementById("dddtel_pj_id").value;
    var ntel = document.getElementById("ntel_pj_id").value;
    var email = document.getElementById("email_id").value;
    var token = document.getElementById("token_id").value;
    var senha = document.getElementById("senha_id").value;
    var cfsenha = document.getElementById("cfsenha_id").value;
    var of1 = document.getElementById("of1_id").value;
    var of2 = document.getElementById("of2_id").value;

    alert(nome + " | " + responsavel + " | " + cnpj + " | " + uf +  " | " + situacao + " | " + inscricao + " | " + dddcel + " | " + ncelular + " | " + dddtel + " | " + ntel + " | " + email + " | " + token + " | " + senha + " | " + cfsenha + " | " + of1 + " | " + of2);
}


function mostraSenha1(id){
    $("#" + id).hide();
    $("#pass_oculta1").show();
    document.getElementById("senha_id").type = "text";
}

function ocultaSenha1(id){
    $("#" + id).show();
    $("#pass_mostra1").hide();
    document.getElementById("senha_id").type = "password";
}

function mostraSenha2(id){
    $("#" + id).hide();
    $("#pass_oculta2").show();
    document.getElementById("cfsenha_id").type = "text";
}

function ocultaSenha2(id){
    $("#" + id).show();
    $("#pass_mostra2").hide();
    document.getElementById("cfsenha_id").type = "password";
}
}