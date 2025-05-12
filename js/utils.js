/**
 * Savefbvideos - Facebook Video Downloader
 * Utility functions for the application
 */

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to wait
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - The number of milliseconds to limit
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param {string} html - The HTML string to sanitize
 * @returns {string} - Sanitized HTML string
 */
function sanitizeHTML(html) {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
}

/**
 * Formats a date string into a human-readable format
 * @param {string} dateStr - ISO date string
 * @returns {string} - Formatted date string
 */
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // difference in seconds
    
    // If less than a minute ago
    if (diff < 60) {
        return 'just now';
    }
    
    // If less than an hour ago
    if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    
    // If less than a day ago
    if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    
    // If less than a week ago
    if (diff < 604800) {
        const days = Math.floor(diff / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    
    // Otherwise, return the full date
    return date.toLocaleDateString();
}

/**
 * Generates a unique ID
 * @returns {string} - Unique ID
 */
function generateUID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Checks if dark mode is preferred by the system
 * @returns {boolean} - True if dark mode is preferred
 */
function isSystemDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Detects if the browser supports the Clipboard API
 * @returns {boolean} - True if Clipboard API is supported
 */
function isClipboardSupported() {
    return navigator.clipboard && typeof navigator.clipboard.readText === 'function';
}

/**
 * Creates a smooth scroll to an element
 * @param {HTMLElement} element - The element to scroll to
 * @param {number} offset - Offset from the top (in pixels)
 * @param {number} duration - Duration of the scroll animation (in milliseconds)
 */
function smoothScrollTo(element, offset = 0, duration = 500) {
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

/**
 * Detects the user's browser
 * @returns {string} - Browser name
 */
function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName;
    
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else {
        browserName = "Unknown";
    }
    
    return browserName;
}

/**
 * Detects if the device is mobile
 * @returns {boolean} - True if the device is mobile
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Gets approximate location information based on navigator.language
 * @returns {string} - Country name
 */
function getApproximateLocation() {
    const language = navigator.language || navigator.userLanguage;
    const countryCode = language.split('-')[1] || '';
    
    const countries = {
        'US': 'United States',
        'GB': 'United Kingdom',
        'CA': 'Canada',
        'AU': 'Australia',
        'IN': 'India',
        'DE': 'Germany',
        'FR': 'France',
        'IT': 'Italy',
        'ES': 'Spain',
        'BR': 'Brazil',
        'JP': 'Japan',
        'KR': 'South Korea',
        'CN': 'China',
        'RU': 'Russia',
        'MX': 'Mexico'
    };
    
    return countries[countryCode] || 'Unknown';
}

/**
 * Creates a simple device fingerprint for tracking unique visitors
 * Note: This is not foolproof and is just for basic statistics
 * @returns {string} - Device fingerprint
 */
function createDeviceFingerprint() {
    const components = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset(),
        navigator.platform,
        !!navigator.cookieEnabled
    ];
    
    let fingerprint = components.join('|');
    
    // Create a hash of the fingerprint
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
        const char = fingerprint.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    
    return 'fp_' + Math.abs(hash).toString(36);
}

/**
 * Checks if a URL has a valid format
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL has a valid format
 */
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Gets a query parameter from the URL
 * @param {string} name - The name of the parameter
 * @returns {string|null} - The value of the parameter, or null if not found
 */
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Adds specified time (in minutes) to the current date
 * @param {number} minutes - Number of minutes to add
 * @returns {Date} - Date object with added minutes
 */
function addMinutesToDate(minutes) {
    return new Date(Date.now() + minutes * 60000);
}

/**
 * Sets a cookie with the given name, value, and expiration time
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {Date} expires - Expiration date
 */
function setCookie(name, value, expires) {
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

/**
 * Gets a cookie value by name
 * @param {string} name - Cookie name
 * @returns {string|null} - Cookie value or null if not found
 */
function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split('=');
        const cookieName = cookiePair[0].trim();
        
        if (cookieName === name) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    return null;
}

/**
 * Deletes a cookie by name
 * @param {string} name - Cookie name
 */
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
}

/**
 * Checks if LocalStorage is available
 * @returns {boolean} - True if LocalStorage is available
 */
function isLocalStorageAvailable() {
    try {
        const test = '__test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Safely stores a value in LocalStorage with error handling
 * @param {string} key - The key for the LocalStorage item
 * @param {any} value - The value to store (will be JSON stringified)
 * @returns {boolean} - True if successful, false if failed
 */
function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error('Error setting localStorage item:', e);
        return false;
    }
}

/**
 * Safely retrieves a value from LocalStorage with error handling
 * @param {string} key - The key for the LocalStorage item
 * @param {any} defaultValue - Default value to return if the key is not found or an error occurs
 * @returns {any} - The retrieved value or the default value
 */
function safeLocalStorageGet(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error('Error getting localStorage item:', e);
        return defaultValue;
    }
}

/**
 * Copies text to clipboard
 * @param {string} text - The text to copy
 * @returns {Promise<boolean>} - Promise resolving to true if successful, false if failed
 */
async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            await navigator.clipboard.writeText(text);
            return true;
        } else {
            // Fallback for browsers that don't support clipboard API
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed'; // Prevent scrolling to bottom
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            
            const successful = document.execCommand('copy');
            document.body.removeChild(textarea);
            return successful;
        }
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
}

/**
 * Shortens a long text with ellipsis
 * @param {string} text - The text to shorten
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Shortened text
 */
function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) {
        return text;
    }
    return text.substr(0, maxLength) + '...';
}

/**
 * Validates a Facebook URL
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid Facebook URL
 */
function validateFacebookUrl(url) {
    if (!url) return false;
    
    // Simple pattern matching for Facebook URLs
    const patterns = [
        /^(https?:\/\/)?(www\.|m\.|web\.|mbasic\.)?facebook\.com\/.*\/videos\/.*$/i,
        /^(https?:\/\/)?(www\.|m\.|web\.|mbasic\.)?facebook\.com\/watch\?.*$/i,
        /^(https?:\/\/)?(www\.|m\.|web\.|mbasic\.)?facebook\.com\/.*\/posts\/.*$/i,
        /^(https?:\/\/)?(www\.|m\.|web\.|mbasic\.)?facebook\.com\/share\/v\/.*$/i,
        /^(https?:\/\/)?(www\.|m\.|web\.|mbasic\.)?facebook\.com\/.*\/videos\/.*$/i,
        /^(https?:\/\/)?(www\.|m\.|web\.|mbasic\.)?facebook\.com\/.*photo\.php\?.*$/i
    ];
    
    return patterns.some(pattern => pattern.test(url));
}

/**
 * Registers a service worker for PWA functionality
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

/**
 * Detects if the app is running as an installed PWA
 * @returns {boolean} - True if running as PWA
 */
function isRunningAsPWA() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           (window.navigator.standalone === true) || 
           document.referrer.includes('android-app://');
}

/**
 * Creates and displays a toast notification
 * @param {string} message - The message to display
 * @param {string} type - The type of toast ('success', 'error', 'info', 'warning')
 * @param {number} duration - How long to display the toast (in milliseconds)
 */
function showToast(message, type = 'info', duration = 3000) {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
        `;
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        background-color: ${getToastColor(type)};
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        margin-top: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        font-size: 14px;
        min-width: 200px;
        max-width: 350px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s, transform 0.3s;
    `;
    
    // Add icon based on type
    const icon = document.createElement('i');
    icon.className = `fas ${getToastIcon(type)}`;
    icon.style.marginRight = '10px';
    toast.appendChild(icon);
    
    // Add message
    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;
    toast.appendChild(messageSpan);
    
    // Add close button
    const closeBtn = document.createElement('i');
    closeBtn.className = 'fas fa-times';
    closeBtn.style.cssText = `
        margin-left: auto;
        cursor: pointer;
        font-size: 12px;
        opacity: 0.7;
    `;
    closeBtn.addEventListener('click', () => {
        removeToast(toast);
    });
    toast.appendChild(closeBtn);
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    // Auto-remove toast after duration
    const toastTimeout = setTimeout(() => {
        removeToast(toast);
    }, duration);
    
    // Store timeout id in toast element
    toast.dataset.timeoutId = toastTimeout;
    
    // Function to remove toast with animation
    function removeToast(toastElement) {
        clearTimeout(parseInt(toastElement.dataset.timeoutId));
        toastElement.style.opacity = '0';
        toastElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            if (toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
                
                // Remove container if empty
                if (toastContainer.children.length === 0) {
                    document.body.removeChild(toastContainer);
                }
            }
        }, 300);
    }
    
    // Helper functions for toast styling
    function getToastColor(toastType) {
        switch (toastType) {
            case 'success': return '#10b981';
            case 'error': return '#ef4444';
            case 'warning': return '#f59e0b';
            case 'info':
            default: return '#3b82f6';
        }
    }
    
    function getToastIcon(toastType) {
        switch (toastType) {
            case 'success': return 'fa-check-circle';
            case 'error': return 'fa-exclamation-circle';
            case 'warning': return 'fa-exclamation-triangle';
            case 'info':
            default: return 'fa-info-circle';
        }
    }
}
