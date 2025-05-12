/**
 * Savefbvideos - Facebook Video Downloader
 * Language translations for multi-language support
 */

// Supported languages array
const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ar', 'hi'];

// RTL languages
const LANGUAGES_RTL = ['ar'];

// Translations object
const translations = {
    // English
    'en': {
        // Hero section
        'heroTitle': 'Download Facebook Videos Easily',
        'heroSubtitle': 'Save any Facebook video in HD or SD quality with just a few clicks',
        'inputPlaceholder': 'Paste Facebook video URL here',
        'fetchButton': '<i class="fas fa-download"></i> Download',
        'supportedTitle': 'Supported URL formats:',
        
        // Loading and results
        'loadingText': 'Fetching video information...',
        'downloadOptions': 'Download Options:',
        'downloadSD': 'Download SD',
        'downloadHD': 'Download HD',
        'downloadMP3': 'Download MP3',
        'downloadAgain': 'Download Again',
        'removeFromHistory': 'Remove from History',
        
        // Features section
        'featuresTitle': 'Why Choose SaveFBVideos?',
        'featureSpeed': 'Fast & Free',
        'featureSpeedDesc': 'Download Facebook videos instantly without registration or fees',
        'featureSecurity': 'Secure',
        'featureSecurityDesc': 'Your data stays private - we don\'t store your videos or information',
        'featureMobile': 'Mobile Friendly',
        'featureMobileDesc': 'Works perfectly on all devices - desktop, tablet, and mobile',
        'featureQuality': 'High Quality',
        'featureQualityDesc': 'Download videos in SD or HD quality without losing resolution',
        
        // How it works section
        'howWorksTitle': 'How It Works',
        'step1Title': 'Copy URL',
        'step1Desc': 'Copy the Facebook video URL you want to download',
        'step2Title': 'Paste & Fetch',
        'step2Desc': 'Paste the URL in the input field and click Download',
        'step3Title': 'Download',
        'step3Desc': 'Choose your preferred quality and download the video',
        
        // History section
        'historyTitle': 'Recent Downloads',
        'clearHistory': 'Clear History',
        'noHistory': 'Your download history will appear here',
        'confirmClearHistory': 'Are you sure you want to clear all download history?',
        
        // Language modal
        'languageModalTitle': 'Select Language',
        
        // Footer
        'footerTagline': 'The easiest way to download Facebook videos',
        'linkGroupTools': 'Tools',
        'linkFbDownloader': 'Facebook Downloader',
        'linkInstaDownloader': 'Instagram Downloader',
        'linkTwitterDownloader': 'Twitter Downloader',
        'linkYoutubeDownloader': 'YouTube Downloader',
        'linkGroupCompany': 'Company',
        'linkAbout': 'About Us',
        'linkPrivacy': 'Privacy Policy',
        'linkTerms': 'Terms of Service',
        'linkContact': 'Contact Us',
        'linkGroupConnect': 'Connect',
        'linkBrowserExt': 'Browser Extension',
        'linkMobileApp': 'Mobile App',
        'copyright': '© 2023 SaveFBVideos. All rights reserved.',
        'disclaimer': 'SaveFBVideos is not affiliated with Facebook.',
        
        // Error messages
        'errorTitle': 'Something went wrong',
        'errorEmptyUrl': 'Please enter a Facebook video URL',
        'errorInvalidUrl': 'Invalid Facebook video URL. Please check the URL and try again.',
        'errorGeneric': 'Unable to fetch video. Please try again later.',
        'retryButton': 'Try Again'
    },
    
    // Spanish
    'es': {
        // Hero section
        'heroTitle': 'Descarga videos de Facebook fácilmente',
        'heroSubtitle': 'Guarda cualquier video de Facebook en calidad HD o SD con solo unos clics',
        'inputPlaceholder': 'Pega aquí la URL del video de Facebook',
        'fetchButton': '<i class="fas fa-download"></i> Descargar',
        'supportedTitle': 'Formatos de URL compatibles:',
        
        // Loading and results
        'loadingText': 'Obteniendo información del video...',
        'downloadOptions': 'Opciones de descarga:',
        'downloadSD': 'Descargar SD',
        'downloadHD': 'Descargar HD',
        'downloadMP3': 'Descargar MP3',
        'downloadAgain': 'Descargar de nuevo',
        'removeFromHistory': 'Eliminar del historial',
        
        // Features section
        'featuresTitle': '¿Por qué elegir SaveFBVideos?',
        'featureSpeed': 'Rápido y gratuito',
        'featureSpeedDesc': 'Descarga videos de Facebook al instante sin registro ni tarifas',
        'featureSecurity': 'Seguro',
        'featureSecurityDesc': 'Tus datos permanecen privados - no almacenamos tus videos ni información',
        'featureMobile': 'Compatible con móviles',
        'featureMobileDesc': 'Funciona perfectamente en todos los dispositivos - escritorio, tablet y móvil',
        'featureQuality': 'Alta calidad',
        'featureQualityDesc': 'Descarga videos en calidad SD o HD sin perder resolución',
        
        // How it works section
        'howWorksTitle': 'Cómo funciona',
        'step1Title': 'Copiar URL',
        'step1Desc': 'Copia la URL del video de Facebook que quieres descargar',
        'step2Title': 'Pegar y obtener',
        'step2Desc': 'Pega la URL en el campo de entrada y haz clic en Descargar',
        'step3Title': 'Descargar',
        'step3Desc': 'Elige tu calidad preferida y descarga el video',
        
        // History section
        'historyTitle': 'Descargas recientes',
        'clearHistory': 'Borrar historial',
        'noHistory': 'Tu historial de descargas aparecerá aquí',
        'confirmClearHistory': '¿Estás seguro de que quieres borrar todo el historial de descargas?',
        
        // Language modal
        'languageModalTitle': 'Seleccionar idioma',
        
        // Footer
        'footerTagline': 'La forma más fácil de descargar videos de Facebook',
        'linkGroupTools': 'Herramientas',
        'linkFbDownloader': 'Descargador de Facebook',
        'linkInstaDownloader': 'Descargador de Instagram',
        'linkTwitterDownloader': 'Descargador de Twitter',
        'linkYoutubeDownloader': 'Descargador de YouTube',
        'linkGroupCompany': 'Empresa',
        'linkAbout': 'Sobre nosotros',
        'linkPrivacy': 'Política de privacidad',
        'linkTerms': 'Términos de servicio',
        'linkContact': 'Contacto',
        'linkGroupConnect': 'Conectar',
        'linkBrowserExt': 'Extensión de navegador',
        'linkMobileApp': 'Aplicación móvil',
        'copyright': '© 2023 SaveFBVideos. Todos los derechos reservados.',
        'disclaimer': 'SaveFBVideos no está afiliado a Facebook.',
        
        // Error messages
        'errorTitle': 'Algo salió mal',
        'errorEmptyUrl': 'Por favor, introduce una URL de video de Facebook',
        'errorInvalidUrl': 'URL de video de Facebook no válida. Por favor, verifica la URL e inténtalo de nuevo.',
        'errorGeneric': 'No se puede obtener el video. Por favor, inténtalo más tarde.',
        'retryButton': 'Intentar de nuevo'
    },
    
    // French
    'fr': {
        // Hero section
        'heroTitle': 'Téléchargez facilement des vidéos Facebook',
        'heroSubtitle': 'Enregistrez n\'importe quelle vidéo Facebook en qualité HD ou SD en quelques clics',
        'inputPlaceholder': 'Collez l\'URL de la vidéo Facebook ici',
        'fetchButton': '<i class="fas fa-download"></i> Télécharger',
        'supportedTitle': 'Formats d\'URL pris en charge:',
        
        // Loading and results
        'loadingText': 'Récupération des informations vidéo...',
        'downloadOptions': 'Options de téléchargement:',
        'downloadSD': 'Télécharger SD',
        'downloadHD': 'Télécharger HD',
        'downloadMP3': 'Télécharger MP3',
        'downloadAgain': 'Télécharger à nouveau',
        'removeFromHistory': 'Supprimer de l\'historique',
        
        // Features section
        'featuresTitle': 'Pourquoi choisir SaveFBVideos?',
        'featureSpeed': 'Rapide et gratuit',
        'featureSpeedDesc': 'Téléchargez des vidéos Facebook instantanément sans inscription ni frais',
        'featureSecurity': 'Sécurisé',
        'featureSecurityDesc': 'Vos données restent privées - nous ne stockons pas vos vidéos ni vos informations',
        'featureMobile': 'Compatible mobile',
        'featureMobileDesc': 'Fonctionne parfaitement sur tous les appareils - ordinateur, tablette et mobile',
        'featureQuality': 'Haute qualité',
        'featureQualityDesc': 'Téléchargez des vidéos en qualité SD ou HD sans perdre en résolution',
        
        // How it works section
        'howWorksTitle': 'Comment ça marche',
        'step1Title': 'Copier l\'URL',
        'step1Desc': 'Copiez l\'URL de la vidéo Facebook que vous souhaitez télécharger',
        'step2Title': 'Coller et récupérer',
        'step2Desc': 'Collez l\'URL dans le champ de saisie et cliquez sur Télécharger',
        'step3Title': 'Télécharger',
        'step3Desc': 'Choisissez votre qualité préférée et téléchargez la vidéo',
        
        // History section
        'historyTitle': 'Téléchargements récents',
        'clearHistory': 'Effacer l\'historique',
        'noHistory': 'Votre historique de téléchargement apparaîtra ici',
        'confirmClearHistory': 'Êtes-vous sûr de vouloir effacer tout l\'historique de téléchargement?',
        
        // Language modal
        'languageModalTitle': 'Sélectionner la langue',
        
        // Footer
        'footerTagline': 'La façon la plus simple de télécharger des vidéos Facebook',
        'linkGroupTools': 'Outils',
        'linkFbDownloader': 'Téléchargeur Facebook',
        'linkInstaDownloader': 'Téléchargeur Instagram',
        'linkTwitterDownloader': 'Téléchargeur Twitter',
        'linkYoutubeDownloader': 'Téléchargeur YouTube',
        'linkGroupCompany': 'Entreprise',
        'linkAbout': 'À propos de nous',
        'linkPrivacy': 'Politique de confidentialité',
        'linkTerms': 'Conditions d\'utilisation',
        'linkContact': 'Contactez-nous',
        'linkGroupConnect': 'Connecter',
        'linkBrowserExt': 'Extension de navigateur',
        'linkMobileApp': 'Application mobile',
        'copyright': '© 2023 SaveFBVideos. Tous droits réservés.',
        'disclaimer': 'SaveFBVideos n\'est pas affilié à Facebook.',
        
        // Error messages
        'errorTitle': 'Une erreur s\'est produite',
        'errorEmptyUrl': 'Veuillez entrer une URL de vidéo Facebook',
        'errorInvalidUrl': 'URL de vidéo Facebook non valide. Veuillez vérifier l\'URL et réessayer.',
        'errorGeneric': 'Impossible de récupérer la vidéo. Veuillez réessayer plus tard.',
        'retryButton': 'Réessayer'
    },
    
    // German
    'de': {
        // Hero section
        'heroTitle': 'Facebook-Videos einfach herunterladen',
        'heroSubtitle': 'Speichern Sie Facebook-Videos in HD oder SD-Qualität mit nur wenigen Klicks',
        'inputPlaceholder': 'Facebook-Video-URL hier einfügen',
        'fetchButton': '<i class="fas fa-download"></i> Herunterladen',
        'supportedTitle': 'Unterstützte URL-Formate:',
        
        // Loading and results
        'loadingText': 'Video-Informationen werden abgerufen...',
        'downloadOptions': 'Download-Optionen:',
        'downloadSD': 'SD herunterladen',
        'downloadHD': 'HD herunterladen',
        'downloadMP3': 'MP3 herunterladen',
        'downloadAgain': 'Erneut herunterladen',
        'removeFromHistory': 'Aus Verlauf entfernen',
        
        // Features section
        'featuresTitle': 'Warum SaveFBVideos wählen?',
        'featureSpeed': 'Schnell & Kostenlos',
        'featureSpeedDesc': 'Laden Sie Facebook-Videos sofort ohne Registrierung oder Gebühren herunter',
        'featureSecurity': 'Sicher',
        'featureSecurityDesc': 'Ihre Daten bleiben privat - wir speichern weder Ihre Videos noch Ihre Informationen',
        'featureMobile': 'Mobilfreundlich',
        'featureMobileDesc': 'Funktioniert perfekt auf allen Geräten - Desktop, Tablet und Handy',
        'featureQuality': 'Hohe Qualität',
        'featureQualityDesc': 'Laden Sie Videos in SD- oder HD-Qualität ohne Qualitätsverlust herunter',
        
        // How it works section
        'howWorksTitle': 'So funktioniert es',
        'step1Title': 'URL kopieren',
        'step1Desc': 'Kopieren Sie die URL des Facebook-Videos, das Sie herunterladen möchten',
        'step2Title': 'Einfügen & Abrufen',
        'step2Desc': 'Fügen Sie die URL in das Eingabefeld ein und klicken Sie auf Herunterladen',
        'step3Title': 'Herunterladen',
        'step3Desc': 'Wählen Sie Ihre bevorzugte Qualität und laden Sie das Video herunter',
        
        // History section
        'historyTitle': 'Neueste Downloads',
        'clearHistory': 'Verlauf löschen',
        'noHistory': 'Ihr Download-Verlauf wird hier angezeigt',
        'confirmClearHistory': 'Sind Sie sicher, dass Sie den gesamten Download-Verlauf löschen möchten?',
        
        // Language modal
        'languageModalTitle': 'Sprache auswählen',
        
        // Footer
        'footerTagline': 'Der einfachste Weg, Facebook-Videos herunterzuladen',
        'linkGroupTools': 'Tools',
        'linkFbDownloader': 'Facebook Downloader',
        'linkInstaDownloader': 'Instagram Downloader',
        'linkTwitterDownloader': 'Twitter Downloader',
        'linkYoutubeDownloader': 'YouTube Downloader',
        'linkGroupCompany': 'Unternehmen',
        'linkAbout': 'Über uns',
        'linkPrivacy': 'Datenschutzrichtlinie',
        'linkTerms': 'Nutzungsbedingungen',
        'linkContact': 'Kontakt',
        'linkGroupConnect': 'Verbinden',
        'linkBrowserExt': 'Browser-Erweiterung',
        'linkMobileApp': 'Mobile App',
        'copyright': '© 2023 SaveFBVideos. Alle Rechte vorbehalten.',
        'disclaimer': 'SaveFBVideos ist nicht mit Facebook verbunden.',
        
        // Error messages
        'errorTitle': 'Etwas ist schief gelaufen',
        'errorEmptyUrl': 'Bitte geben Sie eine Facebook-Video-URL ein',
        'errorInvalidUrl': 'Ungültige Facebook-Video-URL. Bitte überprüfen Sie die URL und versuchen Sie es erneut.',
        'errorGeneric': 'Video konnte nicht abgerufen werden. Bitte versuchen Sie es später erneut.',
        'retryButton': 'Erneut versuchen'
    },
    
    // Portuguese
    'pt': {
        // Hero section
        'heroTitle': 'Baixe vídeos do Facebook facilmente',
        'heroSubtitle': 'Salve qualquer vídeo do Facebook em qualidade HD ou SD com apenas alguns cliques',
        'inputPlaceholder': 'Cole o URL do vídeo do Facebook aqui',
        'fetchButton': '<i class="fas fa-download"></i> Baixar',
        'supportedTitle': 'Formatos de URL suportados:',
        
        // Loading and results
        'loadingText': 'Buscando informações do vídeo...',
        'downloadOptions': 'Opções de download:',
        'downloadSD': 'Baixar SD',
        'downloadHD': 'Baixar HD',
        'downloadMP3': 'Baixar MP3',
        'downloadAgain': 'Baixar novamente',
        'removeFromHistory': 'Remover do histórico',
        
        // Features section
        'featuresTitle': 'Por que escolher o SaveFBVideos?',
        'featureSpeed': 'Rápido e Gratuito',
        'featureSpeedDesc': 'Baixe vídeos do Facebook instantaneamente sem registro ou taxas',
        'featureSecurity': 'Seguro',
        'featureSecurityDesc': 'Seus dados permanecem privados - não armazenamos seus vídeos ou informações',
        'featureMobile': 'Amigável para dispositivos móveis',
        'featureMobileDesc': 'Funciona perfeitamente em todos os dispositivos - desktop, tablet e celular',
        'featureQuality': 'Alta qualidade',
        'featureQualityDesc': 'Baixe vídeos em qualidade SD ou HD sem perder resolução',
        
        // How it works section
        'howWorksTitle': 'Como funciona',
        'step1Title': 'Copiar URL',
        'step1Desc': 'Copie o URL do vídeo do Facebook que você deseja baixar',
        'step2Title': 'Colar e buscar',
        'step2Desc': 'Cole o URL no campo de entrada e clique em Baixar',
        'step3Title': 'Baixar',
        'step3Desc': 'Escolha sua qualidade preferida e baixe o vídeo',
        
        // History section
        'historyTitle': 'Downloads recentes',
        'clearHistory': 'Limpar histórico',
        'noHistory': 'Seu histórico de downloads aparecerá aqui',
        'confirmClearHistory': 'Tem certeza de que deseja limpar todo o histórico de downloads?',
        
        // Language modal
        'languageModalTitle': 'Selecione o idioma',
        
        // Footer
        'footerTagline': 'A maneira mais fácil de baixar vídeos do Facebook',
        'linkGroupTools': 'Ferramentas',
        'linkFbDownloader': 'Baixador do Facebook',
        'linkInstaDownloader': 'Baixador do Instagram',
        'linkTwitterDownloader': 'Baixador do Twitter',
        'linkYoutubeDownloader': 'Baixador do YouTube',
        'linkGroupCompany': 'Empresa',
        'linkAbout': 'Sobre nós',
        'linkPrivacy': 'Política de privacidade',
        'linkTerms': 'Termos de serviço',
        'linkContact': 'Contato',
        'linkGroupConnect': 'Conectar',
        'linkBrowserExt': 'Extensão do navegador',
        'linkMobileApp': 'Aplicativo móvel',
        'copyright': '© 2023 SaveFBVideos. Todos os direitos reservados.',
        'disclaimer': 'SaveFBVideos não é afiliado ao Facebook.',
        
        // Error messages
        'errorTitle': 'Algo deu errado',
        'errorEmptyUrl': 'Por favor, insira um URL de vídeo do Facebook',
        'errorInvalidUrl': 'URL de vídeo do Facebook inválido. Por favor, verifique o URL e tente novamente.',
        'errorGeneric': 'Não foi possível buscar o vídeo. Por favor, tente novamente mais tarde.',
        'retryButton': 'Tentar novamente'
    },
    
    // Italian
    'it': {
        // Hero section
        'heroTitle': 'Scarica facilmente video da Facebook',
        'heroSubtitle': 'Salva qualsiasi video di Facebook in qualità HD o SD con pochi clic',
        'inputPlaceholder': 'Incolla qui l\'URL del video di Facebook',
        'fetchButton': '<i class="fas fa-download"></i> Scarica',
        'supportedTitle': 'Formati URL supportati:',
        
        // Loading and results
        'loadingText': 'Recupero delle informazioni video...',
        'downloadOptions': 'Opzioni di download:',
        'downloadSD': 'Scarica SD',
        'downloadHD': 'Scarica HD',
        'downloadMP3': 'Scarica MP3',
        'downloadAgain': 'Scarica di nuovo',
        'removeFromHistory': 'Rimuovi dalla cronologia',
        
        // Features section
        'featuresTitle': 'Perché scegliere SaveFBVideos?',
        'featureSpeed': 'Veloce e gratuito',
        'featureSpeedDesc': 'Scarica video da Facebook istantaneamente senza registrazione o costi',
        'featureSecurity': 'Sicuro',
        'featureSecurityDesc': 'I tuoi dati rimangono privati - non memorizziamo i tuoi video o informazioni',
        'featureMobile': 'Mobile friendly',
        'featureMobileDesc': 'Funziona perfettamente su tutti i dispositivi - desktop, tablet e mobile',
        'featureQuality': 'Alta qualità',
        'featureQualityDesc': 'Scarica video in qualità SD o HD senza perdere risoluzione',
        
        // How it works section
        'howWorksTitle': 'Come funziona',
        'step1Title': 'Copia URL',
        'step1Desc': 'Copia l\'URL del video di Facebook che vuoi scaricare',
        'step2Title': 'Incolla e recupera',
        'step2Desc': 'Incolla l\'URL nel campo di input e clicca su Scarica',
        'step3Title': 'Scarica',
        'step3Desc': 'Scegli la tua qualità preferita e scarica il video',
        
        // History section
        'historyTitle': 'Download recenti',
        'clearHistory': 'Cancella cronologia',
        'noHistory': 'La tua cronologia di download apparirà qui',
        'confirmClearHistory': 'Sei sicuro di voler cancellare tutta la cronologia dei download?',
        
        // Language modal
        'languageModalTitle': 'Seleziona lingua',
        
        // Footer
        'footerTagline': 'Il modo più semplice per scaricare video da Facebook',
        'linkGroupTools': 'Strumenti',
        'linkFbDownloader': 'Facebook Downloader',
        'linkInstaDownloader': 'Instagram Downloader',
        'linkTwitterDownloader': 'Twitter Downloader',
        'linkYoutubeDownloader': 'YouTube Downloader',
        'linkGroupCompany': 'Azienda',
        'linkAbout': 'Chi siamo',
        'linkPrivacy': 'Informativa sulla privacy',
        'linkTerms': 'Termini di servizio',
        'linkContact': 'Contattaci',
        'linkGroupConnect': 'Connetti',
        'linkBrowserExt': 'Estensione browser',
        'linkMobileApp': 'App mobile',
        'copyright': '© 2023 SaveFBVideos. Tutti i diritti riservati.',
        'disclaimer': 'SaveFBVideos non è affiliato a Facebook.',
        
        // Error messages
        'errorTitle': 'Qualcosa è andato storto',
        'errorEmptyUrl': 'Inserisci un URL di video Facebook',
        'errorInvalidUrl': 'URL del video di Facebook non valido. Controlla l\'URL e riprova.',
        'errorGeneric': 'Impossibile recuperare il video. Riprova più tardi.',
        'retryButton': 'Riprova'
    },
    
    // Arabic
    'ar': {
        // Hero section
        'heroTitle': 'تنزيل فيديوهات فيسبوك بسهولة',
        'heroSubtitle': 'احفظ أي فيديو فيسبوك بجودة HD أو SD بنقرات قليلة',
        'inputPlaceholder': 'الصق رابط فيديو فيسبوك هنا',
        'fetchButton': '<i class="fas fa-download"></i> تنزيل',
        'supportedTitle': 'تنسيقات الروابط المدعومة:',
        
        // Loading and results
        'loadingText': 'جارٍ جلب معلومات الفيديو...',
        'downloadOptions': 'خيارات التنزيل:',
        'downloadSD': 'تنزيل بجودة SD',
        'downloadHD': 'تنزيل بجودة HD',
        'downloadMP3': 'تنزيل MP3',
        'downloadAgain': 'تنزيل مرة أخرى',
        'removeFromHistory': 'إزالة من السجل',
        
        // Features section
        'featuresTitle': 'لماذا تختار SaveFBVideos؟',
        'featureSpeed': 'سريع ومجاني',
        'featureSpeedDesc': 'قم بتنزيل فيديوهات فيسبوك فوراً بدون تسجيل أو رسوم',
        'featureSecurity': 'آمن',
        'featureSecurityDesc': 'بياناتك تبقى خاصة - نحن لا نخزن فيديوهاتك أو معلوماتك',
        'featureMobile': 'متوافق مع الجوال',
        'featureMobileDesc': 'يعمل بشكل مثالي على جميع الأجهزة - سطح المكتب، الجهاز اللوحي والجوال',
        'featureQuality': 'جودة عالية',
        'featureQualityDesc': 'تنزيل الفيديوهات بجودة SD أو HD بدون فقدان الدقة',
        
        // How it works section
        'howWorksTitle': 'كيف يعمل',
        'step1Title': 'نسخ الرابط',
        'step1Desc': 'انسخ رابط فيديو فيسبوك الذي تريد تنزيله',
        'step2Title': 'لصق واسترجاع',
        'step2Desc': 'الصق الرابط في حقل الإدخال وانقر على تنزيل',
        'step3Title': 'تنزيل',
        'step3Desc': 'اختر الجودة المفضلة لديك وقم بتنزيل الفيديو',
        
        // History section
        'historyTitle': 'التنزيلات الأخيرة',
        'clearHistory': 'مسح السجل',
        'noHistory': 'سجل التنزيلات الخاص بك سيظهر هنا',
        'confirmClearHistory': 'هل أنت متأكد أنك تريد مسح كل سجل التنزيلات؟',
        
        // Language modal
        'languageModalTitle': 'اختر اللغة',
        
        // Footer
        'footerTagline': 'أسهل طريقة لتنزيل فيديوهات فيسبوك',
        'linkGroupTools': 'الأدوات',
        'linkFbDownloader': 'تنزيل فيسبوك',
        'linkInstaDownloader': 'تنزيل انستغرام',
        'linkTwitterDownloader': 'تنزيل تويتر',
        'linkYoutubeDownloader': 'تنزيل يوتيوب',
        'linkGroupCompany': 'الشركة',
        'linkAbout': 'من نحن',
        'linkPrivacy': 'سياسة الخصوصية',
        'linkTerms': 'شروط الخدمة',
        'linkContact': 'اتصل بنا',
        'linkGroupConnect': 'تواصل',
        'linkBrowserExt': 'إضافة المتصفح',
        'linkMobileApp': 'تطبيق الجوال',
        'copyright': '© 2023 SaveFBVideos. جميع الحقوق محفوظة.',
        'disclaimer': 'SaveFBVideos غير مرتبط بفيسبوك.',
        
        // Error messages
        'errorTitle': 'حدث خطأ ما',
        'errorEmptyUrl': 'الرجاء إدخال رابط فيديو فيسبوك',
        'errorInvalidUrl': 'رابط فيديو فيسبوك غير صالح. يرجى التحقق من الرابط والمحاولة مرة أخرى.',
        'errorGeneric': 'غير قادر على جلب الفيديو. يرجى المحاولة مرة أخرى لاحقاً.',
        'retryButton': 'المحاولة مرة أخرى'
    },
    
    // Hindi
    'hi': {
        // Hero section
        'heroTitle': 'Facebook वीडियो आसानी से डाउनलोड करें',
        'heroSubtitle': 'कुछ ही क्लिक में किसी भी Facebook वीडियो को HD या SD गुणवत्ता में सहेजें',
        'inputPlaceholder': 'Facebook वीडियो URL यहां पेस्ट करें',
        'fetchButton': '<i class="fas fa-download"></i> डाउनलोड',
        'supportedTitle': 'समर्थित URL प्रारूप:',
        
        // Loading and results
        'loadingText': 'वीडियो जानकारी प्राप्त कर रहा है...',
        'downloadOptions': 'डाउनलोड विकल्प:',
        'downloadSD': 'SD डाउनलोड करें',
        'downloadHD': 'HD डाउनलोड करें',
        'downloadMP3': 'MP3 डाउनलोड करें',
        'downloadAgain': 'फिर से डाउनलोड करें',
        'removeFromHistory': 'इतिहास से हटाएं',
        
        // Features section
        'featuresTitle': 'SaveFBVideos क्यों चुनें?',
        'featureSpeed': 'तेज़ और मुफ्त',
        'featureSpeedDesc': 'बिना पंजीकरण या शुल्क के तुरंत Facebook वीडियो डाउनलोड करें',
        'featureSecurity': 'सुरक्षित',
        'featureSecurityDesc': 'आपका डेटा निजी रहता है - हम आपके वीडियो या जानकारी को स्टोर नहीं करते',
        'featureMobile': 'मोबाइल फ्रेंडली',
        'featureMobileDesc': 'सभी उपकरणों पर पूरी तरह से काम करता है - डेस्कटॉप, टैबलेट और मोबाइल',
        'featureQuality': 'उच्च गुणवत्ता',
        'featureQualityDesc': 'रिज़ॉल्यूशन खोए बिना SD या HD गुणवत्ता में वीडियो डाउनलोड करें',
        
        // How it works section
        'howWorksTitle': 'यह कैसे काम करता है',
        'step1Title': 'URL कॉपी करें',
        'step1Desc': 'आप जिस Facebook वीडियो को डाउनलोड करना चाहते हैं, उसका URL कॉपी करें',
        'step2Title': 'पेस्ट करें और प्राप्त करें',
        'step2Desc': 'इनपुट फील्ड में URL पेस्ट करें और डाउनलोड पर क्लिक करें',
        'step3Title': 'डाउनलोड करें',
        'step3Desc': 'अपनी पसंदीदा गुणवत्ता चुनें और वीडियो डाउनलोड करें',
        
        // History section
        'historyTitle': 'हाल के डाउनलोड',
        'clearHistory': 'इतिहास साफ़ करें',
        'noHistory': 'आपका डाउनलोड इतिहास यहां दिखाई देगा',
        'confirmClearHistory': 'क्या आप वाकई सारा डाउनलोड इतिहास साफ़ करना चाहते हैं?',
        
        // Language modal
        'languageModalTitle': 'भाषा चुनें',
        
        // Footer
        'footerTagline': 'Facebook वीडियो डाउनलोड करने का सबसे आसान तरीका',
        'linkGroupTools': 'उपकरण',
        'linkFbDownloader': 'Facebook डाउनलोडर',
        'linkInstaDownloader': 'Instagram डाउनलोडर',
        'linkTwitterDownloader': 'Twitter डाउनलोडर',
        'linkYoutubeDownloader': 'YouTube डाउनलोडर',
        'linkGroupCompany': 'कंपनी',
        'linkAbout': 'हमारे बारे में',
        'linkPrivacy': 'गोपनीयता नीति',
        'linkTerms': 'सेवा की शर्तें',
        'linkContact': 'संपर्क करें',
        'linkGroupConnect': 'कनेक्ट',
        'linkBrowserExt': 'ब्राउज़र एक्सटेंशन',
        'linkMobileApp': 'मोबाइल ऐप',
        'copyright': '© 2023 SaveFBVideos. सर्वाधिकार सुरक्षित.',
        'disclaimer': 'SaveFBVideos Facebook से संबद्ध नहीं है.',
        
        // Error messages
        'errorTitle': 'कुछ गलत हो गया',
        'errorEmptyUrl': 'कृपया Facebook वीडियो URL दर्ज करें',
        'errorInvalidUrl': 'अमान्य Facebook वीडियो URL. कृपया URL की जांच करें और पुनः प्रयास करें.',
        'errorGeneric': 'वीडियो प्राप्त करने में असमर्थ. कृपया बाद में पुनः प्रयास करें.',
        'retryButton': 'पुनः प्रयास करें'
    }
};
