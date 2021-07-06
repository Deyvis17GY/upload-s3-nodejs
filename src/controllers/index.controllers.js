const Image = require('../models/image')


const renderIndex = (req, res) => {
    res.render('upload', {
        title: 'Upload Image'
    });
};

const uploadFile = async (req, res) => {
    const newImage = new Image();
    newImage.url = req.file.location;
    await newImage.save();
    res.redirect('/files');
};

const getFiles = async (req, res) => {
    const images = await Image.find();
    res.render('files', {
        title: 'Get Files',
        images: images
    });
};

const getSingleFile = (req, res) => { };


module.exports = {
    renderIndex,
    uploadFile,
    getFiles,
    getSingleFile
}