const {SECURE, HTTP_ONLY, SAME_SITE } = require("../config");
const {generateAccessToken, generateRefreshToken, generateCsrfToken} = require('../domain/auth_handler');
exports.basicLogin = (req, res) => {
  res.status(200).send("Basic login successful");
};

 exports.bearerLogin = (req, res) => {
 res.status(200).send("Bearer token provided");
};

exports.refreshToken = (req, res) => {
 res.status(200).send("Bearer token refreshed");
};

exports.digestLogin = (req, res) => {
 res.status(200).send("Digest login successful");
};

exports.customLogin = (req, res) => {
  res.status(200).send("Custom login successful");
};

exports.nologinLogin = (req, res) => {
 const user = req.body || { user: 'user@example.com' };

 const accessToken = generateAccessToken(user);
 const refreshToken = generateRefreshToken(user);
 const csrfToken = generateCsrfToken();

 res.cookie('accessToken', accessToken, {
  httpOnly: HTTP_ONLY,
  secure: SECURE,
  maxAge: 15 * 60 * 1000,
  sameSite: SAME_SITE
});

 res.cookie('refreshToken', refreshToken, {
  httpOnly: HTTP_ONLY,
  secure: SECURE,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: '/refresh',
  sameSite: SAME_SITE
});

 res.json({ csrfToken });
}

exports.logout = (req, res) => {
 res.status(200).send("Logout successful");
}




