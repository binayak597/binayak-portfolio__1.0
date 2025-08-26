// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://299d3a28f01b4f362978131029e4b25d@o4509345320009728.ingest.de.sentry.io/4509905898504272",
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
});
