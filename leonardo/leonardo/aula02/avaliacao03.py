"""print("=== Calculadora Simples ===") 
print("Escolha a operação") 
print("1 - Soma") 
print("2 - Subtração") 
print("3 - Multiplicação") 
print("4 - Divisão") 

opcao = input("Digite a opção (1/2/3/4): ") 

n1 = float(input("Digite o primeiro número: ").replace(",", ".")) 
n2 = float(input("Digite o segundo número: ").replace(",", ".")) 

if opcao == "1": 
    result = n1 + n2 
    print(f"Resultado: {result:.2f}") 
 
elif opcao == "2": 
    result = n1 - n2 
    print(f"Resultado: {result:.2f}") 

elif opcao == "3": 
    result = n1 * n2  
    print(f"Resultado: {result:.2f}") 

elif opcao == "4": 
    if n2 != 0: 
        result = n1 / n2 
        print(f"Resultado: {result:.2f}") 
    else: 
        print("Erro: Divisão por 0") 

else:
    print("Opção inválida")"""


start = True
campo = 1

while start:
    match campo:
        case 1:
            try:
                n1 = float(input("Digite o primeiro número: ").replace(",", "."))
                campo += 1
            except:
                print("Valor inválido.... Por favor tente novamente!\n")
        
        case 2:
            try:

                oper = str(input("Digite um operador: "))
                if oper == "*":
                    campo += 1

                elif oper == "/":
                    campo += 1

                elif oper == "+":
                    campo += 1

                elif oper == "-":
                    campo += 1
                else:
                    print("Operador inválido... Digite um operador válido!\n")
                
            except:
                print("Operador inválido.... Por favor tente novamente!\n")

        case 3:
            try:
                n2 = float(input("Digite o primeiro número: ").replace(",", "."))
                start = False
            except:
                print("Valor inválido.... Por favor tente novamente!\n")


"""while start:
    match oper:
        case "*":
            result = n1 * n2

        case "/":
            result = n1 / n2
            
        case "+":
            result = n1 + n2
            
        case "-":
            result = n1 - n2
        
        case _:
            print("Operador inválido... Digite um operador válido!\n")"""