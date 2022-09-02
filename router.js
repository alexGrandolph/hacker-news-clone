import Stories from '/pages/stories.js'

const router = new Navigo(null, true, '#')  //arguments to use 'hash' router

export default class RouterHandler {
  constructor() {
    this.createRoutes()

  }

  createRoutes() {
    const routes = [
      { path: '/', page: Stories }
    ];

    routes.forEach(route => {
      router.on(route.path, () => {
        route.page();
      }).resolve();
    })
  }

}