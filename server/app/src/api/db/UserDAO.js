const db = require('./dbConnection');
const User = require('./models/User');

function getUserByCredentials(username, password) {
    console.log('before query');
    return db.query('SELECT * FROM user WHERE usr_username=?', [username])
        .then(({ results }) => {
            if (results.length === 0) { // Check if the query returned any user
                console.log('No such user found');
                throw new Error("No such user");
            }
            const user = new User(results[0]);
            return user.validatePassword(password);
        })
        .catch(error => {
            console.error("Error accessing the database or processing data:", error);
            throw error; // Re-throw the error to be handled by the caller
        });
}



module.exports = {
    getUserByCredentials: getUserByCredentials,
};
