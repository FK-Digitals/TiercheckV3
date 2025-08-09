'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Immer aktiviert
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Prüfe, ob bereits eine Cookie-Zustimmung vorhanden ist
    const storedConsent = localStorage.getItem('cookieConsent');
    const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');
    
    if (storedConsent && consentTimestamp) {
      try {
        const parsedConsent: CookiePreferences = JSON.parse(storedConsent);
        const timestamp = parseInt(consentTimestamp);
        const now = Date.now();
        const thirtyDays = 30 * 24 * 60 * 60 * 1000; // 30 Tage in Millisekunden
        
        // Prüfe, ob die Zustimmung noch gültig ist (30 Tage)
        if (now - timestamp < thirtyDays) {
          setPreferences(parsedConsent);
          setShowBanner(false);
        } else {
          // Zustimmung ist abgelaufen, zeige Banner erneut
          localStorage.removeItem('cookieConsent');
          localStorage.removeItem('cookieConsentTimestamp');
          setShowBanner(true);
        }
      } catch (error) {
        console.error('Fehler beim Parsen der Cookie-Zustimmung:', error);
        setShowBanner(true);
      }
    } else {
      // Keine Zustimmung vorhanden, zeige Banner
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newPreferences: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
    setPreferences(newPreferences);
    setShowBanner(false);
    
    // Dispatch custom event für andere Komponenten
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
      detail: newPreferences 
    }));
  };

  const handleAcceptAll = () => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(newPreferences);
  };

  const handleRejectAll = () => {
    const newPreferences: CookiePreferences = {
      necessary: true, // Notwendige Cookies können nicht abgelehnt werden
      functional: false,
      analytics: false,
      marketing: false,
    };
    saveConsent(newPreferences);
  };

  const handleDismiss = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-2xl border-t border-orange-200"
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Content */}
              <div className="flex items-start space-x-3 flex-1">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Cookie className="text-orange-600 mt-1" size={24} />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-orange-900 mb-1">
                    🍪 Wir verwenden Cookies
                  </h3>
                  <p className="text-orange-800 text-sm leading-relaxed mb-2">
                    Um dir die bestmögliche Erfahrung auf unserer Website zu bieten, verwenden wir Cookies. 
                    Diese helfen uns dabei, die Website zu verbessern und dir relevante Inhalte zu zeigen.
                  </p>
                  <p className="text-orange-700 text-xs">
                    Weitere Details findest du in unserer{' '}
                    <Link 
                      href="/cookies" 
                      className="text-orange-600 hover:text-orange-700 font-medium underline hover:no-underline transition-all"
                    >
                      Cookie-Richtlinie
                    </Link>
                    {' '}und{' '}
                    <Link 
                      href="/datenschutz" 
                      className="text-orange-600 hover:text-orange-700 font-medium underline hover:no-underline transition-all"
                    >
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
                <motion.button
                  onClick={handleAcceptAll}
                  className="px-4 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ✅ Alle akzeptieren
                </motion.button>
                
                <motion.button
                  onClick={handleRejectAll}
                  className="px-4 py-2.5 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ❌ Nur notwendige
                </motion.button>
                
                <Link href="/cookies">
                  <motion.button
                    className="w-full px-4 py-2.5 border border-orange-300 text-orange-800 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Settings size={16} />
                    <span>Einstellungen</span>
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={18} />
            </motion.button>
          </div>

          {/* Progress Bar Animation */}
          <motion.div
            className="h-1 bg-gradient-to-r from-orange-600 to-red-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}