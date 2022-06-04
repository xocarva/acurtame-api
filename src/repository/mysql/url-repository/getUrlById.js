const connection = require( '../mysqlConnection' );

const getUrlById = async ( id ) => {

    const [[ url ]] = await connection.query(
        'SELECT url FROM urls WHERE urls.id = ?',
        [ id ]
    );

    return url;
};

module.exports = getUrlById;
