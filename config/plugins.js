module.exports = ({ env }) => ({
    'custom-qr-code-generator': {
      enabled: true,
      resolve: './src/plugins/custom-qr-code-generator',
      config: {
        contentTypes: [
          {
            uid: 'plugin::users-permissions.user', // Update with your content type UID
            targetField: 'id',
            fields: ['username', 'email'],
            frontend: {
              basePath: '/card',
            },
          },
        ],
      },
    },
  });
  