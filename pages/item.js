import Story from '../components/Story.js';
import Comment from '../components/Comment.js';
import view from '../utils/view.js' 
import baseUrl from '../utils/baseUrl.js';

export default async function Item() {
  let story = null;
  let hasComments = false;
  let hasError = false; //piece of local story
  // block scoping
  try { 
    story = await getStory();
    hasComments = story.comments.length > 0;
  } catch (error) {
    hasError = true;
    console.log(error);
  }

  if (hasError) {
    view.innerHTML = `<div class="error">No Story Found</div>`
  } else {
    view.innerHTML = `
      <div>
        ${Story(story)}
      </div>
      <hr/>
      ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : 'No Comments'}
      `
  }
}

async function getStory() {
  const storyId = window.location.hash.split('?id=')[1];

  const response = await fetch(`${baseUrl}/item/${storyId}`);
  const story = await response.json();
  return story
}