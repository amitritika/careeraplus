import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION ? "http://careeraplus.in/api" : "http://v1-parsaiamit348214.codeanyapp.com:8000/api"
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const KEY = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.PROD_MERCHANT_KEY : publicRuntimeConfig.TEST_MERCHANT_KEY
export const SALT = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.PROD_MERCHANT_SALT : publicRuntimeConfig.TEST_MERCHANT_SALT
export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID

export const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;