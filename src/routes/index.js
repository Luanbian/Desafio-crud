const express = require('express')
const router = express.Router()

router.use('/api/posts', require('./post'))

// TODO: Indicar aqui a rota para comments
const CommentController = require('../controllers/commentController')
router.get('/api/savecomment/:id', CommentController.listComments)
router.post('/api/savecomment', CommentController.createComment)

router.use('/', require('./root'))

module.exports = router
