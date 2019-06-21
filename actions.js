// definiowanie typów akcji:
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


// kreatory akcji:
function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

function editComment(commentId, text) {
  return {
    type: EDIT_COMMENT,
    id: commentId,
    text: text
  }
}

function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    id: commentId
  }
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}
