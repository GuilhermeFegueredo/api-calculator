module.exports = function(server) {

    //Adição
    server.route({
        method: 'GET',
        path: '/calculadora/soma/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 + num2
            };
    
            return data;
        }
    });
    
    //Subtração
    server.route({
        method: 'GET',
        path: '/calculadora/sub/{num1}/{num2}',
        handler: function (pedido){

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 - num2
            };
    
            return data;
        }
    });
 
    //Multiplicação
    server.route({
        method: 'GET',
        path: '/calculadora/multi/{num1}/{num2}',
        handler: function (pedido){

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 * num2
            };
    
            return data;
        }
    });
    
    //Divisão
    server.route({
        method: 'GET',
        path: '/calculadora/div/{num1}/{num2}',
        handler: function (pedido){

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                resultado: num1 / num2
            };
    
            return data;
        }
    });
}
