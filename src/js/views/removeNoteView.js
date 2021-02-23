class RemoveNoteView {
	_parentEl = document.querySelector('.notes__container');
   // _btnConfirm = document.querySelector('.remove__note-confirm')

   // constructor(){
   //    this._handlerRemoveNote()
   // }

   handlerRemoveNote(handler){
      this._parentEl.addEventListener('click', function(e){
         const btn = e.target.closest('.btn__remove-note');
         if(!btn) return;
         const parent = btn.parentElement.closest('.note')
         if(!parent) return;
         parent.classList.toggle('active');

         parent.addEventListener('click', function(e){
            const removeBtn = e.target.closest('.remove__note-confirm');
            if(!removeBtn) return;
            const data = removeBtn.dataset.id;
            handler(+data)
         })
      })
   }
   
}

export default new RemoveNoteView()