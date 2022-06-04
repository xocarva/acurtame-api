const connection = require( '../mysqlConnection' );

const saveUrl = async ( url ) => {

    const [{ insertId }] = await connection.query(
        'INSERT INTO urls (url) VALUE (?)',
        [ url ]
    );

    return insertId;
};

module.exports = saveUrl;
