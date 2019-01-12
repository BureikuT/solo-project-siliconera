MAX_ARTICLES_PER_PAGE = 10

module.exports = {

    createArticle: (req, res) => {
        const db = req.app.get('db')
        const { title, previewImage, image, previewSummary, article, systemResults, locationResults, author, authorId } = req.body
        db.create_article([title, previewImage, previewSummary, image, article, systemResults, locationResults, author, authorId]).then(response => {
            res.send(response)
        })
    },
    getArticles: (req, res) => {
        let { offset, limit } = req.query
        const db = req.app.get('db')
        db.get_articles().then(response => {
            res.send(response)
        })
    },

    getById: (req, res) => {
        const db = req.app.get('db')
        let { id } = req.params
        db.get_article_by_id([id]).then(response => {
            res.send(response)
        })
    },
    editArticle: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db')
        const { title, previewImage, image, previewSummary, article, systemResults, locationResults, author, authorId } = req.body
        db.update_article([title, previewImage, image, previewSummary, article, systemResults, locationResults, author, authorId, parseInt(id)]).then(reponse => {
            res.send(response)
        })
    },
    searchItem: (req, res) => {
        const db = req.app.get('db')
        const { searchInput } = req.body
        const searchThis = `%${searchInput}%`
        console.log('search', searchThis)
        db.search([searchThis]).then(response => {
            res.send(response)
        })
    },

    getComments: (req, res) => {
        const db = req.app.get('db')
        db.comments().then(response => {
            res.send(response)
        })
    },
    postComment: (req, res) => {
        const db = req.app.get('db')
        const {user, articleId, comment} = req.body
        db.create_comment([user,articleId,comment]).then(response=>{
            res.send(response)
        })
    }
}

// NEXT SECTION

