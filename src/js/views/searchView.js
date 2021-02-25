import View from './view.js';
import icons from '../../img/icons.svg';

class SearchView extends View {
	_parentEl = document.querySelector('.search');
	_toggleBtn = document.querySelector('.toggle__search');
	_notesContainer = document.querySelector('.notes__container');
	_searchInput = document.querySelector('.search__input');
	constructor() {
		super();
		this._handlerToggleSearch();
	}

	_showSearchedNote() {
		this._searchInput.addEventListener('keyup', this.searchIteam.bind(this));
	}
	searchIteam() {
		
		let filterText = this._searchInput.value.toLowerCase();

		let notes = this._notesContainer.querySelectorAll('.note');

		notes.forEach(function (item) {
			let itemText = item
				.querySelector('.note__heading')
				.textContent.toLowerCase();
			if (itemText.indexOf(filterText) !== -1) {
				item.style = 'display: flex !important';
			} else {
				item.style = 'display: none !important';
			}
		});
	}

	toggleSearch() {
		this._searchInput.focus();
		this._parentEl.classList.toggle('active');

		if (this._parentEl.classList.contains('active')) {
			this._toggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
               <use xlink:href="${icons}#icon-remove"></use>
            </svg>
         `;
			this._showSearchedNote();
		} else {
			this._toggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
               <use xlink:href="${icons}#icon-search"></use>
            </svg>
         `;
			this._searchInput.value = '';
		}
	}
	_handlerToggleSearch() {
		this._toggleBtn.addEventListener('click', this.toggleSearch.bind(this));
	}

	_handlerSearch() {
		this._searchInput.addEventListener('keyup');
	}
}

export default new SearchView();
