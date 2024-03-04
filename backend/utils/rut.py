from itertools import cycle


def validaRut(rut):
    rut = rut.strip().replace('.', '')
    rut_dict = rut.split('-')
    reversed_digits = map(int, reversed(str(rut_dict[0])))
    factors = cycle(range(2, 8))
    s = sum(d * f for d, f in zip(reversed_digits, factors))
    digito_verificador = (-s) % 11 if (-s) % 11 < 10 else 'K'
    if int(digito_verificador) == int(rut_dict[1]):
        return rut_dict
    else:
        return None
