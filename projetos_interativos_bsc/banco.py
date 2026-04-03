ganhos = []
gastos = []

while True:
    print("\n1 - Adicionar ganho")
    print("2 - Adicionar gasto")
    print("3 - Ver saldo")
    print("4 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        valor = float(input("Digite o valor do ganho: "))
        ganhos.append(valor)
        print("Ganho adicionado com sucesso!")
    elif opcao == "2":
        valor = float(input("Digite o valor do gasto "))
        gastos.append(valor)
        print("Gasto adicionado com sucesso!")
    elif opcao == "3":
        total_ganhos = sum(ganhos)
        total_gastos = sum(gastos)
        saldo = total_ganhos - total_gastos

        print(f"Total de ganhos: {total_ganhos}")
        print(f"Total de gastos: {total_gastos}")
        print(f"Saldo atual: {saldo}")

    elif opcao == "4":
        print("Saindo do sistema...")
        break

    else:
        print("Opção inválida. Por favor, tente novamente.")
