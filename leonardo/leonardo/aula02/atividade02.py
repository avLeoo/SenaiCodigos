selecao = str(input("Digite uma seleção: "))

match selecao:
    case "Brasil":
        print("Penta Campeão")
    case "Alemanha":
        print("Tetra Campeão")
    case "Argentina":
        print("Tri Campeão")
    case _:
        print("Nenhuma seleção válida")
