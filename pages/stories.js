// https://node-hnapi.herokuapp.com

// / (Top) -> /new
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show 
// const BASE_URL = 'https://node-hnapi.herokuapp.com'
import view from '../utils/view.js';

export default async function Stories(path) {
  const stories = await getStories(path);
  console.log(stories);
  view.innerHTML = `<div>${path}</div>`;
}

async function getStories(path) {
  const isHomeRoute = path === '/';
  const isNewRoute = path === '/new';
  if (isHomeRoute) {
    path = '/news';
  } else if (isNewRoute) {
    path = '/newest';
  }
  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = await response.json();
  return stories; 
}
