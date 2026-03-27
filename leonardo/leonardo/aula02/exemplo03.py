"""while True:

    try:
        idade = int(input("Digite sua idade em anos: "))
        print("Idade digitada corretamente")
        break
    except:
        print("Valor informado é inválido!")"""


start = True

while start:
    try:
        idade = int(input("Digite sua idade em anos: "))
        print ("Idade digitada corretamente")
        start = False
    except:
        print("Valor informado é inválido")