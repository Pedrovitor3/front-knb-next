import { domainNameProd, domainNameDesv } from './sistemaConfig';
export const urlsServices = {
  SIGUWS: 'https://siguws.ssp.go.gov.br/',
  LEGADOWS: 'https://legadows.ssp.go.gov.br/',
  SSOWS: 'https://ssows.ssp.go.gov.br/',
  BACKENDWS: 'http://localhost:3015/',
};
export let ambiente = '';

if (location.hostname.indexOf(domainNameProd) > -1) {
  urlsServices.SIGUWS = 'https://siguws.ssp.go.gov.br/';
  urlsServices.LEGADOWS = 'https://legadows.ssp.go.gov.br/';
  urlsServices.SSOWS = 'https://ssows.ssp.go.gov.br/';
  urlsServices.BACKENDWS = 'http://localhost:3015/';
  ambiente = 'PROD';
} else {
  urlsServices.SIGUWS = 'https://siguws-h.ssp.go.gov.br/';
  urlsServices.LEGADOWS = 'https://legadows-h.ssp.go.gov.br/';
  urlsServices.SSOWS = 'https://ssows-h.ssp.go.gov.br/';
  urlsServices.BACKENDWS = 'URLBACKENDHOMO';
  ambiente = 'HOMO';
  if (location.hostname.indexOf(domainNameDesv) > -1) {
    //PARA DESENVOLVIMENTO
    urlsServices.BACKENDWS = 'http://localhost:3015/';
    //urlsServices.BACKEND = 'URLBACKENDHOMO';
  }
}
