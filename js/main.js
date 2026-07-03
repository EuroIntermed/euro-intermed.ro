(function () {
  const root = document.querySelector(".ei-root");
  if (!root) return;

  const routes = {
    "seller-flow": {
      label: "Vreau să vând stoc",
      targetChannel: "palletclearance-or-angrosist",
      whatsappLabel: "Trimite detalii despre stoc pe WhatsApp",
      whatsappHelper: "Mesaj pregătit pentru categorie, tip de stoc, cantitate și locație.",
      whatsappText: "Buna ziua. Vreau sa vand stoc. Categorie: ___ · Tip stoc: ___ · Cantitate: ___ · Locatie: ___"
    },
    "buyer-flow": {
      label: "Vreau să cumpăr marfă",
      targetChannel: "palletclearance-or-angrosist",
      whatsappLabel: "Trimite o cerere de cumpărare pe WhatsApp",
      whatsappHelper: "Mesaj pregătit pentru categorie, volum și livrare.",
      whatsappText: "Buna ziua. Vreau sa cumpar marfa. Categorie: ___ · Volum: ___ · Livrare: ___"
    },
    "sourcing-flow": {
      label: "Am nevoie de sourcing",
      targetChannel: "angrosist",
      whatsappLabel: "Trimite o cerere de sourcing pe WhatsApp",
      whatsappHelper: "Mesaj pregătit pentru produs, cantitate și livrare.",
      whatsappText: "Buna ziua. Am nevoie de sourcing B2B. Produs/categorie: ___ · Cantitate: ___ · Livrare: ___"
    },
    "market-entry-flow": {
      label: "Vreau să intru pe piața din România",
      targetChannel: "euro-intermed",
      whatsappLabel: "Discută intrarea pe piața din România",
      whatsappHelper: "Mesaj pregătit pentru furnizorii europeni și piețele actuale.",
      whatsappText: "Buna ziua. Sunt furnizor european si vreau sa intru pe piata din Romania. Produs: ___ · Piete actuale: ___"
    },
    "skalyou-flow": {
      label: "Vreau scalare B2B cu AI",
      targetChannel: "skalyou-roadmap",
      whatsappLabel: "Discută scalarea B2B cu AI",
      whatsappHelper: "Mesaj pregătit pentru provocarea B2B sau fluxul dorit.",
      whatsappText: "Buna ziua. Vreau sa discut despre scalare B2B / digitalizare. Provocare actuala: ___"
    },
    "other-b2b-flow": {
      label: "Altă oportunitate B2B",
      targetChannel: "euro-intermed-triage",
      whatsappLabel: "Contactează Euro Intermed",
      whatsappHelper: "Mesaj general pentru oportunități B2B mixte sau neclare.",
      whatsappText: "Buna ziua. Am o oportunitate B2B si vreau sa discut cu Euro Intermed. Detalii: ___"
    }
  };

  const nav = root.querySelector("[data-ei-nav]");
  const menu = root.querySelector("[data-ei-menu]");
  const menuToggle = root.querySelector("[data-ei-menu-toggle]");
  const routeSelect = root.querySelector("[data-ei-route-select]");
  const targetChannelInput = root.querySelector("[data-ei-target-channel]");
  const whatsappLink = root.querySelector("[data-ei-whatsapp-link]");
  const whatsappHelper = root.querySelector("[data-ei-whatsapp-helper]");
  const form = root.querySelector("[data-ei-form]");
  const formStatus = root.querySelector("[data-ei-form-status]");
  const submitButton = root.querySelector("[data-ei-submit]");
  const aiFallback = root.querySelector("[data-ei-ai-fallback]");
  const aiWidgetContainer = root.querySelector("#ai-widget-container");
  const mobileCta = root.querySelector("[data-ei-mobile-cta]");
  let selectedRoute = routeSelect ? routeSelect.value : "";

  function setMenu(open) {
    if (!menu || !menuToggle) return;
    menu.classList.toggle("ei-is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  }

  function updateNavState() {
    if (!nav) return;
    nav.classList.toggle("ei-is-scrolled", window.scrollY > 18);
  }

  function scrollToForm() {
    const target = root.querySelector("#b2b-form");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearErrors() {
    root.querySelectorAll(".ei-has-error").forEach((field) => field.classList.remove("ei-has-error"));
    root.querySelectorAll("[data-error-for]").forEach((error) => {
      error.textContent = "";
    });
  }

  function setError(fieldName, message) {
    const field = root.querySelector(`[data-field="${fieldName}"]`);
    const error = root.querySelector(`[data-error-for="${fieldName}"]`);
    if (field) field.classList.add("ei-has-error");
    if (error) error.textContent = message;
  }

  function setStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.remove("ei-is-success", "ei-is-error");
    if (type) formStatus.classList.add(`ei-is-${type}`);
  }

  function updateRouteFields(route) {
    root.querySelectorAll("[data-route-fields]").forEach((group) => {
      const isActive = group.getAttribute("data-route-fields") === route;
      group.hidden = !isActive;
      group.querySelectorAll("input, select, textarea").forEach((field) => {
        field.disabled = !isActive;
        if (field.hasAttribute("data-route-required")) {
          field.required = isActive;
        }
      });
    });
  }

  function updateRouteButtons(route) {
    root.querySelectorAll("[data-route]").forEach((button) => {
      const isSelected = button.getAttribute("data-route") === route;
      button.classList.toggle("ei-is-selected", isSelected);
      if (button.hasAttribute("aria-pressed")) {
        button.setAttribute("aria-pressed", String(isSelected));
      }
    });
  }

  function updateWhatsApp(route) {
    if (!whatsappLink) return;
    const config = routes[route] || routes["other-b2b-flow"];
    whatsappLink.href = `https://wa.me/40745799995?text=${encodeURIComponent(config.whatsappText)}`;
    whatsappLink.textContent = config.whatsappLabel;
    if (whatsappHelper) whatsappHelper.textContent = config.whatsappHelper;
  }

  function selectRoute(route, options = {}) {
    if (!routes[route]) return;
    selectedRoute = route;
    clearErrors();
    setStatus("", "");
    if (routeSelect) routeSelect.value = route;
    if (targetChannelInput) targetChannelInput.value = routes[route].targetChannel;
    if (aiWidgetContainer) aiWidgetContainer.dataset.defaultRoute = route;
    updateRouteButtons(route);
    updateRouteFields(route);
    updateWhatsApp(route);
    if (options.scroll) scrollToForm();
  }

  function fieldValue(name) {
    const field = form ? form.elements[name] : null;
    if (!field) return "";
    return String(field.value || "").trim();
  }

  function validateForm() {
    clearErrors();
    setStatus("", "");
    let valid = true;
    const route = fieldValue("selected_route");
    const email = fieldValue("email");
    const phone = fieldValue("phone");
    const requiredFields = [
      ["selected_route", "route", "Te rugăm să alegi ce descrie cel mai bine cererea ta."],
      ["company_name", "company_name", "Adaugă numele companiei."],
      ["country", "country", "Adaugă țara."],
      ["contact_person", "contact_person", "Adaugă persoana de contact."]
    ];

    requiredFields.forEach(([name, fieldName, message]) => {
      if (!fieldValue(name)) {
        setError(fieldName, message);
        valid = false;
      }
    });

    if (!email && !phone) {
      setError("phone", "Adaugă fie un număr de telefon/WhatsApp, fie o adresă de email.");
      setError("email", "Adaugă fie o adresă de email, fie un număr de telefon/WhatsApp.");
      valid = false;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", "Adaugă o adresă de email validă.");
      valid = false;
    }

    if (route) {
      root.querySelectorAll(`[data-route-fields="${route}"] [data-route-required]`).forEach((field) => {
        if (!String(field.value || "").trim()) {
          const wrapper = field.closest("[data-field]");
          const fieldName = wrapper ? wrapper.getAttribute("data-field") : field.name;
          setError(fieldName, "Câmp obligatoriu pentru ruta selectată.");
          valid = false;
        }
      });
    }

    if (!form.elements.b2b_confirmed.checked || !form.elements.contact_consent.checked) {
      setError("consent", "Confirmă că solicitarea este B2B și că putem folosi datele pentru a-ți răspunde.");
      valid = false;
    }

    return valid;
  }

  function resetSubmitState() {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Trimite cererea";
    }
  }

  async function submitForm(event) {
    event.preventDefault();
    if (!validateForm()) {
      setStatus("Te rugăm să verifici câmpurile obligatorii și să încerci din nou.", "error");
      const firstError = root.querySelector(".ei-has-error input, .ei-has-error select, .ei-has-error textarea");
      if (firstError) firstError.focus();
      return;
    }

    if (window.location.protocol === "file:") {
      setStatus("Formularul este valid, dar trimiterea reală necesită rularea printr-un server PHP.", "error");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Se trimite...";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Formularul nu a putut fi trimis.");
      }
      setStatus("Am primit cererea ta. Echipa va analiza informațiile și va reveni cu următorul pas.", "success");
      form.reset();
      selectedRoute = "";
      updateRouteButtons("");
      updateRouteFields("");
      if (targetChannelInput) targetChannelInput.value = "";
      if (aiWidgetContainer) aiWidgetContainer.dataset.defaultRoute = "";
      if (whatsappLink) {
        whatsappLink.href = "https://wa.me/40745799995";
        whatsappLink.textContent = "Scrie-ne pe WhatsApp";
      }
      if (whatsappHelper) whatsappHelper.textContent = "Contactează Euro Intermed cu intenția deja completată.";
    } catch (error) {
      setStatus(
        "Ceva nu a funcționat și formularul nu a putut fi trimis. Te rugăm să încerci din nou sau să folosești WhatsApp/email.",
        "error"
      );
    } finally {
      resetSubmitState();
    }
  }

  function initFaq() {
    root.querySelectorAll(".ei-faq__question").forEach((button) => {
      button.addEventListener("click", () => {
        const target = root.querySelector(`#${button.getAttribute("aria-controls")}`);
        const open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        if (target) target.hidden = open;
      });
    });
  }

  function initMobileCtaObserver() {
    if (!mobileCta || !("IntersectionObserver" in window)) return;
    const formSection = root.querySelector("#b2b-form");
    if (!formSection) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          mobileCta.classList.toggle("ei-is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(formSection);
  }

  window.addEventListener("scroll", updateNavState, { passive: true });
  updateNavState();

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  if (menu) {
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  root.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      selectRoute(button.getAttribute("data-route"), { scroll: true });
    });
  });

  if (routeSelect) {
    routeSelect.addEventListener("change", () => {
      selectRoute(routeSelect.value, { scroll: false });
    });
  }

  root.querySelectorAll("[data-ei-ai-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const route = button.getAttribute("data-ei-route") || selectedRoute || "other-b2b-flow";
      selectRoute(route, { scroll: true });
      if (aiFallback) aiFallback.hidden = false;
    });
  });

  if (form) form.addEventListener("submit", submitForm);

  updateRouteFields("");
  updateWhatsApp("other-b2b-flow");
  initFaq();
  initMobileCtaObserver();
})();
