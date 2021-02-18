module.exports = ({ env }) => {
  return {
    upload: {
      providerOptions: {
        localServer: {
          maxage: (function runForever() {
            setTimeout(runForever, 200000);
            return 300000;
          })(),
        },
      },
    },
  };
};
