<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Marisa</title>

    <script type="text/javascript" src="js/jquery_4_0.js"></script>
    <script type="text/javascript" src="js/login.js"></script>

    <link rel="stylesheet" href="css/config_ini.css">
    <link rel="stylesheet" href="css/login.css">
</head>
<body>

    <?php include("includes/topo.php");?>
    
    <div class="login">
        <form action="" method="" class="formulario">
            <h3>Faça seu Login</h3>
            <label>E-mail ou CPF</label>
            <input type="text" name="login" placeholder="Informe seu E-mail ou CPF" class="inp_login" id="log_id">


            <label>Senha *</label>
            <input type="password" name="senha" placeholder="Informe senha" class="inp_login" id="senha_id">

            <a href="" class="link_esqueceu">Esqueceu sua senha?</a>

            <input type="submit" value="Entrar" class="bt_entrar" onclick="enviarDadosLogin();">

            <div class="cadastro">
            <b>Ainda não tem um cadastro? <a href="cadastro.php">Crie sua conta</a></b>
            </div>
        </form>
    </div>

    <?php include("includes/rodape.php");?>

</body>
</html>