const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/').get(noteController.getAllNotes)
router.route('/').post(noteController.createNewNote)
router.route('/').patch(noteController.updateNote)
router.route('/').delete(noteController.deleteNote)

module.exports = router