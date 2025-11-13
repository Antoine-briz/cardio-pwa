// app.js – application Cardio ICU (squelette + intégration future ATB)

// =====================================================================
//  ROUTER DE BASE
// =====================================================================

const $app = document.getElementById("app");

const routes = {
  "#/": renderHome,

  // Anesthésie
  "#/anesthesie": renderAnesthMenu,
  "#/anesthesie/consultations": renderAnesthConsultations,
  "#/anesthesie/antibiopro": renderAnesthAntibiopro,
  "#/anesthesie/chir-cec": renderAnesthChirCecMenu,
  "#/anesthesie/cardio-struct": renderAnesthCardioStructMenu,
  "#/anesthesie/vasculaire": renderAnesthVasculaire,
  "#/anesthesie/radiovasculaire": renderAnesthRadioVasculaire,

  // Réanimation
  "#/reanimation": renderReanMenu,
  "#/reanimation/antibiotherapie": renderReanAntibiotherapieMenu,

  // CEC
  "#/cec": renderCecMenu,

  // Divers
  "#/planning": renderPlanning,
  "#/annuaire": renderAnnuaire,
};

function navigate() {
  const hash = window.location.hash || "#/";
  const view = routes[hash];
  if (view) {
    view();
  } else {
    renderNotFound();
  }
}

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);

// =====================================================================
//  PAGE D’ACCUEIL
// =====================================================================

function renderHome() {
  $app.innerHTML = `
    <section class="home">
      <div class="hero">
        <img src="titre.png" alt="Titre" />
        <h2>Protocoles d’anesthésie & réanimation</h2>
      </div>

      <div class="grid">
        <div class="card" onclick="location.hash = '#/anesthesie'">
          <h3>Protocoles d’anesthésie</h3>
          <img src="anesthesie.png" alt="Anesthésie" class="menu-section-img" />
        </div>

        <div class="card" onclick="location.hash = '#/reanimation'">
          <h3>Réanimation</h3>
          <img src="reanimation.png" alt="Réanimation" class="menu-section-img" />
        </div>

        <div class="card" onclick="location.hash = '#/cec'">
          <h3>Circulation extra-corporelle</h3>
          <img src="cec.png" alt="CEC" class="menu-section-img" />
        </div>
      </div>

      <div style="margin-top:24px;">
        <button class="btn outline" onclick="location.hash = '#/planning'">
          Planning médical
        </button>
        <button class="btn ghost" style="margin-top:8px;" onclick="location.hash = '#/annuaire'">
          Annuaire
        </button>
      </div>
    </section>
  `;
}

// =====================================================================
//  ANESTHÉSIE – MENU PRINCIPAL
// =====================================================================

function renderAnesthMenu() {
  $app.innerHTML = `
    <section>
      <div class="hero">
        <img src="titre.png" alt="Protocoles d’anesthésie" />
        <h2>Protocoles d’anesthésie</h2>
      </div>

      <div class="grid">
        <button class="btn" onclick="location.hash = '#/anesthesie/consultations'">
          Consultations
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/antibiopro'">
          Antibioprophylaxie
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/chir-cec'">
          Chirurgies cardiaques sous CEC
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/cardio-struct'">
          Cardiologie structurelle et rythmologie
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/vasculaire'">
          Chirurgie vasculaire
        </button>
        <button class="btn" onclick="location.hash = '#/anesthesie/radiovasculaire'">
          Radio-vasculaire
        </button>
      </div>
    </section>
  `;
}

// =====================================================================
//  ANESTHÉSIE – SOUS-PAGES (SQUELETTE)
// =====================================================================

function renderAnesthConsultations() {
  $app.innerHTML = `
    <section>
      <h2>Consultations d’anesthésie</h2>
      <p>À compléter à partir du tableau “Consultations” (Euroscore, gestion des traitements…).</p>
    </section>
  `;
}

function renderAnesthChirCecMenu() {
  $app.innerHTML = `
    <section>
      <h2>Chirurgies cardiaques sous CEC</h2>
      <div class="grid">
        <button class="btn" onclick="renderInterventionPontages()">
          Pontages coronaires
        </button>
        <button class="btn">
          RVA / Plastie aortique
        </button>
        <button class="btn">
          RVM / Plastie mitrale
        </button>
        <button class="btn">
          Transplantation cardiaque
        </button>
        <button class="btn">
          Assistances circulatoires
        </button>
      </div>
    </section>
  `;
}

function renderAnesthCardioStructMenu() {
  $app.innerHTML = `
    <section>
      <h2>Cardiologie structurelle et rythmologie</h2>
      <div class="grid">
        <button class="btn">TAVI</button>
        <button class="btn">Mitra-clip</button>
        <button class="btn">Fermeture FOP/CIA</button>
        <button class="btn">Pacemaker / DAI</button>
        <button class="btn">Ablations cœur droit</button>
        <button class="btn">Ablations cœur gauche</button>
      </div>
    </section>
  `;
}

function renderAnesthVasculaire() {
  $app.innerHTML = `
    <section>
      <h2>Chirurgie vasculaire</h2>
      <p>Contenu à insérer à partir du tableau “Chirurgie vasculaire”.</p>
    </section>
  `;
}

function renderAnesthRadioVasculaire() {
  $app.innerHTML = `
    <section>
      <h2>Radio-vasculaire</h2>
      <p>Contenu à insérer à partir du tableau “Radio-vasculaire”.</p>
    </section>
  `;
}

// =====================================================================
//  ANESTHÉSIE – ANTIBIOPROPHYLAXIE
// =====================================================================
//
//  ⚠️ ICI tu recolleras EXACTEMENT ta logique existante de pwa-atb-rules.
//  Par exemple : une fonction `renderAntibioproForm(container)` définie
//  plus bas (voir bloc “CODE EXISTANT ATB”).
//

function renderAnesthAntibiopro() {
  $app.innerHTML = `
    <section>
      <h2>Antibioprophylaxie</h2>
      <div id="antibiopro-root"></div>
    </section>
  `;

  const root = document.getElementById("antibiopro-root");

  // 👉 ICI : appelle ta fonction existante de pwa-atb-rules.
  // Exemple (à adapter exactement au nom de ta fonction) :
  //
  //    renderAntibioproForm(root);
  //
  // Tu colleras la définition de `renderAntibioproForm` dans le bloc
  // “// === CODE EXISTANT ATB – ANTIBIOPROPHYLAXIE ===” plus bas.
}

// =====================================================================
//  RÉANIMATION – MENU
// =====================================================================

function renderReanMenu() {
  $app.innerHTML = `
    <section>
      <div class="hero">
        <img src="titre.png" alt="Réanimation" />
        <h2>Réanimation</h2>
      </div>

      <div class="grid">
        <button class="btn" onclick="location.hash = '#/reanimation/antibiotherapie'">
          Antibiothérapie
        </button>
        <!-- Autres grandes sections de la colonne de gauche du PPT :
             Prescriptions post-opératoires, saignements, FA, ETO, transplant., assistances, etc.
             Tu pourras ajouter ici :
             <button class="btn" onclick="location.hash='#/reanimation/prescriptions'">Prescriptions post-opératoires</button>
        -->
      </div>
    </section>
  `;
}

// =====================================================================
//  RÉANIMATION – ANTIBIOTHÉRAPIE (5 sous-parties existantes ATB)
// =====================================================================

function renderReanAntibiotherapieMenu() {
  $app.innerHTML = `
    <section>
      <h2>Antibiothérapie en Réanimation</h2>
      <div class="grid">
        <button class="btn" onclick="renderAtbProbabilisteMenu()">Probabiliste</button>
        <button class="btn" onclick="renderAtbAdapteeMenu()">Adaptée</button>
        <button class="btn" onclick="renderAtbDurees()">Durée</button>
        <button class="btn" onclick="renderAtbRein()">Adaptation rénale</button>
        <button class="btn" onclick="renderAtbModalites()">Modalités</button>
      </div>
      <div id="atb-section-root" style="margin-top:16px;"></div>
    </section>
  `;
}

// Les 5 fonctions suivantes se contentent de déléguer à tes fonctions
// existantes de pwa-atb-rules (renderProbaMenu, renderAdapteeMenu, etc.)

function renderAtbProbabilisteMenu() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";
  // 👉 Ici tu appelleras ta fonction existante :
  //    renderProbaMenu(root);
}

function renderAtbAdapteeMenu() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";
  // 👉 Ici :
  //    renderAdapteeMenu(root);
}

function renderAtbDurees() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";
  // 👉 Ici :
  //    renderDureesForm(root);
}

function renderAtbRein() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";
  // 👉 Ici :
  //    renderReinForm(root);
}

function renderAtbModalites() {
  const root = document.getElementById("atb-section-root");
  root.innerHTML = "";
  // 👉 Ici :
  //    renderModalitesForm(root);
}

// =====================================================================
//  CEC
// =====================================================================

function renderCecMenu() {
  $app.innerHTML = `
    <section>
      <div class="hero">
        <img src="cec.png" alt="CEC" class="menu-section-img" />
        <h2>Circulation extra-corporelle</h2>
      </div>
      <p>Menu CEC à remplir ensuite (priming, anticoagulation, sevrage, particularités, etc.).</p>
    </section>
  `;
}

// =====================================================================
//  PAGES “PLANNING” ET “ANNUAIRE” (PLACEHOLDERS)
// =====================================================================

function renderPlanning() {
  $app.innerHTML = `
    <section>
      <h2>Planning médical</h2>
      <p>Zone à personnaliser (planning de garde, liens vers outils externes, etc.).</p>
    </section>
  `;
}

function renderAnnuaire() {
  $app.innerHTML = `
    <section>
      <h2>Annuaire</h2>
      <p>Zone à personnaliser (numéros utiles, mails, spécialités, etc.).</p>
    </section>
  `;
}

// =====================================================================
//  PAGE 404
// =====================================================================

function renderNotFound() {
  $app.innerHTML = `
    <section>
      <h2>Page introuvable</h2>
      <button class="btn" onclick="location.hash = '#/'">Retour au menu</button>
    </section>
  `;
}

// =====================================================================
//  OUTIL GÉNÉRIQUE POUR LES PAGES D’INTERVENTION
// =====================================================================
//
//  Ce helper sert pour chaque intervention d’anesthésie / réanimation :
//   1/ Titre de l’intervention
//   2/ éventuellement un sous-titre
//   3/ une liste d’encadrés repliables (accordéons).
//
//  Chaque encadré :
//   - encadre.titre : texte du bandeau
//   - encadre.html  : contenu HTML détaillé (issu de ton tableau PPT)
//

function renderInterventionPage({ titre, sousTitre, encadres }) {
  $app.innerHTML = `
    <section>
      <h2>${titre}</h2>
      ${sousTitre ? `<h3>${sousTitre}</h3>` : ""}

      ${encadres
        .map(
          (e, idx) => `
        <article class="accordion" data-idx="${idx}">
          <header class="accordion-header">
            <span>${e.titre}</span>
            <span class="accordion-toggle-icon">▼</span>
          </header>
          <div class="accordion-body">
            ${e.html}
          </div>
        </article>
      `
        )
        .join("")}
    </section>
  `;

  document
    .querySelectorAll(".accordion-header")
    .forEach((header) => {
      header.addEventListener("click", () => {
        const acc = header.parentElement;
        acc.classList.toggle("open");
      });
    });
}

// =====================================================================
//  EXEMPLE : INTERVENTION “PONTAGES CORONAIRES”
// =====================================================================
//
//  ⚠️ Pour l’instant, je ne peux pas reconstituer 100 % de la logique
//  fine (toutes les conditions, tous les calculs) uniquement à partir
//  de l’extraction automatique du PPT, mais la structure est prête.
//
//  Tu pourras peaufiner les champs rouges (inputs), les calculs (vert)
//  et les conditions (orange) directement dans le HTML ci-dessous.
//

function renderInterventionPontages() {
  const encadres = [
    {
      titre: "Caractéristiques patient",
      html: `
        <p><strong>(Choix)</strong></p>
        <div class="form">
          <div class="row">
            <label>Poids (kg)
              <input type="number" id="pontages-poids" min="20" max="250" step="1" />
            </label>
            <label>
              <input type="checkbox" id="pontages-imc50" />
              IMC > 50 kg/m²
            </label>
          </div>
          <div class="row">
            <label>
              <input type="checkbox" id="pontages-induction-risque" />
              Induction à risque (FEVG &lt; 30%, valvulopathie sévère, HTAP)
            </label>
            <label>
              <input type="checkbox" id="pontages-seq-rapide" />
              Séquence rapide
            </label>
          </div>
          <div class="row">
            <label>
              <input type="checkbox" id="pontages-allergie-bl" />
              Allergie aux bêta-lactamines
            </label>
          </div>
        </div>
      `,
    },
    {
      titre: "Monitorage",
      html: `
        <p>
          Scope ECG 5 branches, SpO₂, KTA radial gauche, KTC 5 voies jugulaire interne droite,
          température, diurèse. Swan-Ganz si FEVG &lt; 35% ou HTAP.
        </p>
        <p><strong>Objectif :</strong> lent, mou, fermé.</p>
      `,
    },
    {
      titre: "Anesthésie",
      html: `
        <p>
          Induction AIVOC propofol / sufentanil (ou équivalent) avec curare de type rocuronium.
        </p>
        <p>
          Possibilité d’analgésie locorégionale (bloc parasternale / érecteur du rachis) selon protocole, 
          doses calculées en fonction du poids.
        </p>
      `,
    },
    {
      titre: "Antibioprophylaxie",
      html: `
        <p>
          Céfazoline 2 g (+ 1 g dans le priming CEC) puis 1 g toutes les 4 h.
        </p>
        <p>
          En cas d’allergie aux bêta-lactamines : Vancomycine 30 mg/kg IVL, en une injection 30 minutes
          avant l’incision.
        </p>
      `,
    },
    {
      titre: "ETO (optionnelle)",
      html: `
        <p><strong>Fonction VG :</strong> FEVG visuelle, méthode de Simpson biplan, ITV CCVG.</p>
        <p><strong>VD :</strong> TAPSE, onde S tricuspide, indice de Tei, strain VD.</p>
        <p>
          <span style="color:#0070C0;">Lien ETO fonction VG.png</span><br>
          <span style="color:#0070C0;">Lien ETO VD.png</span>
        </p>
      `,
    },
    {
      titre: "CEC",
      html: `
        <p>Canulation artérielle : aortique.</p>
        <p>Canulation veineuse : atrio-cave.</p>
        <p>Heparinisation, ACT, gestion du débit et de la pression selon protocole du service.</p>
        <p>Sevrage de CEC : surveillance hémodynamique invasive, remplissage, inotropes si besoin.</p>
      `,
    },
  ];

  renderInterventionPage({
    titre: "Pontages coronaires",
    sousTitre: "",
    encadres,
  });
}

// =====================================================================
//  === CODE EXISTANT ATB – À COLLER ICI ===============================
// =====================================================================
//
//  Tu peux maintenant copier-coller depuis ton ancien projet pwa-atb-rules :
//
//   1. Toutes les fonctions liées à l’ATB :
//        - renderProbaMenu, renderProbaPneumonieForm, renderProbaIUForm, etc.
//        - renderAdapteeMenu, renderBacteriaPage, etc.
//        - renderDureesForm
//        - renderReinForm
//        - renderModalitesForm
//        - renderAntibioproForm
//
//   2. Les constantes / données nécessaires :
//        - BACTERIA_DATA
//        - Éventuels objets de configuration
//
//  Ensuite :
//   - Dans renderAtbProbabilisteMenu(), appelle `renderProbaMenu(root);`
//   - Dans renderAtbAdapteeMenu(), appelle `renderAdapteeMenu(root);`
//   - Dans renderAtbDurees(), appelle `renderDureesForm(root);`
//   - Dans renderAtbRein(), appelle `renderReinForm(root);`
//   - Dans renderAtbModalites(), appelle `renderModalitesForm(root);`
//   - Dans renderAnesthAntibiopro(), appelle `renderAntibioproForm(root);`
//

