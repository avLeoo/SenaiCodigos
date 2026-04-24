function mascaraData(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 8){
        valor = valor.slice(0, 8);              // Limita até 8 digitos.
    }

    // Aplicando formatação no padrão dd/mm/yyyy.
    if(valor.length >= 5){
        // Insere a segunda barra à partir da digitação do 5 digito.
        campo.value = valor.replace(/^(\d{2})(\d{2})(\d{1,4})$/, "$1/$2/$3"); 
    }else if(valor.length >= 3){
        // Insere a primeira barra à partir da digitação do 3 digito.
        campo.value = valor.replace(/^(\d{2})(\d{1,2})$/, "$1/$2"); 
    }else{
        campo.value = valor;
    }
}

function mascaraCpf(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 11){
        valor = valor.slice(0, 11);              // Limita até 11 digitos.
    }

    // Aplicando formatação no padrão 000.000.000-00.
    if(valor.length >= 10){
        // Insere os dois pontos e o traço à partir da digitação do 10 digito.
        campo.value = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4"); 
    }else if(valor.length >= 7){
        // Insere os pontos à partir da digitação do 7 digito.
        campo.value = valor.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
    }else if(valor.length >= 4){
        // Insere os pontos à partir da digitação do 4 digito.
        campo.value = valor.replace(/^(\d{3})(\d{1,3})$/, "$1.$2"); 
    }else{
        campo.value = valor;
    }
}

function mascaraDdd(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); 
    if(valor.length > 2){
        valor = valor.slice(0, 2);
    }

    if(valor.length >= 1){
        campo.value = valor.replace(/^(\d{1,2})$/, "($1)"); 
    }else{
        campo.value = valor;
    }
}

function mascaraCel(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, "");
    if(valor.length > 8){
        valor = valor.slice(0, 8);
    }

    if(valor.length >= 5){
        campo.value = valor.replace(/^(\d{4})(\d{1,4})$/, "$1 - $2"); 
    }else if(valor.length >= 3){
        campo.value = valor.replace(/^(\d{1,4})$/, "$1"); 
    }else{
        campo.value = valor;
    }
}

function mascaraCnpj(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, "");
    if(valor.length > 14){
        valor = valor.slice(0, 14);
    }

    if(valor.length >= 13){
        campo.value = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$/, "$1.$2.$3/$4-$5"); 
    }else if(valor.length >= 9){
        campo.value = valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4})$/, "$1.$2.$3/$4");
    }else if(valor.length >= 6){
        campo.value = valor.replace(/^(\d{2})(\d{3})(\d{1,3})$/, "$1.$2.$3");
    }else if(valor.length >= 3){
        campo.value = valor.replace(/^(\d{2})(\d{1,3})$/, "$1.$2"); 
    }else{
        campo.value = valor;
    }
}