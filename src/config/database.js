// NOTA_ESTUDO: Quando o mongo está rodando em docker não possui usuário e senha para conexão
module.exports = {
  uri: process.env.DB_URL
}
