# S3 Image Upload

application to upload images to digital ocean and view them using mongoDB

## Screenshots

![App Screenshot](./doc/img/preview.png)

## Tools

- [Digital Ocean](https://www.digitalocean.com/) - Image storage
- [Heroku](https://dashboard.heroku.com/) - Deployment

## Tech Stack

**Client:** Ejs, Css

**Server:** Node, Express, MongoDB, AWS

## Deployment

the application is shown in [heroku](https://dashboard.heroku.com/) at the following [link](https://nodejs-upload.herokuapp.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Deyvis17GY/upload-s3-nodejs.git
```

Go to the project directory

```bash
  cd upload-s3-nodejs
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` : port to run the application locally

`MONGODB_URI` : connecting to your MongoDB database

`BUCKET_NAME` : the name of the bucket on AWS or digitalOcean

`AWS_ACCESS_KEY_ID` : the AWS Access KEY

`AWS_SECRET_ACCESS_KEY` : the AWS secret ID

`S3_ENPOINT` : the S3 o digialOceanSpaces Endpoint

[Setup AWS credentials](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html)

## License

[MIT](https://choosealicense.com/licenses/mit/)
