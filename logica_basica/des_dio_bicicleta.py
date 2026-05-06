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


    def __str__(self):
        return f"Bicicleta: cor = {self.cor}, modelo = {self.modelo}, ano = {self.ano}, valor = {self.valor}"

b1 = Bicicleta("Rosa", "Caloi", 2026, 500)
print(b1)
#b1.buzinar()
#b1.correr()
#b1.parar()

#print(f"cor: {b1.cor}")
#print(f"modelo: {b1.modelo}")
#print(f"ano: {b1.ano}")
#print(f"valor: {b1.valor}")

b2 = Bicicleta("Azul", "Monark", 2025, 400)
print(b2)