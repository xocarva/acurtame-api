const { urlRepository } = require( '../../repository' );
const { encodeUrlFromId } = require( '../../utils' );

const createUrl = async ( req, res ) => {

    const { url } = req.body;

    let shortUrl;
    let id;

    try {

        id = await urlRepository.getIdByUrl( url );

        if( id ) {

            shortUrl = encodeUrlFromId( id );

            res.status( 200 );
            res.send({
                message: 'ok',
                data: { shortUrl },
            });

            return;
        }

    } catch ( error ) {

        res.status( 500 );
        res.send({ error: error.message });
        return;

    }

    try {

        id = await urlRepository.saveUrl( url );

    } catch ( error ) {

        res.status( 500 );
        res.send({ error: error.message });
        return;

    }

    shortUrl = encodeUrlFromId( id );

    res.status( 201 );
    res.send({
        message: 'ok',
        data: { shortUrl },
    });

};

module.exports = createUrl;
