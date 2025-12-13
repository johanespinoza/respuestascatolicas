/* ===================================
   CONFIGURACIÓN DE LINKS DE PAGO
   =================================== */

// Links de pago de Hotmart configurados
const PAYMENT_LINKS = {
    mainProduct: 'https://pay.hotmart.com/V99799664T?checkoutMode=10', // Link de pago del ebook principal ($9.99)
    upsellProduct: 'https://pay.hotmart.com/V99799664T?checkoutMode=10' // Link de pago del Mini Devocionario ($3.99) - Mismo link por ahora
};

// Pixel ID de Facebook configurado
const FACEBOOK_PIXEL_ID = '1646156149348746';

// IMPORTANTE: Reemplaza con tu token de Hotmart
const HOTMART_TOKEN = 'TU_TOKEN_HOTMART_AQUI';

/* ===================================
   CRONÓMETRO DE CUENTA REGRESIVA
   =================================== */

function initCountdown() {
    // Obtener la fecha y hora actual
    const now = new Date();
    // Calcular la fecha de fin (medianoche de hoy)
    const endOfDay = new Date(now);
    endOfDay.setHours(24, 0, 0, 0);
    
    // Usar la hora de finalización del día actual
    let endTime = endOfDay.getTime();
    
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        // Si el tiempo se acabó
        if (distance < 0) {
            clearInterval(countdownInterval);
            // Reiniciar el contador
            localStorage.removeItem('countdownEndTime');
            initCountdown();
            return;
        }
        
        // Calcular horas, minutos y segundos
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Actualizar el DOM
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
    }, 1000);
}

/* ===================================
   NOTIFICACIONES DE PRUEBA SOCIAL
   =================================== */

const socialProofData = [
    { name: 'María de Ecuador', action: 'acaba de comprar Respuestas Católicas hace 3 minutos' },
    { name: 'Pedro de México', action: 'descargó su copia hace un momento' },
    { name: 'Ana de Colombia', action: 'acaba de adquirir el ebook hace 5 minutos' },
    { name: 'Carlos de España', action: 'compró Respuestas Católicas hace 2 minutos' },
    { name: 'Laura de Argentina', action: 'descargó su copia hace 4 minutos' },
    { name: 'José de Perú', action: 'acaba de comprar hace un momento' },
    { name: 'Carmen de Chile', action: 'adquirió el ebook hace 6 minutos' },
    { name: 'Miguel de Venezuela', action: 'compró su copia hace 3 minutos' },
    { name: 'Rosa de Guatemala', action: 'descargó el ebook hace 2 minutos' },
    { name: 'Luis de Costa Rica', action: 'acaba de comprar hace 5 minutos' },
    { name: 'Patricia de Uruguay', action: 'adquirió su copia hace un momento' },
    { name: 'Fernando de Bolivia', action: 'compró el ebook hace 4 minutos' }
];

let usedIndices = [];
let notificationTimeout;

function getRandomUnusedIndex() {
    // Si ya usamos todos los índices, reiniciamos
    if (usedIndices.length >= socialProofData.length) {
        usedIndices = [];
    }
    
    // Buscar un índice que no se haya usado
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * socialProofData.length);
    } while (usedIndices.includes(randomIndex));
    
    // Agregar el índice a los usados
    usedIndices.push(randomIndex);
    return randomIndex;
}

function showSocialProof() {
    const notification = document.getElementById('socialProof');
    const buyerName = document.getElementById('buyerName');
    const buyerAction = document.getElementById('buyerAction');
    
    // Obtener datos aleatorios sin repetición
    const currentIndex = getRandomUnusedIndex();
    const data = socialProofData[currentIndex];
    
    // Actualizar contenido
    buyerName.textContent = data.name;
    buyerAction.textContent = data.action;
    
    // Mostrar notificación
    notification.classList.add('show');
    
    // Ocultar después de 5 segundos
    notificationTimeout = setTimeout(() => {
        notification.classList.remove('show');
        
        // Siguiente notificación después de 40 segundos (35s de pausa + 5s de visualización)
        setTimeout(showSocialProof, 35000);
    }, 5000);
}

// Cerrar notificación manualmente
document.getElementById('closeNotification').addEventListener('click', function() {
    const notification = document.getElementById('socialProof');
    notification.classList.remove('show');
    clearTimeout(notificationTimeout);
    
    // Siguiente notificación después de 40 segundos (35s de pausa + 5s de visualización)
    setTimeout(showSocialProof, 35000);
});

/* ===================================
   CONFIGURAR LINKS DE PAGO
   =================================== */

function setupPaymentLinks() {
    // Botón de compra principal
    const mainButtons = document.querySelectorAll('.cta-primary, .cta-secondary, .cta-final');
    mainButtons.forEach(button => {
        if (button.getAttribute('href') === '#comprar' || button.getAttribute('href') === '#') {
            button.addEventListener('click', function(e) {
                e.preventDefault(); // Prevenir comportamiento por defecto
                
                // Tracking de Facebook Pixel (si está configurado)
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'InitiateCheckout', {
                        value: 9.99,
                        currency: 'USD',
                        content_name: 'Respuestas Católicas a Preguntas Inesperadas'
                    });
                }
                
                // Redirigir a Hotmart
                window.location.href = PAYMENT_LINKS.mainProduct;
            });
        }
    });
    
    // Botón de upsell
    const upsellButton = document.getElementById('upsellButton');
    if (upsellButton) {
        upsellButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (PAYMENT_LINKS.upsellProduct === '#') {
                alert('Por favor, configura el link de pago del upsell en script.js');
            } else {
                // Tracking de Facebook Pixel (si está configurado)
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'InitiateCheckout', {
                        value: 3.99,
                        currency: 'USD',
                        content_name: 'Mini Devocionario Apologético'
                    });
                }
                window.location.href = PAYMENT_LINKS.upsellProduct;
            }
        });
    }
}

/* ===================================
   SMOOTH SCROLL PARA ANCLAS
   =================================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar smooth scroll si es un ancla válida (no solo #)
            if (href !== '#' && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/* ===================================
   ANIMACIONES AL HACER SCROLL
   =================================== */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos a animar
    const animatedElements = document.querySelectorAll(
        '.benefit-card, .bonus-card, .testimonial-card, .preview-grid, .upsell-grid'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===================================
   TRACKING DE EVENTOS
   =================================== */

function trackEvent(eventName, eventData = {}) {
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Consola para debugging
    console.log('Event tracked:', eventName, eventData);
}

// Trackear scroll depth
let scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
};

function trackScrollDepth() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    Object.keys(scrollTracked).forEach(percent => {
        if (scrollPercent >= parseInt(percent) && !scrollTracked[percent]) {
            scrollTracked[percent] = true;
            trackEvent('ScrollDepth', { percent: percent });
        }
    });
}

/* ===================================
   DETECCIÓN DE INTENCIÓN DE SALIDA
   =================================== */

let exitIntentShown = false;

function showExitIntent(e) {
    // Solo mostrar una vez y solo si el mouse sale por arriba
    if (!exitIntentShown && e.clientY <= 0) {
        exitIntentShown = true;
        
        // Aquí podrías mostrar un popup de última oportunidad
        // Por ahora solo trackeamos el evento
        trackEvent('ExitIntent');
        
        // Opcional: mostrar un alert o modal
        // alert('¡Espera! ¿Estás seguro de que quieres irte sin fortalecer tu fe?');
    }
}

/* ===================================
   INICIALIZACIÓN
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Iniciar cronómetro
    initCountdown();
    
    // Iniciar notificaciones de prueba social después de 5 segundos
    setTimeout(() => {
        showSocialProof();
    }, 5000);
    
    // Configurar links de pago
    setupPaymentLinks();
    
    // Iniciar smooth scroll
    initSmoothScroll();
    
    // Iniciar animaciones
    initScrollAnimations();
    
    // Trackear página vista
    trackEvent('PageView');
    
    // Trackear scroll depth
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(trackScrollDepth, 100);
    });
    
    // Detectar intención de salida
    document.addEventListener('mouseleave', showExitIntent);
    
    // Trackear tiempo en página
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage += 10;
        
        // Trackear cada 30 segundos
        if (timeOnPage % 30 === 0) {
            trackEvent('TimeOnPage', { seconds: timeOnPage });
        }
    }, 10000);
    
    console.log('Landing page inicializada correctamente');
    console.log('Recuerda configurar:');
    console.log('1. Links de pago de Hotmart');
    console.log('2. Pixel ID de Facebook');
    console.log('3. Token de Hotmart');
});

/* ===================================
   FUNCIONES AUXILIARES
   =================================== */

// Función para obtener parámetros de URL (útil para tracking)
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Guardar fuente de tráfico
const trafficSource = getUrlParameter('utm_source') || getUrlParameter('source') || 'direct';
const trafficMedium = getUrlParameter('utm_medium') || 'none';
const trafficCampaign = getUrlParameter('utm_campaign') || 'none';

// Guardar en localStorage para análisis
localStorage.setItem('trafficSource', trafficSource);
localStorage.setItem('trafficMedium', trafficMedium);
localStorage.setItem('trafficCampaign', trafficCampaign);

// Trackear fuente de tráfico
trackEvent('TrafficSource', {
    source: trafficSource,
    medium: trafficMedium,
    campaign: trafficCampaign
});
