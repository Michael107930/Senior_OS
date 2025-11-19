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

  (function() {
  // valores por defecto y límites
  const DEFAULT = 16;            // 16px = 1rem por defecto
  const MIN = 12;
  const MAX = 28;

  const range = document.getElementById('fontRange');
  const btnInc = document.getElementById('increase');
  const btnDec = document.getElementById('decrease');
  const btnReset = document.getElementById('reset');
  const current = document.getElementById('currentSize');

  // inicializar atributos del range
  range.min = MIN;
  range.max = MAX;
  range.step = 1;

  // cargar tamaño guardado si existe
  const saved = Number(localStorage.getItem('siteFontSize'));
  const initial = (saved && !Number.isNaN(saved)) ? saved : DEFAULT;

  function apply(sizePx) {
    // Aplica al root (html). Esto hace que 1rem = sizePx.
    document.documentElement.style.fontSize = sizePx + 'px';
    range.value = sizePx;
    current.textContent = `${sizePx}px (${(sizePx / DEFAULT).toFixed(2)}rem)`;
    // guarda preferencia
    localStorage.setItem('siteFontSize', String(sizePx));
  }

  // eventos
  range.addEventListener('input', (e) => {
    apply(e.target.value);
  });

  btnInc.addEventListener('click', () => {
    let v = Math.min(MAX, Number(range.value) + 1);
    apply(v);
  });

  btnDec.addEventListener('click', () => {
    let v = Math.max(MIN, Number(range.value) - 1);
    apply(v);
  });

  btnReset.addEventListener('click', () => {
    localStorage.removeItem('siteFontSize');
    apply(DEFAULT);
  });

  // atajos de teclado accesibles: Ctrl + +, Ctrl + -
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && !e.shiftKey && (e.key === '+' || e.key === '=')) {
      e.preventDefault();
      btnInc.click();
    } else if (e.ctrlKey && e.key === '-') {
      e.preventDefault();
      btnDec.click();
    } else if (e.ctrlKey && e.key.toLowerCase() === '0') {
      e.preventDefault();
      btnReset.click();
    }
  });

  // Aplicar inicial
  apply(initial);
})();

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
    window.open('../apps/ajustes.html', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'agenda') {
    window.open('../apps/agenda.html', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  }else if (appName === 'documentacion') {
    window.open('https://1drv.ms/w/c/7ee0f5e33317509f/Ee3N9nZuWchKlUT_rz5ZbasBknbgpBYh5QwI4ZdL_jLxRw?e=A0yIb9', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'presentacion') {
    window.open('../apps/presentacion.html', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else if (appName === 'manualusuario') {
    window.open('https://www.canva.com/design/DAG5IyJy0lk/fIbRc3si1z5KhqQh-5y5nw/edit?utm_content=DAG5IyJy0lk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', '_blank', `width=${windowWidth},height=${windowHeight},left=${leftPosition},top=${topPosition}`);
  } else {
    console.log('App no reconocida:', appName);
  }
}

