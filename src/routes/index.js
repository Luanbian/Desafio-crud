const express = require('express')
const router = express.Router()

router.use('/api/posts', require('./post'))

// TODO: Indicar aqui a rota para comments
const CommentController = require('../controllers/commentController')
router.get('/savecomment', CommentController.listComments)
router.post('/savecomment', CommentController.createComment)

router.use('/', require('./root'))

module.exports = router
