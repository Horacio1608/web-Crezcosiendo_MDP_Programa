const { Result } = require('express-validator');
const db = require('../models');

  const getContact = async (req, res) => {
    try {
        const id = 1;
        const contact = await db.Contact.findOne({ where: { id: id } });

        if (!contact) {
            return res.status(404).json({ error: true, message: 'Contacto no encontrado', data: null });
        }

        return res.status(200).json({ error: false, message: 'Contacto encontrado', data: contact });
    } catch (e) {
      console.error('Error en el controlador:', e);
        return res.status(500).json({ error: true, message: e.message });
    }
};


module.exports = getContact;