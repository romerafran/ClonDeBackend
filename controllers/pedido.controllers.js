const pedidoModel = require("../database/pedido-model");
const crearPedido = async (req, res) => {
    try {
        const pedido = new pedidoModel(req.body);
        await pedido.save();
        res.status(201).json({
            msg: 'Pedido creado correctamente',
        });
    } catch (error) {
        res.status(500).json({
            error: error,
            msg: 'Por favor contacta al administrador',
        });
    }
};

module.exports = {
    crearPedido
}