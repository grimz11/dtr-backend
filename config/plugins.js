module.exports = ({ env }) => {
  return {
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: "hyperstacksinc",
        api_key: "276898196226919",
        api_secret: "UtiL-4WhBR1hUguSpJsmS1YkS3A",
      },
    },
  };
};
