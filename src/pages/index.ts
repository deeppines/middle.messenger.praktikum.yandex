import Router from '@/utils/Router';

import { pages } from '@/constants';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();

  pages.forEach((page) => {
    router.use(page.path, page.block, page.props);
  });

  router.start();
});
