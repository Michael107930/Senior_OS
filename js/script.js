document.addEventListener("DOMContentLoaded", () => {
  const lockScreen = document.getElementById("lock-screen");
  const desktop = document.getElementById("desktop");
  const unlockBtn = document.getElementById("unlock-btn");
  const pinInput = document.getElementById("pin-input");
  const startBtn = document.getElementById("start-btn");
  const startMenu = document.getElementById("start-menu");
  const restartBtn = document.getElementById("restart");
  const shutdownBtn = document.getElementById("shutdown");
  const clock = document.getElementById("clock");

  // Desbloquear
  unlockBtn.addEventListener("click", () => {
    if (pinInput.value === "1234") {
      lockScreen.style.display = "none";
      desktop.style.display = "block";
    } else {
      alert("PIN incorrecto");
    }
  });
  // Mostrar/Ocultar menú inicio
  startBtn.addEventListener("click", () => {
    startMenu.style.display =
      startMenu.style.display === "flex" ? "none" : "flex";
  });

  // Funciones básicas
  restartBtn.addEventListener("click", () => {
    location.reload();
  });

  shutdownBtn.addEventListener("click", () => {
    desktop.style.display = "none";
    lockScreen.style.display = "flex";
    pinInput.value = "";
  });
  // Reloj
  setInterval(() => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }, 1000);
});

// Abrir apps (nueva pestaña)
function openApp(appName) {
  const windowWidth = 800;
  const windowHeight = 600;
  const leftPosition = (screen.width - windowWidth) / 2;
  const topPosition = (screen.height - windowHeight) / 2;
  // const newWindow;
  if (appName === 'calculadora') {
    window.open('https://calculator-1.com/es/calculadora', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'correo') {
    window.open('https://mail.google.com', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'notes') {
    window.open('https://www.onlinenotepad.io/es', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'navegador') {
    window.open('https://www.google.com', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'plantas') {
    window.open('https://joegardener-com.translate.goog/podcast/growing-herbs/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'recetas') {
    window.open('https://www.recetasnestle.com.mx/recetas', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'letras') {
    window.open('https://api.razzlepuzzles.com/wordsearch?locale=es', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'facebook') {
    window.open('https://www.facebook.com/?locale=es_LA', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'colpensiones') {
    window.open('https://www.colpensiones.gov.co', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'colombiamayor') {
    window.open('https://prosperidadsocial.gov.co/colombia-mayor', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'nuevaeps') {
    window.open('https://www.nuevaeps.com.co', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'eltiempo') {
    window.open('https://www.eltiempo.com', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'mercadolibre') {
    window.open('https://www.mercadolibre.com.co', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'ajustes') {
    window.open('../apps/ajustes.html', '_blank', 'width=800,height=600');
  } else if (appName === 'documentacion') {
    window.open('../apps/documentacion.html', '_blank', 'width=800,height=600');
  } else if (appName === 'presentacion') {
    window.open('../apps/presentacion.html', '_blank', 'width=800,height=600');
  } else if (appName === 'manualusuario') {
    window.open('../apps/manual.html', '_blank', 'width=800,height=600');
  } else {
    console.log('App no reconocida:', appName);
  }
}

