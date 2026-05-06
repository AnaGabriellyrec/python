class Robo:
    def __init__(self, nome, tarefa):
        self.nome = nome
        self.tarefa = tarefa

    def apresentar(self):
        return f"Robo {self.nome} executa {self.tarefa}"


def criar_robo(nome, tarefa):
    robo = Robo(nome, tarefa)
    return robo.apresentar()


nome, tarefa = input().split()

print(criar_robo(nome, tarefa))