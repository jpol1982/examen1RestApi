
# EXAMEN 1

-	Desarrollar el modulo gestión de medicamentos donde se pueda leer, registrar, modificar, eliminar (CRUD) implementando una APIREST.




## ESTRUCTURA EN MONGODB
MEDICAMENTO JSON
```http
{
    "codMedicamento": "cod-001",
    "nombreMedicamento": "pironalFlu",
    "cantidad": 5,
    "idPosicion": "A1",
    "posicionX": 10,
    "posicionY": 10,
    "ancho": 8,
    "disponible": "NO"
  }
```


## APIREST
MODULOS DE MEDICAMENTOS

http://localhost:8000/medicamento

#### endpoint 1 : GET /listado -> lista de todos los medicamentos y su posicion
```http
  GET /listado
```


#### endpoint 2 : GET /buscar/:codMedicamento -> busca el medicamento mediante su codigo en el listado
```http
  GET /buscar/:codMedicamento
```

#### endpoint 3 : GET /ordenarPorNombreMedicamento -> ordena ascendentemente los medicamentos por nombre dentro del listado 
```http
  GET /ordenarPorNombreMedicamento
```

#### endpoint 4 : POST /agregar -> agrega dentro del listado de medicamentos
```http
  POST /agregar
```

#### endpoint 5 : PUT /editar/:codMedicamento -> edita las variables de los medicamentos mediante el codigo del medicamento
```http
  PUT /editar/:codMedicamento
```

#### endpoint 6 : PUT /incrementarCantidad/:codMedicamento/:cantidad -> modifica la cantidad que se tiene de un medicamento mediante su codigo de medicamento
```http
  PUT /incrementarCantidad/:codMedicamento/:cantidad
```

#### endpoint 7 : DELETE /:codMedicamento -> elimina del listado el medicamento mediante su codigo de medicamento
```http
  DELETE /eliminar/:codMedicamento
```

