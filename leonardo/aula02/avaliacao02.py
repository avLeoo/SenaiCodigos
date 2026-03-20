"""raio = float(input("Insira o raio da circunferência: ").replace(",","."))

result = 2 * 3.14 * raio

print(f"O cálculo das tubulações resulta em {result:.2f}")"""

"""start = True
campo = 1

while True:
    match campo:
        case 1:
            try:
                raio = float(input("Insira o raio da circunferência: ").replace(",", "."))
                start = False
            except:
                print("Erro! Você deve digitar um número válido.")

        
            result = 2 * 3.14 * raio

            print(f"O cálculo das tubulações resulta em {result:.2f}")"""


start = True

while start:

            try:
                raio = float(input("Insira o raio da circunferência: ").replace(",", "."))
                result = 2 * 3.14 * raio
                print(f"O cálculo das tubulações resulta em {result:.2f}")
                start = False
            except:
                print("Erro! Você deve digitar um número válido.")