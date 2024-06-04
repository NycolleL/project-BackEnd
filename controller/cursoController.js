const db = require('../models');
const Curso = db.Curso;

exports.getAllCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ error: 'Curso não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      await curso.update(req.body);
      res.json(curso);
    } else {
      res.status(404).json({ error: 'Curso não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      await curso.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Curso não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
