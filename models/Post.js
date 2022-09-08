const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})



module.exports = Post //possibilitando o acesso de Post através de outros arquivos

//Post.sync({force: true})