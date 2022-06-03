const { urlRepository } = require( '../../repository' );
const getIdFromShortUrl = require('../../utils/getIdFromShortUrl');

const getUrl = async ( req, res ) => {

    const { url } = req.params;

    const id = getIdFromShortUrl( url );

    let longUrl;

    try {
        longUrl = await urlRepository.getLongUrlById( id );

    } catch ( error ) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    };

    if( !longUrl ) {
        res.status( 404 );
        res.send({ error: 'url not found' });
    }

    res.status( 200 );
    res.send({
        message: 'ok',
        data: { longUrl },
    });
};

module.exports = getUrl;
