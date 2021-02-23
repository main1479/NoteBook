export const state = {
	notes: [],
};

console.log(state.notes)
// gettting form data and insert into notes array
export const getFormData = function (data) {
	state.notes.push(data);
	setLocalStorage();
};

export const removeNote = function (id) {
	const index = state.notes.findIndex((el) => el.id === id);
	state.notes.splice(index, 1);
	setLocalStorage();
};


const setLocalStorage = function () {
	localStorage.setItem('notes', JSON.stringify(state.notes));
};

const getLocalStorage = function () {
	const data = JSON.parse(localStorage.getItem('notes'));
	if (!data) return;
	state.notes = data;
};
getLocalStorage();

