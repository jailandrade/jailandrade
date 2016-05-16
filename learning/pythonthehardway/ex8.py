# Creando una variable que imprimira cuatro variables
formatter = "%r %r %r %r"

# Imprimiendo la variable 'formatter' y pasando 4 numeros
print formatter % (1, 2, 3, 4)
# Imprimiendo la variable 'formatter' y pasando 4 cadenas
print formatter % ("one", "two", "three", "four")
# Imprimiendo la variable 'formatter' y pasando 4 booleanos
print formatter % (True, False, True, False)
# Imprimiendo la variable 'formatter' y pasando 4 variables
print formatter % (formatter, formatter, formatter, formatter)
# Imprimiendo la variable 'formatter' y pasando 4 cadenas
print formatter % (
    "I had this thing.",
    "That you could type up right.",
    "But it didn't sing.",
    "So I said goodnight."
)
