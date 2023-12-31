const express = require('express');
const router = express.Router();    
const Thing = require('../models/thing');


const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.post('/', auth, multer, stuffCtrl.createThing );
router.get('/',  auth, stuffCtrl.getAllStuff);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing); 
  
  module.exports = router;
  
