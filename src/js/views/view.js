import icons from '../../img/icons.svg';
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
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<use xlink:href="${icons}#icon-smile"></use>
				</svg> 
				<p>${message}</p>
			</div>
		`;

		this._clear();
		this._parentEl.insertAdjacentHTML('afterbegin', markup)
	}
}
