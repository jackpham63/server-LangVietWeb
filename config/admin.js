module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ba13668a12bebf8d4d778404644331fa'),
  },
});
