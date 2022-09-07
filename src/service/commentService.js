const CommentRepository = require('../repository/commentRepository')

module.exports = class CommentService {
  // TODO: Criar metodos necessarios para listar os comentarios
  static async listComments (id) {
    return await CommentRepository.listComments(id)
  }
}
