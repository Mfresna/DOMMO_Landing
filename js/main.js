(function () {

  var WHATSAPP_NUMERO = "5492236919857";
  var WHATSAPP_MENSAJE = "¡Hola! Quiero saber más sobre DOMMO - Sede Matheu";

  "use strict";

  // ---- Siempre iniciar la landing desde arriba al refrescar ----
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  // ---- Apertura editorial de DOMMO ----
  var introDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 50 : 1450;
  window.setTimeout(function () {
    document.body.classList.remove("page-loading");
    document.body.classList.add("page-ready");
  }, introDelay);

  // ---- Menu responsive ----
  var menuToggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  // ---- Header transparente sobre la portada, sólido al salir de ella ----
  var siteHeader = document.querySelector(".site-header");
  var heroSection = document.querySelector(".hero");
  if (siteHeader && heroSection) {
    var updateHeader = function () {
      var overHero = heroSection.getBoundingClientRect().bottom > siteHeader.offsetHeight;
      siteHeader.classList.toggle("is-top", overHero);
    };
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    updateHeader();
  }

  // ---- Link activo del nav según la sección visible ----
  if (nav && "IntersectionObserver" in window) {
    var navLinks = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    navLinks.forEach(function (link) {
      var target = document.getElementById(link.getAttribute("href").slice(1));
      if (target) spyObserver.observe(target);
    });
  }

  // ---- WhatsApp: todos los elementos con data-whatsapp ----
  // Editar acá el número (solo dígitos, con código de país) y el mensaje.

  var waUrl = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(WHATSAPP_MENSAJE);
  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.href = waUrl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // ---- Plano interactivo: ficha de cada espacio ----
  var roomDialog = document.querySelector(".room-dialog");
  var roomImage = document.querySelector("[data-room-image]");
  var roomKicker = document.querySelector("[data-room-kicker]");
  var roomTitle = document.querySelector("[data-room-title]");
  var roomDescription = document.querySelector("[data-room-description]");
  var roomFeatures = document.querySelector("[data-room-features]");
  var roomClose = document.querySelector("[data-room-close]");
  var roomData = {
    meeting: { kicker: "Reuniones especiales", title: "DOMMO\nMEETING ROOM", image: "assets/photos/reunion-vidrio.jpg", description: "Un espacio pensado para reunirte con tus clientes o aliados, con mesa de directorio, ocho sillas ergonómicas, TV y Coffee Station cercano.", features: ["Hasta 8 personas", "Mesa de directorio", "TV para presentaciones", "Wi-Fi", "Coffee Station cercano", "Iluminación natural"] },
    sala1: { kicker: "Oficina base", title: "DOMMO ESSENTIAL", image: "assets/photos/oficina.jpg", description: "Oficina privada para atender solo o con un acompañante, con todo lo necesario para una jornada cómoda y flexible.", features: ["Hasta 3-4 personas", "Escritorio principal", "Silla ejecutiva", "Sillas para clientes", "TV", "Wi-Fi de alta velocidad", "Climatización", "Iluminación natural"] },
    sala2: { kicker: "Oficina base", title: "DOMMO ESSENTIAL", image: "assets/photos/oficina.jpg", description: "Oficina privada con escritorio principal, silla ejecutiva y lugar para recibir a tus clientes o pacientes.", features: ["Hasta 3-4 personas", "Escritorio principal", "Silla ejecutiva", "Sillas para clientes", "TV", "Wi-Fi de alta velocidad", "Climatización", "Iluminación natural"] },
    sala3: { kicker: "Espacio premium", title: "DOMMO COMFORT", image: "assets/photos/sala-2.jpg", description: "Oficina con living integrado, pensada para que tus clientes esperen y conversen con más comodidad.", features: ["Hasta 4 personas", "Escritorio principal", "Silla ejecutiva", "Living integrado", "TV", "Wi-Fi de alta velocidad", "Climatización", "Iluminación natural"] },
    sala4: { kicker: "Espacio premium", title: "DOMMO COMFORT", image: "assets/photos/sala-2.jpg", description: "Oficina con living integrado, pensada para que tus clientes esperen y conversen con más comodidad.", features: ["Hasta 4 personas", "Escritorio principal", "Silla ejecutiva", "Living integrado", "TV", "Wi-Fi de alta velocidad", "Climatización", "Iluminación natural"] },
    sala5: { kicker: "Espacio único", title: "DOMMO LAB", image: "assets/photos/sala-suite-1-copia.jpg", description: "Oficina con bacha de agua corriente, ideal para profesionales de la salud y la estética.", features: ["Hasta 2 personas", "Bacha con agua corriente", "Mueble bajo mesada", "Escritorio principal", "TV", "Wi-Fi de alta velocidad", "Climatización", "Iluminación natural"] },
    sala6: { kicker: "Oficina base", title: "DOMMO ESSENTIAL", image: "assets/photos/oficina.jpg", description: "Oficina privada para trabajar con tranquilidad en un entorno cuidado y luminoso.", features: ["Hasta 3-4 personas", "Escritorio principal", "Silla ejecutiva", "Sillas para clientes", "TV", "Wi-Fi de alta velocidad", "Climatización", "Iluminación natural"] },
    sala7: { kicker: "Oficina base", title: "DOMMO ESSENTIAL", image: "assets/photos/oficina.jpg", description: "Oficina privada para una jornada de trabajo cómoda y concentrada.", features: ["Hasta 3-4 personas", "Escritorio principal", "Silla ejecutiva", "Sillas para clientes", "TV", "Wi-Fi de alta velocidad", "Climatización", "Iluminación natural"] }
  };

  function closeRoomDialog() {
    if (roomDialog && roomDialog.open) roomDialog.close();
  }

  if (roomDialog && roomImage && roomTitle && roomDescription && roomFeatures) {
    document.querySelectorAll(".room").forEach(function (roomButton) {
      var isUpper = !!roomButton.closest(".floorplan-map--upper");
      var roomKey = roomButton.classList.contains("room--meeting") ? "meeting" : isUpper && roomButton.classList.contains("room--upper-top") ? "sala6" : isUpper && roomButton.classList.contains("room--suite") ? "sala3" : isUpper && roomButton.classList.contains("room--second") ? "sala7" : isUpper && roomButton.classList.contains("room--hall") ? "sala4" : !isUpper && roomButton.classList.contains("room--lab") ? "sala5" : !isUpper && roomButton.classList.contains("room--common") ? "sala1" : "sala2";
      roomButton.setAttribute("role", "button");
      roomButton.setAttribute("tabindex", "0");
      roomButton.setAttribute("aria-haspopup", "dialog");
      roomButton.textContent = roomData[roomKey].title;
      function openRoomDialog() {
        var room = roomData[roomKey];
        roomImage.src = room.image;
        roomImage.alt = room.title;
        if (roomKicker) roomKicker.textContent = room.kicker;
        roomTitle.textContent = room.title;
        roomDescription.textContent = room.description;
        roomFeatures.textContent = "";
        room.features.forEach(function (feature) {
          var item = document.createElement("li");
          item.textContent = feature;
          roomFeatures.appendChild(item);
        });
        if (typeof roomDialog.showModal === "function") roomDialog.showModal();
        else roomDialog.setAttribute("open", "");
      }
      roomButton.addEventListener("click", openRoomDialog);
      roomButton.addEventListener("keydown", function (event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openRoomDialog(); } });
    });
    roomClose.addEventListener("click", closeRoomDialog);
    roomDialog.addEventListener("click", function (event) { if (event.target === roomDialog) closeRoomDialog(); });
    roomDialog.addEventListener("cancel", function (event) { event.preventDefault(); closeRoomDialog(); });
  }

  // ---- Año del footer ----
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---- Aparicion progresiva de contenidos ----
  var revealItems = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach(function (el) { el.classList.add("visible"); });
  } else if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---- Movimiento sutil ligado al scroll ----
  var scrollMotionItems = document.querySelectorAll("[data-scroll-speed]");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion && scrollMotionItems.length) {
    var scrollFrame = null;
    function updateScrollMotion() {
      scrollFrame = null;
      var viewportCenter = window.innerHeight / 2;
      scrollMotionItems.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var distance = viewportCenter - (rect.top + rect.height / 2);
        var speed = Number(el.dataset.scrollSpeed) || 0;
        var offset = Math.max(-34, Math.min(34, distance * speed));
        el.style.transform = "translate3d(0, " + offset.toFixed(2) + "px, 0)";
        el.style.setProperty("--scroll-image-y", (-offset * 0.62).toFixed(2) + "px");
      });
    }
    function requestScrollMotion() {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollMotion);
    }
    window.addEventListener("scroll", requestScrollMotion, { passive: true });
    window.addEventListener("resize", requestScrollMotion);
    requestScrollMotion();
  }
})();
