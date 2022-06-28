const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const ApiError = require('../utils/ApiError');

const blacklistData = [];

/**
 *
 * @param {Number} id Userid
 * @returns {String}
 */
function generateAccessToken(id) {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' });
}

function toBlacklist(token) {
  blacklistData.push(token);
}

/**
 *
 * @param {String} token
 * @returns {{ id: Number }}
 */
function verifyAccessToken(token) {
  blacklistData.forEach((element) => {
    if (token === element) {
      throw new ApiError('Invalid token', 401);
    }
  });
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  generateAccessToken,
  verifyAccessToken,
  toBlacklist,
};
