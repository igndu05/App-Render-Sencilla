const saludo = require('../saludo');

test('devuelve Hola Render', () => {
    expect(saludo()).toBe('Hola Render');
});