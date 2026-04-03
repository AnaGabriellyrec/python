estoque = []
produto = ""

while True:
    print("\n1 - Adicionar produto")
    print("2 - Remover produto")
    print("3 - Ver estoque")
    print("4 - Sair")

    opcao = input("Escolha uma opção: ")
    if opcao == "1":
        produto = input("Digite o nome do produto: ")
        estoque.append(produto)
        print("Produto adicionado com sucesso!")

    elif opcao =="2":
        produto = input("Digite o nome do produto a ser removido: ")
        if produto in estoque:
            estoque.remove(produto)
            print("Produto removido com sucesso!")
        else:
            print("Produto não encontrado no estoque.")
    elif opcao == "3":      
        print("Estoque atual:")
        for item in estoque:
            print(f"- {item}")
    elif opcao == "4":
        print("Saindo...")
        break
    else:
        print("Opção inválida. Por favor, escolha uma opção válida.")