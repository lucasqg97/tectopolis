// const keys = require('./config/keys')
// var ObjectID = require('mongodb').ObjectID

module.exports = function (app, db) {
  app.post('/posts', (req, res) => {
    console.log(req.body)
    let newPost = {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body
    }
    db.collection('posts').insertOne(newPost, (err, results) => {
      if (err) {
        throw new InternalServerError(err.toString())
      }

      res.send(200)
    })
  })

  app.get('/posts', (req, res) => {
    db.collection('posts').find().toArray((err, results) => {
      if (err) {
        throw new InternalServerError(err.toString())
      }
      res.json(results)
    })
  })
}

const InternalServerError = (message) => {
  const error = new Error()
  error.message = message || 'Internal Server Error'
  error.statusCode = 500

  return error
}
