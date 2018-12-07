const Ad = require('../models/Ad')
const User = require('../models/User')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

// NOTA_ESTUDO: Isso foi movido para o JOB: PurchaseMail
// const Mail = require('../services/Mail')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    // NOTA_ESTUDO: O 'populate' serve para vir os dados do autor junto
    const purchaseAd = await Ad.findById(ad).populate('author')

    // NOTA_ESTUDO: O req.userId está definido no middleware 'auth.js': req.userId = decoded.id
    const user = await User.findById(req.userId)

    // NOTA_ESTUDO: O bloco abaixo foi movido para o JOB: PurchaseMail
    // await Mail.sendMail({
    //   from: '"Frederico"',
    //   to: purchaseAd.author.email,
    //   subject: `Solicitação de compra: ${purchaseAd.title}`,
    //   // NOTA_ESTUDO: O template e context é para trabalhar com o HANDLEBARS, configurado em 'Mail.js'
    //   template: 'purchase',
    //   context: { user, content, ad: purchaseAd }
    // })

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    return res.json(purchaseAd)
  }
}

module.exports = new PurchaseController()
