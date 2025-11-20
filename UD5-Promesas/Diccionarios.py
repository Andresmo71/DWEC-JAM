dict1={"nombre":"Jose Andres" , "edad":57 , "activo":True}
dict2=dict(color="azul" , modelo="Candy" , submodelo="Outdoor" , motor=2.0)
print(dict1)
print(dict2)

dict3={24:"Charcu" , 26:"pesca" , 28:"Bar el Torrezno"}
print(dict3)
print()

#Acceso:
print(dict3[26])
print(dict2["modelo"])
print(dict2.get("motor","Esa clave no existe"))
print()

#Recorrer
for elemento in dict3: #Recorre la clave
    print(elemento)
print()

for elemento in dict3: #Recorre el valor
    print(dict3[elemento])
print()

for elemento in dict3: #Recorre la clave y el valor
    print(elemento,dict3[elemento])

print()

print(list(dict2.keys()))
print(list(dict2.values()))
print(list(dict2.items()))

print()

dict3[30]="Peluqueria Canina el galgo" #Añadir clave nueva con un valor
print(list(dict3.items()))

#Unir
dict4={"activo":False, "dni":"03853672R" , "telefono":677455123}
dict1.update(dict4)
print(list(dict1.items()))

#Borrar

#dict1.clear()
#print(dict1)

dict1.pop("edad")
print(dict1)

valor=dict1.popitem()
print(valor)
dict1.popitem()
print(dict1)
