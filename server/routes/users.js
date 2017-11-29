import express from 'express';
import validateInput from '../shared/validations/signup';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

});

export default router;