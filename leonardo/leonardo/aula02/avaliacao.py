"""start = True
campo = 1

while start:
    if campo == 1:
        try:
            nome = str(input("Digite seu nome completo: "))
            nome_formatado = nome.title()
            campo +=1
        except:
            print("Você utilizou números ou caracteres!")

    if campo == 2:
        try:
            idade = int(input("Digite sua idade: "))
            campo +=1
        except:
            print("Erro! Você não digitou um número.")

    if campo == 3:
        try:
            peso = float(input("Digite seu peso: ").replace(",","."))
            start = False
        except:
            print("Erro! Você não digitou um número")

print(f"Seu nome completo {nome_formatado}.\n")
print(f"Sua idade é {idade} anos.\n")
print(f"Seu peso é de {peso} Kg.")"""

start = True
campo = 1

while start:
    match campo:
        case 1:
            try:
                nome = (input("Digite seu nome completo: "))
                if nome.replace(" ", "").isalpha():
                    nome_formatado = nome.title()
                    campo +=1
                else:
                    print("São aceito apenas letras.... Digite novamente!")
            except:
                print("Você utilizou números ou caracteres!")

        case 2:
            try:
                idade = int(input("Digite sua idade: "))
                campo +=1
            except:
                print("Erro! Você não digitou um número.")

        case 3:
            try:
                peso = float(input("Digite seu peso: ").replace(",","."))
                start = False
            except:
                print("Erro! Você não digitou um número")

print(f"Seu nome completo {nome_formatado}.\n")
print(f"Sua idade é {idade} anos.\n")
print(f"Seu peso é de {peso} Kg.")