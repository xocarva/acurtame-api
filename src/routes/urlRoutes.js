const express = require( 'express' );
const router = express.Router();

const { createUrl, getUrl } = require( '../controllers/url' );

router.get('/:shortUrl', getUrl);
router.post('/', createUrl);

module.exports = router;
