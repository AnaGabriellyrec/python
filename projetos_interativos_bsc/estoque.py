estoque = []

while True:
    print("\n1 - Adicionar produto")
    print("2 - Remover produto")
    print("3 - Ver estoque")
    print("4 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        produto = input("Digite o nome do produto: ").strip().lower()

        if produto == "":
            print("Não é permitido adicionar produto vazio.")
        else:
            estoque.append(produto)
            print("Produto adicionado com sucesso!")

    elif opcao == "2":
        produto = input("Digite o nome do produto a ser removido: ").strip().lower()

        if produto in estoque:
            estoque.remove(produto)
            print("Produto removido com sucesso!")
        else:
            print("Produto não encontrado no estoque.")

    elif opcao == "3":
        if len(estoque) == 0:
            print("Estoque vazio.")
        else:
            print("Estoque atual:")
            for i, item in enumerate(estoque, start=1):
                print(f"{i} - {item}")

    elif opcao == "4":
        print("Saindo...")
        break

    else:
        print("Opção inválida. Por favor, escolha uma opção válida.")