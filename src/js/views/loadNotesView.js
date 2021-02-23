import icons from 'url:../../img/icons.svg';
import View from './view.js';
class LoadNotesView extends View {
	_parentEl = document.querySelector('.notes__container');
	_searchInput = document.querySelector('.search__input');

	constructor() {
		super();
	}
	// _showSearchedNote() {
	// 	const notes = this._parentEl.querySelectorAll('.note');
	// 	if (notes.length === 0) this.renderError(`You don't have any notes`);

	// 	notes.forEach((note) => {
	// 		const noteTitle = note.querySelector('.note__heading')
	// 		if (notes.indexOf() != -1) {

	// 		} else {
	// 			item.style = 'display: none !important';
	// 		}
	// 	});
	// }

	
	_generateMarkup() {
		return this._data
			.map((note) => {
				return `
            <div class="note">
               <div class="note__content">
                  <h3 class="note__heading">${note.title}</h3>
                  <p class="note__text">${note.text}</p>
               </div>
               <div class="remove__note">
                  <button class="btn btn__remove-note">
                     <svg>
                        <use xlink:href="${icons}#icon-remove"></use>
                     </svg>
                  </button>
                  <button class="btn remove__note-confirm" data-id="${note.id}">
                     <svg>
                        <use xlink:href="${icons}#icon-check"></use>
                     </svg>
                  </button>
               </div>
            </div>
         `;
			})
			.join('');
	}
}

export default new LoadNotesView();
