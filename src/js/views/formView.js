import icons from '../../img/icons.svg';
import View from './view.js';
class FormView extends View {
	_parentEl = document.querySelector('.note__form');
	_form = document.querySelector('.note__input');
	_toggleBtn = document.querySelector('.close__note__form');

	constructor() {
      super();
		this._handlerFormToggle();
	}

	toggle() {
		this._parentEl.classList.toggle('active');
	}
	_handlerFormToggle() {
		this._toggleBtn.addEventListener('click', this.toggle.bind(this));
	}

	handlerFormData(handler) {
      const markup = this._generateMarkup();
		this._form.addEventListener('submit', function (e) {
			e.preventDefault();
			const dataArr = [...new FormData(this)];
			const data = Object.fromEntries(dataArr);
         data.id = Date.now();
			handler(data);
         this.innerHTML = '';
         this.insertAdjacentHTML('afterbegin', markup);

		});
	}

   _generateMarkup(){
      return `
         <div class="input__group">
         <input
            type="text"
            class="note__title"
            placeholder="Note Title"
            required
            name="title"
         />
         <textarea
            class="note__body"
            placeholder="Write Your Note"
            required
            name="text"
         ></textarea>
      </div>
      <button type="submit" class="btn">
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <use xlink:href="${icons}#icon-add"></use>
         </svg>
      </button>
      `;
   }
}

export default new FormView();
