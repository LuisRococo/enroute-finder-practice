import * as AWS from '@aws-sdk/client-ses';
import { defaultProvider } from '@aws-sdk/credential-provider-node';

//modulo "defaultProvider" te busca las credenciales en la carpeta .aws
export const ses = new AWS.SES({
   region: 'us-east-1',
   credentialDefaultProvider: defaultProvider,
});

//transporter
export const transporterConfig = {
   SES: { ses, aws: AWS },
};
