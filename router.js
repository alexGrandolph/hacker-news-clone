import Stories from '/pages/stories.js'

const router = new Navigo(null, true, '#')  //arguments to use 'hash' router

class RouterHandler {
  constructor() {
    this.createRoutes()

  }

  createRoutes() {
    const routes = [
      { path: '/', page: Stories }
    ]
  }

}