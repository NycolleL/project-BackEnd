const db = require('../models');
const Estudante = db.Estudante;

exports.getAllEstudantes = async (req, res) => {
  try {
    const estudantes = await Estudante.findAll();
    res.json(estudantes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEstudante = async (req, res) => {
  try {
    const estudante = await Estudante.findByPk(req.params.id);
    if (estudante) {
      res.json(estudante);
    } else {
      res.status(404).json({ error: 'Estudante não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addEstudante = async (req, res) => {
  try {
    const estudante = await Estudante.create(req.body);
    res.status(201).json(estudante);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEstudante = async (req, res) => {
  try {
    const estudante = await Estudante.findByPk(req.params.id);
    if (estudante) {
      await estudante.update(req.body);
      res.json(estudante);
    } else {
      res.status(404).json({ error: 'Estudante não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEstudante = async (req, res) => {
  try {
    const estudante = await Estudante.findByPk(req.params.id);
    if (estudante) {
      await estudante.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Estudante não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
