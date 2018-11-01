import staticConfig from './static';

const ENVIRONMENT = process.env.NODE_ENV;
const PORT = process.env.PORT || staticConfig.WEB_SERVER.PORT;
const LOG =
  ENVIRONMENT === 'production'
    ? '[:date[iso]] :remote-addr - :remote-user :method :url HTTP/:http-version STATUS/:status :res[content-length] :referrer :user-agent'
    : 'dev';
export { ENVIRONMENT, PORT };
