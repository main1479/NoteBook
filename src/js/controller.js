import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model.js';
import formView from './views/formView.js';
import loadNotesView from './views/loadNotesView.js';
import removeNoteView from './views/removeNoteView.js';
import searchView from './views/searchView.js';

const controlLoadNotes = function () {
	loadNotesView.render(model.state.notes);
   if(model.state.notes.length === 0) 
      loadNotesView.renderError(`You don't have any notes`)
};

const controlForm = function (note) {
	model.getFormData(note);
	loadNotesView.render(model.state.notes);
	formView.toggle();
};

const controlRemoveNote = function (id) {
	model.removeNote(id);
	loadNotesView.render(model.state.notes);
};

const init = function () {
	controlLoadNotes();
	formView.handlerFormData(controlForm);
	removeNoteView.handlerRemoveNote(controlRemoveNote);
};

init();
