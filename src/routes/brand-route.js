const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brand-controller');

router.get('/', brandController.get);
router.get('/:id', brandController.getById);
router.post('/', brandController.post);
router.put('/:id', brandController.put);
router.delete('/:id', brandController.delete);

module.exports = router;