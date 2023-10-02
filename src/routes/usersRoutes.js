const express = require('express');
const usersRouter = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');

const storage= multer.diskStorage({
    destination: path.join(__dirname, '../../public/images/users'),
    filename: function(req, file, cb){
        cb( null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) 
        );
    }

});

const upload= multer({
    storage: storage
});


usersRouter.get('/login', usersController.login);
usersRouter.get('/register', usersController.registerForm);
usersRouter.post('/register', upload.single('userPicture'), usersController.register);

usersRouter.get('/myProfile', usersController.myProfile);
usersRouter.get('/myProfileAdmin', usersController.myProfileAdmin);

module.exports = usersRouter;
