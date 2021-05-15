const initApp = () => {
  const droparea = document.querySelector('.droparea');

  const active = () => droparea.classList.add("green-boder");
  const inactive = () => droparea.classList.remove("green-boder");

  const prevents = (e) => e.preventDefault();

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
    droparea.addEventListener(evtName, prevents);
  })
  /*
    ['dragenter', 'dragover'].forEach(evtName => {
      droparea.addEventListener(evtName, active)
    })
  
    ['dragleave', 'drop'].forEach(evtName => {
      droparea.addEventListener(evtName, inactive)
    })
  */

  droparea.addEventListener("drop", handleDrop)


}

document.addEventListener("DOMContentLoaded", initApp);


const handleDrop = (e) => {
  const dt = e.dataTransfer;
  const files = dt.files;
  const fileArray = [...files]
  console.log(files)
  console.log(fileArray)
}