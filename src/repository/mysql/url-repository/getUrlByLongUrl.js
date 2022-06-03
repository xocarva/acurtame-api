const connection = require( '../mysqlConnection' );

const getUrlByLongUrl = async ( longUrl ) => {

    const id = 2;
    const url = 'https://acurta.me/a';

    return { id, url };
};

module.exports = getUrlByLongUrl;
