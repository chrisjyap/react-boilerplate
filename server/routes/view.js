import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../utils/Html';
import express from 'express';
var router = express.Router();


router.get('/', (req, res) => {
  res.send(
    ReactDOM.renderToString(
      <Html/>
    )
  )
});

module.exports = router;
