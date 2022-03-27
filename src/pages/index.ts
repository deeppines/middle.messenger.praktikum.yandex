import { PAGES } from '@/constants';
import AuthController from '@/controllers/AuthController';
import ChatsController from '@/controllers/ChatsController';
import router from '@/router/Router';

document.addEventListener('DOMContentLoaded', async () => {
  PAGES.forEach((page) => {
    router.use(page.path, page.block, page.props);
  });

  router.start();

  await AuthController.getUser();
  await ChatsController.getChats();
});
