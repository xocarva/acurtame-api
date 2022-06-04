const { urlRepository } = require( '../../repository' );
const { decodeIdFromUrl } = require( '../../utils' );

const getUrl = async ( req, res ) => {

    const { shortUrl } = req.params;

    const id = decodeIdFromUrl( shortUrl );

    let url;

    try {

        url = await urlRepository.getUrlById( id );

    } catch ( error ) {

        res.status( 500 );
        res.send({ error: error.message });
        return;

    }

    if( !url ) {
        res.status( 404 );
        res.send({ error: 'URL not found' });
        return;
    }

    res.status( 200 );
    res.send({
        message: 'ok',
        data: { url },
    });

};

module.exports = getUrl;
