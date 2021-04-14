const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "es-MX";

  searchForm.insertAdjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    //ayuda
    if(transcript.toLowerCase().trim()==="ayuda del sitio") {
      window.open('ayuda.php', '__blank');
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
    else {
      if(transcript.toLowerCase().trim()==="opción múltiple") {
        
        window.open('https://www.elektra.com.mx/'+searchFormInput.value+'?_q='+searchFormInput.value+'&map=ft');
        window.open('https://www.radioshack.com.mx/store/radioshack/en/search/?text='+searchFormInput.value);
        window.open('https://www.fahorro.com/catalogsearch/result/?q='+searchFormInput.value);
        window.open('https://www.xbox.com/es-mx/Search?q='+searchFormInput.value);
        window.open('https://lacasadelreloj.com.mx/search?q='+searchFormInput.value);

      }
      else if(transcript.toLowerCase().trim()==="salir del sitio") {
             
      var mensaje;
      var opcion = confirm("Para salir dar clic en aceptar");
     
      if (opcion == true) { 
         window.close();     
         recognition.stop();
    } else {
        mensaje = "Has clickado Cancelar";
    }
    document.getElementById("ejemplo").innerHTML = mensaje;

      }
      else if(transcript.toLowerCase().trim()==="tienda") {
        window.open('https://www.elektra.com.mx/'+searchFormInput.value+'?_q='+searchFormInput.value+'&map=ft');
      }
      else if(transcript.toLowerCase().trim()==="electrónica") {
        window.open('https://www.radioshack.com.mx/store/radioshack/en/search/?text='+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="medicina") {
        window.open('https://www.fahorro.com/catalogsearch/result/?q='+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="juego") {
        window.open('https://www.xbox.com/es-mx/Search?q='+searchFormInput.value);
      }
      else if(transcript.toLowerCase().trim()==="reloj") {
        window.open('https://lacasadelreloj.com.mx/search?q='+searchFormInput.value);
      }
      else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
 
    
  }
  
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}

   
function close_window() {
  if (confirm("¿Seguro que quieres salir?")) {
    this.close();
  }
}