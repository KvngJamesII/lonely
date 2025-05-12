/**
 * Savefbvideos - Facebook Video Downloader
 * Admin Panel JavaScript
 */

// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const dashboardContainer = document.getElementById('dashboardContainer');
const adminPassword = document.getElementById('adminPassword');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const adminThemeToggle = document.getElementById('adminThemeToggle');
const navItems = document.querySelectorAll('.admin-nav li');
const adminTabs = document.querySelectorAll('.admin-tab');
const totalUsers = document.getElementById('totalUsers');
const totalDownloads = document.getElementById('totalDownloads');
const pageViews = document.getElementById('pageViews');
const activeCountries = document.getElementById('activeCountries');
const downloadsTableBody = document.getElementById('downloadsTableBody');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const resetSettingsBtn = document.getElementById('resetSettingsBtn');

// Constants
const ADMIN_PASSWORD = 'isr828';
const AUTH_STORAGE_KEY = 'fbVideoAdminAuth';
const SESSION_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

// Stats data - in real app, this would come from server
const statsByCountry = {
    'US': { users: 1245, downloads: 3567, conversionRate: 78 },
    'IN': { users: 982, downloads: 2431, conversionRate: 72 },
    'GB': { users: 645, downloads: 1876, conversionRate: 81 },
    'BR': { users: 521, downloads: 1234, conversionRate: 65 },
    'DE': { users: 423, downloads: 987, conversionRate: 74 },
    'FR': { users: 389, downloads: 912, conversionRate: 69 },
    'CA': { users: 312, downloads: 756, conversionRate: 71 },
    'AU': { users: 287, downloads: 653, conversionRate: 64 },
    'JP': { users: 256, downloads: 598, conversionRate: 62 },
    'MX': { users: 234, downloads: 542, conversionRate: 60 },
};

// Sample download data for the table
const sampleDownloads = [
    { date: '2023-05-01 14:32:45', title: 'Amazing Dance Performance', quality: 'HD', location: 'United States' },
    { date: '2023-05-01 13:17:22', title: 'Funny Cat Compilation', quality: 'HD', location: 'Germany' },
    { date: '2023-05-01 12:45:09', title: 'How to Make Chocolate Cake', quality: 'SD', location: 'India' },
    { date: '2023-05-01 11:23:56', title: 'Football Match Highlights', quality: 'HD', location: 'Brazil' },
    { date: '2023-05-01 10:12:34', title: 'Best Movie Scenes', quality: 'SD', location: 'France' },
    { date: '2023-05-01 09:58:21', title: 'Travel Guide: Paris', quality: 'HD', location: 'Japan' },
    { date: '2023-05-01 08:37:11', title: 'Guitar Tutorial for Beginners', quality: 'SD', location: 'Canada' },
    { date: '2023-05-01 07:21:19', title: 'Workout Routine at Home', quality: 'HD', location: 'Australia' },
    { date: '2023-05-01 06:54:05', title: 'Breaking News: Technology', quality: 'SD', location: 'United Kingdom' },
    { date: '2023-05-01 05:42:51', title: 'How to Fix Common PC Issues', quality: 'HD', location: 'Mexico' },
];

// Initialize admin panel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if already authenticated
    checkAuthentication();
    
    // Initialize theme
    initTheme();
    
    // Set up event listeners
    setupEventListeners();
});

/**
 * Sets up all event listeners for the admin panel
 */
function setupEventListeners() {
    // Login button
    loginBtn.addEventListener('click', handleLogin);
    
    // Password input enter key
    adminPassword.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
    
    // Logout button
    logoutBtn.addEventListener('click', handleLogout);
    
    // Theme toggle
    adminThemeToggle.addEventListener('click', toggleTheme);
    
    // Tab navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Settings buttons
    saveSettingsBtn.addEventListener('click', saveSettings);
    resetSettingsBtn.addEventListener('click', resetSettings);
}

/**
 * Handles the login process
 */
function handleLogin() {
    const password = adminPassword.value.trim();
    
    if (!password) {
        showLoginError('Please enter the admin password');
        return;
    }
    
    if (password === ADMIN_PASSWORD) {
        // Set authentication in localStorage with timestamp
        const auth = {
            authenticated: true,
            timestamp: Date.now()
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
        
        // Show dashboard
        showDashboard();
    } else {
        showLoginError('Invalid password. Please try again.');
        adminPassword.value = '';
    }
}

/**
 * Shows login error message
 * @param {string} message - Error message to display
 */
function showLoginError(message) {
    loginError.textContent = message;
    loginError.style.display = 'block';
    
    // Clear error after 3 seconds
    setTimeout(() => {
        loginError.style.display = 'none';
    }, 3000);
}

/**
 * Handles the logout process
 */
function handleLogout() {
    // Clear authentication
    localStorage.removeItem(AUTH_STORAGE_KEY);
    
    // Show login screen
    loginContainer.classList.remove('hidden');
    dashboardContainer.classList.add('hidden');
    
    // Clear password field
    adminPassword.value = '';
}

/**
 * Checks if user is authenticated and session is valid
 */
function checkAuthentication() {
    try {
        const authData = localStorage.getItem(AUTH_STORAGE_KEY);
        
        if (!authData) {
            return;
        }
        
        const auth = JSON.parse(authData);
        const now = Date.now();
        
        if (auth.authenticated && (now - auth.timestamp < SESSION_DURATION)) {
            // Valid session, show dashboard
            showDashboard();
        } else {
            // Session expired, remove auth data
            localStorage.removeItem(AUTH_STORAGE_KEY);
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
        localStorage.removeItem(AUTH_STORAGE_KEY);
    }
}

/**
 * Shows the dashboard and loads statistics
 */
function showDashboard() {
    loginContainer.classList.add('hidden');
    dashboardContainer.classList.remove('hidden');
    
    // Load statistics
    loadStatistics();
    
    // Populate downloads table
    populateDownloadsTable();
}

/**
 * Loads statistics for the dashboard
 */
function loadStatistics() {
    // In a real application, this would fetch data from the server
    // For this demo, we'll use localStorage and the sample data
    
    // Get stored values or use defaults
    const viewsCount = localStorage.getItem('fbVideoPageViews') || '0';
    const downloadsCount = localStorage.getItem('fbVideoDownloads') || '0';
    
    // Generate a somewhat consistent unique users number from downloads
    const usersCount = Math.max(10, Math.floor(parseInt(downloadsCount) * 0.7));
    
    // Update UI
    totalUsers.textContent = formatNumber(usersCount);
    totalDownloads.textContent = formatNumber(downloadsCount);
    pageViews.textContent = formatNumber(viewsCount);
    activeCountries.textContent = Object.keys(statsByCountry).length;
}

/**
 * Formats number with commas for thousands
 * @param {number|string} number - Number to format
 * @returns {string} - Formatted number
 */
function formatNumber(number) {
    return parseInt(number).toLocaleString();
}

/**
 * Populates the downloads table with sample data
 */
function populateDownloadsTable() {
    downloadsTableBody.innerHTML = '';
    
    sampleDownloads.forEach(download => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${download.date}</td>
            <td>${download.title}</td>
            <td>${download.quality}</td>
            <td>${download.location}</td>
        `;
        downloadsTableBody.appendChild(row);
    });
}

/**
 * Switches between admin tabs
 * @param {string} tabId - ID of the tab to show
 */
function switchTab(tabId) {
    // Update active tab in navigation
    navItems.forEach(item => {
        if (item.getAttribute('data-tab') === tabId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Show the selected tab
    adminTabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

/**
 * Toggles between light and dark theme
 */
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Toggle class
    body.classList.toggle('dark-mode');
    
    // Update icon
    adminThemeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
    
    // Save preference
    localStorage.setItem('fbVideoTheme', isDarkMode ? 'light' : 'dark');
}

/**
 * Initializes theme based on saved preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('fbVideoTheme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        adminThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        adminThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

/**
 * Saves admin settings to localStorage
 */
function saveSettings() {
    // In a real application, this would save to the server
    // For this demo, we'll just save to localStorage
    
    const settings = {
        siteName: document.getElementById('siteName').value,
        siteDescription: document.getElementById('siteDescription').value,
        apiEndpoint: document.getElementById('apiEndpoint').value,
        apiTimeout: document.getElementById('apiTimeout').value,
        defaultTheme: document.querySelector('input[name="defaultTheme"]:checked').value,
        defaultLanguage: document.getElementById('defaultLanguage').value
    };
    
    localStorage.setItem('fbVideoAdminSettings', JSON.stringify(settings));
    
    // Show success message
    alert('Settings saved successfully!');
}

/**
 * Resets admin settings to default values
 */
function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default values?')) {
        // Reset form elements
        document.getElementById('siteName').value = 'SaveFBVideos';
        document.getElementById('siteDescription').value = 'Download Facebook videos easily with SaveFBVideos. Fast, free, and no registration required.';
        document.getElementById('apiEndpoint').value = 'https://apis.davidcyriltech.my.id/facebook2';
        document.getElementById('apiTimeout').value = '30';
        document.querySelector('input[name="defaultTheme"][value="light"]').checked = true;
        document.getElementById('defaultLanguage').value = 'en';
        
        // Clear saved settings
        localStorage.removeItem('fbVideoAdminSettings');
        
        // Show success message
        alert('Settings have been reset to default values.');
    }
}
