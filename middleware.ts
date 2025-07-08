import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Спрацьовує лише на головній сторінці
  if (pathname === '/') {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

    // Якщо це бот (Facebook, WhatsApp, Twitter, Slack) — не редіректимо
    const isBot = /facebookexternalhit|whatsapp|twitterbot|slackbot|linkedinbot|telegrambot/.test(userAgent);
    if (isBot) {
      return NextResponse.next();
    }

    // Визначаємо мову користувача
    const acceptLang = request.headers.get('accept-language') || '';
    const hasEnglish = acceptLang.toLowerCase().startsWith('en');
    const preferredLocale = hasEnglish ? 'en' : 'uk';

    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // middleware виконується лише на /
};




// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Спрацьовує лише на головній сторінці
//   if (pathname === '/') {
//     const acceptLang = request.headers.get('accept-language') || '';
//     const hasEnglish = acceptLang.toLowerCase().startsWith('en');
//     const preferredLocale = hasEnglish ? 'en' : 'uk';

//     const url = request.nextUrl.clone();
//     url.pathname = `/${preferredLocale}`;
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/'], // middleware виконується лише на /
// };
