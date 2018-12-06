const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  // NOTA_ESTUDO: O texto virá: "Barier TOKEN_INFORMADO". Por isso damos split no  espaço em banco e destruturamos o segundo para 'token'
  const [, token] = authHeader.split(' ')

  try {
    // NOTA_ESTUDO: O verify não retorna uma promisse, por isso usamos o promissify do node utils. Se não usar, deve-se implementar a função de callback: jwt.verify(token, authConfig.secret, () => {})
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decoded.id

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
