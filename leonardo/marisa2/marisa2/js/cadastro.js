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

if(validarNomePf("nome_id")) {
    
    var nome = document.getElementById("nome_id").value;
    var dtnasc = document.getElementById("dtnasc_id").value;
    var cpf = document.getElementById("cpf_id").value;
    var genero;
    if (document.getElementById("gen1_id").checked) {
        genero = document.getElementById("gen1_id").value;
    } else if (document.getElementById("gen2_id").checked) {
        genero = document.getElementById("gen2_id").value;
    } else if (document.getElementById("gen3_id").checked) {
        genero = document.getElementById("gen3_id").value;
    }
    var dddcel = document.getElementById("dddcel_id").value;
    var ncelular = document.getElementById("ncel_id").value;
    var dddtel = document.getElementById("dddtel_id").value;
    var ntel = document.getElementById("ntel_id").value;
    var email = document.getElementById("email_id").value;
    var token = document.getElementById("token_id").value;
    var senha = document.getElementById("senha_id").value;
    var cfsenha = document.getElementById("cfsenha_id").value;
    var termo = document.getElementById("validacao_id").value;

    enviaDadosPf(nome, dtnasc, cpf, genero);

    }
}


function enviaDadosPf(nome, dtnasc, cpf, genero, dddcel, ncelular, dddtel, ntel, email, token, senha){
	
    $.ajax({
        url: 'http://localhost/marisa2/classes/process_cadastroPf.php',
        type: 'post',
        dataType: 'html',
        data: {nome: nome, dtnasc: dtnasc, cpf: cpf, genero: genero, dddcel: dddcel, ncelular: ncelular, dddtel: dddtel, ntel: ntel, email: email, token: token, senha: senha},
        beforeSend : function(){
    
        },
        success: function(result){
            $("#retornoCpf").html(result);
        },
        error: function(result){
            $("#retornoCpf").html(result);
        },
    });
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