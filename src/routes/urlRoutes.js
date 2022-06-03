const express = require( 'express' );
const router = express.Router();

const { createUrl, getUrl } = require( '../controllers/url' );

router.get('/:longUrl', getUrl);
router.post('/', createUrl);

module.exports = router;
