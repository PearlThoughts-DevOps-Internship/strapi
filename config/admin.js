module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','vML/MJDyPkDgtmlEa7iJDA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','D6qPKcbPraJAB2C0vifLpw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','A0hsBIUCC20PyzUGg8ECow=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
