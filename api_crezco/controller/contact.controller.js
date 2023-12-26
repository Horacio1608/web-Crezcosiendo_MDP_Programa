const getContact = async (req, res) => {
    try {
      const id = 1; // ID específico, en este caso, siempre es 1
  
      // Buscar el contacto por ID
      const contact = await db.Contact.findByPk(id);
  
      if (!contact) {
        // Si no se encuentra el contacto, enviar una respuesta adecuada
        res.status(404).json({ error: true, message: 'Contacto no encontrado', data: null });
      } else {
        // Enviar los datos del contacto encontrado
        res.status(200).json({ error: false, message: 'Contacto encontrado', data: contact });
      }
    } catch (e) {
      res.status(500).json({ error: true, message: e.message });
    }
  };//falta rutas y completar
module.exports = getContact;