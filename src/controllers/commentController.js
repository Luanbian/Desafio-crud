const CommentService = require('../service/commentService')

module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static listComments (request, response, next) {
    CommentService.list()
      .then((unity) => response.status(200).send(unity))
      .catch(next)
  }
}
