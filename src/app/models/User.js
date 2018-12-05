const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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

module.exports = mongoose.model('User', UserSchema)