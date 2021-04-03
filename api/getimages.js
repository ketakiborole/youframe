const database = require('./database');

const getImages = (req, res) => {
    const query = 'SELECT Id, Name, Image,CreatedDate FROM `IMAGE` ORDER BY CreatedDate DESC'
    return database.execute(query)
    .then((result) => {
        return res.json(result);
    })
}

module.exports = getImages