const connection = require( '../mysqlConnection' );

const getIdByUrl = async ( url ) => {

    const [[ res ]] = await connection.query(
        'SELECT id FROM urls WHERE urls.url = ?',
        [ url ]
    );

    return res?.id;
};

module.exports = getIdByUrl;
