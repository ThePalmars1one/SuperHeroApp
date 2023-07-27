const btn_title = document.getElementById("button_title");
const options = document.getElementsByClassName(".toggle_filters");
  
btn_title.addEventListener('click', function () {
    options.classList.toggle("open");
});
