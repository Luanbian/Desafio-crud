const knex = require('../config/database')
const CommentService = require('../service/commentService')
module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static async listComments (req, res, next) {
    await CommentService.listComments(req.params.id).then(
      async () => {
        try {
          const result = await knex.select(
            'Id',
            'PostId',
            'UserName',
            'Comment',
            'CreatedAt',
            'UpdatedAt'
          )
            .from('Comments')
            .where({ PostId: req.params.id })
          return res.json(result)
        } catch (error) {
          next(error)
        }
      })
  }

  // EXTRA
  static async createComment (req, res, next) {
    try {
      const { UserName, Comment, PostId } = req.body
      await knex('Comments').insert({
        UserName, Comment, PostId
      })
      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  }
}
