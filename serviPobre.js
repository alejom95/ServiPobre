

if(req.url == "/login" {
	///verificar el usuario cuando llaman /login
	verificarUsuario( req, res);
} else {
	paginaPorDefecto(req, res);
}

//lista de usuarios del sistema
var usuarios = [
	{usuarios: "yo", clave: "secreta"},
	{usuario: "tu", clave: "publica"}
];

function verificarUsuario( req, res) {
	// el evento data se ejecuta cuando este completo el content del request
	req.on( 'data', datosListos);

	function datosListos(content) {
		//desseralizar el objeto que viene en content como una cadena
		var usr = JSON.parse(content);
		console.log(usr);
		//buscarlo en la lisya deu usuarios
		if(usuarioExiste(usr.email, usr.clave) ) {
		//encviar la respuesta
		res.writeHead(200, {'content-type': 'text/html'});
		res.end("login correcto");
		}else {
			res.writeHead(401, {'content-type': 'text/html'});
			res.end("usuario incorrecto")
		}

		

	}
}

///buscar en el  vector si el usuario y la clave son correctas

function usuarioExiste(nombre, clave) {
	for (var i = 0; i< usuarios.length; i++) {
		if(usuarios[i].usuario == nombre && usuario[i].clave == clave)
			return true;
	}

	return false;
}