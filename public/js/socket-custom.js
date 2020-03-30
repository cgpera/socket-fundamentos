var socket = io();

// on = evento para escuchar
socket.on('connect', function() {
    console.log('Conectado al server');
})

socket.on('disconnect', function() {
    console.log('conexión perdida con el servidor');
})

// emit = enviar información
socket.emit('Enviar Mensaje', {
    usuario: 'Claudio',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('Respuesta server: ', respuesta);
});

// on = escucha información del servidor
socket.on('Enviar Mensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})