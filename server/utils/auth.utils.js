const bcrypt = require("bcryptjs")


 function hashPassword(password) {
  return bcrypt.hashSync(password, 12);
}

module.exports = hashPassword

function comparePassword(raw, hashed) {
  return bcrypt.compareSync(raw, hashed);
  
}


 function signJwt(user) {
  const tokenUser = {
    sub: user._id,
    email: user.email,
    role: user.role,
  };
//This should sign and encrypt a token
  return jwt.sign(tokenUser, keys.jwt_secret, {
    expiresIn: keys.jwt_ttl,
  });
}


 function verifyJwt(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, keys.jwt_secret, (err, payload) => {
      if (err) {
        return reject(err);
      }

      const { sub } = payload;

      getUserById(sub)
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  });
}