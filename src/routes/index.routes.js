const { Router } = require('express');
const router = Router();

const { renderIndex, uploadFile, getFiles } = require('../controllers/index.controllers');
const { upload } = require('../lib/multer');

router.get('/', renderIndex);

router.post('/upload', upload, uploadFile);

router.get('/files', getFiles);

module.exports = router