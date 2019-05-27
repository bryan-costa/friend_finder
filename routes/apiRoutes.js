const { friend } = require('../models')

module.exports = app => {
    // get all friends
    app.get('/friends', (req, res) => {
        friend.findAll()
            .then(friend => res.json(friend))
            .catch(e => console.log(e))
    }),
        app.post('/friends', (req, res) => {
            friend.create(req.body)
                .then(_ => res.sendStatus(200))
                .catch(e => console.log(e))
        })
}