/**
 * StyleSense — Main Application Controller
 * Pure Vanilla JavaScript (Client-side, privacy-focused, zero backend)
 */

import { STYLE_DATA } from './data.js';

// Application State
const state = {
  currentScreen: 'welcome', // 'welcome' | 'step1' | 'step2' | 'step3'
  age: 25,
  stylingPref: 'feminine', // 'feminine' | 'masculine' | 'androgynous'
  heightCm: 165,
  heightUnit: 'cm', // 'cm' | 'ft'
  weightKg: 60,
  weightUnit: 'kg', // 'kg' | 'lb'
  skinToneId: 'medium', // 'fair' | 'light' | 'medium' | 'olive' | 'tan' | 'brown' | 'deep'
  undertoneId: 'warm', // 'warm' | 'cool' | 'neutral'
  occasion: 'casual', // 'casual' | 'formal' | 'party' | 'ethnic'
  hairLength: 'short', // 'short' | 'medium' | 'long'
  theme: 'light' // 'light' | 'dark'
};

// DOM Elements Cache
const DOM = {
  // Screens
  screenWelcome: document.getElementById('screenWelcome'),
  screenStep1: document.getElementById('screenStep1'),
  screenStep2: document.getElementById('screenStep2'),
  screenStep3: document.getElementById('screenStep3'),
  stepsTracker: document.getElementById('stepsTracker'),
  stepIndicator1: document.getElementById('stepIndicator1'),
  stepIndicator2: document.getElementById('stepIndicator2'),
  stepIndicator3: document.getElementById('stepIndicator3'),

  // Header & Theme
  btnThemeToggle: document.getElementById('btnThemeToggle'),
  themeIconSun: document.getElementById('themeIconSun'),
  themeIconMoon: document.getElementById('themeIconMoon'),
  navBrandLink: document.getElementById('navBrandLink'),

  // Welcome CTAs
  btnStartGuide: document.getElementById('btnStartGuide'),
  btnHowItWorks: document.getElementById('btnHowItWorks'),

  // Form Step 1
  formStep1: document.getElementById('formStep1'),
  inputAge: document.getElementById('inputAge'),
  btnHeightUnitCm: document.getElementById('btnHeightUnitCm'),
  btnHeightUnitFt: document.getElementById('btnHeightUnitFt'),
  heightMetricContainer: document.getElementById('heightMetricContainer'),
  heightImperialContainer: document.getElementById('heightImperialContainer'),
  inputHeightCm: document.getElementById('inputHeightCm'),
  inputHeightFt: document.getElementById('inputHeightFt'),
  inputHeightIn: document.getElementById('inputHeightIn'),
  btnWeightUnitKg: document.getElementById('btnWeightUnitKg'),
  btnWeightUnitLb: document.getElementById('btnWeightUnitLb'),
  inputWeight: document.getElementById('inputWeight'),
  weightAffix: document.getElementById('weightAffix'),
  btnBackToWelcome: document.getElementById('btnBackToWelcome'),
  btnContinueStep1: document.getElementById('btnContinueStep1'),
  errorAge: document.getElementById('errorAge'),
  errorHeight: document.getElementById('errorHeight'),
  errorWeight: document.getElementById('errorWeight'),

  // Form Step 2
  skinToneSelector: document.getElementById('skinToneSelector'),
  undertoneSelector: document.getElementById('undertoneSelector'),
  undertoneHelperToggle: document.getElementById('undertoneHelperToggle'),
  undertoneHelper: document.getElementById('undertoneHelper'),
  btnBackToStep1: document.getElementById('btnBackToStep1'),
  btnGenerateResults: document.getElementById('btnGenerateResults'),
  errorSkinTone: document.getElementById('errorSkinTone'),

  // Results Dashboard
  resultsSubheading: document.getElementById('resultsSubheading'),
  btnPrintStyleCard: document.getElementById('btnPrintStyleCard'),
  btnEditInputs: document.getElementById('btnEditInputs'),
  btnRestartApp: document.getElementById('btnRestartApp'),
  metricBmiValue: document.getElementById('metricBmiValue'),
  metricBmiCategory: document.getElementById('metricBmiCategory'),
  metricBmiVisualBox: document.getElementById('metricBmiVisualBox'),
  metricBmiPin: document.getElementById('metricBmiPin'),
  metricSkinToneName: document.getElementById('metricSkinToneName'),
  metricSkinToneDesc: document.getElementById('metricSkinToneDesc'),
  metricSkinSwatch: document.getElementById('metricSkinSwatch'),
  metricSkinToneHex: document.getElementById('metricSkinToneHex'),
  metricUndertoneName: document.getElementById('metricUndertoneName'),
  metricUndertoneDesc: document.getElementById('metricUndertoneDesc'),
  metricMetalsShort: document.getElementById('metricMetalsShort'),
  metricStyleDirection: document.getElementById('metricStyleDirection'),
  metricStyleDirectionDesc: document.getElementById('metricStyleDirectionDesc'),
  metricPreferenceName: document.getElementById('metricPreferenceName'),
  bodyPositiveDisclaimerText: document.getElementById('bodyPositiveDisclaimerText'),

  // Palette Sections
  paletteStylingNote: document.getElementById('paletteStylingNote'),
  paletteBestGrid: document.getElementById('paletteBestGrid'),
  paletteAccentGrid: document.getElementById('paletteAccentGrid'),
  paletteThoughtfulGrid: document.getElementById('paletteThoughtfulGrid'),

  // Outfits
  outfitsGrid: document.getElementById('outfitsGrid'),

  // Themes
  themesGrid: document.getElementById('themesGrid'),

  // Hair
  hairstylesList: document.getElementById('hairstylesList'),
  hairColorsList: document.getElementById('hairColorsList'),

  // Accessories
  accessoryJewelryMetals: document.getElementById('accessoryJewelryMetals'),
  accessoryJewelryDesc: document.getElementById('accessoryJewelryDesc'),
  accessoryJewelryList: document.getElementById('accessoryJewelryList'),
  accessoryBagsList: document.getElementById('accessoryBagsList'),
  accessoryFootwearList: document.getElementById('accessoryFootwearList'),

  // Toast & Modal
  toastNotice: document.getElementById('toastNotice'),
  toastNoticeText: document.getElementById('toastNoticeText'),
  modalHowItWorks: document.getElementById('modalHowItWorks'),
  btnCloseModal: document.getElementById('btnCloseModal'),
  btnModalUnderstood: document.getElementById('btnModalUnderstood')
};

/* ==========================================================================
   Initialization
   ========================================================================== */
function initApp() {
  initTheme();
  renderSkinToneCards();
  bindEvents();
  registerServiceWorker();
}

/* ==========================================================================
   Theme Management (Light / Dark)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('stylesense_theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('stylesense_theme', theme);

  if (theme === 'dark') {
    DOM.themeIconSun.classList.remove('hidden');
    DOM.themeIconMoon.classList.add('hidden');
    DOM.themeIconSun.style.display = 'block';
    DOM.themeIconMoon.style.display = 'none';
  } else {
    DOM.themeIconSun.classList.add('hidden');
    DOM.themeIconMoon.classList.remove('hidden');
    DOM.themeIconSun.style.display = 'none';
    DOM.themeIconMoon.style.display = 'block';
  }
}

function toggleTheme() {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
}

/* ==========================================================================
   Navigation & Screen Transitions
   ========================================================================== */
function showScreen(screenId) {
  state.currentScreen = screenId;

  // Toggle screens
  DOM.screenWelcome.classList.remove('active');
  DOM.screenStep1.classList.remove('active');
  DOM.screenStep2.classList.remove('active');
  DOM.screenStep3.classList.remove('active');

  if (screenId === 'welcome') {
    DOM.screenWelcome.classList.add('active');
    DOM.stepsTracker.style.display = 'none';
  } else if (screenId === 'step1') {
    DOM.screenStep1.classList.add('active');
    DOM.stepsTracker.style.display = 'flex';
    updateProgressTracker(1);
    populateStep1Inputs();
  } else if (screenId === 'step2') {
    DOM.screenStep2.classList.add('active');
    DOM.stepsTracker.style.display = 'flex';
    updateProgressTracker(2);
  } else if (screenId === 'step3') {
    DOM.screenStep3.classList.add('active');
    DOM.stepsTracker.style.display = 'flex';
    updateProgressTracker(3);
    renderResultsDashboard();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressTracker(currentStep) {
  DOM.stepIndicator1.className = 'step-indicator' + (currentStep === 1 ? ' active' : (currentStep > 1 ? ' completed' : ''));
  DOM.stepIndicator2.className = 'step-indicator' + (currentStep === 2 ? ' active' : (currentStep > 2 ? ' completed' : ''));
  DOM.stepIndicator3.className = 'step-indicator' + (currentStep === 3 ? ' active' : '');
}

/* ==========================================================================
   Form Handling & Unit Conversions
   ========================================================================== */
function populateStep1Inputs() {
  if (state.age) DOM.inputAge.value = state.age;

  // Sync preference radio
  const targetRadio = document.querySelector(`input[name="stylingPref"][value="${state.stylingPref}"]`);
  if (targetRadio) {
    targetRadio.checked = true;
    updateRadioCardsHighlight();
  }

  // Sync Height
  if (state.heightUnit === 'cm') {
    DOM.inputHeightCm.value = state.heightCm || '';
  } else {
    const imperial = cmToFeetInches(state.heightCm);
    DOM.inputHeightFt.value = imperial.feet || '';
    DOM.inputHeightIn.value = imperial.inches || '';
  }

  // Sync Weight
  if (state.weightUnit === 'kg') {
    DOM.inputWeight.value = state.weightKg || '';
  } else {
    DOM.inputWeight.value = kgToLbs(state.weightKg) || '';
  }
}

function cmToFeetInches(cm) {
  if (!cm) return { feet: '', inches: '' };
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
}

function feetInchesToCm(feet, inches) {
  const f = parseFloat(feet) || 0;
  const i = parseFloat(inches) || 0;
  return Math.round(((f * 12) + i) * 2.54 * 10) / 10;
}

function kgToLbs(kg) {
  if (!kg) return '';
  return Math.round(kg * 2.20462 * 10) / 10;
}

function lbsToKg(lbs) {
  if (!lbs) return '';
  return Math.round((lbs / 2.20462) * 10) / 10;
}

function setHeightUnit(unit) {
  if (state.heightUnit === unit) return;

  if (unit === 'ft') {
    // Switching from cm to ft
    const cmVal = parseFloat(DOM.inputHeightCm.value);
    if (!isNaN(cmVal) && cmVal > 0) {
      state.heightCm = cmVal;
      const { feet, inches } = cmToFeetInches(cmVal);
      DOM.inputHeightFt.value = feet;
      DOM.inputHeightIn.value = inches;
    }
    DOM.heightMetricContainer.style.display = 'none';
    DOM.heightImperialContainer.style.display = 'grid';
    DOM.btnHeightUnitCm.classList.remove('active');
    DOM.btnHeightUnitFt.classList.add('active');
  } else {
    // Switching from ft to cm
    const feetVal = DOM.inputHeightFt.value;
    const inVal = DOM.inputHeightIn.value;
    if (feetVal) {
      const calculatedCm = feetInchesToCm(feetVal, inVal);
      state.heightCm = calculatedCm;
      DOM.inputHeightCm.value = calculatedCm;
    }
    DOM.heightMetricContainer.style.display = 'block';
    DOM.heightImperialContainer.style.display = 'none';
    DOM.btnHeightUnitCm.classList.add('active');
    DOM.btnHeightUnitFt.classList.remove('active');
  }
  state.heightUnit = unit;
}

function setWeightUnit(unit) {
  if (state.weightUnit === unit) return;

  const currentVal = parseFloat(DOM.inputWeight.value);
  if (!isNaN(currentVal) && currentVal > 0) {
    if (unit === 'lb') {
      // Switching from kg to lb
      state.weightKg = currentVal;
      DOM.inputWeight.value = kgToLbs(currentVal);
      DOM.weightAffix.textContent = 'lb';
    } else {
      // Switching from lb to kg
      const calculatedKg = lbsToKg(currentVal);
      state.weightKg = calculatedKg;
      DOM.inputWeight.value = calculatedKg;
      DOM.weightAffix.textContent = 'kg';
    }
  } else {
    DOM.weightAffix.textContent = unit;
  }

  if (unit === 'lb') {
    DOM.btnWeightUnitKg.classList.remove('active');
    DOM.btnWeightUnitLb.classList.add('active');
  } else {
    DOM.btnWeightUnitKg.classList.add('active');
    DOM.btnWeightUnitLb.classList.remove('active');
  }
  state.weightUnit = unit;
}

function updateRadioCardsHighlight() {
  const radioLabels = document.querySelectorAll('.options-stack .option-radio-card');
  radioLabels.forEach(card => {
    const input = card.querySelector('input[type="radio"]');
    if (input && input.checked) {
      card.classList.add('selected');
      state.stylingPref = input.value;
    } else {
      card.classList.remove('selected');
    }
  });
}

function validateStep1() {
  let isValid = true;

  // Clear previous errors
  DOM.errorAge.style.display = 'none';
  DOM.errorAge.textContent = '';
  DOM.errorHeight.style.display = 'none';
  DOM.errorHeight.textContent = '';
  DOM.errorWeight.style.display = 'none';
  DOM.errorWeight.textContent = '';

  // Validate Age
  const ageVal = parseInt(DOM.inputAge.value, 10);
  if (isNaN(ageVal) || ageVal < 10 || ageVal > 120) {
    DOM.errorAge.textContent = 'Please enter your age (between 10 and 120).';
    DOM.errorAge.style.display = 'flex';
    isValid = false;
  } else {
    state.age = ageVal;
  }

  // Validate Height
  let calculatedCm = 0;
  if (state.heightUnit === 'cm') {
    calculatedCm = parseFloat(DOM.inputHeightCm.value);
    if (isNaN(calculatedCm) || calculatedCm < 80 || calculatedCm > 260) {
      DOM.errorHeight.textContent = 'Please enter a realistic height in centimeters.';
      DOM.errorHeight.style.display = 'flex';
      isValid = false;
    }
  } else {
    const ftVal = parseFloat(DOM.inputHeightFt.value);
    const inVal = parseFloat(DOM.inputHeightIn.value) || 0;
    if (isNaN(ftVal) || ftVal < 2 || ftVal > 8 || inVal < 0 || inVal >= 12) {
      DOM.errorHeight.textContent = 'Please enter your height in feet and inches.';
      DOM.errorHeight.style.display = 'flex';
      isValid = false;
    } else {
      calculatedCm = feetInchesToCm(ftVal, inVal);
    }
  }

  if (isValid && calculatedCm > 0) {
    state.heightCm = calculatedCm;
  }

  // Validate Weight
  const weightInputVal = parseFloat(DOM.inputWeight.value);
  if (isNaN(weightInputVal) || weightInputVal <= 0) {
    DOM.errorWeight.textContent = 'Please enter your weight.';
    DOM.errorWeight.style.display = 'flex';
    isValid = false;
  } else {
    if (state.weightUnit === 'kg') {
      if (weightInputVal < 20 || weightInputVal > 350) {
        DOM.errorWeight.textContent = 'Please enter a realistic weight in kilograms.';
        DOM.errorWeight.style.display = 'flex';
        isValid = false;
      } else {
        state.weightKg = weightInputVal;
      }
    } else {
      if (weightInputVal < 45 || weightInputVal > 770) {
        DOM.errorWeight.textContent = 'Please enter a realistic weight in pounds.';
        DOM.errorWeight.style.display = 'flex';
        isValid = false;
      } else {
        state.weightKg = lbsToKg(weightInputVal);
      }
    }
  }

  return isValid;
}

/* ==========================================================================
   Step 2: Skin Tone & Undertone
   ========================================================================== */
function renderSkinToneCards() {
  DOM.skinToneSelector.innerHTML = '';

  STYLE_DATA.skinTones.forEach(tone => {
    const card = document.createElement('div');
    card.className = `skin-tone-card ${tone.id === state.skinToneId ? 'selected' : ''}`;
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', tone.id === state.skinToneId ? 'true' : 'false');
    card.setAttribute('tabindex', '0');
    card.dataset.toneId = tone.id;

    card.innerHTML = `
      <div class="swatch-circle" style="background-color: ${tone.hex};">
        <svg class="swatch-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="swatch-label">${tone.name}</span>
    `;

    card.addEventListener('click', () => selectSkinTone(tone.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectSkinTone(tone.id);
      }
    });

    DOM.skinToneSelector.appendChild(card);
  });
}

function selectSkinTone(toneId) {
  state.skinToneId = toneId;
  const cards = DOM.skinToneSelector.querySelectorAll('.skin-tone-card');
  cards.forEach(card => {
    if (card.dataset.toneId === toneId) {
      card.classList.add('selected');
      card.setAttribute('aria-checked', 'true');
    } else {
      card.classList.remove('selected');
      card.setAttribute('aria-checked', 'false');
    }
  });
}

function selectUndertone(undertoneId) {
  state.undertoneId = undertoneId;
  const cards = DOM.undertoneSelector.querySelectorAll('.undertone-card');
  cards.forEach(card => {
    if (card.dataset.undertone === undertoneId) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

/* ==========================================================================
   Step 3: Results Calculations & Rendering
   ========================================================================== */
function calculateBmi() {
  const heightM = state.heightCm / 100;
  if (!heightM || heightM <= 0) return null;
  const bmi = state.weightKg / (heightM * heightM);
  return Math.round(bmi * 10) / 10;
}

function getBmiCategory(bmi) {
  if (bmi < 18.5) {
    return {
      category: 'Underweight',
      desc: 'Comfortable, layered fits with soft volume',
      pinPercent: Math.max(5, Math.min(25, ((bmi - 14) / (18.5 - 14)) * 25))
    };
  }
  if (bmi <= 24.9) {
    return {
      category: 'Normal range',
      desc: 'Balanced silhouettes & versatile proportions',
      pinPercent: 25 + Math.min(30, ((bmi - 18.5) / (24.9 - 18.5)) * 30)
    };
  }
  if (bmi <= 29.9) {
    return {
      category: 'Overweight',
      desc: 'Flowing drapes, breathable ease & structured shoulders',
      pinPercent: 55 + Math.min(25, ((bmi - 25) / (29.9 - 25)) * 25)
    };
  }
  return {
    category: 'Obesity',
    desc: 'Relaxed vertical lines, comfortable waistbands & fluid fabrics',
    pinPercent: Math.min(95, 80 + Math.min(15, ((bmi - 30) / 10) * 15))
  };
}

function renderResultsDashboard() {
  const currentSkin = STYLE_DATA.skinTones.find(t => t.id === state.skinToneId) || STYLE_DATA.skinTones[2];
  const currentUndertone = STYLE_DATA.undertones[state.undertoneId] || STYLE_DATA.undertones.warm;
  const palette = STYLE_DATA.palettes[state.undertoneId]?.[state.skinToneId] || STYLE_DATA.palettes.warm.medium;

  // Header Subheading
  DOM.resultsSubheading.textContent = `${currentSkin.name} tone · ${currentUndertone.name} undertone · ${state.stylingPref.charAt(0).toUpperCase() + state.stylingPref.slice(1)} styling`;

  // 1. BMI Metric Card
  const bmi = calculateBmi();
  const isUnder18 = state.age < 18;

  if (isUnder18) {
    DOM.metricBmiValue.textContent = `${bmi}*`;
    DOM.metricBmiCategory.textContent = 'Youth reference';
    DOM.metricBmiVisualBox.style.display = 'none';
    DOM.bodyPositiveDisclaimerText.innerHTML = `
      <strong>Youth Styling Notice:</strong> Because you're under 18, adult BMI categories aren't appropriate here. BMI for children and teenagers is interpreted using age- and sex-specific growth references by healthcare professionals.<br/><br/>
      Styling recommendations remain focused purely on comfort, personal color harmony, and joyful self-expression without body-shape judgment.
    `;
  } else {
    DOM.metricBmiVisualBox.style.display = 'block';
    if (bmi) {
      const { category, desc, pinPercent } = getBmiCategory(bmi);
      DOM.metricBmiValue.textContent = bmi.toFixed(1);
      DOM.metricBmiCategory.textContent = category;
      DOM.metricBmiPin.style.left = `${pinPercent}%`;
      DOM.metricStyleDirectionDesc = desc;
    }
    DOM.bodyPositiveDisclaimerText.textContent =
      'BMI is only a general screening measure. It does not define your body, health, beauty or personal style.';
  }

  // 2. Skin Tone Metric Card
  DOM.metricSkinToneName.textContent = currentSkin.name;
  DOM.metricSkinToneDesc.textContent = currentSkin.description;
  DOM.metricSkinSwatch.style.backgroundColor = currentSkin.hex;
  DOM.metricSkinToneHex.textContent = currentSkin.hex;

  // 3. Undertone Metric Card
  DOM.metricUndertoneName.textContent = `${currentUndertone.name} ${currentUndertone.icon}`;
  DOM.metricUndertoneDesc.textContent = currentUndertone.hint;
  if (state.undertoneId === 'warm') {
    DOM.metricMetalsShort.textContent = 'Gold, Antique Brass, Bronze';
  } else if (state.undertoneId === 'cool') {
    DOM.metricMetalsShort.textContent = 'Silver, White Gold, Platinum';
  } else {
    DOM.metricMetalsShort.textContent = 'Mixed Metals, Rose Gold, Pearls';
  }

  // 4. Style Direction Metric Card
  DOM.metricStyleDirection.textContent = 'Comfort-First';
  const prefName = state.stylingPref === 'feminine' ? 'Feminine' : (state.stylingPref === 'masculine' ? 'Masculine' : 'Androgynous');
  DOM.metricPreferenceName.textContent = `${prefName} Expression`;

  // Render Palettes
  DOM.paletteStylingNote.textContent = palette.stylingNote || 'Curated tones to highlight your natural balance and glow.';
  renderSwatchesGrid(DOM.paletteBestGrid, palette.bestColors);
  renderSwatchesGrid(DOM.paletteAccentGrid, palette.accentColors);
  renderSwatchesGrid(DOM.paletteThoughtfulGrid, palette.thoughtfulColors);

  // Render Outfits
  renderOutfits();

  // Render Themes
  renderColorThemes();

  // Render Hair
  renderHairstyles();
  renderHairColors();

  // Render Accessories
  renderAccessories();
}

function renderSwatchesGrid(container, colorsList) {
  container.innerHTML = '';
  if (!colorsList || !colorsList.length) return;

  colorsList.forEach(color => {
    const card = document.createElement('div');
    card.className = 'color-swatch-card';

    card.innerHTML = `
      <div class="swatch-color-box" style="background-color: ${color.hex};">
        <button class="btn-copy-hex" title="Copy HEX ${color.hex}" aria-label="Copy ${color.name} HEX code">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
      <div class="swatch-info-box">
        <span class="swatch-name" title="${color.name}">${color.name}</span>
        <span class="swatch-hex">${color.hex}</span>
      </div>
    `;

    const copyBtn = card.querySelector('.btn-copy-hex');
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyHexToClipboard(color.hex, color.name);
    });

    // Also copy when clicking card
    card.addEventListener('click', () => {
      copyHexToClipboard(color.hex, color.name);
    });

    container.appendChild(card);
  });
}

function copyHexToClipboard(hex, name) {
  navigator.clipboard.writeText(hex).then(() => {
    showToast(`Copied ${name} (${hex}) to clipboard!`);
  }).catch(() => {
    showToast(`Hex code: ${hex}`);
  });
}

function showToast(message) {
  DOM.toastNoticeText.textContent = message;
  DOM.toastNotice.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    DOM.toastNotice.classList.remove('show');
  }, 2600);
}

/* ==========================================================================
   Outfit Recommendations Rendering
   ========================================================================== */
function renderOutfits() {
  DOM.outfitsGrid.innerHTML = '';

  let outfitList = [];
  const prefGroup = STYLE_DATA.outfitRecommendations[state.stylingPref];
  
  if (prefGroup) {
    // If array structure (masculine/androgynous) or object (feminine)
    if (Array.isArray(prefGroup)) {
      const groupObj = prefGroup[0] || {};
      outfitList = groupObj[state.occasion] || [];
    } else if (typeof prefGroup === 'object') {
      outfitList = prefGroup[state.occasion] || [];
    }
  }

  if (!outfitList || !outfitList.length) {
    DOM.outfitsGrid.innerHTML = '<p style="color: var(--text-muted);">No recommendations available for this occasion.</p>';
    return;
  }

  outfitList.forEach(item => {
    const card = document.createElement('div');
    card.className = 'outfit-card';

    card.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <div class="outfit-meta-pill-stack">
        <div class="outfit-meta-item">
          <strong>Suggested Fabrics:</strong> ${item.fabrics}
        </div>
        <div class="outfit-meta-item">
          <strong>Silhouette Note:</strong> ${item.silhouette}
        </div>
      </div>
    `;

    DOM.outfitsGrid.appendChild(card);
  });
}

/* ==========================================================================
   Color Themes Rendering
   ========================================================================== */
function renderColorThemes() {
  DOM.themesGrid.innerHTML = '';

  Object.values(STYLE_DATA.colorThemes).forEach(theme => {
    const card = document.createElement('div');
    card.className = 'theme-card';

    const chipsHtml = theme.colors.map(c => `
      <div class="theme-chip" style="background-color: ${c.hex};" title="${c.name} (${c.hex})"></div>
    `).join('');

    card.innerHTML = `
      <div>
        <h3>${theme.title}</h3>
        <div class="theme-subtitle">${theme.subtitle}</div>
        <div class="theme-palette-bar">${chipsHtml}</div>
        <p>${theme.description}</p>
      </div>
      <div class="theme-tip">
        Tip: ${theme.stylingTip}
      </div>
    `;

    DOM.themesGrid.appendChild(card);
  });
}

/* ==========================================================================
   Hairstyles & Hair Colors
   ========================================================================== */
function renderHairstyles() {
  DOM.hairstylesList.innerHTML = '';

  const hairGroup = STYLE_DATA.hairstyles[state.hairLength]?.[state.stylingPref] || [];

  hairGroup.forEach(hair => {
    const item = document.createElement('div');
    item.className = 'option-radio-card';
    item.style.cursor = 'default';

    item.innerHTML = `
      <div class="option-radio-card-content">
        <h4>${hair.title}</h4>
        <p>${hair.desc}</p>
      </div>
    `;

    DOM.hairstylesList.appendChild(item);
  });
}

function renderHairColors() {
  DOM.hairColorsList.innerHTML = '';

  const colors = STYLE_DATA.hairColors[state.undertoneId] || STYLE_DATA.hairColors.warm;

  colors.forEach(item => {
    const row = document.createElement('div');
    row.className = 'hair-color-item';

    row.innerHTML = `
      <div class="hair-color-swatch" style="background-color: ${item.hex};"></div>
      <div class="hair-color-details">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
      </div>
    `;

    DOM.hairColorsList.appendChild(row);
  });
}

/* ==========================================================================
   Accessories Rendering
   ========================================================================== */
function renderAccessories() {
  const currentUndertone = state.undertoneId;
  const jewelryData = STYLE_DATA.accessories.jewelry[currentUndertone] || STYLE_DATA.accessories.jewelry.warm;
  const bagsData = STYLE_DATA.accessories.bags[currentUndertone] || STYLE_DATA.accessories.bags.warm;
  const footwearData = STYLE_DATA.accessories.footwear;

  // Jewelry
  DOM.accessoryJewelryMetals.textContent = jewelryData.metals;
  DOM.accessoryJewelryDesc.textContent = jewelryData.description;
  DOM.accessoryJewelryList.innerHTML = jewelryData.staples.map(staple => `
    <li>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <span>${staple}</span>
    </li>
  `).join('');

  // Bags
  DOM.accessoryBagsList.innerHTML = bagsData.map(bag => `
    <li>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
      </svg>
      <span><strong>${bag.type}:</strong> ${bag.shade}</span>
    </li>
  `).join('');

  // Footwear
  const footwearItems = [
    `<strong>Traditional:</strong> ${footwearData.traditional[0]}`,
    `<strong>Festive:</strong> ${footwearData.traditional[1]}`,
    `<strong>Neutral:</strong> ${footwearData.neutrals[0]}`,
    `<strong>Accent:</strong> ${footwearData.accents[0]}`
  ];

  DOM.accessoryFootwearList.innerHTML = footwearItems.map(fw => `
    <li>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${fw}</span>
    </li>
  `).join('');
}

/* ==========================================================================
   Event Listeners
   ========================================================================== */
function bindEvents() {
  // Brand Home Click
  DOM.navBrandLink.addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('welcome');
  });

  // Dark Mode Toggle
  DOM.btnThemeToggle.addEventListener('click', toggleTheme);

  // Welcome CTAs
  DOM.btnStartGuide.addEventListener('click', () => showScreen('step1'));
  DOM.btnHowItWorks.addEventListener('click', openModal);

  // Modal
  DOM.btnCloseModal.addEventListener('click', closeModal);
  DOM.btnModalUnderstood.addEventListener('click', closeModal);
  DOM.modalHowItWorks.addEventListener('click', (e) => {
    if (e.target === DOM.modalHowItWorks) closeModal();
  });

  // Unit Toggles
  DOM.btnHeightUnitCm.addEventListener('click', () => setHeightUnit('cm'));
  DOM.btnHeightUnitFt.addEventListener('click', () => setHeightUnit('ft'));
  DOM.btnWeightUnitKg.addEventListener('click', () => setWeightUnit('kg'));
  DOM.btnWeightUnitLb.addEventListener('click', () => setWeightUnit('lb'));

  // Styling Preference radio clicks
  const radioInputs = document.querySelectorAll('input[name="stylingPref"]');
  radioInputs.forEach(radio => {
    radio.addEventListener('change', updateRadioCardsHighlight);
  });

  // Step 1 Form Actions
  DOM.btnBackToWelcome.addEventListener('click', () => showScreen('welcome'));
  DOM.formStep1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateStep1()) {
      showScreen('step2');
    }
  });

  // Step 2 Actions
  DOM.btnBackToStep1.addEventListener('click', () => showScreen('step1'));
  DOM.btnGenerateResults.addEventListener('click', () => {
    showScreen('step3');
  });

  // Undertone Cards
  const undertoneCards = DOM.undertoneSelector.querySelectorAll('.undertone-card');
  undertoneCards.forEach(card => {
    card.addEventListener('click', () => {
      const undertone = card.dataset.undertone;
      if (undertone) selectUndertone(undertone);
    });
  });

  // Undertone Accordion Helper
  DOM.undertoneHelperToggle.addEventListener('click', () => {
    DOM.undertoneHelper.classList.toggle('open');
  });

  // Results Actions
  DOM.btnPrintStyleCard.addEventListener('click', () => window.print());
  DOM.btnEditInputs.addEventListener('click', () => showScreen('step1'));
  DOM.btnRestartApp.addEventListener('click', () => {
    state.age = 25;
    state.heightCm = 165;
    state.weightKg = 60;
    state.skinToneId = 'medium';
    state.undertoneId = 'warm';
    state.stylingPref = 'feminine';
    state.occasion = 'casual';
    state.hairLength = 'short';
    populateStep1Inputs();
    selectSkinTone('medium');
    selectUndertone('warm');
    showScreen('welcome');
  });

  // Occasion Tabs
  const occasionTabs = document.querySelectorAll('.tabs-container button[data-occasion]');
  occasionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      occasionTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.occasion = tab.dataset.occasion;
      renderOutfits();
    });
  });

  // Hair Length Tabs
  const hairTabs = document.querySelectorAll('.tabs-container button[data-hairlength]');
  hairTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      hairTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.hairLength = tab.dataset.hairlength;
      renderHairstyles();
    });
  });
}

function openModal() {
  DOM.modalHowItWorks.classList.add('open');
}

function closeModal() {
  DOM.modalHowItWorks.classList.remove('open');
}

/* ==========================================================================
   Service Worker Registration (PWA Offline)
   ========================================================================== */
function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          // Service worker active
        })
        .catch(() => {
          // SW registration ignored in non-https or preview sandbox
        });
    });
  }
}

// Boot application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
