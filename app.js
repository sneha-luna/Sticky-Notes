// ("Hello")alert;
function createNote(){
//  alert(4)
     const stickyNotes = document.querySelector(".sticky-notes");
     const noteContainer = document.createElement("div");
     noteContainer.classList.add("sticky-container");
     const noteContent = document.createElement("div");
     noteContent.classList.add("note-content");
     noteContent.contentEditable=true;
     noteContent.textContent="New note"
     const noteActions = document.createElement("note-actions");
     noteActions.classList.add("note-actions");
     const deleteNote = document.createElement("button");
     deleteNote.classList.add("delete-note");
     deleteNote.textContent="Delete";
     deleteNote.onclick=function(){

        noteContainer.remove();
     };
     
     noteActions.appendChild(deleteNote);
     noteContainer.appendChild(noteContent);
     noteContainer.appendChild(noteActions);
     stickyNotes.appendChild(noteContainer);

}
function deleteNote(button){
//    alert("Do you want to delete?");
   const noteContainer =button.closest(".sticky-container");
   noteContainer.remove();

}