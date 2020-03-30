const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Enviar mensaje al cliente
    client.emit('Enviar Mensaje', { usuario: 'administrador', mensaje: 'Bienvenido a la aplicación' });

    // Escuchar el cliente
    client.on('Enviar Mensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('Enviar Mensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal'
        //     });
        // }

    });

})