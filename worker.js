// ===== GLOBAL VARIABLES =====
let currentLang = 'ar'; // Default language

// ===== TRANSLATIONS OBJECT =====
const translations = {
    ar: {
        // Navigation
        siteName: 'زراعة تك',

        nav_marketplace: 'السوق',
        nav_animals: 'الحيوانات',
        nav_wallet: 'المحفظة',
        nav_community: 'المجتمع',
                nav_contact: 'اتصل بنا',
        nav_banks: 'البنوك ',
        nav_packages: 'العروض',

        nav_about: 'من نحن',
        profileLink: 'الملف الشخصي',
        logoutBtn: 'تسجيل الخروج',
        signin_btn: 'تسجيل الدخول',

        // Hero Section
        'hero_badge': '👷 منصة العمال الزراعيين',
        'hero_title': 'اشتغل بثقة في<br><span>الزراعة الحديثة</span>',
        'hero_desc': 'فرص عمل زراعية حقيقية بعقود واضحة، أجر مضمون، ومتابعة لحقوقك. انضم إلى آلاف العمال الذين وجدوا فرص عمل مناسبة عبر منصتنا.',
        'hero_btn1': 'سجّل كعامل 📝',
        'hero_btn2': 'شوف فرص العمل 🔍',
        'hero_card1': 'عقود واضحة',
        'hero_card2': 'أجر مضمون',
        'hero_card3': 'تقييم عادل',

        // Jobs Section
        'jobs_badge': '🔥 فرص عمل متاحة',
        'jobs_title': 'فرص شغل ',
        'jobs_highlight': 'قريبة منك',
        'jobs_subtitle': 'اختار من مئات فرص العمل الزراعية حسب المكان، المدة، ونوع الشغل',
        'job1_title': 'مشرف مزرعة',
        'job1_desc': 'إدارة فريق عمل ومراقبة جودة الإنتاج في مزرعة دواجن متكاملة',
        'job1_location': 'المنيا',
        'job1_salary': '٥٠٠٠ ج',
        'job2_title': 'عامل زراعي',
        'job2_desc': 'العمل في زراعة وحصاد المحاصيل الموسمية بمزرعة خضروات',
        'job2_location': 'الفيوم',
        'job2_salary': '٣٥٠٠ ج',
        'job3_title': 'مربي ماشية',
        'job3_desc': 'رعاية وتغذية القطعان في مزرعة تسمين المواشي',
        'job3_location': 'بني سويف',
        'job3_salary': '٤٥٠٠ ج',
        'jobs_button': 'عرض كل فرص العمل 🔍',
        'job4_title': ' عامل حصاد',
        'job4_desc': '     المشاركة في جمع المحاصيل وفرزها وتجهيزها بعد الحصاد.',
        'job4_location': 'بني سويف',
        'job4_salary': '٤٠٠٠ ج',
        // Work Types
        'types_badge': '💼 أنواع الشغل',
        'types_title': 'اختر نوع الشغل<br><span class="highlight">المناسب لمهاراتك</span>',
        'types_highlight': 'المناسب لمهاراتك',
        'type1_title': 'عمالة زراعية',
        'type1_desc': 'زراعة، ري، حصاد',
        'type2_title': 'تشغيل معدات',
        'type2_desc': 'جرارات، حصادات، معدات',
        'type3_title': 'عناية بالمحاصيل',
        'type3_desc': 'تسميد، رش، وقاية',
        'type4_title': 'مساعد فني',
        'type4_desc': 'مختبرات، تحاليل',
        'type5_title': 'مشروعات استثمارية',
        'type5_desc': 'مشاريع كبيرة',
        'types_button': 'تفاصيل أنواع الشغل 📋',

        // How It Works
        'how_badge': '📱 كيف تشتغل معنا',
        'how_title': 'إزاي تشتغل على<br><span class="highlight">المنصة؟</span>',
        'how_highlight': 'المنصة؟',
        'how_subtitle': '٤ خطوات بسيطة تبدأ بيها رحلتك معنا وتوصل لأجرك المضمون',
        'step1_title': 'سجل بياناتك',
        'step1_desc': 'أنشئ حسابك وأكمل ملفك الشخصي بالمهارات والخبرات',
        'step2_title': 'اختار الشغل',
        'step2_desc': 'تصفح الفرص المتاحة وقدم على الأنسب لمهاراتك',
        'step3_title': 'ابدأ التنفيذ',
        'step3_desc': 'التزم بشروط العقد وساعات العمل المتفق عليها',
        'step4_title': 'استلم أجرك',
        'step4_desc': 'تحصل على أجرك المضمون في الموعد المتفق عليه',
        'how_button': 'ابدأ من هنا 🚀',

        // Rights Section
        'rights_title': 'حقوقك وأمانك<br><span class="highlight">مضمونة</span>',
        'rights_highlight': 'مضمونة',
        'rights_subtitle': 'نضمن لك بيئة عمل آمنة وعادلة مع حماية كاملة لحقوقك',
        'right1_title': 'عقود واضحة',
        'right1_desc': 'جميع بنود العمل مكتوبة وواضحة، ما فيهاش غموض',
        'right2_title': 'أجر متفق عليه',
        'right2_desc': 'تستلم أجرك كاملاً كما تم الاتفاق عليه مسبقاً',
        'right3_title': 'نظام تقييم',
        'right3_desc': 'تقييم عادل يعكس مجهودك وأداءك في العمل',
        'right4_title': 'دعم فني',
        'right4_desc': 'دعم متوفر لحل أي مشكلة تواجهك خلال العمل',
        'rights_button': 'اعرف حقوقك كاملة 📜',

        // Reviews Section
        'reviews_badge': '⭐ تجارب حقيقية',
        'reviews_title': 'تقييمات<br><span class="highlight">العمّال</span>',
        'reviews_highlight': 'العمّال',
        'reviews_subtitle': 'آراء عمّال اشتغلوا فعلاً على المنصة وشاركوا تجربتهم',
        'review1_name': 'محمد أحمد',
        'review1_role': 'عامل زراعي',
        'review1_text': 'أول مرة أشتغل بعقد واضح وأجر مضمون. المنصة وفرتلي فرصة عمل محترمة مع متابعة مستمرة.',
        'review2_name': 'سعيد خالد',
        'review2_role': 'سائق معدات',
        'review2_text': 'الدعم الفني سريع والدفع منتظم. أنصح أي عامل يبحث عن عمل محترم بالتسجيل في المنصة.',
        'review3_name': 'علي محمود',
        'review3_role': 'فني زراعي',
        'review3_text': 'التقييم العادل كان حافز لي أقدم أفضل ما عندي. شكراً لفريق المنصة على المتابعة والدعم.',
        'reviews_button': 'كل التقييمات 📊',

        // Section 9: Direct Purchase
        'direct_buy_badge': '🧺 بدون وسطاء',
        'direct_buy_title': 'اشتري من الفلاح<br><span class="highlight">مباشرة</span>',
        'direct_buy_highlight': 'مباشرة',
        'direct_buy_subtitle': 'اشترِ المحاصيل الزراعية مباشرة من الفلاح بدون وسطاء، بأسعار عادلة وجودة مضمونة وتواصل مباشر.',
        'feature1_title': '❌ بدون وسطاء',
        'feature1_desc': 'شراء مباشر بدون عمولات أو تكاليف إضافية',
        'feature2_title': '💰 سعر أوفر',
        'feature2_desc': 'أسعار تنافسية توفر حتى 40% من سعر السوق',
        'feature3_title': '🤝 تواصل مباشر',
        'feature3_desc': 'تفاعل مباشر مع الفلاح والمتابعة لحظة بلحظة',
        'feature4_title': '🌾 جودة مضمونة',
        'feature4_desc': 'من المصدر مع ضمان الجودة وتتبع المنتج',
        'products_title': 'منتجات مباشرة من المزارع',
        'products_subtitle': 'تسوق الآن من أفضل المحاصيل الموسمية',
        'product1_name': 'طماطم عضوية',
        'product1_farmer': 'من مزرعة أبو أحمد',
        'product1_location': 'الفيوم',
        'product1_oldprice': '١٥ ج/كجم',
        'product1_price': '١٠ ج/كجم',
        'product2_name': 'برتقال سكري',
        'product2_farmer': 'من مزرعة العجمي',
        'product2_location': 'المنيا',
        'product2_oldprice': '٨ ج/كجم',
        'product2_price': '٥ ج/كجم',
        'product3_name': 'خيار بلدي',
        'product3_farmer': 'من مزرعة السلام',
        'product3_location': 'بني سويف',
        'product3_oldprice': '٦ ج/كجم',
        'product3_price': '٤ ج/كجم',
        'chatbot_hook_title': '💬 محتاج مساعدة تختار محصول؟',
        'chatbot_hook_desc': 'اسأل المساعد الذكي ليوصيك بأفضل المنتجات',
        'direct_buy_button': 'تصفح المنتجات الزراعية',

        // Section 10: Pre-Harvest Contracts
        'preharvest_badge': '📑 حصاد مضمون',
        'preharvest_title': 'تعاقد على المحصول<br><span class="highlight">قبل الحصاد</span>',
        'preharvest_highlight': 'قبل الحصاد',
        'preharvest_subtitle': 'احجز محصولك قبل الحصاد واتفق على السعر والكمية بضمان المنصة وعقود ذكية وآمنة.',
        'contract_step1_title': 'اختر المحصول',
        'contract_step1_desc': 'تصفح أنواع المحاصيل واختر ما يناسب احتياجاتك',
        'contract_step2_title': 'حدّد الكمية والموعد',
        'contract_step2_desc': 'اختر الكمية المطلوبة وموعد التسليم المناسب',
        'contract_step3_title': 'وقّع العقد',
        'contract_step3_desc': 'اتفق على الشروط ووقّع العقد الذكي الموثّق',
        'contract_step4_title': 'استلم وقت الحصاد',
        'contract_step4_desc': 'تحصل على محصولك طازجاً في الموعد المتفق عليه',
        'contract_feature1_title': '📄 عقد موثّق',
        'contract_feature1_desc': 'عقود ذكية موثقة رقمياً ومحمية قانونياً',
        'contract_feature2_title': '📆 ضمان التوريد',
        'contract_feature2_desc': 'تسليم في الموعد المحدد بضمان المنصة',
        'contract_feature3_title': '💵 سعر ثابت',
        'contract_feature3_desc': 'سعر مضمون بغض النظر عن تغيرات السوق',
        'contract_feature4_title': '🛡️ حماية للطرفين',
        'contract_feature4_desc': 'حماية حقوق المشتري والفلاح',
        'contracts_title': 'عقود متاحة للتعاقد',
        'contracts_subtitle': 'احجز محصولك الموسمي مسبقاً',
        'contract1_crop': 'قطن مصري',
        'contract1_status': 'حصاد سبتمبر',
        'contract1_desc': 'قطن طويل التيلة - جودة تصدير',
        'contract1_location': 'الغربية',
        'contract1_pricelabel': 'السعر المضمون',
        'contract1_price': '٢٥٠٠٠ ج/فدان',
        'contract2_crop': 'قمح شتوي',
        'contract2_status': 'حصاد أبريل',
        'contract2_desc': 'قمح صلب - إنتاجية عالية',
        'contract2_location': 'الدقهلية',
        'contract2_pricelabel': 'السعر المضمون',
        'contract2_price': '٣٠٠٠٠ ج/فدان',
        'contract3_crop': 'بطاطس مبكرة',
        'contract3_status': 'حصاد ديسمبر',
        'contract3_desc': 'بطاطس سبونتا - صنف مبكر',
        'contract3_location': 'البحيرة',
        'contract3_pricelabel': 'السعر المضمون',
        'contract3_price': '٢٠٠٠٠ ج/فدان',
        'preharvest_button': 'ابدأ التعاقد الآن',

        // Chatbot Section
        'chatbot_title': 'محتاج مساعدة؟',
        'chatbot_desc': 'الشات بوت هيساعدك تختار شغل، تفهم العقد، أو تحل أي مشكلة. متاح 24 ساعة للإجابة على أسئلتك واستفساراتك.',
        'chatbot_button': 'تحدث مع المساعد الذكي',

        // CTA Section
        'cta_title': 'جاهز تبدأ شغلك؟',
        'cta_subtitle': 'انضم الآن إلى منصة Smart Farm للعمال الزراعيين وابدأ رحلتك المهنية في الزراعة الحديثة بأمان وثقة',
        'cta_button': 'سجّل كعامل الآن 🚀',

        // Footer
        'footer_about': 'عن المنصة',
        'footer_contact': 'اتصل بنا',
        'footer_privacy': 'سياسة الخصوصية',
        'footer_terms': 'الشروط والأحكام',
        'footer_faq': 'الأسئلة الشائعة',
        'footer_copyright': '© 2023 منصة Smart Farm للعمال الزراعيين. جميع الحقوق محفوظة.',

        // Chatbot Translations
        'chatbot_placeholder': 'اكتب رسالتك هنا...',
        'chatbot_welcome': 'مرحباً! أنا المساعد الذكي لـ Smart Farm. كيف يمكنني مساعدتك اليوم؟',
        'chatbot_help': 'يمكنني مساعدتك في: فرص العمل، الشراء المباشر، التعاقد قبل الحصاد، التسجيل، وغيرها من الأسئلة.'
    },
    en: {
        // Navigation
        siteName: 'Zera3a Tech',

        nav_marketplace: 'Marketplace',
        nav_animals: 'Animals',
        nav_wallet: 'Wallet',
        nav_community: 'Community',
        nav_about: 'About Us',
 nav_contact: 'Contact Us',
        nav_banks: ' Banks',
        nav_packages: 'Packages',
        profileLink: 'Profile',
        logoutBtn: 'Logout',
        signin_btn: 'Sign In',

        // Hero Section
        'hero_badge': '👷 Agricultural Workers Platform',
        'hero_title': 'Work with Confidence in<br><span>Modern Agriculture</span>',
        'hero_desc': 'Real agricultural job opportunities with clear contracts, guaranteed wages, and rights follow-up. Join thousands of workers who found suitable job opportunities through our platform.',
        'hero_btn1': 'Register as Worker 📝',
        'hero_btn2': 'View Job Opportunities 🔍',
        'hero_card1': 'Clear Contracts',
        'hero_card2': 'Guaranteed Wage',
        'hero_card3': 'Fair Rating',

        // Jobs Section
        'jobs_badge': '🔥 Available Jobs',
        'jobs_title': 'Job Opportunities ',
        'jobs_highlight': 'Near You',
        'jobs_subtitle': 'Choose from hundreds of agricultural job opportunities by location, duration, and type of work',
        'job1_title': 'Farm Supervisor',
        'job1_desc': 'Managing work team and monitoring production quality in integrated poultry farm',
        'job1_location': 'Minya',
        'job1_salary': '5000 EGP',
        'job2_title': 'Agricultural Worker',
        'job2_desc': 'Working in planting and harvesting seasonal crops in vegetable farm',
        'job2_location': 'Faiyum',
        'job2_salary': '3500 EGP',
        'job3_title': 'Livestock Breeder',
        'job3_desc': 'Care and feeding of herds in livestock fattening farm',
        'job3_location': 'Beni Suef',
        'job3_salary': '4500 EGP',
        'jobs_button': 'View All Jobs 🔍',
        'job4_title': 'Harvest Worker',
        'job4_desc': '  Participate in collecting, sorting, and preparing crops after harvest',
        'job4_location': 'Beni Suef',
        'job4_salary': '4000 EGP',
        // Work Types
        'types_badge': '💼 Work Types',
        'types_title': 'Choose Work Type<br><span class="highlight">Suitable for Your Skills</span>',
        'types_highlight': 'Suitable for Your Skills',
        'type1_title': 'Agricultural Labor',
        'type1_desc': 'Planting, irrigation, harvesting',
        'type2_title': 'Equipment Operation',
        'type2_desc': 'Tractors, harvesters, equipment',
        'type3_title': 'Crop Care',
        'type3_desc': 'Fertilization, spraying, protection',
        'type4_title': 'Technical Assistant',
        'type4_desc': 'Laboratories, analysis',
        'type5_title': 'Investment Projects',
        'type5_desc': 'Large projects',
        'types_button': 'Work Types Details 📋',

        // How It Works
        'how_badge': '📱 How It Works',
        'how_title': 'How to Work on<br><span class="highlight">The Platform?</span>',
        'how_highlight': 'The Platform?',
        'how_subtitle': '4 simple steps to start your journey with us and receive your guaranteed wage',
        'step1_title': 'Register Your Data',
        'step1_desc': 'Create your account and complete your profile with skills and experiences',
        'step2_title': 'Choose Work',
        'step2_desc': 'Browse available opportunities and apply for what suits your skills',
        'step3_title': 'Start Implementation',
        'step3_desc': 'Commit to contract terms and agreed working hours',
        'step4_title': 'Receive Your Wage',
        'step4_desc': 'Get your guaranteed wage at the agreed time',
        'how_button': 'Start Here 🚀',

        // Rights Section
        'rights_title': 'Your Rights & Safety<br><span class="highlight">Guaranteed</span>',
        'rights_highlight': 'Guaranteed',
        'rights_subtitle': 'We guarantee you a safe and fair work environment with full protection of your rights',
        'right1_title': 'Clear Contracts',
        'right1_desc': 'All work terms are written and clear, no ambiguity',
        'right2_title': 'Agreed Wage',
        'right2_desc': 'You receive your full wage as previously agreed',
        'right3_title': 'Rating System',
        'right3_desc': 'Fair evaluation that reflects your effort and work performance',
        'right4_title': 'Technical Support',
        'right4_desc': 'Support available to solve any problem you face during work',
        'rights_button': 'Know Your Full Rights 📜',

        // Reviews Section
        'reviews_badge': '⭐ Real Experiences',
        'reviews_title': 'Worker<br><span class="highlight">Reviews</span>',
        'reviews_highlight': 'Reviews',
        'reviews_subtitle': 'Opinions from workers who actually worked on the platform and shared their experience',
        'review1_name': 'Mohamed Ahmed',
        'review1_role': 'Agricultural Worker',
        'review1_text': 'First time I work with a clear contract and guaranteed wage. The platform provided me with a respectable job opportunity with continuous follow-up.',
        'review2_name': 'Saeed Khalid',
        'review2_role': 'Equipment Operator',
        'review2_text': 'Technical support is fast and payment is regular. I recommend any worker looking for decent work to register on the platform.',
        'review3_name': 'Ali Mahmoud',
        'review3_role': 'Agricultural Technician',
        'review3_text': 'Fair evaluation was an incentive for me to give my best. Thanks to the platform team for follow-up and support.',
        'reviews_button': 'All Reviews 📊',

        // Section 9: Direct Purchase
        'direct_buy_badge': '🧺 No Middlemen',
        'direct_buy_title': 'Buy Directly from<br><span class="highlight">Farmers</span>',
        'direct_buy_highlight': 'Farmers',
        'direct_buy_subtitle': 'Buy agricultural crops directly from farmers without intermediaries, at fair prices, guaranteed quality and direct communication.',
        'feature1_title': '❌ No Middlemen',
        'feature1_desc': 'Direct purchase without commissions or additional costs',
        'feature2_title': '💰 Better Price',
        'feature2_desc': 'Competitive prices save up to 40% of market price',
        'feature3_title': '🤝 Direct Communication',
        'feature3_desc': 'Direct interaction with farmers and real-time follow-up',
        'feature4_title': '🌾 Guaranteed Quality',
        'feature4_desc': 'From source with quality guarantee and product tracking',
        'products_title': 'Direct Products from Farms',
        'products_subtitle': 'Shop now from the best seasonal crops',
        'product1_name': 'Organic Tomatoes',
        'product1_farmer': 'From Abu Ahmed Farm',
        'product1_location': 'Faiyum',
        'product1_oldprice': '15 EGP/kg',
        'product1_price': '10 EGP/kg',
        'product2_name': 'Sweet Oranges',
        'product2_farmer': 'From Al-Agamy Farm',
        'product2_location': 'Minya',
        'product2_oldprice': '8 EGP/kg',
        'product2_price': '5 EGP/kg',
        'product3_name': 'Local Cucumbers',
        'product3_farmer': 'From Al-Salam Farm',
        'product3_location': 'Beni Suef',
        'product3_oldprice': '6 EGP/kg',
        'product3_price': '4 EGP/kg',
        'chatbot_hook_title': '💬 Need help choosing crops?',
        'chatbot_hook_desc': 'Ask the smart assistant to recommend the best products',
        'direct_buy_button': 'Browse Agricultural Products',

        // Section 10: Pre-Harvest Contracts
        'preharvest_badge': '📑 Guaranteed Harvest',
        'preharvest_title': 'Contract for Crops<br><span class="highlight">Before Harvest</span>',
        'preharvest_highlight': 'Before Harvest',
        'preharvest_subtitle': 'Reserve your crop before harvest and agree on price and quantity with platform guarantee and smart, secure contracts.',
        'contract_step1_title': 'Choose Crop',
        'contract_step1_desc': 'Browse crop types and choose what suits your needs',
        'contract_step2_title': 'Specify Quantity & Date',
        'contract_step2_desc': 'Choose required quantity and suitable delivery date',
        'contract_step3_title': 'Sign Contract',
        'contract_step3_desc': 'Agree on terms and sign the smart documented contract',
        'contract_step4_title': 'Receive at Harvest',
        'contract_step4_desc': 'Get your fresh crop at the agreed time',
        'contract_feature1_title': '📄 Documented Contract',
        'contract_feature1_desc': 'Smart contracts digitally documented and legally protected',
        'contract_feature2_title': '📆 Delivery Guarantee',
        'contract_feature2_desc': 'Delivery on schedule with platform guarantee',
        'contract_feature3_title': '💵 Fixed Price',
        'contract_feature3_desc': 'Guaranteed price regardless of market fluctuations',
        'contract_feature4_title': '🛡️ Protection for Both',
        'contract_feature4_desc': 'Protection of buyer and farmer rights',
        'contracts_title': 'Available Contracts',
        'contracts_subtitle': 'Reserve your seasonal crop in advance',
        'contract1_crop': 'Egyptian Cotton',
        'contract1_status': 'September Harvest',
        'contract1_desc': 'Long-staple cotton - export quality',
        'contract1_location': 'Gharbia',
        'contract1_pricelabel': 'Guaranteed Price',
        'contract1_price': '25000 EGP/acre',
        'contract2_crop': 'Winter Wheat',
        'contract2_status': 'April Harvest',
        'contract2_desc': 'Hard wheat - high productivity',
        'contract2_location': 'Dakahlia',
        'contract2_pricelabel': 'Guaranteed Price',
        'contract2_price': '30000 EGP/acre',
        'contract3_crop': 'Early Potatoes',
        'contract3_status': 'December Harvest',
        'contract3_desc': 'Spunta potatoes - early variety',
        'contract3_location': 'Beheira',
        'contract3_pricelabel': 'Guaranteed Price',
        'contract3_price': '20000 EGP/acre',
        'preharvest_button': 'Start Contracting Now',

        // Chatbot Section
        'chatbot_title': 'Need Help?',
        'chatbot_desc': 'The chatbot will help you choose work, understand contracts, or solve any problem. Available 24/7 to answer your questions and inquiries.',
        'chatbot_button': 'Talk to Smart Assistant',

        // CTA Section
        'cta_title': 'Ready to Start Working?',
        'cta_subtitle': 'Join Smart Farm platform for agricultural workers now and start your professional journey in modern agriculture with safety and confidence',
        'cta_button': 'Register as Worker Now 🚀',

        // Footer
        'footer_about': 'About Platform',
        'footer_contact': 'Contact Us',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms & Conditions',
        'footer_faq': 'FAQ',
        'footer_copyright': '© 2023 Smart Farm Workers Platform. All rights reserved.',

        // Chatbot Translations
        'chatbot_placeholder': 'Type your message here...',
        'chatbot_welcome': 'Hello! I am Smart Farm\'s smart assistant. How can I help you today?',
        'chatbot_help': 'I can help you with: Job opportunities, direct purchase, pre-harvest contracts, registration, and other questions.'
    }
};

// ===== DARK MODE TOGGLE =====
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeBtn = document.getElementById('themeToggle');

    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
        document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #083038 0%, #0f4c5c 100%)');
        document.documentElement.style.setProperty('--gradient-success', 'linear-gradient(135deg, #219653 0%, #27ae60 100%)');
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #0f4c5c 0%, #1c7a8d 100%)');
        document.documentElement.style.setProperty('--gradient-success', 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)');
    }
}

// ===== LANGUAGE TOGGLE =====
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLang);
    updateAllText();

    // Update language button
    document.getElementById('langToggle').textContent = currentLang === 'ar' ? 'EN' : 'AR';

    // Update page direction
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    showNotification(
        currentLang === 'ar'
            ? 'تم التغيير إلى اللغة العربية'
            : 'Switched to English',
        'info'
    );
}

// ===== UPDATE ALL TEXT ELEMENTS =====
function updateAllText() {
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    // Manual updates for elements without data-key
    const elements = {
        // Navigation
        '.nav-jobs': 'nav_jobs',
        '.nav-work-types': 'nav_work_types',
        '.nav-how-it-works': 'nav_how_it_works',
        '.nav-rights': 'nav_rights',
        '.nav-reviews': 'nav_reviews',
        '.nav-direct-buy': 'nav_direct_buy',
        '.nav-pre-harvest': 'nav_pre_harvest',

        // Hero
        '.hero-badge': 'hero_badge',
        '.hero-title': 'hero_title',
        '.hero-desc': 'hero_desc',
        '.hero-btn1': 'hero_btn1',
        '.hero-btn2': 'hero_btn2',
        '.hero-card1': 'hero_card1',
        '.hero-card2': 'hero_card2',
        '.hero-card3': 'hero_card3',

        // Jobs
        '.jobs-badge': 'jobs_badge',
        '.jobs-title': 'jobs_title',
        '.jobs-subtitle': 'jobs_subtitle',
        '.job1-title': 'job1_title',
        '.job1-desc': 'job1_desc',
        '.job1-location': 'job1_location',
        '.job1-salary': 'job1_salary',
        '.job2-title': 'job2_title',
        '.job2-desc': 'job2_desc',
        '.job2-location': 'job2_location',
        '.job2-salary': 'job2_salary',
        '.job3-title': 'job3_title',
        '.job3-desc': 'job3_desc',
        '.job3-location': 'job3_location',
        '.job3-salary': 'job3_salary',
        '.jobs-button': 'jobs_button',

        // Add more selectors as needed
    };

    for (const selector in elements) {
        const element = document.querySelector(selector);
        if (element) {
            const translation = translations[currentLang][elements[selector]];
            if (translation) {
                element.innerHTML = translation;
            }
        }
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const icon = type === 'success' ? '✅' :
        type === 'error' ? '❌' :
            type === 'warning' ? '⚠️' : 'ℹ️';

    notification.innerHTML = `
        <span>${icon}</span>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').textContent = '☀️';
        document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #083038 0%, #0f4c5c 100%)');
        document.documentElement.style.setProperty('--gradient-success', 'linear-gradient(135deg, #219653 0%, #27ae60 100%)');
    }

    // Initialize language
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLang = savedLang;
    }
    document.getElementById('langToggle').textContent = currentLang === 'ar' ? 'EN' : 'AR';

    // Set page direction
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Attach event listeners
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Update all text
    updateAllText();



    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Simulate job application
    document.querySelectorAll('.job-card').forEach(card => {
        card.addEventListener('click', function () {
            showNotification(
                currentLang === 'ar'
                    ? 'تم تقديم طلبك لهذه الوظيفة! سنتواصل معك قريباً.'
                    : 'Your application has been submitted! We will contact you soon.',
                'success'
            );
        });
    });
});



























