"""
IMC menor que 18.5, abaixo do peso 
18.5 - 24.9, peso normal 
25 - 29.9, sobre peso 
30 - 34.9, Obesidade grau I 
35 - 39.9,  Obesidade grau II 
40 ou mais  Obesidade grau III 

print("=== Cálculo de IMC ===") 

peso = float(input("Digite seu peso (kg): ").replace(",", ".")) 
altura = float(input("Digite sua altura (m): ").replace(",", ".")) 
 
imc = peso / (altura ** 2) 

print(f"IMC: {imc:.2f}") 
 
if imc < 18.5:
    print("Classificação: Abaixo do peso") 
 
elif imc < 25:
    print("Classificação: Peso normal") 

elif imc < 30:
    print("Classificação: Sobrepeso") 

elif imc < 35:
    print("Classificação: Obesidade grau I") 

elif imc < 40:
    print("Classificação: Obesidade grau II") 

else:
    print("Classificação: Obesidade grau III")"""

inicio = True
while inicio:

    start = True
    campo = 1

    while start:
        match campo:
            case 1:
                try:
                    nome = str(input("Digite o nome do paciente: "))
                    campo += 1
                except:
                    print("Nome inválido. Por favor, digite novamente\n!")

            case 2:
                try:
                    peso = float(input("Digite o peso do paciente: ").replace(",", "."))
                    campo += 1
                except:
                    print("Peso inválido. Por favor, digite um peso válido!\n")

            case 3:
                try:
                    idade = int(input("Digite a idade do paciente: "))
                    if idade < 20:
                        print("Somente pacientes acima de 20 anos.")
                    else:
                        campo += 1
                except:
                    print("Idade inválida. Por favor, digite uma idade válida!\n")
            
            case 4: 
                try:
                    altura = float(input("Digite a altura do paciente: ").replace(",", "."))
                    start = False
                except:
                    print("Altura inválida. Por favor, digite uma altura válida!\n")

    imc = peso / (altura ** 2)
    classificacao = ""

    if idade >= 60:
        
        if imc < 22:
            classificacao = "Classificação: Abaixo do peso"
        elif imc <= 27:
            classificacao = "Classificação: Peso adequado"
        else:
            classificacao = "Classificação: Sobrepeso"
    else:
        classificacao = "Classificação para Adulto (20 - 59 anos):"
    
        if imc < 18.5:
            classificacao = "Classificação: Abaixo do peso"
        elif imc < 25:
            classificacao = "Classificação: Peso normal"
        elif imc < 30:
            classificacao = "Classificação: Sobrepeso"
        else:
            classificacao = "Classificação: Obesidade"

    print("\n===== RESULTADO =====")
    print(f"Paciente: {nome}")
    print(f"Idade: {idade} anos")
    print(f"IMC: {imc:.2f}")
    print(f"{classificacao}")

finaliza = True
while finaliza:
    print("Deseja finalizar o programa?\n")
    confirma = str(input("Digite S (Finalizar) ou N "))