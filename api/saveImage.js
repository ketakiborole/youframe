const database = require('./database');

const saveImage = (req, res) => {

    let allowed = [
        'png',
        'jpg',
        'jpeg',
        'gif',
        'tiff',
        'bmp',
        'webp'
      ];

    if(allowed.indexOf(req.body.UploadRequest.Name.split('.')[1]) !== -1){
        const query = 'INSERT INTO IMAGE (NAME,IMAGE,CREATEDDATE) VALUES (?,?,?)';
        return database.execute(query,[req.body.UploadRequest.Name, req.body.UploadRequest.Image,new Date().toISOString()])
        .then((result) => {
            return res.json(result);
        })
        .catch(e=> {
            throw(e)
        })
    }
    else{
        res.status(400);
        return res.json({
            status: 400,
            message: 'Only Image Files are allowed..!'
          })
    }    
}

module.exports = saveImage