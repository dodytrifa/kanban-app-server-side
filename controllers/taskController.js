const { Task } = require('../models/index.js')

class TaskController {
  static getTasks(req, res) {
    Task.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
  }

  static addTasks(req, res) {
    const id = req.decoded.id

    const { category, title } = req.body
    Task.create({
      category, title, userId: id
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      })
  }

  static getId(req, res) {
    const id = req.params.id

    Task.findOne({
      where: {
        id: id
      }
    })
      .then(data => {
        console.log(data);
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err);
        res.status(404).json(err)
      })
  }

  static updateTasks(req, res, next) {
    const id = req.params.id
    const { category, title } = req.body
    Task.update({
      category, title
    }, { where: { id }, returning: true })

      .then(data => {

        res.status(200).json(data[1][0])
      })
      .catch(err => {
        next(err)
      })
  }

  static destroyTasks(req, res) {
    const id = req.params.id

    Task.destroy({
      where: { id }, returning: true
    })
      .then(data => {
        res.status(200).json({ message: "Task Successfully deleted" })
      })
      .catch(err => {
        // console.log(err);
        res.status(500).json(err)
      })
  }

}

module.exports = TaskController