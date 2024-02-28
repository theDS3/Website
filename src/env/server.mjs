import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    VALIDATION_SECRET: z.string(),
    MONGO_URI: z.string().url(),
    MONGO_DB: z.enum(['prod', 'dev', 'local']).default('local'),
    GMAIL_USER: z.string().email().optional(),
    GMAIL_PASSWORD: z
      .string()
      .length(16, 'Please enter a valid app-specific password')
      .optional(),
    EMAIL_BANNER_IMAGE_URL: z.string().url().optional(),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
  },
  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    VALIDATION_SECRET: process.env.VALIDATION_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB: process.env.MONGO_DB,
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    EMAIL_BANNER_IMAGE_URL: process.env.EMAIL_BANNER_IMAGE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
