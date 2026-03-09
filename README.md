# Landing Page - Respuestas Católicas a Preguntas Inesperadas

## 📋 Descripción

Landing page moderna y persuasiva diseñada para vender el ebook "Respuestas Católicas a Preguntas Inesperadas" por $9.99 USD, con una oferta complementaria del "Mini Devocionario Apologético" por $3.99 USD.

## ✨ Características

- ✅ Diseño moderno y totalmente responsivo (móviles, tablets, computadoras)
- ✅ Cronómetro de urgencia de 24 horas (se reinicia automáticamente)
- ✅ Notificaciones de prueba social en tiempo real
- ✅ Sección de beneficios con íconos
- ✅ Bonos gratuitos destacados
- ✅ Testimonios con fotos y calificaciones
- ✅ Oferta de upsell estratégicamente ubicada
- ✅ Múltiples llamados a la acción (CTA)
- ✅ Integración con Facebook Pixel
- ✅ Tracking de eventos y conversiones
- ✅ Animaciones suaves al hacer scroll
- ✅ Detección de intención de salida

## 🚀 Configuración Rápida

### 1. Links de Pago de Hotmart

Abre el archivo `script.js` y reemplaza los links de pago:

```javascript
const PAYMENT_LINKS = {
    mainProduct: 'TU_LINK_DE_HOTMART_AQUI', // Ebook principal $9.99
    upsellProduct: 'TU_LINK_DE_HOTMART_AQUI' // Mini Devocionario $3.99
};
```

### 2. Pixel de Facebook

En el archivo `index.html`, descomenta y configura el Pixel de Facebook:

```javascript
// Busca esta sección en index.html (líneas 18-27)
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID_AQUI'); // ← Reemplaza aquí
fbq('track', 'PageView');
```

### 3. Token de Hotmart (Opcional)

En el archivo `script.js`:

```javascript
const HOTMART_TOKEN = 'TU_TOKEN_HOTMART_AQUI';
```

### 4. Google Analytics (Opcional)

En el archivo `index.html`, al final antes de `</body>`:

```javascript
// Descomenta y configura Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'TU_GA_ID_AQUI'); // ← Reemplaza aquí
```

## 📁 Estructura de Archivos

```
RESPUESTAS CATOLICAS/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript (cronómetro, notificaciones, tracking)
├── README.md           # Este archivo
│
└── imagenes/
    ├── principal.jpeg           # Portada del ebook principal
    ├── Ebook adicional.png      # Portada del Mini Devocionario
    ├── bono 1.png              # Imagen del Bono 1
    ├── bono 2.png              # Imagen del Bono 2
    ├── fotos para la web 1.jpg # Foto de fondo del hero
    ├── fotos para la web 2.jpg # Foto testimonial
    ├── fotos para la web 3.jpg # Foto testimonial
    └── fotos para la web 4.jpg # Foto testimonial
```

## 🎨 Personalización

### Colores

Los colores se definen en `styles.css` usando variables CSS:

```css
:root {
    --color-gold: #D4AF37;
    --color-blue: #2C5F8D;
    --color-cream: #F5F1E8;
    --color-white: #FFFFFF;
    /* ... más colores */
}
```

### Tipografía

Fuentes actuales:
- **Títulos**: Lora (serif)
- **Texto**: Open Sans (sans-serif)

Para cambiar, modifica en `index.html` (línea 11) y en `styles.css` (líneas 16-17).

### Imagen de Fondo del Hero

Para cambiar la imagen de fondo principal, edita en `styles.css`:

```css
.hero {
    background-image: url('imagenes/TU_IMAGEN_AQUI.jpg');
}
```

## 📱 Responsividad

La página está optimizada para:
- 📱 Móviles (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Computadoras (> 768px)

## 🔔 Notificaciones de Prueba Social

Las notificaciones aparecen cada 15 segundos y se pueden personalizar en `script.js`:

```javascript
const socialProofData = [
    { name: 'María de Ecuador', action: 'acaba de comprar...' },
    // Agrega más notificaciones aquí
];
```

## ⏱️ Cronómetro de Urgencia

El cronómetro:
- Cuenta regresiva de 24 horas
- Se guarda en localStorage del navegador
- Se reinicia automáticamente al llegar a cero
- Es único por visitante

## 📊 Eventos Trackeados

La página trackea automáticamente:
- ✅ Vistas de página
- ✅ Profundidad de scroll (25%, 50%, 75%, 100%)
- ✅ Tiempo en página (cada 30 segundos)
- ✅ Clics en botones de compra
- ✅ Intención de salida
- ✅ Fuente de tráfico (UTM parameters)

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y Flexbox/Grid)
- JavaScript vanilla (ES6+)
- Google Fonts (Lora, Open Sans)
- Font Awesome 6.4.0 (íconos)

## 🚀 Cómo Usar

1. **Descarga todos los archivos** en una carpeta
2. **Configura los links de pago** en `script.js`
3. **Configura el Pixel de Facebook** en `index.html`
4. **Sube los archivos** a tu servidor web o hosting
5. **Prueba la página** en diferentes dispositivos
6. **Lanza tu campaña** de marketing

## 📈 Optimización de Conversión

La página incluye elementos de conversión probados:
- ⏰ Urgencia (cronómetro de 24 horas)
- 🎁 Bonos gratuitos
- ⭐ Testimonios con fotos reales
- 🔔 Prueba social en tiempo real
- 💰 Precio visible y destacado
- 🛡️ Garantía de satisfacción
- 🔒 Badges de confianza
- 📱 Diseño mobile-first

## 🔧 Solución de Problemas

### Las imágenes no se cargan
- Verifica que todas las imágenes estén en la carpeta `imagenes/`
- Verifica que los nombres coincidan exactamente (mayúsculas/minúsculas)

### El cronómetro no funciona
- Abre la consola del navegador (F12)
- Verifica que no haya errores de JavaScript
- Limpia el localStorage: `localStorage.clear()`

### Los links de pago no funcionan
- Verifica que hayas configurado los links en `script.js`
- Asegúrate de que los links de Hotmart sean válidos

## 📞 Soporte

Para personalización adicional o soporte técnico, consulta la documentación de:
- [Hotmart](https://hotmart.com)
- [Facebook Business](https://business.facebook.com)
- [Google Analytics](https://analytics.google.com)

## 📄 Licencia

Este proyecto es de uso personal para la venta del ebook "Respuestas Católicas a Preguntas Inesperadas".

---

**Última actualización**: Noviembre 2025

**Versión**: 1.0.0

¡Que Dios bendiga tu proyecto de evangelización! 🙏✝️
