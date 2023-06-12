export const FIREBASE_CONFIG = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const PUBLIC_URL = process.env.PUBLIC_URL;

console.log(FIREBASE_CONFIG)

// throw error if any of the env variables are missing
Object.entries(FIREBASE_CONFIG).forEach(([key, value]) => {
    if (!value) throw new Error(`Missing env.${key}`);
});
