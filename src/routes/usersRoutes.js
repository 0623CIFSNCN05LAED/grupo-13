const express = require('express');
const usersRouter = express.Router();
const multer = require('multer');
const path = require('path');
const usersController = require('../controllers/usersController');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../public/images/users'),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

usersRouter.get('/login', usersController.login);
usersRouter.get('/register', usersController.registerForm);
usersRouter.post(
  '/register',
  upload.single('userPicture'),
  usersController.register
);

usersRouter.get('/crud', usersController.crud);

usersRouter.get('/:id/delete', usersController.deleteForm);
usersRouter.delete('/:id/delete', usersController.destroy);

usersRouter.get('/:id/edit', usersController.myProfileEdit);
// usersRouter.get('/:id/prueba', usersController.myProfileEdit); futuro editor admin
// usersRouter.put('/:id', upload.single('image'), usersController.update); futuro editor admin
usersRouter.put('/:id', upload.single('image'), usersController.update);

usersRouter.get('/:id', usersController.myProfile);

module.exports = usersRouter;
