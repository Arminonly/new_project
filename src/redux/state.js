let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello', likeCounter: '10' },
      { id: 2, message: 'How are you?', likeCounter: '20' },
      { id: 3, message: 'Who are you?', likeCounter: '20' },
      { id: 4, message: 'Where are you?', likeCounter: '20' }
    ]
  },
  dialogPage: {
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Who are you?' },
      { id: 4, message: 'Where are you?' }
    ]
  },
  dialogs: [
    { id: 1, name: 'Sergey' },
    { id: 2, name: 'Alesya' },
    { id: 3, name: 'Milana' },
    { id: 4, name: 'Timosha' },
    { id: 5, name: 'Arina' }
  ]
};

export let addPost = (postMessage) => {
  let newPost = { 
    id:5,
    message: postMessage,
    likeCounter: 0
  }
state.profilePage.posts.push(newPost)
}





export default state;
