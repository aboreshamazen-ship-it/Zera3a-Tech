// ===== System Initialization =====
document.addEventListener('DOMContentLoaded', function() {
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

// ===== Main System Initialization =====
function initSystem() {
    console.log("✅ Smart Farm System Ready!");
    
    // Setup navigation buttons
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
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

// ===== Dark Mode System =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', function() {
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

// ===== Language System =====
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    
    langToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        document.documentElement.lang = newLang;
        
        // Update button text
        this.textContent = newLang === 'en' ? 'عربي' : 'English';
        
        // Show notification
        showNotification(`Language switched to ${newLang.toUpperCase()}`, 'info');
    });
}

// ===== Crop Tracking System =====
function initTrackingSystem() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    timelinePoints.forEach(point => {
        point.addEventListener('click', function() {
            timelinePoints.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            const stage = this.style.left;
            let stageInfo = '';
            
            if (stage.includes('10%')) {
                stageInfo = 'Current Stage: Preparation<br>Land preparation and soil conditioning';
            } else if (stage.includes('35%')) {
                stageInfo = 'Current Stage: Growth<br>Increase irrigation and start nitrogen fertilization';
            } else if (stage.includes('60%')) {
                stageInfo = 'Current Stage: Care<br>Maintain soil moisture and pest control';
            } else {
                stageInfo = 'Current Stage: Harvest<br>Ready for harvest and market sale';
            }
            
            document.getElementById('stageInfo').innerHTML = `
                <h3 style="color: var(--secondary); margin-bottom: 10px;">${stageInfo.split('<br>')[0]}</h3>
                <p>${stageInfo.split('<br>')[1]}</p>
            `;
        });
    });
}

// ===== Smart Irrigation System =====
function initIrrigationSystem() {
    // Update soil moisture indicator
    updateMoistureIndicator();
    
    // Update water consumption
    updateWaterConsumption();
    
    // Update weather data
    updateWeatherData();
    
    // Update data every 10 seconds
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
    
    // Update circle
    const circumference = 2 * Math.PI * 80;
    const dashoffset = circumference - (moisture / 100) * circumference;
    moistureFill.style.strokeDasharray = `${circumference} ${circumference}`;
    moistureFill.style.strokeDashoffset = dashoffset;
    
    // Update percentage
    moisturePercent.textContent = `${moisture}%`;
    
    // Update status
    let status = 'Optimal';
    let color = '#00b894';
    
    if (moisture < 60) {
        status = 'Dry';
        color = '#fdcb6e';
    } else if (moisture > 80) {
        status = 'Too Wet';
        color = '#3498db';
    }
    
    moistureStatus.textContent = status;
    moistureFill.style.stroke = color;
    moistureStatus.className = `moisture-status ${moisture < 60 ? 'status-dry' : moisture > 80 ? 'status-wet' : 'status-optimal'}`;
}

function updateWaterConsumption() {
    // Update daily water consumption
    const todayWater = Math.floor(Math.random() * 50) + 100;
    document.getElementById('todayWater').textContent = `${todayWater} L`;
    
    // Update weekly consumption
    const weekWater = Math.floor(Math.random() * 200) + 700;
    document.getElementById('weekWater').textContent = `${weekWater} L`;
    
    // Update monthly consumption
    const monthWater = Math.floor(Math.random() * 1000) + 2500;
    document.getElementById('monthWater').textContent = `${monthWater.toLocaleString()} L`;
    
    // Update savings percentage
    const waterSaved = Math.floor(Math.random() * 20) + 30;
    document.getElementById('waterSaved').textContent = `${waterSaved}%`;
}

function updateWeatherData() {
    // Update temperature
    const temperature = Math.floor(Math.random() * 10) + 25;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    
    // Update humidity
    const humidity = Math.floor(Math.random() * 30) + 40;
    document.getElementById('humidity').textContent = `${humidity}%`;
    
    // Update rain chance
    const rainChance = Math.floor(Math.random() * 30);
    document.getElementById('rainChance').textContent = `${rainChance}%`;
    
    // Update recommendation
    let advice = 'Normal Irrigation';
    if (rainChance > 50) {
        advice = 'Delay Irrigation';
    } else if (temperature > 32) {
        advice = 'Increase Irrigation';
    } else if (temperature < 22) {
        advice = 'Reduce Irrigation';
    }
    document.getElementById('weatherAdvice').textContent = advice;
}

// ===== Crop Selection System =====
function initCropSelector() {
    // Setup sliders
    const tempRange = document.getElementById('temperatureRange');
    const humidityRange = document.getElementById('humidityRange');
    const tempValue = document.getElementById('tempValue');
    const humidityValue = document.getElementById('humidityValue');
    
    tempRange.addEventListener('input', function() {
        tempValue.textContent = this.value;
    });
    
    humidityRange.addEventListener('input', function() {
        humidityValue.textContent = this.value;
    });
    
    // Analysis button
    document.getElementById('analyzeBtn').addEventListener('click', function() {
        showRegistrationModal();
    });
}

// ===== Registration Modal System =====
function initRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    const closeBtn = document.querySelector('.close-modal');
    const loginForm = document.getElementById('loginForm');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Save login status
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('smartFarmUser', email.split('@')[0]);
                
                // Close modal
                modal.style.display = 'none';
                
                // Show success message
                showNotification('Login successful! Welcome to Smart Farm', 'success');
                
                // Update UI for logged in user
                updateLoginStatus();
            } else {
                showNotification('Please fill all fields', 'danger');
            }
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}


function updateMarketStatistics() {
    // Update statistics randomly every 5 seconds
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

// ===== Expert Sessions System =====
function initExpertSessions() {
    // Setup calendar
    initCalendar();
    
    // Setup booking form
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
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
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
                dateDiv.addEventListener('click', function() {
                    document.querySelectorAll('.calendar-date').forEach(d => {
                        d.classList.remove('selected');
                    });
                    this.classList.add('selected');
                });
            }
            
            if (isToday) {
                dateDiv.innerHTML = `${day} <br><small>Today</small>`;
            }
            
            calendarDatesElement.appendChild(dateDiv);
        }
    }
    
    function showTimeSlots() {
        const timeSlotsElement = document.getElementById('timeSlots');
        const slots = [
            '09:00 AM', '10:30 AM', '12:00 PM', 
            '02:00 PM', '03:30 PM', '05:00 PM',
            '06:30 PM', '08:00 PM'
        ];
        
        timeSlotsElement.innerHTML = '';
        
        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.className = 'time-slot';
            slotDiv.textContent = slot;
            
            slotDiv.addEventListener('click', function() {
                document.querySelectorAll('.time-slot').forEach(s => {
                    s.classList.remove('selected');
                });
                this.classList.add('selected');
            });
            
            timeSlotsElement.appendChild(slotDiv);
        });
    }
    
    prevMonthBtn.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });
    
    nextMonthBtn.addEventListener('click', function() {
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
        cancelBookingBtn.addEventListener('click', function() {
            if (confirm('Do you want to cancel the booking?')) {
                bookingForm.reset();
                document.querySelectorAll('.selected').forEach(el => {
                    el.classList.remove('selected');
                });
                showNotification('Booking cancelled', 'info');
            }
        });
    }
}

// ===== Text to Speech System =====
function initTextToSpeech() {
    const micToggle = document.getElementById('micToggle');
    const micMessage = document.getElementById('micMessage');
    let recognition = null;
    let isListening = false;
    
    // Check Web Speech API support
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = function() {
            isListening = true;
            micToggle.classList.add('listening');
            micMessage.classList.add('show');
        };
        
        recognition.onend = function() {
            isListening = false;
            micToggle.classList.remove('listening');
            micMessage.classList.remove('show');
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            handleVoiceCommand(transcript);
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            micToggle.classList.remove('listening');
            micMessage.classList.remove('show');
            isListening = false;
        };
        
        micToggle.addEventListener('click', function() {
            if (!isListening) {
                try {
                    recognition.start();
                } catch (error) {
                    console.error('Cannot start speech recognition:', error);
                    showNotification('⚠️ Please check microphone permissions', 'warning');
                }
            } else {
                recognition.stop();
            }
        });
        
        // Add listeners for text-to-speech elements
        document.querySelectorAll('.text-to-speech').forEach(element => {
            element.addEventListener('click', function() {
                speakText(this.textContent || this.innerText);
            });
        });
        
        // Enable auto-speech for important elements
        setTimeout(() => {
            const welcomeText = document.querySelector('.hero-text h1');
            if (welcomeText) {
                speakText('Welcome to Smart Farm Agricultural Platform');
            }
        }, 1000);
        
    } else {
        // Hide microphone button if not supported
        micToggle.style.display = 'none';
        console.warn('⚠️ Web Speech API not supported in this browser');
    }
    
    // Add speech buttons to important elements
    addSpeechButtons();
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        utterance.onstart = function() {
            console.log('Speaking:', text);
        };
        
        utterance.onend = function() {
            console.log('Finished speaking');
        };
        
        utterance.onerror = function(event) {
            console.error('Speech error:', event.error);
        };
        
        speechSynthesis.speak(utterance);
    } else {
        console.warn('⚠️ Text-to-speech not supported in this browser');
        showNotification('⚠️ Speech feature not supported in your browser', 'warning');
    }
}

function handleVoiceCommand(command) {
    console.log('Voice command:', command);
    
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('register') || lowerCommand.includes('sign up')) {
        showRegistrationModal();
        showNotification('Opening registration form', 'success');
    }
    else if (lowerCommand.includes('market') || lowerCommand.includes('sell')) {
        document.getElementById('preHarvestMarket').scrollIntoView({ behavior: 'smooth' });
        showNotification('Navigating to pre-harvest market', 'success');
    }
    else if (lowerCommand.includes('livestock') || lowerCommand.includes('animals')) {
        document.getElementById('livestock').scrollIntoView({ behavior: 'smooth' });
        showNotification('Navigating to livestock section', 'success');
    }
    else if (lowerCommand.includes('expert') || lowerCommand.includes('consultation')) {
        document.getElementById('expertSessions').scrollIntoView({ behavior: 'smooth' });
        showNotification('Navigating to expert sessions', 'success');
    }
    else if (lowerCommand.includes('irrigation') || lowerCommand.includes('water')) {
        document.querySelector('.irrigation-section').scrollIntoView({ behavior: 'smooth' });
        showNotification('Navigating to smart irrigation system', 'success');
    }
    else if (lowerCommand.includes('crop') || lowerCommand.includes('plant')) {
        document.querySelector('.crop-selector-section').scrollIntoView({ behavior: 'smooth' });
        showNotification('Navigating to crop selection', 'success');
    }
    else if (lowerCommand.includes('home') || lowerCommand.includes('main')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showNotification('Navigating to homepage', 'success');
    }
    else if (lowerCommand.includes('dark mode') || lowerCommand.includes('dark')) {
        document.getElementById('themeToggle').click();
        showNotification('Dark mode toggled', 'success');
    }
    else if (lowerCommand.includes('language') || lowerCommand.includes('lang')) {
        document.getElementById('langToggle').click();
    }
    else {
        showNotification(`Did not understand: ${command}`, 'info');
    }
}

function addSpeechButtons() {
    // Add speech buttons to main headings
    const mainTitles = document.querySelectorAll('h1, h2.section-title');
    mainTitles.forEach(title => {
        if (!title.classList.contains('text-to-speech')) {
            title.classList.add('text-to-speech');
        }
    });
    
    // Add speech button to platform description
    const platformDesc = document.querySelector('.hero-text p');
    if (platformDesc && !platformDesc.classList.contains('text-to-speech')) {
        platformDesc.classList.add('text-to-speech');
    }
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Create notification element
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
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.display = 'flex';
        notification.classList.add('show');
    }, 10);
    
    // Setup close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Remove notification after 5 seconds
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
    switch(type) {
        case 'success': return 'check-circle';
        case 'warning': return 'exclamation-triangle';
        case 'danger': return 'times-circle';
        default: return 'info-circle';
    }
}



// ===== Modify all buttons that call showRegistrationModal =====
document.addEventListener('DOMContentLoaded', function() {
    // Change button texts
    const buttons = document.querySelectorAll('[onclick*="showRegistrationModal"]');
    buttons.forEach(button => {
        // Change button text if appropriate
        if (button.textContent.includes('Register') || 
            button.textContent.includes('Sign') ||
            button.textContent.includes('Login')) {
            button.innerHTML = button.innerHTML.replace('Register', 'View Details');
            button.innerHTML = button.innerHTML.replace('Sign Up', 'View Details');
            button.innerHTML = button.innerHTML.replace('Login', 'View');
        }
    });
    
    // Rebind events
    document.querySelectorAll('.timeline-point, .analyze-btn, .book-session-btn, .btn-buy-now, .btn-view-details').forEach(element => {
        if (element.onclick) {
            const originalOnClick = element.onclick;
            element.onclick = function(e) {
                e.preventDefault();
                showRegistrationModal(e);
            };
        }
    });
});

// ===== Add event listener for all buttons =====
document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons that open registration modal
    const allButtons = document.querySelectorAll('.animal-btn, a[onclick*="showRegistrationModal"], .btn-primary, .btn-ghost, .analyze-btn, .book-session-btn, .btn-buy-now, .btn-view-details, .start-button, .cta-button, .booking-btn');
    
});

// ===== Function to show redirect message =====
function showRedirectMessage(button) {
    // Temporarily change button text
    const originalText = button.innerHTML;
    button.innerHTML = 'Redirecting... ⏳';
    
    // Show temporary notification
    const notification = document.createElement('div');
    notification.className = 'redirect-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-external-link-alt"></i>
            <span class="notification-text">You will be redirected to the specific page to learn more</span>
        </div>
    `;
    
    // Add styles to the message
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #0f4c5c, #1c7a8d);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideDown 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    // Add message to page
    document.body.appendChild(notification);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// ===== Add CSS styles for the message =====
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

// ===== Function to handle specific buttons =====
function handleSpecificButtons() {
    // Buttons we want to change their message
    const specificButtons = {
        '.analyze-btn': 'Climate analysis and crop suggestions',
        '.book-session-btn': 'Book consultation session',
        '.btn-buy-now': 'Buy product',
        '.btn-view-details': 'View details',
        '.start-button': 'Start now',
        '.cta-button': 'Join us',
        '.register-btn': 'Register now',
        '#addListingBtn': 'Add crop to market',
        '#generateReport': 'Generate report',
        '#startBreedingProgram': 'Start breeding program'
    };
    
    // Apply to all buttons
    Object.keys(specificButtons).forEach(selector => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(button => {
           
        });
    });
}

// ===== Start the system =====
handleSpecificButtons();

// ===== Add additional button effects =====
function addButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-ghost, a[href="#"]');
    
    buttons.forEach(button => {
        // Add hover effect
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 20px rgba(15, 76, 92, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
        
        // Add click effect
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
            this.style.boxShadow = '0 3px 10px rgba(15, 76, 92, 0.2)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(15, 76, 92, 0.25)';
        });
    });
}

// ===== Execute button effects =====
addButtonEffects();

// ===== Function to check if user is logged in =====
function checkLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}



// ===== Apply enhanced handlers to main buttons =====
function applyEnhancedHandlers() {
    const mainButtons = document.querySelectorAll('.btn-primary, .btn-ghost, .analyze-btn');
    
    mainButtons.forEach(button => {
        // Remove old listener if exists
        button.removeEventListener('click', enhancedButtonHandler);
        
        // Add new listener
        button.addEventListener('click', enhancedButtonHandler);
    });
}

// ===== Start enhanced system =====
applyEnhancedHandlers();

// ===== Update user info when registered =====
function updateUserInfo() {
    const user = localStorage.getItem('smartFarmUser');
    if (user) {
        console.log(`👋 Welcome ${user}! You are already logged in.`);
    }
}

// ===== Run when page loads =====
window.addEventListener('load', function() {
    updateUserInfo();
    
    // Add additional effects
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
        btn.style.transition = 'all 0.3s ease';
    });
    
    console.log('✅ Button management system ready!');
});

// ===== Smooth scrolling support =====


// ===== UI Improvements =====
// Scroll effects
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

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mouse effects on cards
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

// ===== Initialize counters =====
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

// Run counters on load
window.addEventListener('load', initCounters);

// ===== Print support =====
function printPage() {
    window.print();
}

// Add print button
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

// Show print button on desktop
if (window.innerWidth > 768) {
    printBtn.style.display = 'flex';
    printBtn.style.alignItems = 'center';
    printBtn.style.justifyContent = 'center';
}

// ===== Performance improvements =====
// Lazy load background images
document.addEventListener('DOMContentLoaded', function() {
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

// ===== Update login status in UI =====
function updateLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('smartFarmUser');
    
    if (isLoggedIn && user) {
        // Update UI for logged in user
        const loginButtons = document.querySelectorAll('.login-btn, .register-btn');
        loginButtons.forEach(btn => {
            btn.textContent = `👋 ${user}`;
            btn.style.pointerEvents = 'none';
        });
    }
}

// Initialize login status
updateLoginStatus();