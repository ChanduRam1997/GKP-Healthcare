import { NextResponse } from 'next/server';

export function middleware(req) {
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;

    if (!basicAuth) {
        url.pathname = '/api/auth'; // Redirect to a route for authentication
        return NextResponse.rewrite(url);
    }

    const authValue = basicAuth.split(' ')[1];
    const [username, password] = Buffer.from(authValue, 'base64').toString().split(':');

    if (username === process.env.AUTH_USERNAME && password === process.env.AUTH_PASSWORD) {
        return NextResponse.next(); // Allow access if credentials are correct
    }

    url.pathname = '/api/auth'; // Redirect to auth prompt if credentials are incorrect
    return NextResponse.rewrite(url);
}
