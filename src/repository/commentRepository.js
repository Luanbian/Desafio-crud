const database = require('../config/database')

module.exports = class CommentRepository {
  // TODO: Criar aqui o metodo que busca os comentarios no banco de dados

  static async listComments () {
    const result = await database
      .select(
        'Id',
        'PostId',
        'UserName',
        'Comment',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Comments')

    return console.log(result)
  }
}
