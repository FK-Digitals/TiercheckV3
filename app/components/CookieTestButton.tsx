'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TestTube, RotateCcw, Eye, Trash2 } from 'lucide-react';

export default function CookieTestButton() {
  const [showTestPanel, setShowTestPanel] = useState(false);

  const resetCookieConsent = () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentTimestamp');
    window.location.reload();
  };

  const simulateExpiredConsent = () => {
    // Setze Zeitstempel auf vor 31 Tagen
    const thirtyOneDaysAgo = Date.now() - (31 * 24 * 60 * 60 * 1000);
    localStorage.setItem('cookieConsentTimestamp', thirtyOneDaysAgo.toString());
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }));
    window.location.reload();
  };

  const showCurrentSettings = () => {
    const consent = localStorage.getItem('cookieConsent');
    const timestamp = localStorage.getItem('cookieConsentTimestamp');
    
    if (consent && timestamp) {
      const parsedConsent = JSON.parse(consent);
      const date = new Date(parseInt(timestamp));
      alert(`Aktuelle Cookie-Einstellungen:\n\n${JSON.stringify(parsedConsent, null, 2)}\n\nZustimmung vom: ${date.toLocaleString('de-DE')}`);
    } else {
      alert('Keine Cookie-Zustimmung gespeichert');
    }
  };

  const clearAllData = () => {
    localStorage.clear();
    alert('Alle lokalen Daten gelöscht!');
    window.location.reload();
  };

  return (
    <>
      {/* Test Button - Fixed Position */}
      <motion.button
        onClick={() => setShowTestPanel(!showTestPanel)}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Cookie-Banner testen"
      >
        <TestTube size={20} />
      </motion.button>

      {/* Test Panel */}
      {showTestPanel && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-20 right-4 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
              <TestTube className="text-purple-600" size={20} />
              <span>Cookie-Tests</span>
            </h3>
            <button
              onClick={() => setShowTestPanel(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <motion.button
              onClick={resetCookieConsent}
              className="w-full flex items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RotateCcw size={16} />
              <span>Banner zurücksetzen</span>
            </motion.button>

            <motion.button
              onClick={simulateExpiredConsent}
              className="w-full flex items-center space-x-2 bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RotateCcw size={16} />
              <span>Abgelaufene Zustimmung</span>
            </motion.button>

            <motion.button
              onClick={showCurrentSettings}
              className="w-full flex items-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye size={16} />
              <span>Einstellungen anzeigen</span>
            </motion.button>

            <motion.button
              onClick={clearAllData}
              className="w-full flex items-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Trash2 size={16} />
              <span>Alle Daten löschen</span>
            </motion.button>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Test-Anleitung:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>Banner zurücksetzen:</strong> Zeigt Banner erneut</li>
              <li>• <strong>Abgelaufene Zustimmung:</strong> Simuliert 31 Tage alte Zustimmung</li>
              <li>• <strong>Einstellungen anzeigen:</strong> Zeigt gespeicherte Daten</li>
              <li>• <strong>Alle Daten löschen:</strong> Kompletter Reset</li>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}