// بيانات اللغة الكاملة
const translations = {
    ar: {
        // الشريط العلوي
        'topBarText': 'المنصة الأولى للتمويل الزراعي',
        'themeBtn': 'الوضع الليلي',
        'languageBtn': 'English',
        
        // Hero Section
        'heroTitle': 'التمويل الزراعي الذكي',
        'heroSubtitle': 'للمشاريع الناجحة',
        'heroDesc': 'نوفر حلول تمويلية متكاملة للقطاع الزراعي المصري، مع شراكات استراتيجية مع أهم البنوك والمؤسسات التمويلية. احصل على تمويلك بأفضل الشروط وأسرع وقت.',
        'stat1': 'فائدة سنوية مخفضة',
        'stat2': 'أقصى فترة سداد',
        'stat3': 'سرعة الموافقة',
        'btnBanks': 'استعرض البنوك الشريكة',
        'btnApply': 'تقديم طلب تمويل',
        'btnInvestor': 'التعاقد مع مستثمر',
        
        // Banks Section
        'banksTitle': 'البنوك والمؤسسات التمويلية',
        'banksSubtitle': 'شراكات استراتيجية مع أهم البنوك والمؤسسات التمويلية في مصر',
        'bank1Title': 'البنك الزراعي المصري',
        'bank1Desc': 'التمويل المتكامل للقطاع الزراعي',
        'bank1Text': 'يقدم البنك حلول تمويلية متكاملة للمشاريع الزراعية بفائدة مخفضة تبدأ من 5% مع مرونة في فترات السداد.',
        'bank1Feature1': 'قروض تصل إلى 5 مليون جنيه',
        'bank1Feature2': 'فترة سداد تصل إلى 15 سنة',
        'bank1Feature3': 'فترة سماح تصل إلى سنة',
        'bank1Feature4': 'تمويل المشاريع الصغيرة والمتوسطة',
        'bank1Button': 'تقديم طلب للبنك الزراعي',
        
        'bank2Title': 'بنك التنمية والائتمان الزراعي',
        'bank2Desc': 'دعم المشاريع الزراعية الحديثة',
        'bank2Text': 'متخصص في تمويل المشاريع الزراعية الحديثة والتكنولوجية مع دعم خاص للشباب والخريجين الجدد.',
        'bank2Feature1': 'قروض حتى 2 مليون جنيه',
        'bank2Feature2': 'فترة سداد 8 سنوات',
        'bank2Feature3': 'دعم تقاوي وبذور محسنة',
        'bank2Feature4': 'تدريب فني مجاني',
        'bank2Button': 'التقديم الآن',
        
        'bank3Title': 'بنك ناصر الاجتماعي',
        'bank3Desc': 'دعم صغار المزارعين',
        'bank3Text': 'متخصص في دعم صغار المزارعين والأسر محدودة الدخل بتمويل ميسر بدون ضمانات بنكية معقدة.',
        'bank3Feature1': 'قروض حتى 500,000 جنيه',
        'bank3Feature2': 'فائدة 7% فقط',
        'bank3Feature3': 'سداد على 5 سنوات',
        'bank3Feature4': 'بدون ضمانات عقارية',
        'bank3Button': 'التقديم الآن',
        
        // Services Section
        'servicesTitle': 'خدماتنا المتكاملة',
        'servicesSubtitle': 'نقدم مجموعة متكاملة من الخدمات التمويلية والدعم الفني للقطاع الزراعي',
        'service1Title': 'تمويل المحاصيل',
        'service1Desc': 'تمويل شامل لجميع أنواع المحاصيل الزراعية مع دعم فني متكامل.',
        'service2Title': 'تمويل المعدات',
        'service2Desc': 'تمويل شراء وتأجير المعدات الزراعية بأفضل الشروط.',
        'service3Title': 'تمويل الثروة الحيوانية',
        'service3Desc': 'تمويل متكامل لمشاريع الثروة الحيوانية والداجنة.',
        
        // Investor Section
        'investorTitle': 'التعاقد مع المستثمرين',
        'investorSubtitle': 'ربط المزارعين بالمستثمرين الراغبين في استثمار أموالهم في القطاع الزراعي',
        'investor1Title': 'شراكة استثمارية',
        'investor1Desc': 'ربط المزارعين بأصحاب رؤوس الأموال للاستثمار في مشاريع زراعية مربحة. نحن نضمن حقوق جميع الأطراف من خلال عقود واضحة ومصدقة.',
        'investor1Button': 'طلب شراكة استثمارية',
        'investor2Title': 'تمويل بالمشاركة',
        'investor2Desc': 'تمويل المشاريع الزراعية بنظام المشاركة في الأرباح. المستثمر يقدم التمويل والمزارع يقدم الأرض والعمل، وتقسيم الأرباح حسب الاتفاق.',
        'investor2Button': 'طلب تمويل بالمشاركة',
        'investor3Title': 'مجتمع المستثمرين',
        'investor3Desc': 'انضم إلى مجتمع المستثمرين في القطاع الزراعي. نوفر لك دراسات جدوى مفصلة وتقارير دورية عن أداء الاستثمار.',
        'investor3Button': 'الانضمام للمجتمع',
        
        // Forms Section
        'formsTitle': 'تقديم طلب تمويل',
        'formsSubtitle': 'اختر نوع التمويل المناسب واحصل على أفضل العروض من البنوك الشريكة',
        'tabFarmer': 'قرض زراعي',
        'tabLivestock': 'قرض حيواني',
        'tabEquipment': 'قرض معدات',
        'tabInvestor': 'شراكة مع مستثمر',
        'formName': 'الاسم الكامل للمتقدم',
        'formNamePlaceholder': 'أدخل الاسم ثلاثي كما في البطاقة',
        'formPhone': 'رقم الهاتف للتواصل',
        'formPhonePlaceholder': '01xxxxxxxxx',
        'formGovernorate': 'المحافظة',
        'formCrop': 'نوع المحصول المراد تمويله',
        'formArea': 'المساحة المزروعة (فدان)',
        'formAreaPlaceholder': 'أدخل المساحة بالفدان',
        'formSubmit': 'إرسال طلب التمويل',
        
        // FAQ Section
        'faqTitle': 'الأسئلة الشائعة',
        'faqSubtitle': 'إجابات على الأسئلة الأكثر شيوعًا حول التمويل الزراعي',
        'faq1Question': 'ما هي نسبة الفائدة على القروض الزراعية؟',
        'faq1Answer': 'نقدم من خلال شركائنا من البنوك الزراعية نسب فائدة تبدأ من 5% سنوياً، وهي من أقل المعدلات في السوق المصرية. تختلف النسبة حسب نوع القرض ومدة السداد وحجم المشروع والبنك المقدم للقرض.',
        'faq2Question': 'كم يستغرق الموافقة على طلب القرض؟',
        'faq2Answer': 'بفضل النظام الرقمي الخاص بنا، تتم دراسة الطلب والموافقة عليه في مدة تتراوح بين 3 إلى 5 أيام عمل فقط. في الحالات العاجلة يمكن تقليل المدة إلى 48 ساعة.',
        'faq3Question': 'هل يمكنني الحصول على قرض بدون ضمانات عقارية؟',
        'faq3Answer': 'نعم، بعض البنوك مثل بنك ناصر الاجتماعي تقدم قروض بدون ضمانات عقارية للصغار المزارعين. كما يمكن قبول المحصول أو المعدات الزراعية كضمان بديل في بعض الحالات.',
        'faq4Question': 'هل يوجد قروض للشباب حديثي التخرج؟',
        'faq4Answer': 'نعم، لدينا برامج تمويلية خاصة للشباب حديثي التخرج برأس مال يبدأ من 50,000 جنيه مع فترة سماح تصل إلى سنة قبل بدء السداد، ودعم فني مجاني لمدة عام.',
        
        // Footer
        'footerAbout': 'المنصة الرقمية الأولى للقروض والتمويل الزراعي في مصر، نعمل من أجل تمويل زراعي ميسر وفلاح مصري متمكن.',
        'footerLinks': 'روابط سريعة',
        'footerContact': 'تواصل معنا',
        'footerCopyright': '© 2024 zera3a-tech - جميع الحقوق محفوظة.',
        
        // Notifications
        'notificationFarmer': 'تم إرسال طلب التمويل الزراعي، سنتواصل معك خلال 24 ساعة',
        'notificationLivestock': 'تم إرسال طلب القرض الحيواني، سيتواصل معك ممثل البنك خلال 48 ساعة',
        'notificationEquipment': 'تم استلام طلب تمويل المعدات، سنتواصل معك خلال 3 أيام عمل',
        'notificationInvestor': 'تم إرسال طلب الشراكة مع المستثمر، سنقوم بربطك بأقرب مستثمر مناسب خلال 72 ساعة'
    },
    en: {
        // Top Bar
        'topBarText': 'The First Agricultural Financing Platform',
        'themeBtn': 'Night Mode',
        'languageBtn': 'العربية',
        
        // Hero Section
        'heroTitle': 'Smart Agricultural Financing',
        'heroSubtitle': 'For Successful Projects',
        'heroDesc': 'We provide integrated financing solutions for the Egyptian agricultural sector, with strategic partnerships with the most important banks and financial institutions. Get your financing with the best terms and fastest time.',
        'stat1': 'Reduced Annual Interest',
        'stat2': 'Maximum Repayment Period',
        'stat3': 'Approval Speed',
        'btnBanks': 'Browse Partner Banks',
        'btnApply': 'Apply for Financing',
        'btnInvestor': 'Contract with Investor',
        
        // Banks Section
        'banksTitle': 'Banks & Financial Institutions',
        'banksSubtitle': 'Strategic partnerships with the most important banks and financial institutions in Egypt',
        'bank1Title': 'Agricultural Bank of Egypt',
        'bank1Desc': 'Integrated financing for the agricultural sector',
        'bank1Text': 'The bank offers integrated financing solutions for agricultural projects with reduced interest starting from 5% with flexible repayment periods.',
        'bank1Feature1': 'Loans up to 5 million EGP',
        'bank1Feature2': 'Repayment period up to 15 years',
        'bank1Feature3': 'Grace period up to 1 year',
        'bank1Feature4': 'Financing for small and medium projects',
        'bank1Button': 'Apply to Agricultural Bank',
        
        'bank2Title': 'Development and Agricultural Credit Bank',
        'bank2Desc': 'Support for modern agricultural projects',
        'bank2Text': 'Specialized in financing modern and technological agricultural projects with special support for youth and new graduates.',
        'bank2Feature1': 'Loans up to 2 million EGP',
        'bank2Feature2': '8-year repayment period',
        'bank2Feature3': 'Support for improved seeds and seedlings',
        'bank2Feature4': 'Free technical training',
        'bank2Button': 'Apply Now',
        
        'bank3Title': 'Nasser Social Bank',
        'bank3Desc': 'Support for small farmers',
        'bank3Text': 'Specialized in supporting small farmers and low-income families with easy financing without complex banking guarantees.',
        'bank3Feature1': 'Loans up to 500,000 EGP',
        'bank3Feature2': 'Only 7% interest',
        'bank3Feature3': '5-year repayment',
        'bank3Feature4': 'No real estate guarantees',
        'bank3Button': 'Apply Now',
        
        // Services Section
        'servicesTitle': 'Our Integrated Services',
        'servicesSubtitle': 'We provide a comprehensive set of financing services and technical support for the agricultural sector',
        'service1Title': 'Crop Financing',
        'service1Desc': 'Comprehensive financing for all types of agricultural crops with integrated technical support.',
        'service2Title': 'Equipment Financing',
        'service2Desc': 'Financing for purchasing and renting agricultural equipment with the best terms.',
        'service3Title': 'Livestock Financing',
        'service3Desc': 'Integrated financing for livestock and poultry projects.',
        
        // Investor Section
        'investorTitle': 'Contract with Investors',
        'investorSubtitle': 'Connecting farmers with investors interested in investing their money in the agricultural sector',
        'investor1Title': 'Investment Partnership',
        'investor1Desc': 'Connecting farmers with capital owners to invest in profitable agricultural projects. We guarantee the rights of all parties through clear and certified contracts.',
        'investor1Button': 'Request Investment Partnership',
        'investor2Title': 'Participation Financing',
        'investor2Desc': 'Financing agricultural projects through profit-sharing system. The investor provides financing and the farmer provides land and work, with profit division according to agreement.',
        'investor2Button': 'Request Participation Financing',
        'investor3Title': 'Investors Community',
        'investor3Desc': 'Join the community of investors in the agricultural sector. We provide you with detailed feasibility studies and periodic reports on investment performance.',
        'investor3Button': 'Join the Community',
        
        // Forms Section
        'formsTitle': 'Submit Financing Request',
        'formsSubtitle': 'Choose the appropriate financing type and get the best offers from partner banks',
        'tabFarmer': 'Agricultural Loan',
        'tabLivestock': 'Livestock Loan',
        'tabEquipment': 'Equipment Loan',
        'tabInvestor': 'Partnership with Investor',
        'formName': 'Full Name of Applicant',
        'formNamePlaceholder': 'Enter full name as in ID card',
        'formPhone': 'Contact Phone Number',
        'formPhonePlaceholder': '01xxxxxxxxx',
        'formGovernorate': 'Governorate',
        'formCrop': 'Type of crop to be financed',
        'formArea': 'Cultivated Area (Feddan)',
        'formAreaPlaceholder': 'Enter area in feddan',
        'formSubmit': 'Submit Financing Request',
        
        // FAQ Section
        'faqTitle': 'Frequently Asked Questions',
        'faqSubtitle': 'Answers to the most common questions about agricultural financing',
        'faq1Question': 'What is the interest rate on agricultural loans?',
        'faq1Answer': 'Through our partner agricultural banks, we offer interest rates starting from 5% annually, which are among the lowest rates in the Egyptian market. The rate varies according to the type of loan, repayment period, project size, and the bank providing the loan.',
        'faq2Question': 'How long does it take to approve a loan request?',
        'faq2Answer': 'Thanks to our digital system, the request is studied and approved within 3 to 5 working days only. In urgent cases, the period can be reduced to 48 hours.',
        'faq3Question': 'Can I get a loan without real estate guarantees?',
        'faq3Answer': 'Yes, some banks like Nasser Social Bank offer loans without real estate guarantees for small farmers. Crop or agricultural equipment can also be accepted as alternative guarantees in some cases.',
        'faq4Question': 'Are there loans for recent graduates?',
        'faq4Answer': 'Yes, we have special financing programs for recent graduates with capital starting from 50,000 EGP with a grace period of up to one year before starting repayment, and free technical support for one year.',
        
        // Footer
        'footerAbout': 'The first digital platform for agricultural loans and financing in Egypt, working for easy agricultural financing and an empowered Egyptian farmer.',
        'footerLinks': 'Quick Links',
        'footerContact': 'Contact Us',
        'footerCopyright': '© 2024 zera3a-tech - All rights reserved.',
        
        // Notifications
        'notificationFarmer': 'Agricultural financing request sent, we will contact you within 24 hours',
        'notificationLivestock': 'Livestock loan request sent, a bank representative will contact you within 48 hours',
        'notificationEquipment': 'Equipment financing request received, we will contact you within 3 working days',
        'notificationInvestor': 'Investor partnership request sent, we will connect you with the nearest suitable investor within 72 hours'
    }
};

// الحالة الافتراضية
let currentLang = 'ar';
let currentTheme = localStorage.getItem('theme') || 'light';

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initLanguage();
    initFAQ();
    initForms();
    initTabs();
    
    // تحديث الترجمة عند تحميل الصفحة
    translatePage();
    
    // إضافة تأثير التمرير السلس
    initSmoothScroll();
    
    // إضافة أحداث للأزرار في الشريط العلوي
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    document.getElementById('languageToggleBtn').addEventListener('click', toggleLanguage);
    
    // إضافة أحداث لأزرار الإرسال
    document.querySelectorAll('.form-submit-btn').forEach(btn => {
        btn.addEventListener('click', handleFormSubmit);
    });
});

// تهيئة الثيم
function initTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const icon = themeBtn.querySelector('i');
    
    if(currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// تبديل الثيم
function toggleTheme() {
    const icon = document.querySelector('#themeToggleBtn i');
    
    if(currentTheme === 'light') {
        currentTheme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        currentTheme = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    localStorage.setItem('theme', currentTheme);
    updateThemeButtonText();
}

// تهيئة اللغة
function initLanguage() {
    const savedLang = localStorage.getItem('lang');
    if(savedLang) {
        currentLang = savedLang;
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }
}

// تبديل اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    localStorage.setItem('lang', currentLang);
    translatePage();
    updateLanguageButtonText();
}

// تحديث نص زر الثيم
function updateThemeButtonText() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const span = themeBtn.querySelector('span');
    span.textContent = translations[currentLang]['themeBtn'];
}

// تحديث نص زر اللغة
function updateLanguageButtonText() {
    const langBtn = document.getElementById('languageToggleBtn');
    const span = langBtn.querySelector('span');
    span.textContent = translations[currentLang]['languageBtn'];
}

// ترجمة الصفحة بالكامل
function translatePage() {
    // تحديث الشريط العلوي
    document.getElementById('topBarText').textContent = translations[currentLang]['topBarText'];
    
    // تحديث أزرار الثيم واللغة
    updateThemeButtonText();
    updateLanguageButtonText();
    
    // تحديث Hero Section
    document.querySelector('.hero-text h1').innerHTML = `${translations[currentLang]['heroTitle']}<br><span>${translations[currentLang]['heroSubtitle']}</span>`;
    document.querySelector('.hero-text p').textContent = translations[currentLang]['heroDesc'];
    
    // تحديث الإحصائيات
    const statItems = document.querySelectorAll('.stat-item p');
    statItems[0].textContent = translations[currentLang]['stat1'];
    statItems[1].textContent = translations[currentLang]['stat2'];
    statItems[2].textContent = translations[currentLang]['stat3'];
    
    // تحديث الأزرار الرئيسية
    const heroButtons = document.querySelectorAll('.hero .btn');
    heroButtons[0].textContent = translations[currentLang]['btnBanks'];
    heroButtons[1].textContent = translations[currentLang]['btnApply'];
    heroButtons[2].textContent = translations[currentLang]['btnInvestor'];
    
    // تحديث Banks Section
    document.querySelector('#agricultural-banks .section-title').textContent = translations[currentLang]['banksTitle'];
    document.querySelector('#agricultural-banks .section-subtitle').textContent = translations[currentLang]['banksSubtitle'];
    
    // تحديث البنوك
    const banks = document.querySelectorAll('.bank-card');
    
    // البنك 1
    banks[0].querySelector('.bank-info h3').textContent = translations[currentLang]['bank1Title'];
    banks[0].querySelector('.bank-info p').textContent = translations[currentLang]['bank1Desc'];
    banks[0].querySelector('.bank-description').textContent = translations[currentLang]['bank1Text'];
    const bank1Features = banks[0].querySelectorAll('.bank-feature-text');
    bank1Features[0].textContent = translations[currentLang]['bank1Feature1'];
    bank1Features[1].textContent = translations[currentLang]['bank1Feature2'];
    bank1Features[2].textContent = translations[currentLang]['bank1Feature3'];
    bank1Features[3].textContent = translations[currentLang]['bank1Feature4'];
    banks[0].querySelector('.bank-btn').textContent = translations[currentLang]['bank1Button'];
    
    // البنك 2
    banks[1].querySelector('.bank-info h3').textContent = translations[currentLang]['bank2Title'];
    banks[1].querySelector('.bank-info p').textContent = translations[currentLang]['bank2Desc'];
    banks[1].querySelector('.bank-description').textContent = translations[currentLang]['bank2Text'];
    const bank2Features = banks[1].querySelectorAll('.bank-feature-text');
    bank2Features[0].textContent = translations[currentLang]['bank2Feature1'];
    bank2Features[1].textContent = translations[currentLang]['bank2Feature2'];
    bank2Features[2].textContent = translations[currentLang]['bank2Feature3'];
    bank2Features[3].textContent = translations[currentLang]['bank2Feature4'];
    banks[1].querySelector('.bank-btn').textContent = translations[currentLang]['bank2Button'];
    
    // البنك 3
    banks[2].querySelector('.bank-info h3').textContent = translations[currentLang]['bank3Title'];
    banks[2].querySelector('.bank-info p').textContent = translations[currentLang]['bank3Desc'];
    banks[2].querySelector('.bank-description').textContent = translations[currentLang]['bank3Text'];
    const bank3Features = banks[2].querySelectorAll('.bank-feature-text');
    bank3Features[0].textContent = translations[currentLang]['bank3Feature1'];
    bank3Features[1].textContent = translations[currentLang]['bank3Feature2'];
    bank3Features[2].textContent = translations[currentLang]['bank3Feature3'];
    bank3Features[3].textContent = translations[currentLang]['bank3Feature4'];
    banks[2].querySelector('.bank-btn').textContent = translations[currentLang]['bank3Button'];
    
    // تحديث Services Section
    document.querySelector('#services .section-title').textContent = translations[currentLang]['servicesTitle'];
    document.querySelector('#services .section-subtitle').textContent = translations[currentLang]['servicesSubtitle'];
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = translations[currentLang]['service1Title'];
    serviceCards[0].querySelector('.service-description').textContent = translations[currentLang]['service1Desc'];
    serviceCards[1].querySelector('h3').textContent = translations[currentLang]['service2Title'];
    serviceCards[1].querySelector('.service-description').textContent = translations[currentLang]['service2Desc'];
    serviceCards[2].querySelector('h3').textContent = translations[currentLang]['service3Title'];
    serviceCards[2].querySelector('.service-description').textContent = translations[currentLang]['service3Desc'];
    
    // تحديث Investor Section
    document.querySelector('#investor-section .section-title').textContent = translations[currentLang]['investorTitle'];
    document.querySelector('#investor-section .section-subtitle').textContent = translations[currentLang]['investorSubtitle'];
    
    const investorCards = document.querySelectorAll('.investor-card');
    investorCards[0].querySelector('h3').textContent = translations[currentLang]['investor1Title'];
    investorCards[0].querySelector('.investor-description').textContent = translations[currentLang]['investor1Desc'];
    investorCards[0].querySelector('.investor-btn').textContent = translations[currentLang]['investor1Button'];
    
    investorCards[1].querySelector('h3').textContent = translations[currentLang]['investor2Title'];
    investorCards[1].querySelector('.investor-description').textContent = translations[currentLang]['investor2Desc'];
    investorCards[1].querySelector('.investor-btn').textContent = translations[currentLang]['investor2Button'];
    
    investorCards[2].querySelector('h3').textContent = translations[currentLang]['investor3Title'];
    investorCards[2].querySelector('.investor-description').textContent = translations[currentLang]['investor3Desc'];
    investorCards[2].querySelector('.investor-btn').textContent = translations[currentLang]['investor3Button'];
    
    // تحديث Forms Section
    document.querySelector('#forms .section-title').textContent = translations[currentLang]['formsTitle'];
    document.querySelector('#forms .section-subtitle').textContent = translations[currentLang]['formsSubtitle'];
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons[0].textContent = translations[currentLang]['tabFarmer'];
    tabButtons[1].textContent = translations[currentLang]['tabLivestock'];
    tabButtons[2].textContent = translations[currentLang]['tabEquipment'];
    tabButtons[3].textContent = translations[currentLang]['tabInvestor'];
    
    // تحديث نموذج المزارع
    const farmerForm = document.getElementById('farmer-form');
    const labels = farmerForm.querySelectorAll('.form-label');
    labels[0].textContent = translations[currentLang]['formName'];
    labels[1].textContent = translations[currentLang]['formPhone'];
    labels[2].textContent = translations[currentLang]['formGovernorate'];
    labels[3].textContent = translations[currentLang]['formCrop'];
    labels[4].textContent = translations[currentLang]['formArea'];
    
    const inputs = farmerForm.querySelectorAll('.form-control');
    inputs[0].placeholder = translations[currentLang]['formNamePlaceholder'];
    inputs[1].placeholder = translations[currentLang]['formPhonePlaceholder'];
    inputs[4].placeholder = translations[currentLang]['formAreaPlaceholder'];
    
    farmerForm.querySelector('.form-submit-btn').textContent = translations[currentLang]['formSubmit'];
    
    // تحديث FAQ Section
    document.querySelector('#faq .section-title').textContent = translations[currentLang]['faqTitle'];
    document.querySelector('#faq .section-subtitle').textContent = translations[currentLang]['faqSubtitle'];
    
    const faqQuestions = document.querySelectorAll('.faq-question span');
    faqQuestions[0].textContent = translations[currentLang]['faq1Question'];
    faqQuestions[1].textContent = translations[currentLang]['faq2Question'];
    faqQuestions[2].textContent = translations[currentLang]['faq3Question'];
    faqQuestions[3].textContent = translations[currentLang]['faq4Question'];
    
    const faqAnswers = document.querySelectorAll('.faq-answer p');
    faqAnswers[0].textContent = translations[currentLang]['faq1Answer'];
    faqAnswers[1].textContent = translations[currentLang]['faq2Answer'];
    faqAnswers[2].textContent = translations[currentLang]['faq3Answer'];
    faqAnswers[3].textContent = translations[currentLang]['faq4Answer'];
    
    // تحديث Footer
    const footerCols = document.querySelectorAll('.footer-col');
    footerCols[0].querySelector('.footer-about').textContent = translations[currentLang]['footerAbout'];
    footerCols[1].querySelector('h3').textContent = translations[currentLang]['footerLinks'];
    footerCols[2].querySelector('h3').textContent = translations[currentLang]['footerContact'];
    document.querySelector('.copyright p').textContent = translations[currentLang]['footerCopyright'];
}

// تهيئة التمرير السلس
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// تهيئة الأسئلة الشائعة
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // إغلاق جميع الإجابات الأخرى
            document.querySelectorAll('.faq-answer').forEach(item => {
                if(item !== answer) {
                    item.classList.remove('open');
                    item.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
                    item.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
                }
            });
            
            // تبديل الإجابة الحالية
            answer.classList.toggle('open');
            
            if(answer.classList.contains('open')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}

// تهيئة النماذج
function initForms() {
    // منع الإرسال الفعلي للنماذج
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });
}

// تهيئة التبويبات
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

// تبديل التبويبات في النماذج
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.form-content');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // إخفاء جميع المحتويات
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // تحديث الأزرار النشطة
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // عرض المحتوى المحدد
    const formElement = document.getElementById(tabName + '-form');
    if (formElement) {
        formElement.classList.add('active');
    }
    
    // إضافة active للزر المضغوط
    event.target.classList.add('active');
}

// الانتقال إلى النموذج
function goToForm(tabName) {
    // التمرير إلى قسم النماذج
    const formsSection = document.getElementById('forms');
    if (formsSection) {
        window.scrollTo({
            top: formsSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
    
    // تبديل التبويب
    setTimeout(() => {
        switchTab(tabName);
    }, 500);
}

// عرض نموذج المستثمر
function showInvestorForm() {
    goToForm('investor');
}

// التمرير إلى الأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// الانتقال إلى قسم معين
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// عرض الإشعارات
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// التعامل مع إرسال النماذج
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target.closest('form');
    const formId = form.id;
    let notificationKey = '';
    
    if (formId === 'farmer-form') {
        notificationKey = 'notificationFarmer';
    } else if (formId === 'livestock-form') {
        notificationKey = 'notificationLivestock';
    } else if (formId === 'equipment-form') {
        notificationKey = 'notificationEquipment';
    } else if (formId === 'investor-form') {
        notificationKey = 'notificationInvestor';
    }
    
    if (notificationKey) {
        const message = translations[currentLang][notificationKey];
        showNotification(message);
    }
    
    // إعادة تعيين النموذج
    form.reset();
    
    return false;
}