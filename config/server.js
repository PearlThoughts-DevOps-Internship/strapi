module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  app: {
    keys: ['f52ff7e7252505e874fcf88cd22cf4307f9b01cdd34669e56e17febeadc15192', '9a826060607ddcba645b2c193f1a22f3cde3e9ad4e2adff3e2383fafa5c754d4'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

