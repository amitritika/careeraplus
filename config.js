import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const KEY = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.PROD_MERCHANT_KEY : publicRuntimeConfig.TEST_MERCHANT_KEY
export const SALT = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.PROD_MERCHANT_SALT : publicRuntimeConfig.TEST_MERCHANT_SALT
export const PAYMENT_URL = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.PROD_PAYMENT_URL : publicRuntimeConfig.TEST_PAYMENT_URL
export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID

export const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;