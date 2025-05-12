/**
 * Savefbvideos - Facebook Video Downloader
 * Main JavaScript file for handling frontend functionality
 */

// DOM Elements
const videoUrlInput = document.getElementById('videoUrl');
const fetchBtn = document.getElementById('fetchBtn');
const clearBtn = document.getElementById('clearBtn');
const pasteBtn = document.getElementById('pasteBtn');
const resultSection = document.getElementById('resultSection');
const loadingContainer = document.getElementById('loadingContainer');
const resultContainer = document.getElementById('resultContainer');
const errorContainer = document.getElementById('errorContainer');
const progressBar = document.getElementById('progressBar');
const videoThumbnail = document.getElementById('videoThumbnail');
const videoTitle = document.getElementById('videoTitle');
// Using let instead of const for download buttons because we clone and replace them
let downloadSD = document.getElementById('downloadSD');
let downloadHD = document.getElementById('downloadHD');
const downloadMP3 = document.getElementById('downloadMP3');
const errorMessage = document.getElementById('errorMessage');
const retryBtn = document.getElementById('retryBtn');
const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');
const languageModal = document.getElementById('languageModal');
const closeModalBtn = document.querySelector('.close-modal');
const languageOptions = document.querySelectorAll('.language-option');
const historyContainer = document.getElementById('historyContainer');
const historyItems = document.getElementById('historyItems');
const emptyHistory = document.getElementById('emptyHistory');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// Constants
const API_URL = 'https://apis.davidcyriltech.my.id/facebook2'; // API endpoint for Facebook video info
const HISTORY_STORAGE_KEY = 'fbVideoHistory';
const THEME_STORAGE_KEY = 'fbVideoTheme';
const LANG_STORAGE_KEY = 'fbVideoLang';
const MAX_HISTORY_ITEMS = 10;

// State
let currentUrl = '';
let downloadHistory = [];
let isLoading = false;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize language
    initLanguage();
    
    // Load download history
    loadHistory();
    
    // Check clipboard for Facebook URL on page load
    checkClipboard();
    
    // Set up event listeners
    setupEventListeners();
});

/**
 * Sets up all event listeners for the application
 */
function setupEventListeners() {
    // URL input event listeners
    fetchBtn.addEventListener('click', handleFetchVideo);
    clearBtn.addEventListener('click', clearUrlInput);
    pasteBtn.addEventListener('click', pasteFromClipboard);
    videoUrlInput.addEventListener('input', handleUrlInput);
    
    // Form submission
    videoUrlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleFetchVideo();
        }
    });
    
    // Retry button
    retryBtn.addEventListener('click', () => {
        hideResultContainers();
        handleFetchVideo();
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language modal events
    languageToggle.addEventListener('click', () => languageModal.classList.add('active'));
    closeModalBtn.addEventListener('click', () => languageModal.classList.remove('active'));
    
    // Close modal when clicking outside
    languageModal.addEventListener('click', (e) => {
        if (e.target === languageModal) {
            languageModal.classList.remove('active');
        }
    });
    
    // Language options
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const langCode = option.getAttribute('data-lang-code');
            setLanguage(langCode);
            languageModal.classList.remove('active');
        });
    });
    
    // Clear history
    clearHistoryBtn.addEventListener('click', clearHistory);
}

/**
 * Handles the input change event for the URL field
 */
function handleUrlInput() {
    const hasValue = videoUrlInput.value.trim() !== '';
    clearBtn.style.display = hasValue ? 'block' : 'none';
}

/**
 * Clears the URL input field
 */
function clearUrlInput() {
    videoUrlInput.value = '';
    clearBtn.style.display = 'none';
}

/**
 * Pastes text from clipboard into URL input field
 */
async function pasteFromClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        if (text) {
            videoUrlInput.value = text;
            clearBtn.style.display = 'block';
        }
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
    }
}

/**
 * Checks clipboard for Facebook URL on page load
 */
async function checkClipboard() {
    try {
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            if (text && isFacebookUrl(text)) {
                videoUrlInput.value = text;
                clearBtn.style.display = 'block';
            }
        }
    } catch (err) {
        console.error('Unable to read clipboard: ', err);
        // Silent fail - clipboard access might be denied
    }
}

/**
 * Handles the video fetch process
 */
function handleFetchVideo() {
    // Get URL from input
    const url = videoUrlInput.value.trim();
    
    // Validate URL
    if (!url) {
        showError(getTranslation('errorEmptyUrl'));
        return;
    }
    
    if (!isFacebookUrl(url)) {
        showError(getTranslation('errorInvalidUrl'));
        return;
    }
    
    console.log('Starting fetch process for URL:', url);
    
    // Set current URL and start loading
    currentUrl = url;
    
    // Reset any existing result containers first
    hideResultContainers();
    startLoading();
    
    // Fetch video data
    fetchVideoData(url);
}

/**
 * Shows the loading UI and initializes the progress bar
 */
function startLoading() {
    isLoading = true;
    resultSection.classList.remove('hidden');
    hideResultContainers();
    loadingContainer.classList.remove('hidden');
    
    // Reset progress bar
    progressBar.style.width = '0%';
    
    // Animate progress bar - faster and more predictable
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 85 || !isLoading) {
            clearInterval(interval);
            if (isLoading) {
                progress = 85;
                progressBar.style.width = `${progress}%`;
            }
        } else {
            // Make the progress more predictable by using fixed increments
            // Start faster, then slow down
            if (progress < 30) {
                progress += 5; // Fast at beginning
            } else if (progress < 60) {
                progress += 3; // Slower in middle
            } else {
                progress += 1; // Very slow at end
            }
            progressBar.style.width = `${progress}%`;
        }
    }, 200); // Faster interval
}

/**
 * Completes the loading progress bar animation
 */
function completeLoading() {
    console.log('Completing loading animation');
    progressBar.style.width = '100%';
    progressBar.style.transition = 'width 0.3s ease';
    
    // Set loading to false and hide loading container
    setTimeout(() => {
        isLoading = false;
        console.log('Animation complete, hiding loading container');
        loadingContainer.classList.add('hidden');
        
        // Reset transition
        setTimeout(() => {
            progressBar.style.transition = '';
        }, 100);
    }, 300);
}

/**
 * Hides all result containers (loading, result, error)
 */
function hideResultContainers() {
    loadingContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    errorContainer.classList.add('hidden');
}

/**
 * Fetches video data from the API
 * @param {string} url - The Facebook video URL
 */
async function fetchVideoData(url) {
    try {
        console.log(`Fetching data for URL: ${url}`);
        
        // Return early if URL is not valid Facebook video URL
        if (!isFacebookUrl(url)) {
            console.log('Invalid Facebook URL format:', url);
            throw new Error(getTranslation('errorInvalidUrl'));
        }
        
        console.log('Valid Facebook URL detected:', url);
        
        // Make real API request
        const response = await fetch(`${API_URL}?url=${encodeURIComponent(url)}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Video data:', responseData);

        if (!responseData || !responseData.status) {
            throw new Error(responseData.message || 'Failed to fetch video data');
        }

        completeLoading();
        showVideoResult(responseData);
        
        // Add to history
        addToHistory({
            url: url,
            title: responseData.video.title || 'Untitled Video',
            thumbnail: responseData.video.thumbnail || '',
            date: new Date().toISOString()
        });
        
        
    } catch (error) {
        console.error('Error fetching video data:', error);
        console.log('Error details:', error.message || 'Unknown error');
        
        // Force complete loading and show error
        completeLoading();
        
        // Show appropriate error message based on error type
        if (error.name === 'AbortError') {
            showError('Request timed out. The server took too long to respond.');
        } else if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
            showError('Network error. Please check your internet connection.');
        } else {
            showError(error.message || 'An unknown error occurred. Please try again.');
        }
    }
}

/**
 * Adds a video to download history
 * @param {Object} videoData - The video data to add to history
 */
function addToHistory(videoData) {
    // Create new history array with the new item at the beginning
    const newHistory = [videoData, ...downloadHistory.filter(item => item.url !== videoData.url)];
    
    // Limit to MAX_HISTORY_ITEMS
    downloadHistory = newHistory.slice(0, MAX_HISTORY_ITEMS);
    
    // Save to localStorage
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(downloadHistory));
    
    // Update the UI
    updateHistoryUI();
}

/**
 * Updates the history UI with current history data
 */
function updateHistoryUI() {
    if (downloadHistory.length === 0) {
        emptyHistory.classList.remove('hidden');
        historyItems.classList.add('hidden');
        return;
    }
    
    emptyHistory.classList.add('hidden');
    historyItems.classList.remove('hidden');
    historyItems.innerHTML = '';
    
    downloadHistory.forEach(item => {
        const date = new Date(item.date);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-item-thumbnail">
                <img src="${item.thumbnail || ''}" alt="${item.title}" 
                     onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%2256%22%20viewBox%3D%220%200%20100%2056%22%3E%3Crect%20width%3D%22100%22%20height%3D%2256%22%20fill%3D%22%23eee%22%2F%3E%3Ctext%20x%3D%2250%22%20y%3D%2228%22%20font-family%3D%22Arial%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%20alignment-baseline%3D%22middle%22%20fill%3D%22%23999%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';">
            </div>
            <div class="history-item-info">
                <div class="history-item-title">${item.title}</div>
                <div class="history-item-date">${formattedDate}</div>
            </div>
            <div class="history-item-actions">
                <button class="download-again" data-url="${item.url}" aria-label="${getTranslation('downloadAgain')}">
                    <i class="fas fa-download"></i>
                </button>
                <button class="remove-history" data-url="${item.url}" aria-label="${getTranslation('removeFromHistory')}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        historyItems.appendChild(historyItem);
        
        // Add event listeners
        const downloadAgainBtn = historyItem.querySelector('.download-again');
        const removeHistoryBtn = historyItem.querySelector('.remove-history');
        
        downloadAgainBtn.addEventListener('click', () => {
            videoUrlInput.value = item.url;
            clearBtn.style.display = 'block';
            handleFetchVideo();
        });
        
        removeHistoryBtn.addEventListener('click', () => {
            removeFromHistory(item.url);
        });
    });
}

/**
 * Removes a video from history by URL
 * @param {string} url - The URL to remove from history
 */
function removeFromHistory(url) {
    downloadHistory = downloadHistory.filter(item => item.url !== url);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(downloadHistory));
    updateHistoryUI();
}

/**
 * Clears the entire download history
 */
function clearHistory() {
    if (confirm(getTranslation('confirmClearHistory'))) {
        downloadHistory = [];
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(downloadHistory));
        updateHistoryUI();
    }
}

/**
 * Loads download history from localStorage
 */
function loadHistory() {
    try {
        const historyData = localStorage.getItem(HISTORY_STORAGE_KEY);
        if (historyData) {
            downloadHistory = JSON.parse(historyData);
            updateHistoryUI();
        }
    } catch (error) {
        console.error('Error loading history:', error);
        downloadHistory = [];
    }
}

/**
 * Shows the video result UI with the fetched data
 * @param {Object} data - The video data from the API
 */
function showVideoResult(data) {
    hideResultContainers();
    
    // Set video details
    videoThumbnail.src = data.video.thumbnail || '';
    videoThumbnail.alt = data.video.title || 'Facebook Video';
    videoTitle.textContent = data.video.title || 'Untitled Video';
    
    // Set download links
    if (data.video.downloads && data.video.downloads.length > 0) {
        const sdQuality = data.video.downloads.find(item => item.quality === 'SD');
        const hdQuality = data.video.downloads.find(item => item.quality === 'HD');
        
        if (sdQuality && sdQuality.downloadUrl) {
            // Simple direct approach - clear existing content and reset
            downloadSD.innerHTML = '<i class="fas fa-download"></i> <span>Download SD</span>';
            
            // Set up download URL
            downloadSD.href = sdQuality.downloadUrl;
            downloadSD.classList.remove('disabled');
            downloadSD.setAttribute('download', `${data.video.title || 'facebook_video'}_SD.mp4`);
            
            // Force download approach
            downloadSD.onclick = function(e) {
                e.preventDefault();
                console.log('SD download clicked, initiating forced download');
                
                // Create an iframe to force download rather than preview
                const downloadFrame = document.createElement('iframe');
                downloadFrame.style.display = 'none';
                document.body.appendChild(downloadFrame);
                
                // Use a blob URL approach with fetch to force download
                fetch(sdQuality.downloadUrl)
                    .then(response => response.blob())
                    .then(blob => {
                        const blobUrl = window.URL.createObjectURL(blob);
                        
                        // Create a link and click it to download
                        const downloadLink = document.createElement('a');
                        downloadLink.href = blobUrl;
                        downloadLink.download = `${data.video.title || 'facebook_video'}_SD.mp4`;
                        downloadLink.style.display = 'none';
                        downloadFrame.contentDocument.body.appendChild(downloadLink);
                        downloadLink.click();
                        
                        // Clean up
                        setTimeout(() => {
                            window.URL.revokeObjectURL(blobUrl);
                            document.body.removeChild(downloadFrame);
                            console.log('SD download completed and cleanup done');
                        }, 1000);
                    })
                    .catch(err => {
                        console.error('Download error:', err);
                        document.body.removeChild(downloadFrame);
                        
                        // Fallback method if the fetch approach fails
                        alert('Starting download using alternative method...');
                        
                        // Try alternative download method
                        const downloadWindow = window.open('', '_blank');
                        if (downloadWindow) {
                            downloadWindow.document.write(`
                                <html>
                                <head>
                                    <title>Downloading Video...</title>
                                    <style>
                                        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                                        h2 { color: #4285f4; }
                                        .container { max-width: 600px; margin: 0 auto; }
                                        .download-link { 
                                            display: block; 
                                            margin: 20px auto; 
                                            padding: 10px 20px; 
                                            background: #4285f4; 
                                            color: white; 
                                            text-decoration: none;
                                            border-radius: 4px;
                                            font-weight: bold;
                                        }
                                    </style>
                                </head>
                                <body>
                                    <div class="container">
                                        <h2>Your Download Is Starting...</h2>
                                        <p>If the download doesn't start automatically, click the button below.</p>
                                        <a class="download-link" href="${sdQuality.downloadUrl}" download="${data.video.title || 'facebook_video'}_SD.mp4">Download Now</a>
                                        <script>
                                            // Start download automatically
                                            document.addEventListener('DOMContentLoaded', function() {
                                                setTimeout(function() {
                                                    document.querySelector('.download-link').click();
                                                }, 1000);
                                            });
                                        </script>
                                   
