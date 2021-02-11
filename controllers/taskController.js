const { Task } = require('../models/index.js')
// const axios = require("axios")

class TaskController {
  static getTasks(req, res) {

    // console.log(id);

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
    // tes dulu
    // console.log(req.body);
    // res.send('tes add')
    // 
    const id = req.decoded.id
    // console.log(req.decoded);
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
    // res.send('ini dari Id')
    const id = req.params.id
    // console.log(id);

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
    // console.log(req.body);

    const { category, title } = req.body
    Task.update({
      category, title
    }, { where: { id }, returning: true })

      .then(data => {

        res.status(200).json(data[1][0])
      })
      .catch(err => {
        // console.log(err);
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