const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const filters = {}

    if (req.query.price_min || req.query.price_max) {
      filters.price = {}

      if (req.query.price_min) {
        // NOTA_ESTUDO: Sigla para Greater Than: '>' (O $gte é coisa do mongoose, ele quem interpreta isso)
        filters.price.$gte = req.query.price_min
      }

      if (req.query.price_max) {
        filters.price.$lte = req.query.price_max
      }
    }

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, 'i') // NOTE_ESTUDO: O 'i' serve para 'CASE INSENSITIVE'
    }

    const ads = await Ad.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ['author'], // NOTA_ESTUDO: Vai trazer o User que está em relacionamento com esse registro (se não ele traria o ID do user)
      sort: '-createdAd' // NOTA_ESTUDO: Ordem por DESC
    })

    return res.json(ads)
  }

  async show (req, res) {
    const ad = await Ad.findById(req.params.id)

    return res.json(ad)
  }

  async store (req, res) {
    // NOTA_ESTUDO: O 'req.userId' é definido pelo middleware de autenticação "auth.js"
    const ad = await Ad.create({ ...req.body, author: req.userId })

    return res.json(ad)
  }

  async update (req, res) {
    // NOTA_ESTUDO: O parametro 'new' serve para ele retornar o ad atualizado
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(ad)
  }

  async destroy (req, res) {
    await Ad.findByIdAndDelete(req.params.id)

    res.send()
  }
}

module.exports = new AdController()
