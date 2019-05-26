module.exports = (Sequelize, sequelize) => {
    class Friend extends Sequelize.Model { }
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
                type: 
            }
        },
        {sequelize, modelName: friend}
    )

}