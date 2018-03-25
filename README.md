# AngularFileUpload
Nodejs API - Angular 5 - File upload

Example of using Multer to upload a file from a Angular 5 component as a multi-part-form-data Post

The API has one interesting function that will take a multi part form data post and extract a file parameter name 'image',
and will save it in the /api/uploads directory.

app.post('/imageUpload', uploadFile.array('image', 1), function(req, res, next) {

The Client has one interesting form on the only application page.  It will take one file, and two text fields in the form.  On submit it will post form data to the 'imageUpload' endpoint.
It will console log out the request body which will show to the two text fields in the request.body


## Setup
1. install nodejs
2. install angular cli
3. clone github repo
4. create /api/uploads directory
5. npm install in both api directory and the hello-world directory

## Steps to run
### Start API in a terminal
1. cd api
2. node server
Server should start up on port localhost:8081

### Start client in a terminal
1. cd hello-world
2. ng server

browser should open on localhost:4200


