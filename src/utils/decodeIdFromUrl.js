const decodeIdFromUrl = ( url ) => {

    let id = 0;
    const length = url.length;
    let i;
    let char;

    for ( i = 0; i < length; i++ ) {

        char = url.charCodeAt( i );

        if ( char < 58 ) char = char - 48;
        else if ( char < 91 ) char = char - 29;
        else char = char - 87;

        id += char * Math.pow( 62, length - i - 1 );
    }

    return id;

};

module.exports = decodeIdFromUrl;
