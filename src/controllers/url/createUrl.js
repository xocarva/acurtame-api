const { urlRepository } = require( '../../repository' );

const createUrl = async ( req, res ) => {

    const { longUrl } = req.body;

    let url;
    let id;

    try {
        const urlData = await urlRepository.getUrlByLongUrl( longUrl );

        if( urlData.length > 0 ) {
            url = urlData.url;
            id = urlData.id;
        }

    } catch ( error ) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    };

    if ( url ) {
        res.status( 200 );
        res.send({
            message: 'ok',
            data: { id, url },
         });
         return;
    }

    url = 'https://acurta.me/b';

    try {
        id = await urlRepository.saveUrl( url );
        res.status( 200 );
        res.send({
            message: 'ok',
            data: { id, url },
        });

    } catch ( error ) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    }

};

module.exports = createUrl;
