const config = {
    NODE_ENV: 'gamma',
    SSO_URL: 'https://gamma-sso-api.vidbeyond.com',
    SSO_UI: 'https://gamma-sso.vidbeyond.com',

    FILE_HOST: 'https://gamma-files.vidbeyond.com',

    // DB
    DB_TYPE: 'mysql',
    DB_HOST: 'dev02.vidbeyond.staging',
    DB_PORT: 3306,
    DB_USERNAME: 'root',
    DB_PASSWORD: '97A2prAR*z3foygh',
    DB_DATABASE: 'sso',

    // mailgun
    MAILGUN_KEY: 'f2b96d33025f47fc29c67e6941a82bcf-1d8af1f4-21428029',
    MAILGUN_DOMAIN: 'reply.vidbeyond.com',

    // EMAIL
    GOOGLE_CLIENT_ID: '958159067906-b44pk7ia4e39m5fl6qbb41g37mn59c0d.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: 'MSFrFR75uVm1XCChcg8EKGWs',
    GOOGLE_REDIRECT_URI: 'postmessage',

    // cloudinary
    CLOUDINARY_NAME: 'gamma-vidbeyond-sso',
    CLOUDINARY_API_KEY: '813734647325933',
    CLOUDINARY_SECRET_KEY: 'G1Ew6r5gqpVNAeMxfBOyXMYWg_s',
};

export default config;
