

let socket = io();
socket.on('connect', () => {
    console.log('Conectado con el servidor');
});

// Escuchar
socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'David',
    mensaje: 'Hola mundo'
}, (respuesta) => {
    console.log('Respuesta server: ',respuesta);
});

// Escuchar infomación
socket.on('enviarMensaje', (mensaje) => {
    console.log('Mensaje del servidor:', mensaje);
});