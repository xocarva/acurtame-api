const { FRONTEND_URL } = process.env;

const encodeUrlFromId = ( id ) => {

    const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    if ( id === 0 ) return CHARSET[ 0 ];

    let url = '';

    while ( id > 0 ) {

        url = CHARSET[ id % 62 ] + url;
        id = Math.floor( id / 62 ) ;

    }

    return FRONTEND_URL + '/' +  url;

};

module.exports = encodeUrlFromId;
