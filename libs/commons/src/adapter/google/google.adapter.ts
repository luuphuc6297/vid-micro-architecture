import { Injectable, UnauthorizedException } from '@nestjs/common';
import { google } from 'googleapis';
import configs from '../../configs';

@Injectable()
export class GoogleAdapter {
    async verifyIdToken(idToken: string) {
        const oauth2Client = new google.auth.OAuth2({
            clientId: configs.GOOGLE_CLIENT_ID,
            clientSecret: configs.GOOGLE_CLIENT_SECRET,
            redirectUri: configs.GOOGLE_REDIRECT_URI,
        });
        return oauth2Client
            .verifyIdToken({ idToken })
            .then((res) => {
                return res.getPayload();
            })
            .catch((err) => {
                throw new UnauthorizedException('idToken is invalid');
            });
    }
}
