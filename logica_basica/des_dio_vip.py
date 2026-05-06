class Cliente:
    def __init__(self, nome, email, saldo):
        self.nome = nome
        self.email = email
        self.saldo = saldo

nome = input()
email = input()
saldo = int(input())

cliente = Cliente(nome, email, saldo)

if cliente.saldo >= 1000:
    print("VIP")
else:
    print("REGULAR")