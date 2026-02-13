

// ===== تهيئة النظام =====
document.addEventListener('DOMContentLoaded', function () {
    initSystem();
    initTheme();
    initLanguage();
    initTrackingSystem();
    initIrrigationSystem();
    initCropSelector();
    initRegistrationModal();
    initMarketSystem();
    initExpertSessions();
    initTextToSpeech();
});

// ===== تهيئة النظام الرئيسي =====
function initSystem() {
    console.log("✅ نظام Smart Farm جاهز للعمل!");

    // إعداد أزرار التنقل
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== نظام الوضع الليلي =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // التحقق من التفضيل المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            this.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            this.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}


// ===== نظام تتبع المحاصيل =====
function initTrackingSystem() {
    const timelinePoints = document.querySelectorAll('.timeline-point');

    timelinePoints.forEach(point => {
        point.addEventListener('click', function () {
            timelinePoints.forEach(p => p.classList.remove('active'));
            this.classList.add('active');

            const stage = this.style.left;
            let stageInfo = '';

            if (stage.includes('10%')) {
                stageInfo = 'المرحلة الحالية: التحضير<br>تجهيز الأرض وتحضير التربة للزراعة';
            } else if (stage.includes('35%')) {
                stageInfo = 'المرحلة الحالية: النمو<br>يجب زيادة معدل الري والبدء في التسميد النيتروجيني';
            } else if (stage.includes('60%')) {
                stageInfo = 'المرحلة الحالية: الري والعناية<br>الحفاظ على رطوبة التربة ومكافحة الآفات';
            } else {
                stageInfo = 'المرحلة الحالية: الحصاد<br>جاهز للحصاد والبيع في السوق';
            }

            document.getElementById('stageInfo').innerHTML = `
                <h3 style="color: var(--secondary); margin-bottom: 10px;">${stageInfo.split('<br>')[0]}</h3>
                <p>${stageInfo.split('<br>')[1]}</p>
            `;
        });
    });
}

// ===== نظام الري الذكي =====
function initIrrigationSystem() {
    // تحديث مؤشر رطوبة التربة
    updateMoistureIndicator();

    // تحديث استهلاك المياه
    updateWaterConsumption();

    // تحديث بيانات الطقس
    updateWeatherData();

    // تحديث البيانات كل 10 ثواني
    setInterval(() => {
        updateMoistureIndicator();
        updateWaterConsumption();
        updateWeatherData();
    }, 10000);
}

function updateMoistureIndicator() {
    const moisture = Math.floor(Math.random() * 30) + 55; // 55-85%
    const moistureFill = document.getElementById('moistureFill');
    const moisturePercent = document.getElementById('moisturePercent');
    const moistureStatus = document.getElementById('moistureStatus');

    // تحديث الدائرة
    const circumference = 2 * Math.PI * 80;
    const dashoffset = circumference - (moisture / 100) * circumference;
    moistureFill.style.strokeDasharray = `${circumference} ${circumference}`;
    moistureFill.style.strokeDashoffset = dashoffset;

    // تحديث النسبة
    moisturePercent.textContent = `${moisture}%`;

    // تحديث الحالة
    let status = 'مثالي';
    let color = '#00b894';

    if (moisture < 60) {
        status = 'جاف';
        color = '#fdcb6e';
    } else if (moisture > 80) {
        status = 'رطب جداً';
        color = '#3498db';
    }

    moistureStatus.textContent = status;
    moistureFill.style.stroke = color;
    moistureStatus.className = `moisture-status ${moisture < 60 ? 'status-dry' : moisture > 80 ? 'status-wet' : 'status-optimal'}`;
}

function updateWaterConsumption() {
    // تحديث استهلاك المياه اليومي
    const todayWater = Math.floor(Math.random() * 50) + 100;
    document.getElementById('todayWater').textContent = `${todayWater} لتر`;

    // تحديث استهلاك الأسبوع
    const weekWater = Math.floor(Math.random() * 200) + 700;
    document.getElementById('weekWater').textContent = `${weekWater} لتر`;

    // تحديث استهلاك الشهر
    const monthWater = Math.floor(Math.random() * 1000) + 2500;
    document.getElementById('monthWater').textContent = `${monthWater.toLocaleString()} لتر`;

    // تحديث نسبة التوفير
    const waterSaved = Math.floor(Math.random() * 20) + 30;
    document.getElementById('waterSaved').textContent = `${waterSaved}%`;
}

function updateWeatherData() {
    // تحديث درجة الحرارة
    const temperature = Math.floor(Math.random() * 10) + 25;
    document.getElementById('temperature').textContent = `${temperature}°C`;

    // تحديث الرطوبة
    const humidity = Math.floor(Math.random() * 30) + 40;
    document.getElementById('humidity').textContent = `${humidity}%`;

    // تحديث احتمالية المطر
    const rainChance = Math.floor(Math.random() * 30);
    document.getElementById('rainChance').textContent = `${rainChance}%`;

    // تحديث التوصية
    let advice = 'ري عادي';
    if (rainChance > 50) {
        advice = 'تأجيل الري';
    } else if (temperature > 32) {
        advice = 'زيادة الري';
    } else if (temperature < 22) {
        advice = 'تقليل الري';
    }
    document.getElementById('weatherAdvice').textContent = advice;
}

// ===== نظام اختيار المحصول =====
function initCropSelector() {
    // إعداد المنزلقات
    const tempRange = document.getElementById('temperatureRange');
    const humidityRange = document.getElementById('humidityRange');
    const tempValue = document.getElementById('tempValue');
    const humidityValue = document.getElementById('humidityValue');

    tempRange.addEventListener('input', function () {
        tempValue.textContent = this.value;
    });

    humidityRange.addEventListener('input', function () {
        humidityValue.textContent = this.value;
    });

    // زر التحليل
    document.getElementById('analyzeBtn').addEventListener('click', function () {
        showRegistrationModal();
    });
}






















// ===== تعديل جميع الأزرار التي تستدعي showRegistrationModal =====
document.addEventListener('DOMContentLoaded', function () {
    // تغيير نصوص الأزرار
    const buttons = document.querySelectorAll('[onclick*="showRegistrationModal"]');
    buttons.forEach(button => {
        // تغيير نص الزر إذا كان مناسباً
        if (button.textContent.includes('تسجيل') ||
            button.textContent.includes('سجل') ||
            button.textContent.includes('الدخول')) {
            button.innerHTML = button.innerHTML.replace('تسجيل الدخول', 'عرض التفاصيل');
            button.innerHTML = button.innerHTML.replace('سجل', 'عرض');
        }
    });

    // إعادة ربط الأحداث
    document.querySelectorAll('.timeline-point, .analyze-btn, .book-session-btn, .btn-buy-now, .btn-view-details').forEach(element => {
        if (element.onclick) {
            const originalOnClick = element.onclick;
            element.onclick = function (e) {
                e.preventDefault();
                showRegistrationModal(e);
            };
        }
    });
});










function loadMarketProducts() {
    const marketProducts = [
        {
            name: 'القمح',
            variety: 'سدس 12',
            quantity: '50 طن',
            price: '12,000 ج.م/طن',
            harvest: '45 يوم',
            location: 'دلتا النيل',
            seller: 'أحمد محمد',
            rating: 4.8,
            status: 'available'
        },
        {
            name: 'الطماطم',
            variety: 'هايبرد',
            quantity: '20 طن',
            price: '8,000 ج.م/طن',
            harvest: '10 أيام',
            location: 'صعيد مصر',
            seller: 'فاطمة حسن',
            rating: 4.9,
            status: 'reserved'
        },
        {
            name: 'البرتقال',
            variety: 'أبو صرة',
            quantity: '30 طن',
            price: '10,000 ج.م/طن',
            harvest: '62 يوم',
            location: 'الساحل الشمالي',
            seller: 'محمد علي',
            rating: 4.5,
            status: 'available'
        },
        {
            name: 'الذرة',
            variety: 'هجين 352',
            quantity: '40 طن',
            price: '9,500 ج.م/طن',
            harvest: '60 يوم',
            location: 'سيناء',
            seller: 'سعيد إبراهيم',
            rating: 4.7,
            status: 'available'
        }
    ];

    const productsContainer = document.getElementById('marketProducts');
    if (!productsContainer) return;

    productsContainer.innerHTML = marketProducts.map(product => `
        <div class="product-card">
            <div class="product-badge status-${product.status}">
                ${product.status === 'available' ? 'متاح' : product.status === 'reserved' ? 'محجوز جزئياً' : 'مباع'}
            </div>
            <div class="product-header">
    <div class="product-icon">
        ${product.name === 'القمح' ? '🌾' :
            product.name === 'الطماطم' ? '🍅' :
                product.name === 'البرتقال' ? '🍊' :
                    product.name === 'الموز' ? '🍌' :
                        product.name === 'التفاح' ? '🍎' :
                            '🍉'

        }
    </div>
    <div class="product-title">
        <h3>${product.name}</h3>
        <p class="product-variety">${product.variety}</p>
    </div>
</div>
            
            <div class="product-details">
                <div class="detail-item">
                    <span><i class="fas fa-weight"></i> الكمية:</span>
                    <strong>${product.quantity}</strong>
                </div>
                <div class="detail-item">
                    <span><i class="fas fa-money-bill-wave"></i> السعر:</span>
                    <strong>${product.price}</strong>
                </div>
                <div class="detail-item">
                    <span><i class="fas fa-calendar-alt"></i> الحصاد بعد:</span>
                    <strong>${product.harvest}</strong>
                </div>
                <div class="detail-item">
                    <span><i class="fas fa-map-marker-alt"></i> الموقع:</span>
                    <strong>${product.location}</strong>
                </div>
            </div>
            
            <div class="product-footer">
                <div class="seller-info">
                    <i class="fas fa-user-circle"></i>
                    <div>
                        <span class="seller-name">${product.seller}</span>
                        <div class="seller-rating">
                            <i class="fas fa-star"></i>
                            <span>${product.rating}</span>
                        </div>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="btn-view-details" onclick="showRegistrationModal()">
                        <i class="fas fa-eye"></i>
                        عرض التفاصيل
                    </button>
                   
                </div>
            </div>
        </div>
    `).join('');
}

function updateMarketStatistics() {
    // تحديث الإحصائيات بشكل عشوائي كل 5 ثواني
    setInterval(() => {
        const activeListings = document.getElementById('activeListings');
        const activeBuyers = document.getElementById('activeBuyers');
        const totalVolume = document.getElementById('totalVolume');
        const avgPremium = document.getElementById('avgPremium');

        if (activeListings) {
            const current = parseInt(activeListings.textContent.replace(/,/g, ''));
            activeListings.textContent = (current + Math.floor(Math.random() * 10)).toLocaleString();
        }

        if (activeBuyers) {
            const current = parseInt(activeBuyers.textContent.replace(/,/g, ''));
            activeBuyers.textContent = (current + Math.floor(Math.random() * 20)).toLocaleString();
        }

        if (avgPremium) {
            const current = parseInt(avgPremium.textContent.replace(/[^0-9]/g, ''));
            avgPremium.textContent = `+${Math.min(current + Math.floor(Math.random() * 3), 35)}%`;
        }
    }, 5000);
}

// ===== نظام حجز الجلسات =====
function initExpertSessions() {
    // إعداد التقويم
    initCalendar();

    // إعداد نموذج الحجز
    setupBookingForm();
}

function initCalendar() {
    const currentMonthElement = document.getElementById('currentMonth');
    const calendarDatesElement = document.getElementById('calendarDates');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthNames = [
        "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];

    function updateCalendar() {
        currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        calendarDatesElement.innerHTML = '';

        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();

        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'calendar-date';
            calendarDatesElement.appendChild(emptyDiv);
        }

        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dateDiv = document.createElement('div');
            dateDiv.className = 'calendar-date';
            dateDiv.textContent = day;

            const isPast = date < today;
            const isToday = date.toDateString() === today.toDateString();

            if (isPast) {
                dateDiv.classList.add('booked');
            } else {
                dateDiv.classList.add('available');
                dateDiv.addEventListener('click', function () {
                    document.querySelectorAll('.calendar-date').forEach(d => {
                        d.classList.remove('selected');
                    });
                    this.classList.add('selected');
                });
            }

            if (isToday) {
                dateDiv.innerHTML = `${day} <br><small>اليوم</small>`;
            }

            calendarDatesElement.appendChild(dateDiv);
        }
    }

    function showTimeSlots() {
        const timeSlotsElement = document.getElementById('timeSlots');
        const slots = [
            '09:00 ص', '10:30 ص', '12:00 م',
            '02:00 م', '03:30 م', '05:00 م',
            '06:30 م', '08:00 م'
        ];

        timeSlotsElement.innerHTML = '';

        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.className = 'time-slot';
            slotDiv.textContent = slot;

            slotDiv.addEventListener('click', function () {
                document.querySelectorAll('.time-slot').forEach(s => {
                    s.classList.remove('selected');
                });
                this.classList.add('selected');
            });

            timeSlotsElement.appendChild(slotDiv);
        });
    }

    prevMonthBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    nextMonthBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    updateCalendar();
    showTimeSlots();
}

function setupBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    const cancelBookingBtn = document.getElementById('cancelBooking');

    if (cancelBookingBtn) {
        cancelBookingBtn.addEventListener('click', function () {
            if (confirm('هل تريد إلغاء الحجز؟')) {
                bookingForm.reset();
                document.querySelectorAll('.selected').forEach(el => {
                    el.classList.remove('selected');
                });
                showNotification('تم إلغاء الحجز', 'info');
            }
        });
    }
}

// ===== نظام النطق بالصوت =====
function initTextToSpeech() {
    const micToggle = document.getElementById('micToggle');
    const micMessage = document.getElementById('micMessage');
    let recognition = null;
    let isListening = false;

    // التحقق من دعم Web Speech API
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'ar-SA';

        recognition.onstart = function () {
            isListening = true;
            micToggle.classList.add('listening');
            micMessage.classList.add('show');
        };

        recognition.onend = function () {
            isListening = false;
            micToggle.classList.remove('listening');
            micMessage.classList.remove('show');
        };

        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            handleVoiceCommand(transcript);
        };

        recognition.onerror = function (event) {
            console.error('خطأ في التعرف على الصوت:', event.error);
            micToggle.classList.remove('listening');
            micMessage.classList.remove('show');
            isListening = false;
        };

        micToggle.addEventListener('click', function () {
            if (!isListening) {
                try {
                    recognition.start();
                } catch (error) {
                    console.error('لا يمكن بدء التعرف على الصوت:', error);
                    showNotification('⚠️ يرجى التحقق من صلاحيات الميكروفون', 'warning');
                }
            } else {
                recognition.stop();
            }
        });

        // إضافة مستمعين للنصوص القابلة للنطق
        document.querySelectorAll('.text-to-speech').forEach(element => {
            element.addEventListener('click', function () {
                speakText(this.textContent || this.innerText);
            });
        });

        // تفعيل النطق التلقائي للعناصر المهمة
        setTimeout(() => {
            const welcomeText = document.querySelector('.hero-text h1');
            if (welcomeText) {
                speakText('مرحباً بكم في منصة سمارت فارم الزراعية الذكية');
            }
        }, 1000);

    } else {
        // إذا لم يكن مدعوماً، إخفاء زر الميكروفون
        micToggle.style.display = 'none';
        console.warn('⚠️ Web Speech API غير مدعوم في هذا المتصفح');
    }

    // إضافة زر النطق للعناصر الهامة
    addSpeechButtons();
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onstart = function () {
            console.log('جاري النطق:', text);
        };

        utterance.onend = function () {
            console.log('تم الانتهاء من النطق');
        };

        utterance.onerror = function (event) {
            console.error('خطأ في النطق:', event.error);
        };

        speechSynthesis.speak(utterance);
    } else {
        console.warn('⚠️ Text-to-speech غير مدعوم في هذا المتصفح');
        showNotification('⚠️ ميزة النطق غير مدعومة في متصفحك', 'warning');
    }
}

function handleVoiceCommand(command) {
    console.log('الأمر الصوتي:', command);

    const lowerCommand = command.toLowerCase();

    if (lowerCommand.includes('سجل') || lowerCommand.includes('تسجيل')) {
        showRegistrationModal();
        showNotification('فتح نموذج التسجيل', 'success');
    }
    else if (lowerCommand.includes('سوق') || lowerCommand.includes('بيع')) {
        document.getElementById('preHarvestMarket').scrollIntoView({ behavior: 'smooth' });
        showNotification('الانتقال إلى سوق ما قبل الحصاد', 'success');
    }
    else if (lowerCommand.includes('حيوان') || lowerCommand.includes('ثروة')) {
        document.getElementById('livestock').scrollIntoView({ behavior: 'smooth' });
        showNotification('الانتقال إلى قسم الثروة الحيوانية', 'success');
    }
    else if (lowerCommand.includes('خبير') || lowerCommand.includes('استشارة')) {
        document.getElementById('expertSessions').scrollIntoView({ behavior: 'smooth' });
        showNotification('الانتقال إلى قسم حجز الجلسات', 'success');
    }
    else if (lowerCommand.includes('ري') || lowerCommand.includes('ماء')) {
        document.querySelector('.irrigation-section').scrollIntoView({ behavior: 'smooth' });
        showNotification('الانتقال إلى نظام الري الذكي', 'success');
    }
    else if (lowerCommand.includes('محصول') || lowerCommand.includes('زراعة')) {
        document.querySelector('.crop-selector-section').scrollIntoView({ behavior: 'smooth' });
        showNotification('الانتقال إلى اختيار المحصول', 'success');
    }
    else if (lowerCommand.includes('رئيس') || lowerCommand.includes('بداية')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showNotification('الانتقال إلى الصفحة الرئيسية', 'success');
    }
    else if (lowerCommand.includes('وضع ليلي') || lowerCommand.includes('داكن')) {
        document.getElementById('themeToggle').click();
        showNotification('تم تبديل الوضع الليلي', 'success');
    }
    else if (lowerCommand.includes('لغة') || lowerCommand.includes('language')) {
        document.getElementById('langToggle').click();
    }
    else {
        showNotification(`لم أفهم الأمر: ${command}`, 'info');
    }
}

function addSpeechButtons() {
    // إضافة أزرار النطق للعناوين الرئيسية
    const mainTitles = document.querySelectorAll('h1, h2.section-title');
    mainTitles.forEach(title => {
        if (!title.classList.contains('text-to-speech')) {
            title.classList.add('text-to-speech');
        }
    });

    // إضافة زر النطق لوصف المنصة
    const platformDesc = document.querySelector('.hero-text p');
    if (platformDesc && !platformDesc.classList.contains('text-to-speech')) {
        platformDesc.classList.add('text-to-speech');
    }
}

// ===== نظام الإشعارات =====
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
        </div>
        <div class="notification-message">${message}</div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // إضافة الإشعار للصفحة
    document.body.appendChild(notification);

    // إظهار الإشعار
    setTimeout(() => {
        notification.style.display = 'flex';
        notification.classList.add('show');
    }, 10);

    // إعداد زر الإغلاق
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function () {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });

    // إزالة الإشعار بعد 5 ثواني
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'warning': return 'exclamation-triangle';
        case 'danger': return 'times-circle';
        default: return 'info-circle';
    }
}

// ===== دعم التمرير السلس =====


// ===== تحسينات الواجهة =====
// تأثيرات التمرير
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// مراقبة جميع الأقسام
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// تأثيرات الماوس على البطاقات
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .product-card, .management-card, .expert-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===== تهيئة العدادات =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        animateCounter(counter, 0, target, 2000, suffix);
    });
}

function animateCounter(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);

        element.textContent = value.toLocaleString() + suffix;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// تشغيل العدادات عند التحميل
window.addEventListener('load', initCounters);

// ===== دعم الطباعة =====
function printPage() {
    window.print();
}

// إضافة زر الطباعة
const printBtn = document.createElement('button');
printBtn.innerHTML = '<i class="fas fa-print"></i>';
printBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: var(--primary);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    display: none;
`;
printBtn.addEventListener('click', printPage);
document.body.appendChild(printBtn);

// إظهار زر الطباعة على أجهزة الكمبيوتر
if (window.innerWidth > 768) {
    printBtn.style.display = 'flex';
    printBtn.style.alignItems = 'center';
    printBtn.style.justifyContent = 'center';
}

// ===== تحسينات الأداء =====
// تحميل صور خلفية متأخر
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});













































// إضافة مستمع للأحداث لجميع الأزرار
document.addEventListener('DOMContentLoaded', function () {
    // تحديد جميع الأزرار التي تفتح نموذج التسجيل
    const allButtons = document.querySelectorAll('.animal-btn, a[onclick*="showRegistrationModal"], .btn-primary, .btn-ghost, .analyze-btn, .book-session-btn, .btn-buy-now, .btn-view-details, .start-button, .cta-button, .booking-btn');

    // إضافة مستمع لكل زر
    allButtons.forEach(button => {
        // حفظ النص الأصلي للزر
        const originalText = button.innerHTML;

        
    });
});


// إضافة أنماط CSS للرسالة
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
    
    .redirect-notification .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .redirect-notification i {
        font-size: 18px;
        animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
    
    .redirect-notification .notification-text {
        font-size: 14px;
    }
    
    /* Dark Mode Support */
    body.dark-mode .redirect-notification {
        background: linear-gradient(135deg, #1c7a8d, #0f4c5c);
        border: 1px solid rgba(255,255,255,0.1);
    }
`;

document.head.appendChild(style);

// دالة للتحكم في الأزرار المحددة
function handleSpecificButtons() {
    // الأزرار التي نريد تغيير رسالتها
    const specificButtons = {
        '.analyze-btn': 'تحليل المناخ واقتراح المحاصيل',
        '.book-session-btn': 'حجز جلسة استشارية',
        '.btn-buy-now': 'شراء المنتج',
        '.btn-view-details': 'عرض التفاصيل',
        '.start-button': 'بدء الآن',
        '.cta-button': 'انضم إلينا',
        '.register-btn': 'التسجيل الآن',
        '#addListingBtn': 'إضافة محصول للسوق',
        '#generateReport': 'توليد تقرير',
        '#startBreedingProgram': 'بدء برنامج تربية'
    };

    // تطبيق على جميع الأزرار
    Object.keys(specificButtons).forEach(selector => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(button => {
           
        });
    });
}

// تشغيل النظام
handleSpecificButtons();

// إضافة تأثيرات إضافية للأزرار
function addButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-ghost, a[href="#"]');

    buttons.forEach(button => {
        // إضافة تأثير عند المرور
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 20px rgba(15, 76, 92, 0.3)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });

        // إضافة تأثير النقر
        button.addEventListener('mousedown', function () {
            this.style.transform = 'translateY(1px)';
            this.style.boxShadow = '0 3px 10px rgba(15, 76, 92, 0.2)';
        });

        button.addEventListener('mouseup', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(15, 76, 92, 0.25)';
        });
    });
}

// تنفيذ تأثيرات الأزرار
addButtonEffects();

// دالة للتحقق من أن المستخدم مسجل دخول
function checkLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}



// تطبيق المعالج المحسن على الأزرار الرئيسية
function applyEnhancedHandlers() {
    const mainButtons = document.querySelectorAll('.btn-primary, .btn-ghost, .analyze-btn');

    mainButtons.forEach(button => {
        // إزالة المستمع القديم إذا كان موجوداً
        button.removeEventListener('click', enhancedButtonHandler);

        // إضافة المستمع الجديد
        button.addEventListener('click', enhancedButtonHandler);
    });
}

// تشغيل النظام المحسن
applyEnhancedHandlers();

// تحديث معلومات المستخدم عند التسجيل
function updateUserInfo() {
    const user = localStorage.getItem('smartFarmUser');
    if (user) {
        console.log(`👋 مرحباً ${user}! أنت مسجل دخول بالفعل.`);
    }
}

// تشغيل عند تحميل الصفحة
window.addEventListener('load', function () {
    updateUserInfo();

    // إضافة تأثيرات إضافية
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
        btn.style.transition = 'all 0.3s ease';
    });

    console.log('✅ نظام إدارة الأزرار جاهز للعمل!');
});