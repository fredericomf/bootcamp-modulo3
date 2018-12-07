const Mail = require('../services/Mail')

class PurchaseMail {
  // NOTA_ESTUDO: O get é para que eu tenha acesso assim: PurchaseMail.key
  get key () {
    return 'PurchaseMail'
  }

  // NOTA_ESTUDO: job: dados sobre o job. done: função que deve ser executada depois do job
  // NOTA_ESTUDO: O template e context é para trabalhar com o HANDLEBARS, configurado em 'Mail.js'
  async handle (job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail({
      from: '"Frederico"',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
