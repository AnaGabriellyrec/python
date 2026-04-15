linha1 = input().strip()
linha2 = input().strip()

clientes_projeto1 = set(linha1.split()) if linha1 else set()
clientes_projeto2 = set(linha2.split()) if linha2 else set()

exclusivos = clientes_projeto1.symmetric_difference(clientes_projeto2)

if exclusivos:
    print(' '.join(sorted(exclusivos)))
else:
    print("Nenhum")