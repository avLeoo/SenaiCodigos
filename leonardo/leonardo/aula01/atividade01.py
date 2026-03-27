#FAÇA A ENTRADA DOS SEUS DADOS
nome = input("Digite o seu nome: ")
idade = int(input("Digite a sua idade: "))
peso = float(input("Digite o seu peso: ").replace(",","."))

#RESULTADO
print(f"O seu nome é {nome}.")
print(f"Sua idade é de {idade} anos.")
print(f"O seu peso é de {peso} Kg.")
