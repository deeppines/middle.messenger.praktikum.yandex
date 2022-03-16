import Router from '@/utils/Router';

import { PAGES } from '@/constants';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();

  PAGES.forEach((page) => {
    router.use(page.path, page.block, page.props);
  });

  router.start();
});
