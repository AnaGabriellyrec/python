valor, taxa, minimo = map(int, input().split())

valor_final = valor - taxa

if valor_final >= minimo:
    print("Aprovada")
else:
    print("Recusada")