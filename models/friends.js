module.exports = (sequelize, Sequelize) => {
    class Friend extends Sequelize.Model {}
    Friend.init(
        {
            name: {
                type: Sequelize.STRING,
                len: [2,255]
            },
            photo: {
                type: Sequelize.STRING
            },
            scores: {
                type: Sequelize.JSON
            }
        },
        {sequelize, modelName: 'friend'}
    )
 return Friend
}