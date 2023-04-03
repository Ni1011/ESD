const events = require('events');

const eventEmitter = new events.EventEmitter();

const connectHandler = function connected() {
    console.log('Connection established.');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection', () => {
    console.log('Another Connection established.');
});

eventEmitter.emit('connection');

eventEmitter.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

eventEmitter.emit('checkPage', 200, 'ok');

console.log("Finish");