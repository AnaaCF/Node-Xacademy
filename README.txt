Para logear un usuario dirigirse a:  /login
    -Ingeresan con userName y password
    -usuario predeterminado: 
        "userName": "admin"
        "password":"admin"
Para trabajar con una base de datos de prueba hacer un POST a /crear: 
    -Carga de  usuarios /crear/user, *
    -Carga de librerías /crear/library, *
    -Carga de libros /crear/book *

Para trabajar con LIBRERÍAS dirigirse a: /library
    -Se puede realizar una consulta get por id de la librería **
    -Se puede realizar una consulta get de todas las librerías o filtrar ** la busqueda por:
                    name,
                    location,
                    estado: (EXISTENTE o ELIMINADO) 
    -Se pude hacer un POST a librery cargando los datos: *
        name,
        location,
        telefono,
        estado (por defecto inicia con "EXISTENTE")
    -Se puede hacer un DELETE a library por id *
    -Se puede hacer un PUT a library por id *

Para trabajar con LIBROS dirigirse a: /book
    -Se puede realizar una consulta GET por id de un libro **
    -Se puede realizar una consulta GET de todos los libros o filtrar la busqueda por: **
                    titulo,
                    autor,
                    isbn,
                    library,
                    estado: (EXISTENTE o ELIMINADO) 
    -Se pude hacer un POST ** a librery cargando los datos: *
        name,
        location,
        telefono,
        estado (por defecto inicia con "EXISTENTE")
    -Se puede hacer un DELETE a book por id *
    -Se puede hacer un PUT a book por id *

Para trabajar con USUARIOS dirigirse a: /user
    -Se puede realizar una consulta GET por id de un usuario *
    -Se puede realizar una consulta GET de todos los usuarios o filtrar la busqueda por:*
                    userName,
                    email,
                    estado: (EXISTENTE o ELIMINADO) 
    -Se pude hacer un POST a user cargando los datos: 
        userName,
        nombre,
        apellido,
        email,
        password,
        estado (por defecto inicia con "EXISTENTE")
    -Se puede hacer un DELETE a user por id *
    -Se puede hacer un PUT a user por id *

NOTAS: 
    * Solo el usuario admin puede realizar esta acción.
    
PARA PODER REALIZAR CONSULTAS EL USUARIO DEBE ESTAR LOGEADO PREVIAMENTE
    