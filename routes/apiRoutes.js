const { friend } = require('../models')

module.exports = app => {
    // get all friends
    app.get('/friends', (req, res) => {
        friend.findAll()
            .then(friend => res.json(friend))
            .catch(e => console.log(e))
    })
}