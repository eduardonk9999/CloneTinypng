const initApp = () => {
  const droparea = document.querySelector('.droparea');

  const active = () => droparea.classList.add("green-boder");
  const inactive = () => droparea.classList.remove("green-boder");

  const prevents = (e) => e.preventDefault();

  ['dragenter', 'dragover', 'dragleave', 'drop']

}

document.addEventListener("DOMContentLoaded", initApp);