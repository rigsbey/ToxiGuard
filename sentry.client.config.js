import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_APP_ENV,
  tracesSampleRate: 1.0,
  release: process.env.VERCEL_GIT_COMMIT_SHA,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay()
  ],
  beforeSend(event) {
    if (event.exception) {
      console.error('Sentry Event:', event);
    }
    return event;
  }
}); 