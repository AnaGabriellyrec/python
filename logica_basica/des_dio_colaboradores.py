from abc import ABC, abstractmethod

class Colaborador(ABC):
    @abstractmethod
    def exibir_info(self):
        pass


class Analista(Colaborador):
    def __init__(self, nome):
        self.nome = nome

    def exibir_info(self):
        return f"Analista: {self.nome}"

nome = input()

analista = Analista(nome)

print(analista.exibir_info())