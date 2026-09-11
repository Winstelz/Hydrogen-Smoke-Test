import 'dotenv/config';
import { chromium } from 'playwright';
import { LogIn } from './src/pom/logIn';

export default async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const login = new LogIn(page);
  try {
    // Log in using the `PASSWORD` env var (LogIn.logIn reads from process.env.PASSWORD)
    await login.logIn();

    // Save authenticated storage state for tests
    await context.storageState({ path: 'auth.json' });
    console.log('Saved authenticated storage state to auth.json');
  } finally {
    await browser.close();
  }
};
