// ===== TRANSLATIONS OBJECT =====
const translations = {
    ar: {
        // Navigation
        'nav_home': 'الرئيسية',
        'nav_about': 'من نحن',
        'nav_services': 'الخدمات',
        'nav_features': 'المميزات',
        'nav_testimonials': 'آراء العملاء',
        'nav_contact': 'تواصل معنا',
        
        // Hero Section
        'hero_badge': '💼 فرص استثمار زراعي ذكي',
        'hero_title': 'استثمر بذكاء<br><span>في مستقبل الزراعة</span>',
        'hero_title_span': 'في مستقبل الزراعة',
        'hero_desc': 'منصة متكاملة تتيح لك الاستثمار في مشاريع زراعية مدروسة، ببيانات دقيقة، متابعة مستمرة، وعوائد مستدامة وآمنة.',
        'hero_btn1': 'ابدأ كمستثمر 📈',
        'hero_btn2': 'استكشف الفرص 💡',
        'hero_stat1': 'مشروع زراعي',
        'hero_stat2': 'مستثمر نشط',
        'hero_stat3': 'نسبة نجاح',
        'hero_card1': 'تحليل العوائد',
        'hero_card2': 'إدارة الاستثمار',
        'hero_card3': 'فرص مستدامة',
        
        // How To Invest Section (NEW)
        'how_subtitle': 'خطوات قصيرة – Minimal',
        'how_title': '🔍 إنت بتستثمر إزاي؟',
        'step1_title': 'اختار',
        'step1_desc': 'اختار المشروع المناسب ليك',
        'step2_title': 'تابع',
        'step2_desc': 'تابع النمو لحظة بلحظة',
        'step3_title': 'شارك',
        'step3_desc': 'شوف أرضك بتثمر',
        'step4_title': 'اكسب',
        'step4_desc': 'استلم عائدك بثقة',
        'counter1_val': '+30%',
        'counter1_text': 'تحسين إنتاج',
        'counter2_val': '-25%',
        'counter2_text': 'تقليل هدر',
        'counter3_val': '100%',
        'counter3_text': 'شفافية',
        'counter4_val': '∞',
        'counter4_text': 'شراكات طويلة المدى',
        'trust_title': '🛡️ لأن الثقة أهم محصول',
        'trust_item1': 'صور وتقارير من أرض الواقع',
        'trust_item2': 'بيانات إنتاج محدثة',
        'trust_item3': 'تواصل مباشر',
        'trust_item4': 'دعم فني متخصص',
        'tech_item1': 'داك مود مريح للعين',
        'tech_item2': 'ترجمة فورية عربي / English',
        'tech_item3': 'تصميم أنيق متجاوب',
        'tech_item4': 'ألوان تبني ثقة مش ضجيج',
        'cta_main': '🚀 ابدأ استثمارك الزراعي الآن',
        'cta_sub': 'خطوة واحدة تفصلك عن شراكة حقيقية مع الأرض.',
        
        // Feasibility Study
        'study_badge': '📊 دراسة الجدوى التفاعلية',
        'study_title': 'احسب مشروعك الزراعي ',
        'study_highlight': 'بخطوة واحدة',
        'study_subtitle': 'أدخل بيانات مشروعك واحصل على تحليل كامل للتكاليف والأرباح المتوقعة',
        'form_title': 'بيانات المشروع',
        'crop_label': 'نوع المحصول',
        'crop_placeholder': 'قمح', 
        'area_label': 'المساحة (فدان)',
        'area_input': 'المساحة (فدان)',
        'area_min': '1 فدان',
        'area_max': '100 فدان',
        'cost_label': 'التكلفة المتوقعة لكل فدان',
        'cost_input': 'التكلفة المتوقعة لكل فدان',
        'cost_5000': '٥٠٠٠ ج',
        'cost_8000': '٨٠٠٠ ج',
        'cost_12000': '١٢٠٠٠ ج',
        'cost_custom': 'أو أدخل تكلفة مخصصة',
        'price_label': 'السعر المتوقع للطن',
        'price_input': 'السعر المتوقع للطن',
        'productivity_label': 'الإنتاجية المتوقعة (طن/فدان)',
        'productivity_input': 'الإنتاجية المتوقعة (طن/فدان)',
        'productivity_min': '1 طن',
        'productivity_max': '10 طن',
        'calculate_btn': 'قيّم مشروعك اقتصاديًا',
        'results_title': 'التقييم الاقتصادي للمشروع',
        'initial_title': 'أدخل بيانات المشروع',
        'initial_text': 'ستظهر هنا نتائج دراسة الجدوى بمجعد إدخال البيانات',
        'total_cost_label': 'التكلفة الإجمالية',
        'revenue_label': 'الإيرادات المتوقعة',
        'profit_label': 'صافي الربح المتوقع',
        'roi_label': 'العائد على الاستثمار',
        'payback_label': 'فترة الاسترداد',
        'production_label': 'الإنتاجية الكلية',
        'duration_label': 'مدة المشروع',
        'recommendations_title': 'توصياتنا للمشروع',
        'analysis_title': 'تحليل تفصيلي للتكاليف',
        'analysis_text': 'تحليل تفصيلي للتكاليف',
        'breakdown_title': 'تفصيل التكاليف',
        'chart_title': 'توزيع التكاليف',

        // Livestock Section
        'livestock_badge': '🐄 استثمر في الثروة الحيوانية',
        'livestock_title': 'فرص استثمارية ذهبية في<br><span>الماشية والدواجن والأسماك</span>',
        'livestock_title_span': 'الماشية والدواجن والأسماك',
        'livestock_desc': 'نظام استثماري متكامل يوفر لك فرص الربح في قطاع الثروة الحيوانية مع متابعة وتقارير دقيقة',
        'livestock_dashboard': 'لوحة المستثمر',
        'livestock_update': 'تحديث مباشر | العائد الإجمالي: <strong>١٨٫٥٪</strong>',
        'livestock_btn_new': 'استثمار جديد',
        'livestock_stat1_label': 'إجمالي الاستثمارات',
        'livestock_stat1_val': '٥٠٠٬٠٠٠ ر.س',
        'livestock_stat1_trend': 'زيادة ٢٥٪ عن العام الماضي',
        'livestock_stat2_label': 'متوسط العائد',
        'livestock_stat2_val': '١٨٫٥٪',
        'livestock_stat2_trend': 'أعلى من المتوسط العام',
        'livestock_stat3_label': 'المشاريع النشطة',
        'livestock_stat3_val': '٨',
        'livestock_stat3_trend': 'جميعها سارية المفعول',
        'livestock_tab_cattle': 'تربية الماشية',
        'livestock_tab_poultry': 'الدواجن',
        'livestock_tab_fish': 'الأسماك',
        'livestock_card1_title': 'مزرعة أبقار حلوب',
        'livestock_card_status': 'جاهز للاستثمار',
        'livestock_card1_desc': '٥٠ رأس من الأبقار الحلوب عالية الإنتاج',
        'livestock_card_roi': 'العائد المتوقع',
        'livestock_card_cost': 'المبلغ المطلوب',
        'livestock_card_btn': 'استثمر الآن',

        // Marketing Section
        'marketing_badge': '💰 نظام التسويق الذكي',
        'marketing_title': 'بيع واستثمار محاصيلك<br><span>بأعلى ربحية</span>',
        'marketing_title_span': 'بأعلى ربحية',
        'marketing_desc': 'نظام متكامل لتحويل منتجاتك إلى أرباح مع تحليل الأسعار وفرص الاستثمار الذكية',
        'marketing_btn_add': 'إضافة منتج',
        'marketing_btn_contract': 'عقد جديد',
        'marketing_btn_analyze': 'تحليل السوق',
        'marketing_stat1_val': '٢٠٠٬٠٠٠ ر.س',
        'marketing_stat1_label': 'إجمالي المبيعات',
        'marketing_stat1_trend': '١٥٪ زيادة',
        'marketing_stat2_val': '١٠ طن',
        'marketing_stat2_label': 'المخزون المتاح',
        'marketing_stat2_trend': 'يكفي لـ ١٥ يوم',
        'marketing_products_title': 'المنتجات المتاحة',
        'marketing_prod1_name': 'طماطم عضوية',
        'marketing_prod1_desc': 'جودة ممتازة - صنف هولندي',
        'marketing_prod1_price': '١٢ ر.س/كجم',
        'marketing_prod1_stock': '٣ طن متوفر',

        // خيارات المحاصيل
        'crop_wheat': 'قمح',
        'crop_corn': 'ذرة',
        'crop_cotton': 'قطن',
        'crop_rice': 'أرز',
        'crop_tomato': 'طماطم',
        'crop_potato': 'بطاطس',
        'select_crop_placeholder': 'اختر نوع المحصول...',

        // الدواجن والأسماك
        'poultry_title': 'مزرعة دجاج بياض',
        'poultry_desc': '٥٠٠٠ دجاجة بياضة عالية الإنتاج',
        'broiler_title': 'مزرعة دجاج لاحم',
        'broiler_desc': '١٠٠٠٠ دجاجة لاحم سريعة النمو',
        'duck_title': 'مزرعة بط',
        'duck_desc': '٢٠٠٠ بطة من نوع المسكوفي',
        'tilapia_title': 'مزرعة أسماك البلطي',
        'tilapia_desc': '٥٠٠٠٠ سمكة بلطي سريعة النمو',
        'mullet_title': 'مزرعة أسماك البوري',
        'mullet_desc': '٣٠٠٠٠ سمكة بوري عضوية',
        'shrimp_title': 'مزرعة جمبري',
        'shrimp_desc': 'مزرعة جمبري بأحدث التقنيات',
        
        // حالة المشروع
        'status_ready': 'جاهز للاستثمار',
        'status_limited': 'محدود',
        'status_featured': 'مميز',
        'status_available': 'متاح',

        // زر الترجمة
        'translateBtn': "English",
        
        // الشات بوت
        'chatTitle': "مساعد الاستثمار",
        'inputPlaceholder': "اكتب سؤالك هنا...",
        'typing': "جاري الكتابة...",
        
        // الرسائل التلقائية
        'welcomeMsg': "مرحباً! 👋 أنا مساعدك الاستثماري الذكي.",
        'helpMsg': "يمكنني مساعدتك في:",
        'helpItem1': "شرح مصطلحات الاستثمار",
        'helpItem2': "تحليل أداء المحفظة",
        'helpItem3': "تقديم نصائح استثمارية",
        'helpItem4': "الإجابة على استفساراتك",
        
        // الأزرار السريعة
        'quickStocks': "ما هي الأسهم؟",
        'quickStartInvesting': "كيف أبدأ الاستثمار؟",
        'quickBeginnerAdvice': "نصائح للمبتدئين",
        'quickPortfolioAnalysis': "تحليل المحفظة",
        
        // ردود البوت
        'greetings': "مرحباً بك! كيف يمكنني مساعدتك اليوم؟",
        'stocksAnswer': "الأسهم تمثل حصة ملكية في الشركة. عندما تشتري سهماً، فإنك تشتري جزءاً صغيراً من تلك الشركة. يمكن أن تدر الأسهم أرباحاً وتزيد في القيمة، ولكنها تحمل مخاطر مرتبطة بأداء الشركة وتقلبات السوق.",
        'startInvestingAnswer': `لبدء الاستثمار اتبع هذه الخطوات:
1. حدد أهدافك الاستثمارية
2. حدد مستوى المخاطرة المناسب
3. ابدأ بمبلغ صغير وتعلم بالممارسة
4. نوّع استثماراتك
5. استشر مستشاراً مالياً
6. استثمر بانتظام وطويل الأجل`,
        'beginnerAdviceAnswer': `نصائح للمستثمر المبتدئ:
• ابدأ بتعلم الأساسيات
• استثمر مبلغاً لا تخشى خسارته
• ركز على الاستثمار طويل الأجل
• نوّع استثماراتك
• تجنب الاندفاع وراء الأخبار السريعة
• راكب أدائك بانتظام`,
        'portfolioAnalysisAnswer': `بناءً على بياناتك:
• محفظتك متنوعة بشكل جيد
• العائد السنوي 12.5% ممتاز
• مستوى المخاطرة 8.7% معتدل
• نسبة الأسهم 45% مناسبة لمستثمر متوسط المخاطرة
نصيحتي: حافظ على التنويع الحالي وزد نسبة السندات قليلاً إذا أردت تقليل المخاطرة.`,
        'diversificationAnswer': "التنويع الاستثماري هو استراتيجية لتوزيع الاستثمارات على فئات أصول مختلفة لتقليل المخاطر. المبدأ هو 'لا تضع جميع بيضك في سلة واحدة'.",
        'stocksVsBondsAnswer': `الفرق الرئيسي:
• الأسهم: ملكية في الشركة، مخاطرة أعلى، عائد محتمل أعلى
• السندات: دين على الشركة أو الحكومة، مخاطرة أقل، عائد ثابت`,
        'returnsAnswer': `العوائد التاريخية المتوسطة:
• الودائع: 2-4%
• السندات: 4-7%
• الأسهم: 8-10%
• العقارات: 6-9%
ملاحظة: العوائد السابقة لا تضمن أداءً مستقبلياً.`,
        'portfolioAnswer': `محافظ مقترحة حسب المخاطرة:
• محافظة: 60% سندات، 25% أسهم، 15% أخرى
• متوازنة: 50% أسهم، 30% سندات، 20% أخرى
• مجازفة: 70% أسهم، 15% أسهم ناشئة، 15% أخرى`,
        'thanksAnswer': "عفواً! أنا هنا دائماً لمساعدتك. هل لديك أسئلة أخرى؟",
        'defaultAnswer': `شكراً على سؤالك.
كمساعد استثماري، أنصحك بـ:
1. البحث الجيد قبل أي استثمار
2. التنويع لتقليل المخاطر
3. وضع خطة استثمارية واضحة
4. الاستعانة بمستشار مالي معتمد
5. الابتعاد عن القرارات العاطفية

هل لديك سؤال محدد؟`
    },
    en: {
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About Us',
        'nav_services': 'Services',
        'nav_features': 'Features',
        'nav_testimonials': 'Testimonials',
        'nav_contact': 'Contact Us',
        
        // Hero Section
        'hero_badge': '💼 Smart Agricultural Investment',
        'hero_title': 'Invest Smartly<br><span>in the Future of Agriculture</span>',
        'hero_title_span': 'in the Future of Agriculture',
        'hero_desc': 'An integrated platform that allows you to invest in well-studied agricultural projects, with accurate data, continuous monitoring, and sustainable and safe returns.',
        'hero_btn1': 'Start as Investor 📈',
        'hero_btn2': 'Explore Opportunities 💡',
        'hero_stat1': 'Ag Projects',
        'hero_stat2': 'Active Investors',
        'hero_stat3': 'Success Rate',
        'hero_card1': 'Returns Analysis',
        'hero_card2': 'Investment Management',
        'hero_card3': 'Sustainable Opportunities',
        
        // How To Invest Section (NEW)
        'how_subtitle': 'Short Steps – Minimal',
        'how_title': '🔍 How do you invest?',
        'step1_title': 'Choose',
        'step1_desc': 'Choose the right project for you',
        'step2_title': 'Follow',
        'step2_desc': 'Track growth moment by moment',
        'step3_title': 'Share',
        'step3_desc': 'Watch your land bear fruit',
        'step4_title': 'Earn',
        'step4_desc': 'Receive your returns with confidence',
        'counter1_val': '+30%',
        'counter1_text': 'Production Improvement',
        'counter2_val': '-25%',
        'counter2_text': 'Waste Reduction',
        'counter3_val': '100%',
        'counter3_text': 'Transparency',
        'counter4_val': '∞',
        'counter4_text': 'Long-term Partnerships',
        'trust_title': '🛡️ Because Trust is the Most Important Crop',
        'trust_item1': 'Real photos & reports from the field',
        'trust_item2': 'Updated production data',
        'trust_item3': 'Direct contact',
        'trust_item4': 'Specialized technical support',
        'tech_item1': 'Comfortable dark mode',
        'tech_item2': 'Instant translation Arabic / English',
        'tech_item3': 'Elegant responsive design',
        'tech_item4': 'Colors that build trust, not noise',
        'cta_main': '🚀 Start your agricultural investment now',
        'cta_sub': 'One step away from a real partnership with the land.',
        
        // Feasibility Study
        'study_badge': '📊 Interactive Feasibility Study',
        'study_title': 'Calculate Your Ag Project ',
        'study_highlight': 'in One Step',
        'study_subtitle': 'Enter your project data and get a complete analysis of costs and expected profits',
        'form_title': 'Project Data',
        'crop_label': 'Crop Type',
        'crop_placeholder': 'Wheat',
        'area_label': 'Area (Feddan)',
        'area_input': 'Area (Feddan)',
        'area_min': '1 Feddan',
        'area_max': '100 Feddan',
        'cost_label': 'Expected Cost per Feddan',
        'cost_input': 'Expected Cost per Feddan',
        'cost_5000': '5000 EGP',
        'cost_8000': '8000 EGP',
        'cost_12000': '12000 EGP',
        'cost_custom': 'Or enter custom cost',
        'price_label': 'Expected Price per Ton',
        'price_input': 'Expected Price per Ton',
        'productivity_label': 'Expected Productivity (Ton/Feddan)',
        'productivity_input': 'Expected Productivity (Ton/Feddan)',
        'productivity_min': '1 Ton',
        'productivity_max': '10 Tons',
        'calculate_btn': 'Calculate Economic Feasibility',
        'results_title': 'Economic Feasibility Results',
        'initial_title': 'Enter Project Data',
        'initial_text': 'Feasibility results will appear here once you enter the data',
        'total_cost_label': 'Total Cost',
        'revenue_label': 'Expected Revenue',
        'profit_label': 'Expected Net Profit',
        'roi_label': 'Return on Investment',
        'payback_label': 'Payback Period',
        'production_label': 'Total Production',
        'duration_label': 'Project Duration',
        'recommendations_title': 'Our Project Recommendations',
        'analysis_title': 'Detailed Cost Analysis',
        'analysis_text': 'Detailed Cost Analysis',
        'breakdown_title': 'Cost Breakdown',
        'chart_title': 'Cost Distribution',

        // Livestock Section
        'livestock_badge': '🐄 Invest in Livestock',
        'livestock_title': 'Golden Investment Opportunities in<br><span>Livestock, Poultry & Fish</span>',
        'livestock_title_span': 'Livestock, Poultry & Fish',
        'livestock_desc': 'An integrated investment system providing profit opportunities in livestock sector with tracking and accurate reports',
        'livestock_dashboard': 'Investor Dashboard',
        'livestock_update': 'Live Update | Total Return: <strong>18.5%</strong>',
        'livestock_btn_new': 'New Investment',
        'livestock_stat1_label': 'Total Investments',
        'livestock_stat1_val': '500,000 SAR',
        'livestock_stat1_trend': '25% increase from last year',
        'livestock_stat2_label': 'Average Return',
        'livestock_stat2_val': '18.5%',
        'livestock_stat2_trend': 'Above average',
        'livestock_stat3_label': 'Active Projects',
        'livestock_stat3_val': '8',
        'livestock_stat3_trend': 'All are active',
        'livestock_tab_cattle': 'Cattle',
        'livestock_tab_poultry': 'Poultry',
        'livestock_tab_fish': 'Fish',
        'livestock_card1_title': 'Dairy Cattle Farm',
        'livestock_card_status': 'Ready for Investment',
        'livestock_card1_desc': '50 heads of high-producing dairy cows',
        'livestock_card_roi': 'Expected Return',
        'livestock_card_cost': 'Amount Required',
        'livestock_card_btn': 'Invest Now',

        // Marketing Section
        'marketing_badge': '💰 Smart Marketing System',
        'marketing_title': 'Sell & Invest Your Crops<br><span>With Highest Profitability</span>',
        'marketing_title_span': 'With Highest Profitability',
        'marketing_desc': 'An integrated system to turn your products into profits with price analysis and smart investment opportunities',
        'marketing_btn_add': 'Add Product',
        'marketing_btn_contract': 'New Contract',
        'marketing_btn_analyze': 'Market Analysis',
        'marketing_stat1_val': '200,000 SAR',
        'marketing_stat1_label': 'Total Sales',
        'marketing_stat1_trend': '15% increase',
        'marketing_stat2_val': '10 Tons',
        'marketing_stat2_label': 'Available Stock',
        'marketing_stat2_trend': 'Enough for 15 days',
        'marketing_products_title': 'Available Products',
        'marketing_prod1_name': 'Organic Tomatoes',
        'marketing_prod1_desc': 'Premium quality - Dutch variety',
        'marketing_prod1_price': '12 SAR/kg',
        'marketing_prod1_stock': '3 Tons Available',
        
        'crop_wheat': 'Wheat',
        'crop_corn': 'Corn',
        'crop_cotton': 'Cotton',
        'crop_rice': 'Rice',
        'crop_tomato': 'Tomato',
        'crop_potato': 'Potato',
        'select_crop_placeholder': 'Select crop type...',

        'poultry_title': 'Layer Chicken Farm',
        'poultry_desc': '5,000 high-production laying hens',
        'broiler_title': 'Broiler Chicken Farm',
        'broiler_desc': '10,000 fast-growing broiler chickens',
        'duck_title': 'Duck Farm',
        'duck_desc': '2,000 Muscovy ducks',
        'tilapia_title': 'Tilapia Fish Farm',
        'tilapia_desc': '50,000 fast-growing tilapia fish',
        'mullet_title': 'Mullet Fish Farm',
        'mullet_desc': '30,000 organic mullet fish',
        'shrimp_title': 'Shrimp Farm',
        'shrimp_desc': 'Shrimp farm with latest technologies',
        
        // Project Status
        'status_ready': 'Ready for Investment',
        'status_limited': 'Limited',
        'status_featured': 'Featured',
        'status_available': 'Available',

        // Chatbot
        'chatTitle': "Investment Assistant",
        'inputPlaceholder': "Type your question here...",
        'typing': "Typing...",
        
        // Welcome messages
        'welcomeMsg': "Hello! 👋 I'm your smart investment assistant.",
        'helpMsg': "I can help you with:",
        'helpItem1': "Explaining investment terms",
        'helpItem2': "Analyzing portfolio performance",
        'helpItem3': "Providing investment advice",
        'helpItem4': "Answering your inquiries",
        
        // Quick actions
        'quickStocks': "What are stocks?",
        'quickStartInvesting': "How do I start investing?",
        'quickBeginnerAdvice': "Advice for beginners",
        'quickPortfolioAnalysis': "Analyze portfolio",
        
        // Bot responses
        'greetings': "Hello! How can I help you today?",
        'stocksAnswer': "Stocks represent ownership in a company. When you buy a stock, you're buying a small piece of that company. Stocks can provide dividends and increase in value, but they carry risks related to company performance and market fluctuations.",
        'startInvestingAnswer': `To start investing, follow these steps:
1. Define your investment goals
2. Determine your risk tolerance
3. Start with a small amount and learn by doing
4. Diversify your investments
5. Consult a financial advisor
6. Invest regularly for the long term`,
        'beginnerAdviceAnswer': `Advice for beginner investors:
• Start by learning the basics
• Invest money you can afford to lose
• Focus on long-term investing
• Diversify your investments
• Avoid chasing hot news
• Monitor your performance regularly`,
        'portfolioAnalysisAnswer': `Based on your data:
• Your portfolio is well diversified
• Annual return of 12.5% is excellent
• Risk level of 8.7% is moderate
• 45% stock allocation is suitable for medium-risk investor
My advice: Maintain current diversification and slightly increase bond allocation if you want to reduce risk.`,
        'diversificationAnswer': "Investment diversification is a strategy of distributing investments across different asset classes to reduce risk. The principle is 'don't put all your eggs in one basket'.",
        'stocksVsBondsAnswer': `Main differences:
• Stocks: Ownership in company, higher risk, potentially higher returns
• Bonds: Debt of company or government, lower risk, fixed returns`,
        'returnsAnswer': `Historical average returns:
• Deposits: 2-4%
• Bonds: 4-7%
• Stocks: 8-10%
• Real estate: 6-9%
Note: Past returns don't guarantee future performance.`,
        'portfolioAnswer': `Suggested portfolios by risk:
• Conservative: 60% bonds, 25% stocks, 15% others
• Balanced: 50% stocks, 30% bonds, 20% others
• Aggressive: 70% stocks, 15% emerging stocks, 15% others`,
        'thanksAnswer': "You're welcome! I'm always here to help. Do you have other questions?",
        'defaultAnswer': `Thank you for your question.
As an investment assistant, I advise you to:
1. Research well before any investment
2. Diversify to reduce risk
3. Set clear investment plan
4. Consult certified financial advisor
5. Avoid emotional decisions

Do you have a specific question?`
    }
};

// ===== GLOBAL VARIABLES =====
let currentLang = 'ar';

// ===== SYSTEM INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Smart Farm System Initialized');
    
    // Initialize all systems
    initThemeSystem();
    initLanguageSystem();
    initFeasibilityStudy();
    initLivestockTabs();
    initMarketingSystem();
    initSmoothScroll();
    initMicSystem();
    initChatbot();
    
    // إزالة الروابط من الأزرار (ما عدا زر قيم مشروعك اقتصاديا)
    removeButtonsLinks();
});

// ===== REMOVE BUTTONS LINKS =====
function removeButtonsLinks() {
    // إزالة جميع الروابط من الأزرار في الموقع
    const allButtons = document.querySelectorAll('button, .btn, a.btn, [href="#"]');
    
    allButtons.forEach(button => {
        // احتفظ بزار "قيم مشروعك اقتصاديا" فقط
        if (button.textContent.includes('اقتصاديا') || 
            button.textContent.includes('Feasibility') ||
            button.id === 'calculateBtn') {
            return; // لا تزيل الروابط من هذا الزر
        }
        
        // إزالة الروابط من الأزرار الأخرى
        if (button.hasAttribute('href')) {
            button.removeAttribute('href');
        }
        
        // منع النافذة المنبثقة من الفتح عند النقر
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // إظهار إشعار بدلاً من فتح الصفحة
            const buttonText = this.textContent.trim();
            const message = currentLang === 'ar' 
                ? `تم تفعيل: ${buttonText}` 
                : `Activated: ${buttonText}`;
            showNotification(message, 'info');
        });
    });
}

// ===== THEME SYSTEM =====
function initThemeSystem() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
                showNotification(
                    currentLang === 'ar' ? 'تم تفعيل الوضع الليلي' : 'Dark mode enabled', 
                    'success'
                );
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
                showNotification(
                    currentLang === 'ar' ? 'تم تفعيل الوضع النهاري' : 'Light mode enabled', 
                    'success'
                );
            }
        });
    }
}

// ===== LANGUAGE SYSTEM =====
function initLanguageSystem() {
    const langToggle = document.getElementById('langToggle');
    const htmlElement = document.documentElement;
    
    currentLang = localStorage.getItem('language') || 'ar';
    
    if (langToggle) {
        langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    }
    
    htmlElement.setAttribute('lang', currentLang);
    htmlElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    updateAllTexts(currentLang);
    updateSliderValues();
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            
            langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
            
            localStorage.setItem('language', currentLang);
            
            htmlElement.setAttribute('lang', currentLang);
            htmlElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            
            updateAllTexts(currentLang);
            updateSliderValues();
            
            if (window.costChartInstance) {
                window.costChartInstance.destroy();
            }
            
            showNotification(
                currentLang === 'ar' ? 'تم التبديل إلى العربية' : 'Switched to English',
                'success'
            );
        });
    }
}

// ===== UPDATE ALL TEXTS FUNCTION =====
function updateAllTexts(lang) {
    const langData = translations[lang];
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (langData[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.id === 'userInput') {
                    element.placeholder = langData[key];
                }
            } else if (element.tagName === 'SELECT') {
                // تحديث قائمة المحاصيل فقط
                if (key === 'crop_placeholder') {
                    updateCropOptions(element, lang);
                }
                // باقي عناصر SELECT نتركها كما هي
            } else {
                // تحديث النصوص العادية
                element.innerHTML = langData[key];
            }
        }
    });
    
    // تحديث تسميات السلايدر
    updateSliderLabels(lang);
    
    // تحديث عناصر الشات بوت
    updateChatbotElements(lang);
    
    // تحديث محتوى الثروة الحيوانية
    updateLivestockContent(lang);
}

// ===== UPDATE SLIDER LABELS =====
function updateSliderLabels(lang) {
    // تحديث تسميات سلايدر المساحة
    const areaLabels = document.querySelectorAll('.slider-labels span:first-child, .slider-labels span:last-child');
    if (areaLabels.length >= 2) {
        const areaMin = translations[lang]['area_min'] || '1 فدان';
        const areaMax = translations[lang]['area_max'] || '100 فدان';
        areaLabels[0].textContent = areaMin;
        areaLabels[1].textContent = areaMax;
    }
    
    // تحديث تسميات سلايدر الإنتاجية
    const productivityLabels = document.querySelectorAll('#productivity + .slider-labels span:first-child, #productivity + .slider-labels span:last-child');
    if (productivityLabels.length >= 2) {
        const prodMin = translations[lang]['productivity_min'] || '1 طن';
        const prodMax = translations[lang]['productivity_max'] || '10 طن';
        productivityLabels[0].textContent = prodMin;
        productivityLabels[1].textContent = prodMax;
    }
}

// ===== UPDATE CROP OPTIONS =====
function updateCropOptions(selectElement, lang) {
    const cropOptions = [
        { value: 'wheat', key: 'crop_wheat' },
        { value: 'corn', key: 'crop_corn' },
        { value: 'cotton', key: 'crop_cotton' },
        { value: 'rice', key: 'crop_rice' },
        { value: 'tomato', key: 'crop_tomato' },
        { value: 'potato', key: 'crop_potato' }
    ];
    
    // حفظ القيمة الحالية المحددة
    const currentValue = selectElement.value;
    
    // مسح الخيارات الحالية
    selectElement.innerHTML = '';
    
    // إضافة خيار افتراضي
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = translations[lang]['select_crop_placeholder'] || 'اختر نوع المحصول...';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);
    
    // إضافة خيارات المحاصيل
    cropOptions.forEach(crop => {
        const option = document.createElement('option');
        option.value = crop.value;
        option.textContent = translations[lang][crop.key] || crop.value;
        selectElement.appendChild(option);
    });
    
    // إعادة تعيين القيمة المحددة إذا كانت موجودة
    if (currentValue && selectElement.querySelector(`option[value="${currentValue}"]`)) {
        selectElement.value = currentValue;
        defaultOption.selected = false;
    }
}

// ===== UPDATE CHATBOT ELEMENTS =====
function updateChatbotElements(lang) {
    const langData = translations[lang];
    
    // تحديث عنوان الشات بوت
    const chatTitle = document.getElementById('chatTitle');
    if (chatTitle) chatTitle.textContent = langData['chatTitle'];
    
    // تحديث عناصر الإدخال
    const userInput = document.getElementById('userInput');
    if (userInput) userInput.placeholder = langData['inputPlaceholder'];
    
    // تحديث الأزرار السريعة
    const quickButtons = [
        { selector: '.quick-action[data-question="stocks"] span', key: 'quickStocks' },
        { selector: '.quick-action[data-question="startInvesting"] span', key: 'quickStartInvesting' },
        { selector: '.quick-action[data-question="beginnerAdvice"] span', key: 'quickBeginnerAdvice' },
        { selector: '.quick-action[data-question="portfolioAnalysis"] span', key: 'quickPortfolioAnalysis' }
    ];
    
    quickButtons.forEach(btn => {
        const element = document.querySelector(btn.selector);
        if (element && langData[btn.key]) {
            element.textContent = langData[btn.key];
        }
    });
}

// ===== UPDATE LIVESTOCK CONTENT =====
function updateLivestockContent(lang) {
    const langData = translations[lang];
    
    // تحديث البطاقات حسب نوعها
    const cardTypes = ['cattle', 'poultry', 'fish'];
    
    cardTypes.forEach(type => {
        const cards = document.querySelectorAll(`.invest-card[data-type="${type}"]`);
        
        cards.forEach((card, index) => {
            const titleElement = card.querySelector('.card-title');
            const descElement = card.querySelector('.card-desc');
            
            if (titleElement && descElement) {
                let titleKey = '';
                let descKey = '';
                
                // تعيين المفاتيح بناءً على النوع والفهرس
                if (type === 'cattle') {
                    if (index === 0) { titleKey = 'livestock_card1_title'; descKey = 'livestock_card1_desc'; }
                } else if (type === 'poultry') {
                    if (index === 0) { titleKey = 'poultry_title'; descKey = 'poultry_desc'; }
                    else if (index === 1) { titleKey = 'broiler_title'; descKey = 'broiler_desc'; }
                    else if (index === 2) { titleKey = 'duck_title'; descKey = 'duck_desc'; }
                } else if (type === 'fish') {
                    if (index === 0) { titleKey = 'tilapia_title'; descKey = 'tilapia_desc'; }
                    else if (index === 1) { titleKey = 'mullet_title'; descKey = 'mullet_desc'; }
                    else if (index === 2) { titleKey = 'shrimp_title'; descKey = 'shrimp_desc'; }
                }
                
                if (titleKey && langData[titleKey]) {
                    titleElement.textContent = langData[titleKey];
                }
                if (descKey && langData[descKey]) {
                    descElement.textContent = langData[descKey];
                }
            }
            
            // تحديث حالة المشروع
            const statusElement = card.querySelector('.card-status');
            if (statusElement && langData['status_ready']) {
                statusElement.textContent = langData['status_ready'];
            }
            
            // تحديث النصوص الأخرى في البطاقة
            const roiLabel = card.querySelector('.card-meta:nth-child(1) span:first-child');
            const costLabel = card.querySelector('.card-meta:nth-child(2) span:first-child');
            const buttonText = card.querySelector('.card-btn');
            
            if (roiLabel && langData['livestock_card_roi']) {
                roiLabel.textContent = langData['livestock_card_roi'];
            }
            if (costLabel && langData['livestock_card_cost']) {
                costLabel.textContent = langData['livestock_card_cost'];
            }
            if (buttonText && langData['livestock_card_btn']) {
                buttonText.textContent = langData['livestock_card_btn'];
            }
        });
    });
}

// ===== UPDATE SLIDER VALUES =====
function updateSliderValues() {
    const areaSlider = document.getElementById('areaSize');
    const areaValue = document.getElementById('areaValue');
    const productivitySlider = document.getElementById('productivity');
    const productivityValue = document.getElementById('productivityValue');
    
    if (areaSlider && areaValue) {
        const unit = currentLang === 'ar' ? ' فدان' : ' Feddan';
        areaValue.textContent = areaSlider.value + unit;
    }
    
    if (productivitySlider && productivityValue) {
        const unit = currentLang === 'ar' ? ' طن' : ' Ton';
        productivityValue.textContent = productivitySlider.value + unit;
    }
}

// ===== MICROPHONE SYSTEM =====
function initMicSystem() {
    const micBtn = document.getElementById('micToggle');
    let isListening = false;
    
    if (!micBtn) return;
    
    micBtn.addEventListener('click', function() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            isListening = !isListening;
            
            if (isListening) {
                this.classList.add('listening');
                this.innerHTML = '<i class="fas fa-microphone-slash"></i>';
                showNotification(
                    currentLang === 'ar' ? 'جاري الاستماع...' : 'Listening...',
                    'info'
                );
            } else {
                this.classList.remove('listening');
                this.innerHTML = '<i class="fas fa-microphone"></i>';
            }
        } else {
            showNotification(
                currentLang === 'ar' ? 'الميزة غير مدعومة' : 'Feature not supported',
                'warning'
            );
        }
    });
}

// ===== FEASIBILITY STUDY FUNCTIONS =====
function initFeasibilityStudy() {
    const areaSlider = document.getElementById('areaSize');
    const areaValue = document.getElementById('areaValue');
    const productivitySlider = document.getElementById('productivity');
    const productivityValue = document.getElementById('productivityValue');
    const calculateBtn = document.getElementById('calculateBtn');
    const costButtons = document.querySelectorAll('.cost-btn');
    const customCostInput = document.getElementById('customCost');
    
    if (!areaSlider || !calculateBtn) {
        console.error('❌ عناصر دراسة الجدوى غير موجودة!');
        return;
    }
    
    updateSliderValues();
    
    areaSlider.addEventListener('input', function() {
        const unit = currentLang === 'ar' ? ' فدان' : ' Feddan';
        if (areaValue) areaValue.textContent = this.value + unit;
        const value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(90deg, var(--primary) ${value}%, #e0e0e0 ${value}%)`;
    });
    
    productivitySlider.addEventListener('input', function() {
        const unit = currentLang === 'ar' ? ' طن' : ' Ton';
        if (productivityValue) productivityValue.textContent = this.value + unit;
        const value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(90deg, var(--primary) ${value}%, #e0e0e0 ${value}%)`;
    });
    
    if (costButtons) {
        costButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                costButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                if (customCostInput) customCostInput.value = this.dataset.cost;
            });
        });
    }
    
    calculateBtn.addEventListener('click', calculateFeasibility);
    
    if (costButtons && costButtons[1]) {
        costButtons[1].classList.add('active');
        if (customCostInput) customCostInput.value = '8000';
    }
    
    console.log('✅ دراسة الجدوى جاهزة');
}

function calculateFeasibility() {
    console.log('🔢 بدء حساب الجدوى الاقتصادية...');
    
    const area = parseInt(document.getElementById('areaSize').value);
    const productivity = parseFloat(document.getElementById('productivity').value);
    const pricePerTon = parseInt(document.getElementById('pricePerTon').value) || 15000;
    
    let costPerFeddan = 8000;
    const customCostInput = document.getElementById('customCost');
    const selectedBtn = document.querySelector('.cost-btn.active');
    
    if (customCostInput && customCostInput.value) costPerFeddan = parseInt(customCostInput.value);
    else if (selectedBtn) costPerFeddan = parseInt(selectedBtn.dataset.cost);
    
    if (isNaN(costPerFeddan)) costPerFeddan = 8000;
    
    const totalCost = area * costPerFeddan;
    const totalProduction = area * productivity;
    const totalRevenue = totalProduction * pricePerTon;
    const netProfit = totalRevenue - totalCost;
    const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(1) : 0;
    const paybackPeriod = netProfit > 0 ? (totalCost / (netProfit / 6)).toFixed(1) : 0;
    
    const currencySymbol = currentLang === 'ar' ? ' ج' : ' EGP';
    const areaUnit = currentLang === 'ar' ? ' طن' : ' Ton';
    const timeUnit = currentLang === 'ar' ? ' شهر' : ' Month';
    
    document.getElementById('totalCost').textContent = formatNumber(totalCost) + currencySymbol;
    document.getElementById('totalRevenue').textContent = formatNumber(totalRevenue) + currencySymbol;
    document.getElementById('netProfit').textContent = formatNumber(netProfit) + currencySymbol;
    document.getElementById('roi').textContent = roi + '%';
    document.getElementById('payback').textContent = paybackPeriod + timeUnit;
    document.getElementById('totalProduction').textContent = formatNumber(totalProduction) + areaUnit;
    
    const maxValue = Math.max(totalCost, totalRevenue, Math.abs(netProfit), 1);
    
    setTimeout(() => {
        const costBar = document.getElementById('costBar');
        const revenueBar = document.getElementById('revenueBar');
        const profitBar = document.getElementById('profitBar');
        
        if (costBar) costBar.style.width = (totalCost / maxValue * 100) + '%';
        if (revenueBar) revenueBar.style.width = (totalRevenue / maxValue * 100) + '%';
        if (profitBar) profitBar.style.width = (Math.abs(netProfit) / maxValue * 100) + '%';
    }, 100);
    
    const resultsContainer = document.getElementById('resultsContainer');
    const feasibilityResults = document.getElementById('feasibilityResults');
    const detailedAnalysis = document.getElementById('detailedAnalysis');
    
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (feasibilityResults) {
        feasibilityResults.style.display = 'block';
        setTimeout(() => {
            feasibilityResults.style.opacity = '1';
            feasibilityResults.style.transform = 'translateY(0)';
        }, 10);
    }
    if (detailedAnalysis) detailedAnalysis.style.display = 'block';
    
    generateRecommendations(netProfit, roi, totalCost);
    createCostBreakdown(totalCost);
    createCostChart(totalCost);
    
    showNotification(
        currentLang === 'ar' ? 'تم حساب دراسة الجدوى!' : 'Feasibility calculated!',
        'success'
    );
    
    console.log('✅ تم حساب الجدوى بنجاح');
}

function createCostBreakdown(totalCost) {
    const costCategories = currentLang === 'ar' ? [
        { name: 'إعداد الأرض', percentage: 25, color: '#0f4c5c' },
        { name: 'البذور/الشتلات', percentage: 20, color: '#1c7a8d' },
        { name: 'الأسمدة', percentage: 15, color: '#00b894' },
        { name: 'المبيدات', percentage: 10, color: '#E07A5F' },
        { name: 'الري', percentage: 12, color: '#fdcb6e' },
        { name: 'العمالة', percentage: 10, color: '#E6D5B8' },
        { name: 'مصاريف أخرى', percentage: 8, color: '#9C27B0' }
    ] : [
        { name: 'Land Prep', percentage: 25, color: '#0f4c5c' },
        { name: 'Seeds', percentage: 20, color: '#1c7a8d' },
        { name: 'Fertilizers', percentage: 15, color: '#00b894' },
        { name: 'Pesticides', percentage: 10, color: '#E07A5F' },
        { name: 'Irrigation', percentage: 12, color: '#fdcb6e' },
        { name: 'Labor', percentage: 10, color: '#E6D5B8' },
        { name: 'Others', percentage: 8, color: '#9C27B0' }
    ];
    
    const currencySymbol = currentLang === 'ar' ? ' ج' : ' EGP';
    const percentageText = currentLang === 'ar' ? '% من التكلفة' : '% of Cost';
    
    let html = '';
    costCategories.forEach(category => {
        const amount = (totalCost * category.percentage / 100).toFixed(0);
        html += `
            <div class="cost-item-breakdown">
                <div class="cost-item-header">
                    <span class="cost-item-name">${category.name}</span>
                    <span class="cost-item-amount">${formatNumber(amount)}${currencySymbol}</span>
                </div>
                <div class="cost-item-bar">
                    <div class="cost-item-fill" style="width: ${category.percentage}%; background: ${category.color};"></div>
                </div>
                <div class="cost-item-percentage">${category.percentage}${percentageText}</div>
            </div>
        `;
    });
    const costBreakdown = document.getElementById('costBreakdown');
    if (costBreakdown) costBreakdown.innerHTML = html;
}

function createCostChart(totalCost) {
    const ctx = document.getElementById('costChart');
    if (!ctx) return;
    
    if (window.costChartInstance) window.costChartInstance.destroy();
    
    const labels = currentLang === 'ar' 
        ? ['إعداد الأرض', 'البذور', 'الأسمدة', 'المبيدات', 'الري', 'العمالة', 'أخرى']
        : ['Land Prep', 'Seeds', 'Fertilizers', 'Pesticides', 'Irrigation', 'Labor', 'Other'];
    
    window.costChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: [25, 20, 15, 10, 12, 10, 8],
                backgroundColor: ['#0f4c5c', '#1c7a8d', '#00b894', '#E07A5F', '#fdcb6e', '#E6D5B8', '#9C27B0'],
                borderWidth: 2,
                borderColor: document.body.classList.contains('dark-mode') ? 'rgba(255, 255, 255, 0.1)' : 'white'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: currentLang === 'ar',
                    labels: { font: { family: 'Cairo', size: 12 }, padding: 20, color: document.body.classList.contains('dark-mode') ? '#e8e8e8' : '#2d3436' }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = (totalCost * context.parsed / 100).toFixed(0);
                            return `${context.label}: ${formatNumber(value)}${currentLang === 'ar' ? ' ج' : ' EGP'} (${context.parsed}%)`;
                        }
                    }
                }
            }
        }
    });
}

function generateRecommendations(netProfit, roi, totalCost) {
    let recommendations = '';
    const lang = currentLang;
    
    if (lang === 'ar') {
        if (netProfit > 0) recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.1);border-radius:8px;">✅ مشروع مربح</div>`;
        if (roi > 30) recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.1);border-radius:8px;">🚀 عائد ممتاز</div>`;
        else if (roi > 0) recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.1);border-radius:8px;">📊 عائد جيد</div>`;
        else recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(253,203,110,0.2);border-radius:8px;">⚠️ تحذير: غير مربح</div>`;
    } else {
        if (netProfit > 0) recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.1);border-radius:8px;">✅ Profitable</div>`;
        if (roi > 30) recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.1);border-radius:8px;">🚀 Excellent Return</div>`;
        else if (roi > 0) recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,0.1);border-radius:8px;">📊 Good Return</div>`;
        else recommendations += `<div style="margin-bottom:10px;padding:10px;background:rgba(253,203,110,0.2);border-radius:8px;">⚠️ Warning: Not Profitable</div>`;
    }
    
    const recElement = document.getElementById('recommendations');
    if (recElement) recElement.innerHTML = recommendations;
}

// ===== LIVESTOCK INVESTMENT FUNCTIONS =====
function initLivestockTabs() {
    const investTabs = document.querySelectorAll('.invest-tab');
    
    if (investTabs.length === 0) return;
    
    investTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            
            // إزالة النشط من جميع الأزرار
            investTabs.forEach(t => {
                t.style.background = 'rgba(15, 76, 92, 0.1)';
                t.style.color = 'var(--text-dark)';
                t.style.borderBottom = 'none';
            });
            
            // إضافة النشط للزر المحدد
            this.style.background = 'var(--gradient-primary)';
            this.style.color = 'var(--text-light)';
            this.style.borderBottom = '3px solid var(--text-light)';
            
            // إخفاء جميع المحتويات
            document.querySelectorAll('.invest-content').forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });
            
            // إظهار المحتوى المحدد
            const targetContent = document.getElementById(`${type}-content`);
            if (targetContent) {
                targetContent.style.display = 'block';
                targetContent.classList.add('active');
                
                // إضافة تأثير ظهور
                targetContent.style.opacity = '0';
                targetContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    targetContent.style.opacity = '1';
                    targetContent.style.transform = 'translateY(0)';
                    targetContent.style.transition = 'all 0.5s ease';
                }, 10);
            }
            
            // تحديث محتوى الثروة الحيوانية
            updateLivestockContent(currentLang);
        });
    });
    
    // تفعيل زر الماشية افتراضياً
    const cattleTab = document.querySelector('.invest-tab[data-type="cattle"]');
    if (cattleTab) {
        cattleTab.click();
    }
}

// ===== MARKETING SYSTEM FUNCTIONS =====
function initMarketingSystem() {
    const quickActions = document.querySelectorAll('.quick-action');
    quickActions.forEach(action => {
        action.addEventListener('click', function() {
            const actionText = this.querySelector('span').textContent;
            showNotification(
                currentLang === 'ar' ? `تفعيل: ${actionText}` : `Activating: ${actionText}`,
                'info'
            );
        });
    });
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            showNotification(
                currentLang === 'ar' ? `عرض تفاصيل ${productName}` : `Showing details for ${productName}`,
                'info'
            );
        });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== CHATBOT SYSTEM =====
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbot = document.getElementById('closeChatbot');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    
    if (!chatbotToggle || !chatbotWindow) {
        console.error('❌ عناصر الشات بوت غير موجودة!');
        return;
    }
    
    console.log('✅ الشات بوت جاهز');
    
    // فتح/إغلاق الشات بوت
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
        chatbotToggle.classList.toggle('active');
        
        if (chatbotWindow.classList.contains('active')) {
            // إخفاء الإشعارات عند فتح الشات
            const notificationBadge = document.getElementById('notificationBadge');
            if (notificationBadge) {
                notificationBadge.style.display = 'none';
            }
            // التركيز على حقل الإدخال
            setTimeout(() => {
                if (userInput) userInput.focus();
            }, 300);
        }
    });
    
    // إغلاق الشات بوت
    if (closeChatbot) {
        closeChatbot.addEventListener('click', function() {
            chatbotWindow.classList.remove('active');
            chatbotToggle.classList.remove('active');
        });
    }
    
    // إرسال رسالة عند الضغط على Enter
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // زر الإرسال
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    // الأوامر السريعة
    document.querySelectorAll('.quick-action[data-question]').forEach(item => {
        item.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            if (userInput) {
                userInput.value = this.querySelector('span').textContent;
                sendMessage();
            }
        });
    });
    
    // دالة إرسال الرسالة
    function sendMessage() {
        if (!userInput) return;
        
        const message = userInput.value.trim();
        if (message === '') return;
        
        // إضافة رسالة المستخدم
        addMessage(message, true);
        userInput.value = '';
        
        // إظهار مؤشر الكتابة
        showTypingIndicator();
        
        // محاكاة رد البوت بعد وقت قصير
        setTimeout(() => {
            removeTypingIndicator();
            const botResponse = getBotResponse(message);
            addMessage(botResponse, false);
        }, 1000);
    }
    
    // دالة إضافة رسالة
    function addMessage(message, isUser) {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const avatarIcon = isUser ? 'fas fa-user' : 'fas fa-robot';
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="${avatarIcon}"></i>
            </div>
            <div class="message-content">
                ${formatMessage(message)}
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // تنسيق الرسالة
    function formatMessage(message) {
        return message.replace(/\n/g, '<br>');
    }
    
    // مؤشر الكتابة
    function showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // ردود البوت
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        const lang = currentLang;
        
        // Check for specific questions
        if (lowerMessage.includes('مرحب') || lowerMessage.includes('اهلا') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return translations[lang]['greetings'];
        }
        
        if (lowerMessage.includes('سهم') || lowerMessage.includes('اسهم') || lowerMessage.includes('stock')) {
            return translations[lang]['stocksAnswer'];
        }
        
        if (lowerMessage.includes('استثمار') || lowerMessage.includes('ابدا') || lowerMessage.includes('start') || lowerMessage.includes('invest')) {
            return translations[lang]['startInvestingAnswer'];
        }
        
        if (lowerMessage.includes('نصيحة') || lowerMessage.includes('مبتدئ') || lowerMessage.includes('advice') || lowerMessage.includes('beginner')) {
            return translations[lang]['beginnerAdviceAnswer'];
        }
        
        if (lowerMessage.includes('محفظ') || lowerMessage.includes('portfolio') || lowerMessage.includes('تحليل')) {
            return translations[lang]['portfolioAnalysisAnswer'];
        }
        
        if (lowerMessage.includes('شكر') || lowerMessage.includes('thank')) {
            return translations[lang]['thanksAnswer'];
        }
        
        // Default response
        return translations[lang]['defaultAnswer'];
    }
}

// ===== HELPER FUNCTIONS =====
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️';
    
    notification.innerHTML = `
        <span>${icon} ${message}</span>
        <button class="notification-close">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== MODAL FUNCTIONS =====
function showRegistrationModal() {
    const message = currentLang === 'ar' 
        ? 'سيتم فتح نموذج التسجيل قريباً!' 
        : 'Registration form will open soon!';
    showNotification(message, 'info');
}

function showInvestmentModal() {
    const message = currentLang === 'ar' 
        ? 'سيتم فتح نموذج الاستثمار قريباً!' 
        : 'Investment form will open soon!';
    showNotification(message, 'info');
}

function investNow(projectName) {
    const message = currentLang === 'ar' 
        ? `جاري الاستثمار في: ${projectName}` 
        : `Investing in: ${projectName}`;
    showNotification(message, 'success');
}

function showAddProduct() {
    const message = currentLang === 'ar' 
        ? 'جاري فتح نموذج إضافة منتج جديد' 
        : 'Opening new product form';
    showNotification(message, 'info');
}

function showNewContract() {
    const message = currentLang === 'ar' 
        ? 'جاري فتح نموذج عقد جديد' 
        : 'Opening new contract form';
    showNotification(message, 'info');
}

function analyzeMarket() {
    const message = currentLang === 'ar' 
        ? 'جاري تحليل سوق المنتجات...' 
        : 'Analyzing product market...';
    showNotification(message, 'info');
}

function showProductDetails(productName) {
    const message = currentLang === 'ar' 
        ? `عرض تفاصيل: ${productName}` 
        : `Showing details for: ${productName}`;
    showNotification(message, 'info');
}