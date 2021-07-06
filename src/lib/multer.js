const aws = require('aws-sdk')
const multer = require('multer');
const multerS3 = require('multer-s3');

const { S3_ENPOINT, BUCKET_NAME } = process.env;

const spacesEnpoint = new aws.Endpoint(S3_ENPOINT)
const s3 = new aws.S3({
    endpoint: spacesEnpoint
})

const upload = multer({
    storage: multerS3({
        s3,
        bucket: BUCKET_NAME,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {
                fieldname: file.fieldname
            })
        },
        key: (req, file, cb) => {
            console.log(file)
            cb(null, file.originalname)
        }

    }),
}).single('upload')

module.exports = { upload, s3 }