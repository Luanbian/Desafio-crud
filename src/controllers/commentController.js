const CommentService = require('../service/commentService')
const knex = require('../database')

module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static listComments (request, response, next) {
    CommentService.list()
      .then((result) => response.status(200).send(result))
      .catch(next)
  }

  // EXTRA
  static async createComment (req, res) {
    await knex('Comments').insert()
  }
}
