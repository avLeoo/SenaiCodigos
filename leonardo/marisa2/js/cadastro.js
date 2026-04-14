function mostraPj(id){
    //$(".form1").fadeOut("slow");
    $(".form1").hide();
    $(".form1_1").show();

    $(".termo_cpf").hide();
    $(".termo_cnpj").show();
}

function mostraPf(){
    $(".form1_1").hide();
    $(".form1").show();

    $(".termo_cnpj").hide();
    $(".termo_cpf").show();
}