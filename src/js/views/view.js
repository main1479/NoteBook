import icons from 'url:../../img/icons.svg';
export default class View {
	_clear() {
		this._parentEl.innerHTML = '';
	}
	_data;

	render(data) {
		if (!data && Array.isArray(data) && data.length === 0) return;
		this._data = data;
		const markup = this._generateMarkup();
		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderError(message = this.errorMessage) {
		const markup = `
			<div class="error">
				<svg>
					<use xlink:href="${icons}#icon-smile"></use>
				</svg> 
				<p>${message}</p>
			</div>
		`;
	}
}
