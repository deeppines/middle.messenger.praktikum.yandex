import Router from '@/utils/Router';

import { PAGES } from '@/constants';
import AuthController from '@/controllers/AuthController';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await AuthController.getUser();
  } catch (error) {
    throw new Error(error as string);
  }

  const router = new Router();

  PAGES.forEach((page) => {
    router.use(page.path, page.block, page.props);
  });

  router.start();
});
