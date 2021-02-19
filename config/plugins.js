module.exports = ({ env }) => {
  (function runForever() {
    setTimeout(runForever, 200000);
    return 300000;
  })()

  return {
    upload: {
      providerOptions: {
        localServer: {
          maxAge: 300000000000,
        },
      },
    },
  };
};
