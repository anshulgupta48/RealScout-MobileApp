import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import { Account, Client, OAuthProvider } from 'react-native-appwrite';

const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

const client = new Client().setEndpoint('https://nyc.cloud.appwrite.io/v1').setProject(PROJECT_ID);
export const account = new Account(client);

export const handleUserLogin = async () => {
    try {
        const redirectUri = Linking.createURL('/');
        const response = account.createOAuth2Token(OAuthProvider.Google, redirectUri);
        if (!response) {
            throw new Error('Failed to create OAuth2 token');
        }

        const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);
        if (browserResult.type !== 'success') {
            throw new Error('Failed to authenticate with Google');
        }

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();
        if (!secret || !userId) {
            throw new Error('Failed to retrieve authentication details');
        }

        const session = await account.createSession(userId, secret);
        if (!session) {
            throw new Error('Failed to create session');
        }
        return { isSuccess: true };
    } catch (error) {
        console.error('Error while doing Sign-In:', error);
        return { isSuccess: false };
    }
};

export const handleUserLogout = async () => {
    try {
        await account.deleteSession('current');
        return { isSuccess: true };
    } catch (error) {
        console.error('Error while doing Logout:', error);
        return { isSuccess: false };
    }
};

export const handleFetchUser = async () => {
    try {
        const user = await account.get();
        return { isSuccess: true, userData: user?.name ? { name: user.name, avatar: user.email } : null };
    } catch (error) {
        console.log('Error while Fetching UserData:', error);
        return { isSuccess: false, userData: null };
    }
};