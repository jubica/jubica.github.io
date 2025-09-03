---
permalink: /
title: "Building Safe Hydrogen Infrastructure through Materials Science."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- {: .text-justify} -->
👋 Hi! I'm Jubica, a doctoral researcher at Ghent University, specializing in the **impact of hydrogen on pipeline steels** to ensure the safety and reliability of hydrogen infrastructure. My work is a collaboration with [Fluxys](https://www.fluxys.com/) (a Belgian pipeline network operator) and the [Soete Laboratory](https://www.ugent.be/ea/emsme/en/research/soete).

☎️ [Contact Me](https://cal.com/jubica)

<div class="linkedin-badge-container" id="linkedin-container">
  <div class="badge-base LI-profile-badge"
       data-locale="en_US"
       data-size="large"
       data-theme="light"
       data-type="HORIZONTAL"
       data-vanity="jubica"
       data-version="v1">
    <a class="badge-base__link LI-simple-link"
       href="https://be.linkedin.com/in/jubica?trk=profile-badge">
      Visit my LinkedIn profile
    </a>
  </div>
</div>

<script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
<script>
  const LINKEDIN_SRC = "https://platform.linkedin.com/badges/js/profile.js";

  function ensureLinkedInScript(callback) {
    if ((window.LIBadge && typeof window.LIBadge.parse === "function") ||
        (window.IN && typeof window.IN.parse === "function")) {
      callback();
      return;
    }
    const s = document.createElement("script");
    s.src = LINKEDIN_SRC + "?ts=" + Date.now();
    s.async = true;
    s.defer = true;
    s.onload = callback;
    document.body.appendChild(s);
  }

  function parseLinkedIn(container) {
    if (window.LIBadge && typeof window.LIBadge.parse === "function") {
      window.LIBadge.parse(container);
    } else if (window.IN && typeof window.IN.parse === "function") {
      window.IN.parse(container);
    }
  }

  function currentThemeIsDark() {
    return (
      document.documentElement.getAttribute("data-theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function renderLinkedInBadge() {
    const container = document.querySelector(".linkedin-badge-container");
    if (!container) return;

    const isDark = currentThemeIsDark();

    container.innerHTML = `
      <div class="badge-base LI-profile-badge"
           data-locale="en_US"
           data-size="large"
           data-theme="${isDark ? "light" : "dark"}"
           data-type="HORIZONTAL"
           data-vanity="jubica"
           data-version="v1">
        <a class="badge-base__link LI-simple-link"
           href="https://be.linkedin.com/in/jubica?trk=profile-badge">
          Visit my LinkedIn profile
        </a>
      </div>
    `;

    if ((window.LIBadge && typeof window.LIBadge.parse === "function") ||
        (window.IN && typeof window.IN.parse === "function")) {
      parseLinkedIn(container);
    } else {
      ensureLinkedInScript(() => parseLinkedIn(container));
    }
  }

  // Initial render
  document.addEventListener("DOMContentLoaded", renderLinkedInBadge);

  // Hook into your theme toggle button
  const toggleBtn = document.querySelector("#theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      // ⚡ DO NOT touch data-theme here!
      // Your existing theme toggle code already changes it.

      // Just refresh the LinkedIn badge
      renderLinkedInBadge();
    });
  }
</script>

⚠️ Using a smartphone 📱? Tap the menu in the top right to see more of my work.
{: .notice}

Research Focus 🎯 and Key Themes 🔑
======

* My doctoral research investigates the impact of hydrogen on pipeline steels to support material selection for safe hydrogen service.
* A key focus has been to establish a **screening methodology** by identifying critical material parameters that influence hydrogen sensitivity.
* I have developed a **gaseous charging method** using autoclaves to study hydrogen uptake under static conditions.
* I have also explored the role of oxygen as a gaseous inhibitor to limit hydrogen absorption, with a focus on concentrations, temperatures, and pressures closer to real-world applications.
* I have studied the effects of **cathodic overprotection** on pipeline steels by investigating different charging current densities.
* I have analyzed cross-sections of various pipeline steel base materials.
* I have developed the **hydrogen microprint technique** in-house to study the preferential hydrogen sites in steels.

Technical Expertise and Methods 🔧
======

My expertise covers a range of advanced methods for materials and hydrogen characterization:

* **Microstructural Characterization:** Light Optical Microscopy (LOM), Scanning Electron Microscopy (SEM), Electron Backscatter Diffraction (EBSD), Energy Dispersive X-ray Spectroscopy (EDS), and X-ray Diffraction (XRD). I also integrated Positron Annihilation Spectroscopy (PAS) results from a collaboration with SCK to complement microstructural insights.
* **Hydrogen Characterization Techniques:** Electrochemical Hydrogen Permeation, Thermal Desorption Spectroscopy (TDS), electrochemical hydrogen charging, gaseous hydrogen charging setups, and the hydrogen microprinting technique.
* **Data Analysis & Interpretation:** I have quantified hydrogen diffusivity from permeation experiments, identified and characterized hydrogen trapping sites from TDS experiments, and simulated hydrogen uptake under targeted experimental conditions.

Academic Contributions and Recognition 🎓
======

<picture>
  <source srcset="{{ '/images/finalists-768x481.avif' | relative_url }}" type="image/avif">
  <img src="{{ '/images/finalists-768x481.png' | relative_url }}" alt="EGATEC Young Researchers' Awards 2024 Finalists">
</picture>
*Finalist at EGATEC Young Researchers' Awards 2024*

Beyond my core research, I have guided one Master’s thesis and several Bachelor’s thesis students. I have also assisted and collaborated with fellow PhD researchers and disseminated my findings through conferences and seminars to both industry and academia. My work was recognized as a finalist for the [**EGATEC Young Researchers’ Awards 2024**](https://www.gerg.eu/the-2024-young-researchers-awards/) and selected as one of 27 outstanding papers for presentation at the [**Energy Pipeline Innovation Conference (EPIC25)**](https://epic25.eu/en/EPIC25).

Funding 💰 and Acknowledgements 📊
======
The research has received financial support from the [Energy Transition Fund](https://economie.fgov.be/fr/themes/energie/transition-energetique/fonds-de-transition) via the [HyFit](https://www.fluxys.com/en/about-us/energy-transition/pioneering-research-to-accelerate-the-energy-transition) and [HySource](https://www.fluxys.com/en/about-us/energy-transition/pioneering-research-to-accelerate-the-energy-transition) projects in collaboration with [Fluxys](https://www.fluxys.com/). The research is also supported by [FWO](https://www.fwo.be/en/).

