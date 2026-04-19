def formatar_nome(nome):
    return nome.title()

def validar_email(email):
    if email.count('@') != 1:
        return False
    
    parte = email.split('@')[1]
    
    if '.' not in parte:
        return False
    
    return True

linha = input().strip()

nome, email = linha.split(", ")

nome_formatado = formatar_nome(nome)

if validar_email(email):
    print(f"{nome_formatado} - OK")
else:
    print(f"{nome_formatado} - ERRO")