nome_cliente = input("Digite o seu nome: ")
print(f"Olá {nome_cliente}, seja bem vindo a nossa loja de roupas, segue abaixo o nosso catálogo de produtos: ")

apresentacao = """ 
Seção de produtos:

1 - Cropped.............. R$ 30,00
2 - Calça jeans ......... R$ 75,00
3 - Vestido longo........ R$ 150,00  
4 - Short ............... R$ 250,00
"""
print(apresentacao)

produto = int(input("Digite o número do produto que deseja comprar: "))

if produto == 1:
    valor = 30
    print("Você escolheu o cropped, o valor é R$ 30,00")
elif produto == 2:
    valor = 75
    print("Você escolheu a calça, o valor é R$ 75,00")
elif produto == 3:
    valor = 150
    print("Você escolheu o vestido, o valor é R$ 150,00")
elif produto == 4:
    valor = 250
    print("Você escolheu o short, o valor é R$ 250,00")
else:
    print("Produto inválido.")
    valor = 0 


if valor < 50:
    print("Obrigado por comprar conosco!")
elif valor < 100:
    print("Parabens! Voce ganhou um brinde!")
elif valor < 200:
    print("Desconto de 10 reais aplicado!")
else:
    print("Desconto de 25 reais aplicado!")