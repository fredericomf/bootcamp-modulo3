const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// NOTA_ESUTDO: Configurando um HOOK para rode antes do save:
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 8)
})

// NOTA_ESTUDO: Implementando métodos acessíveis externamente
UserSchema.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}

// NOTA_ESTUDO: Implementando métodos estáticos
UserSchema.statics = {
  generateToken ({ id }) {

    // NOTA_ESTUDO: Se você não passar um OBJECT para sign ele dá esse erro: Error: invalid expiresIn option for string payload.
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }
}

module.exports = mongoose.model('User', UserSchema)
