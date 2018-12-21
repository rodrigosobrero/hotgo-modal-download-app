import './scss/index.scss';
import MicroModal from 'micromodal';
import appIcon from './img/app-icon.svg';

const appModal = new Object();

appModal.createModal = (prm) => {
  prm.title = !prm.title ? '' : prm.title;
  prm.text = !prm.text ? '' : prm.text;

  let template = '<div class="modal micromodal-slide" aria-hidden="true" id="modal-download">'
    + '<div class="modal__overlay" tabindex="-1" data-micromodal-close>'
    + ' <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-download-title">'
    + '     <div class="modal__header">'
    + '         <h2 class="modal__title" id="modal-download-title">'
    + prm.title
    + '         </h2>'
    + '     </div>'
    + '     <div class="modal__content" id="modal-download-content">'
    + '         <div class="row">'
    + '             <div class="col-4">'
    + '                 <img id="appIcon" width="100%">'
    + '             </div>'
    + '             <div class="col-8">'
    + '                 <p class="modal__text">'
    + prm.text
    + '                 </p>'
    + '             </div>'
    + '         </div>'
    + '     </div>'
    + '     <div class="modal__footer">'
    + '         <div class="row">'
    + '             <div class="col-6">'
    + '                 <a href="https://www.hotgo.tv/app/download" onclick="appModal.disableApiCall();" class="btn btn-danger btn-block">Descargar</a>'
    + '             </div>'
    + '             <div class="col-6">'
    + '                 <a href="#" onclick="location.reload();" class="btn btn-default btn-block">Cerrar</a>'
    + '             </div>'
    + '         </div>'
    + '         <div class="row">'
    + '             <div class="col-12">'
    + '                 <hr class="hr-custom">'
    + '             </div>'
    + '         </div>'
    + '         <div class="row">'
    + '             <div class="col-12">'
    + '                 <form>'
    + '                     <div class="form-check modal__checkbox">'
    + '                         <input type="checkbox" class="form-check-input" id="chkHideModal">'
    + '                         <label class="form-check-label modal__checkbox-label" for="chkHideModal">No volver a mostrar este mensaje</label>'
    + '                     </div>'
    + '                 </form>'
    + '             </div>'
    + '         </div>'
    + '     </div>'
    + ' </div>'
    + '</div>'
    + '</div>';

  document.getElementsByTagName('BODY')[0].innerHTML = template;
  document.getElementById('appIcon').src = appIcon;

  appModal.checkboxAction();
}

appModal.checkboxAction = () => {
  const checkbox = document.getElementById('chkHideModal')

  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      appModal.disableApiCall();
    }
  })
}

appModal.disableApiCall = () => {
  const Http = new XMLHttpRequest();
  const url = '/disable/modal_app';

  Http.open('GET', url);
  Http.withCredentials = true;
  Http.send();
}

appModal.createModal({
  title: '¡Descarga la aplicación ahora!',
  text: 'Mejora tu experiencia HOTGO de forma privada y segura.',
});

window.onload = () => {  
  MicroModal.show('modal-download', { disableFocus: true });
}