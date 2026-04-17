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
