class Bicicleta:
    def __init__(self, cor, modelo, ano, valor):
        self.cor = cor
        self.modelo = modelo
        self.ano = ano
        self.valor = valor

    def buzinar(self):
        print("bi bi bi bi")

    def parar(self):
        print("Sinal vermelho")
        print("A bicicleta parou")

    def correr(self):
        print("Vruuuuuuuuuuuum")

b1 = Bicicleta("Rosa", "Caloi", 2026, 500)
b1.buzinar()
b1.correr()
b1.parar()

print(f"cor: {b1.cor}")
print(f"modelo: {b1.modelo}")
print(f"ano: {b1.ano}")
print(f"valor: {b1.valor}")

b2 = Bicicleta("Azul", "Monark", 2025, 400)
b2.buzinar()
b2.parar()