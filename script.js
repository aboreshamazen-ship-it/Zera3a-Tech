// =============================================
//  STATE MANAGEMENT
// =============================================

let currentScreen = "roleSelect"
let selectedUserRole = null
let currentTheme = localStorage.getItem("theme") || "light"
let currentLanguage = localStorage.getItem("language") || "ar"

const formData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  governorate: "",
  landSize: "",
  crops: "",
  experience: "",
  idCard: "",
  address: "",
}

const translations = {
  ar: {
    "select-role": "اختر دورك",
    "welcome-title": "انضم إلينا الآن",
    "welcome-subtitle": "اختر دورك وابدأ رحلتك في المنصة الزراعية الأكثر ابتكاراً في مصر",
    "farmer-title": "أنا فلاح",
    "farmer-desc": "بيع محاصيلك مباشرة للمستهلكين بأسعار عادلة وزيادة أرباحك",
    "consumer-title": "أنا مستهلك",
    "consumer-desc": "اشتر محاصيل طازجة طبيعية مباشرة من المزارعين بجودة عالية وأسعار منافسة",
    // Investor Translations
    "investor-title": "أنا مستثمر",
    "investor-desc": "استثمر أموالك في المزارع وشارك في الأرباح بنظام تقاسم المحاصيل والريع",
    "investor-signin": "مستثمر",
    "feature-9": "فرص استثمارية متنوعة",
    "feature-10": "عائد استثماري مضمون",
    "feature-11": "دعم المزارعين المصريين",
    "feature-12": "تقارير دورية شفافة",

    "create-account": "إنشاء حسابك",
    "full-name": "الاسم الكامل",
    "enter-name": "أدخل اسمك الكامل",
    "email-address": "البريد الإلكتروني",
    "enter-email": "your@email.com",
    "phone-number": "رقم الهاتف",
    "enter-phone": "01234567890",
    governorate: "المحافظة",
    "select-governorate": "اختر المحافظة",
    password: "كلمة المرور",
    "enter-password": "••••••••",
    "confirm-password": "تأكيد كلمة المرور",
    "confirm-pwd": "••••••••",
    "signin-title": "تسجيل الدخول",
    "signin-subtitle": "أهلاً بعودتك",
    "agree-terms": "أوافق على الشروط والأحكام",
    "already-have-account": "هل لديك حساب بالفعل؟",
    "signin-link-text": "تسجيل الدخول",
    "no-account": "ليس لديك حساب؟",
    "signup-link-text": "إنشاء حساب جديد",
    back: "← العودة للخلف",
    "land-size": "مساحة الأرض (فدان)",
    "enter-land-size": "كم فدان تملك؟",
    crops: "المحاصيل الرئيسية",
    "enter-crops": "القمح، الشعير، الذرة...",
    experience: "سنوات الخبرة",
    "enter-experience": "عدد سنوات الخبرة",
    "id-card": "صورة بطاقة الهوية",
    address: "العنوان بالتفاصيل",
    "enter-address": "أدخل عنوانك بالتفاصيل...",
    "success-signup": "تم التسجيل بنجاح",
    "success-signin": "تم تسجيل الدخول بنجاح",
    "thank-you-joining": "شكراً لانضمامك إلينا",
    "welcome-back": "أهلاً بعودتك",
    "please-fill-all-fields": "من فضلك ملئ جميع الحقول المطلوبة",
    "passwords-not-match": "كلمات المرور غير متطابقة",
    "please-fill-farmer-fields": "من فضلك ملئ جميع حقول المزارع",
    "email-or-phone": "البريد الإلكتروني أو رقم الهاتف",
    "forgot-password": "هل نسيت كلمة المرور؟",
    "signin-btn": "دخول",
    "feature-1": "إدارة محاصيلك بسهولة",
    "feature-2": "وصول مباشر للمستهلكين",
    "feature-3": "أسعار أفضل وأرباح أكثر",
    "feature-4": "دعم فني 24/7",
    "feature-5": "محاصيل طازجة مباشرة",
    "feature-6": "أسعار منافسة وعادلة",
    "feature-7": "توصيل آمن وسريع",
    "feature-8": "ضمان الجودة والنظافة",
    "farmer-signin": "فلاح",
    "consumer-signin": "مستهلك",
  },
  en: {
    "select-role": "Choose Your Role",
    "welcome-title": "Join Us Now",
    "welcome-subtitle": "Choose your role and start your journey on the most innovative agricultural platform in Egypt",
    "farmer-title": "I'm a Farmer",
    "farmer-desc": "Sell your crops directly to consumers at fair prices and increase your profits",
    "consumer-title": "I'm a Consumer",
    "consumer-desc": "Buy fresh natural crops directly from farmers with high quality and competitive prices",
    // Investor Translations
    "investor-title": "I'm an Investor",
    "investor-desc": "Invest your money in farms and share in the profits through crop sharing systems",
    "investor-signin": "Investor",
    "feature-9": "Diverse investment opportunities",
    "feature-10": "Guaranteed return on investment",
    "feature-11": "Supporting Egyptian farmers",
    "feature-12": "Transparent periodic reports",

    "create-account": "Create Your Account",
    "full-name": "Full Name",
    "enter-name": "Enter your full name",
    "email-address": "Email Address",
    "enter-email": "your@email.com",
    "phone-number": "Phone Number",
    "enter-phone": "01234567890",
    governorate: "Governorate",
    "select-governorate": "Select Governorate",
    password: "Password",
    "enter-password": "••••••••",
    "confirm-password": "Confirm Password",
    "confirm-pwd": "••••••••",
    "signin-title": "Sign In",
    "signin-subtitle": "Welcome back",
    "agree-terms": "I agree to the terms and conditions",
    "already-have-account": "Already have an account?",
    "signin-link-text": "Sign In",
    "no-account": "Don't have an account?",
    "signup-link-text": "Create New Account",
    back: "← Back",
    "land-size": "Land Area (Feddans)",
    "enter-land-size": "How many feddans do you own?",
    crops: "Main Crops",
    "enter-crops": "Wheat, Barley, Corn...",
    experience: "Years of Experience",
    "enter-experience": "Years of farming experience",
    "id-card": "ID Card Photo",
    address: "Detailed Address",
    "enter-address": "Enter your detailed address...",
    "success-signup": "Registration successful",
    "success-signin": "Login successful",
    "thank-you-joining": "Thank you for joining us",
    "welcome-back": "Welcome back to our platform",
    "please-fill-all-fields": "Please fill all required fields",
    "passwords-not-match": "Passwords do not match",
    "please-fill-farmer-fields": "Please fill all farmer fields",
    "email-or-phone": "Email or Phone Number",
    "forgot-password": "Forgot Password?",
    "signin-btn": "Sign In",
    "feature-1": "Manage your crops easily",
    "feature-2": "Direct access to consumers",
    "feature-3": "Better prices and more profits",
    "feature-4": "24/7 Technical Support",
    "feature-5": "Fresh crops directly",
    "feature-6": "Competitive and fair prices",
    "feature-7": "Safe and fast delivery",
    "feature-8": "Quality and cleanliness guarantee",
    "farmer-signin": "Farmer",
    "consumer-signin": "Consumer",
  },
}

// =============================================
//  SCREEN MANAGEMENT (With History API)
// =============================================

function navigateTo(screenId) {
  const screens = document.querySelectorAll(".screen")
  screens.forEach((screen) => {
    screen.classList.remove("active")
    screen.style.display = "none"
  })

  const targetScreen = document.getElementById(screenId)
  if (targetScreen) {
    targetScreen.classList.add("active")
    targetScreen.style.display = "block"
  }

  // Add to browser history so the Back button works
  if(screenId === "roleSelectScreen") {
      history.pushState({ screen: "roleSelect" }, "", "#home")
      currentScreen = "roleSelect"
  } else if (screenId === "signupScreen") {
      history.pushState({ screen: "signup" }, "", "#signup")
      currentScreen = "signup"
  } else if (screenId === "signinScreen") {
      history.pushState({ screen: "signin" }, "", "#signin")
      currentScreen = "signin"
  }
}

// Listen for the back button
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.screen) {
        // Determine screen ID from state
        let screenId = ""
        if(event.state.screen === "roleSelect") screenId = "roleSelectScreen"
        if(event.state.screen === "signup") screenId = "signupScreen"
        if(event.state.screen === "signin") screenId = "signinScreen"
        
        // Switch screen visually without pushing new history
        const screens = document.querySelectorAll(".screen")
        screens.forEach((s) => {
            s.classList.remove("active")
            s.style.display = "none"
        })
        
        const target = document.getElementById(screenId)
        if(target) {
            target.classList.add("active")
            target.style.display = "block"
        }
        currentScreen = event.state.screen
    } else {
        // Default fallback to role select
        goBackToRole(false) // false means don't push state
    }
});

function selectRole(role) {
  selectedUserRole = role
  const subtitle = document.getElementById("signupSubtitle")
  
  let descKey = "farmer-desc"
  if (role === "consumer") descKey = "consumer-desc"
  if (role === "investor") descKey = "investor-desc"

  if (subtitle) {
    subtitle.textContent = translations[currentLanguage][descKey]
  }

  const farmerFields = document.getElementById("farmerFields")

  if (farmerFields) {
    // Only show farmer fields if role is farmer. 
    // Investor and Consumer don't need land size/crops fields.
    if (role === "farmer") {
      farmerFields.classList.remove("hidden")
    } else {
      farmerFields.classList.add("hidden")
    }
  }

  navigateTo("signupScreen")
}

function goBackToRole(pushHistory = true) {
  selectedUserRole = null
  currentScreen = "roleSelect"
  
  // Only push history if it's a user action, not a browser back button
  if(pushHistory) {
      navigateTo("roleSelectScreen")
  } else {
      // Just show screen
      const screens = document.querySelectorAll(".screen")
      screens.forEach((s) => { s.classList.remove("active"); s.style.display = "none"; })
      document.getElementById("roleSelectScreen").classList.add("active")
      document.getElementById("roleSelectScreen").style.display = "block"
  }
  
  document.getElementById("signupForm").reset()
}

function goToSignUp(event) {
  event.preventDefault()
  navigateTo("roleSelectScreen") // Go back to selection
}

// *** CRITICAL FIX HERE ***
 // =================================================
//  دالة الذهاب لصفحة تسجيل الدخول (Sign In)
// =================================================

function goToSignIn(event) {
  // (1) منع حدث الضغط من يطلع للكارت الأب (عشان ما ينفتحش Sign Up)
  event.preventDefault();
  event.stopPropagation();

  // (2) تحديد الدور من الكارد اللي جيت منه
  const card = event.target.closest('.role-card');
  let role = 'farmer'; // افتراضي

  if (card) {
    if (card.classList.contains('role-card-consumer')) {
      role = 'consumer';
    } else if (card.classList.contains('role-card-investor')) {
      role = 'investor';
    } else {
      role = 'farmer';
    }
  }

  // (3) حفظ الدور في متغير
  selectedUserRole = role;

  // (4) استدعاء دالة تغيير التاب والعنوان (دي اللي هتغير الكلام فوق)
  switchSignInTab(role);

  // (5) فتح صفحة الدخول
  navigateTo("signinScreen");
}


// =================================================
//  دالة تغيير التاب والعنوان (Subtitle)
// =================================================

function switchSignInTab(role) {
  // (A) تغيير لون التاب المختار
  const tabs = document.querySelectorAll(".tab-button")
  tabs.forEach((tab) => tab.classList.remove("active"))
  
  // نبحث عن الزر اللي عليه data-tab مطابق للدور
  const activeTab = document.querySelector(`.tab-button[data-tab="${role}"]`)
  if (activeTab) {
    activeTab.classList.add("active")
  }

  // (B) *** التعديل الأهم: تغيير العنوان فوق ***
  // حددنا له إنه يختار العنوان اللي جوه #signinScreen فقط (مش التاني)
  const authSubtitle = document.querySelector("#signinScreen .auth-subtitle");
  
  let newSubtitle = translations[currentLanguage]["signin-subtitle"];

  // إضافة اسم الدور للعنوان
  if (role === 'consumer') {
      newSubtitle += " - " + (currentLanguage === 'ar' ? "مستهلك" : "Consumer");
  } else if (role === 'investor') {
      newSubtitle += " - " + (currentLanguage === 'ar' ? "مستثمر" : "Investor");
  } else {
      newSubtitle += " - " + (currentLanguage === 'ar' ? "فلاح" : "Farmer");
  }

  if (authSubtitle) {
    authSubtitle.textContent = newSubtitle;
  }
}

// =============================================
//  FORM HANDLING
// =============================================

function handleSignUp(event) {
  event.preventDefault()

  const form = event.target
  const formElements = form.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="number"], input[type="file"], select, textarea',
  )

  const data = {
    userRole: selectedUserRole,
  }

  formElements.forEach((element) => {
    if (element.name) {
      if (element.type === "file" && element.files.length > 0) {
        data[element.name] = element.files[0].name
      } else if (element.type !== "file") {
        data[element.name] = element.value
      }
    }
  })

  // Validation
  if (!data.name || !data.email || !data.phone || !data.password) {
    alert(translations[currentLanguage]["please-fill-all-fields"])
    return
  }

  if (data.password !== data.confirmPassword) {
    alert(translations[currentLanguage]["passwords-not-match"])
    return
  }

  if (selectedUserRole === "farmer" && !data.landSize) {
    alert(translations[currentLanguage]["please-fill-farmer-fields"])
    return
  }
  
  // Investor specific validation could go here if needed

  let roleTitle = translations[currentLanguage][selectedUserRole + "-title"] || ""
  
  alert(
    `${translations[currentLanguage]["success-signup"]} ${roleTitle}!\n\n${translations[currentLanguage]["thank-you-joining"]}`,
  )

  form.reset()
  goBackToRole()
}

function handleSignIn(event) {
  event.preventDefault()

  const emailOrPhone = event.target.elements["emailOrPhone"].value
  const password = event.target.elements["password"].value

  if (!emailOrPhone || !password) {
    alert(translations[currentLanguage]["please-fill-all-fields"])
    return
  }

  alert(`${translations[currentLanguage]["success-signin"]}!\n\n${translations[currentLanguage]["welcome-back"]}`)

  event.target.reset()
  goBackToRole()
}

// =============================================
//  THEME AND LANGUAGE MANAGEMENT
// =============================================

function initializeThemeAndLanguage() {
  applyTheme(currentTheme)
  applyLanguage(currentLanguage)
  updateControlButtons()
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode")
  }
  currentTheme = theme
  localStorage.setItem("theme", theme)
}

function toggleTheme() {
  const newTheme = currentTheme === "light" ? "dark" : "light"
  applyTheme(newTheme)
  updateControlButtons()
}

function applyLanguage(lang) {
  const html = document.documentElement
  html.lang = lang
  html.dir = lang === "ar" ? "rtl" : "ltr"
  currentLanguage = lang
  localStorage.setItem("language", lang)

  updatePageText()
  updateInputPlaceholders()
  updateSelectOptions()
}

function toggleLanguage() {
  const newLang = currentLanguage === "ar" ? "en" : "ar"
  applyLanguage(newLang)
  updateControlButtons()
}

function updatePageText() {
  const t = translations[currentLanguage]

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")
    if (t[key]) {
      el.textContent = t[key]
    }
  })

  // Static buttons are ignored because they don't have data-i18n

  const headerBadge = document.getElementById("headerBadge")
  if (headerBadge && currentScreen) {
    if (currentScreen === "roleSelect") {
      headerBadge.textContent = t["select-role"]
    } else if (currentScreen === "signin") {
      headerBadge.textContent = t["signin-title"]
    }
  }

  const themeBtn = document.getElementById("themeToggle")
  const langBtn = document.getElementById("languageToggle")

  if (themeBtn) {
    themeBtn.title = currentLanguage === "ar" ? "تبديل المظهر" : "Toggle Theme"
  }
  if (langBtn) {
    langBtn.title = currentLanguage === "ar" ? "تبديل اللغة" : "Toggle Language"
  }
}

function updateInputPlaceholders() {
  const t = translations[currentLanguage]

  const inputs = {
    'input[name="name"]': t["enter-name"],
    'input[name="email"]': t["enter-email"],
    'input[name="phone"]': t["enter-phone"],
    'input[name="landSize"]': t["enter-land-size"],
    'input[name="crops"]': t["enter-crops"],
    'input[name="experience"]': t["enter-experience"],
    'input[name="emailOrPhone"]': t["email-or-phone"],
    'textarea[name="address"]': t["enter-address"],
  }

  Object.entries(inputs).forEach(([selector, placeholder]) => {
    const element = document.querySelector(selector)
    if (element && placeholder) {
      element.placeholder = placeholder
    }
  })
}

function updateSelectOptions() {
  const t = translations[currentLanguage]
  const selectElements = document.querySelectorAll("select")

  selectElements.forEach((select) => {
    const firstOption = select.querySelector("option[value='']")
    if (firstOption) {
      firstOption.textContent = t["select-governorate"] || "اختر المحافظة"
    }
  })
}

function updateControlButtons() {
  const themeBtn = document.getElementById("themeToggle")
  const langBtn = document.getElementById("languageToggle")

  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === "light" ? "🌙" : "☀️"
    themeBtn.title = currentLanguage === "ar" ? "تبديل المظهر" : "Toggle Theme"
  }

  if (langBtn) {
    langBtn.innerHTML = currentLanguage === "ar" ? "EN" : "العربية"
    langBtn.title = currentLanguage === "ar" ? "تبديل اللغة" : "Toggle Language"
  }
}

// =============================================
//  EVENT LISTENERS
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  initializeThemeAndLanguage()

  const themeToggle = document.getElementById("themeToggle")
  const languageToggle = document.getElementById("languageToggle")

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", toggleLanguage)
  }

  const signupForm = document.getElementById("signupForm")
  if (signupForm) {
    signupForm.addEventListener("submit", handleSignUp)
  }

  const signinForm = document.getElementById("signinForm")
  if (signinForm) {
    signinForm.addEventListener("submit", handleSignIn)
  }

  // Initialize the first state
  navigateTo("roleSelectScreen")
})

// =============================================
//  UTILITY FUNCTIONS
// =============================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^01[0-2]\d{8}$/
  return re.test(phone)
}