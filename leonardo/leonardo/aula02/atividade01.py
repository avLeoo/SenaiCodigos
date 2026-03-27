""" #Cadastro
cadastro_login = input("Crie seu login: ")
cadastro_senha = input("Crie sua senha: ")

print("\n---- Faça o login ----")

#Entrada 
login = input("Digite seu login: ")
senha = input("Digite sua senha: ")

#Resultado
if login == cadastro_login and senha == cadastro_senha:
    print("Acesso liberado")
else:
    print("Acesso ou senha incorreta") """




#Cadastro
login_correto = "admin"
senha_correta = "1234"

#Entrada do usuário
login = input("Digite o login: ")
senha = input("Digite a senha: ")

#Verificação
if login == login_correto and senha == senha_correta:
        print("Login realizado")
else:
    print("Login incorreto")