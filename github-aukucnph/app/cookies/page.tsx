'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Cookie, Settings, Info, Shield } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-200 to-amber-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <motion.button
                className="flex items-center space-x-2 text-orange-800 hover:text-orange-900 transition-colors"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft size={20} />
                <span>Zurück zur Startseite</span>
              </motion.button>
            </Link>
            
            <div className="flex items-center space-x-2">
              <img 
                src="/image copy copy.png" 
                alt="Tier-Check Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-orange-800">Tier-Check</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
              Cookie-Richtlinie
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-orange-800 max-w-3xl mx-auto">
              Informationen über die Verwendung von Cookies auf unserer Website
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none"
        >
          {/* Warning Banner */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-2 text-red-800">
              <Shield size={20} />
              <span className="font-semibold">WICHTIGER HINWEIS</span>
            </div>
            <p className="text-red-700 mt-2 text-sm">
              Dies ist ein Platzhaltertext! Du musst diese Cookie-Richtlinie durch eine rechtlich korrekte, 
              auf dein Projekt zugeschnittene Version ersetzen. Konsultiere einen Rechtsanwalt für rechtssichere Texte.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Was sind Cookies?</h2>
          
          <div className="flex items-start space-x-3 mb-6">
            <Cookie className="text-orange-600 mt-1" size={20} />
            <p className="text-gray-700">
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, 
              wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen 
              über einen bestimmten Zeitraum zu speichern.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6">Wie verwenden wir Cookies?</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center space-x-2">
                <Settings size={18} />
                <span>Notwendige Cookies</span>
              </h3>
              <p className="text-blue-700 mb-3">
                Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.
              </p>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>Session-Management</li>
                <li>Sicherheitsfeatures</li>
                <li>Grundlegende Website-Funktionen</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center space-x-2">
                <Info size={18} />
                <span>Funktionale Cookies</span>
              </h3>
              <p className="text-green-700 mb-3">
                Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
              </p>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Spracheinstellungen</li>
                <li>Benutzereinstellungen</li>
                <li>Personalisierte Inhalte</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Analyse-Cookies</h3>
              <p className="text-purple-700 mb-3">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
              </p>
              <ul className="list-disc list-inside text-purple-700 space-y-1">
                <li>Besucherstatistiken</li>
                <li>Seitenaufrufe</li>
                <li>Verweildauer</li>
                <li>Beliebte Inhalte</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Marketing-Cookies</h3>
              <p className="text-orange-700 mb-3">
                Diese Cookies werden verwendet, um Werbung relevanter zu gestalten.
              </p>
              <ul className="list-disc list-inside text-orange-700 space-y-1">
                <li>Personalisierte Werbung</li>
                <li>Affiliate-Tracking</li>
                <li>Social Media Integration</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6 mt-8">Cookie-Übersicht</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Cookie-Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Zweck</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Laufzeit</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Typ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono">session_id</td>
                  <td className="border border-gray-300 px-4 py-2">Session-Management</td>
                  <td className="border border-gray-300 px-4 py-2">Session</td>
                  <td className="border border-gray-300 px-4 py-2">Notwendig</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono">preferences</td>
                  <td className="border border-gray-300 px-4 py-2">Benutzereinstellungen</td>
                  <td className="border border-gray-300 px-4 py-2">1 Jahr</td>
                  <td className="border border-gray-300 px-4 py-2">Funktional</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono">analytics</td>
                  <td className="border border-gray-300 px-4 py-2">Website-Analyse</td>
                  <td className="border border-gray-300 px-4 py-2">2 Jahre</td>
                  <td className="border border-gray-300 px-4 py-2">Analyse</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono">marketing</td>
                  <td className="border border-gray-300 px-4 py-2">Personalisierte Werbung</td>
                  <td className="border border-gray-300 px-4 py-2">30 Tage</td>
                  <td className="border border-gray-300 px-4 py-2">Marketing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6 mt-8">Cookie-Einstellungen verwalten</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Browser-Einstellungen</h3>
              <p className="text-gray-700 mb-3">
                Sie können Cookies in Ihren Browser-Einstellungen verwalten:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
                <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten</li>
                <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Hinweis:</h4>
              <p className="text-yellow-700 text-sm">
                Das Deaktivieren bestimmter Cookies kann die Funktionalität der Website beeinträchtigen. 
                Notwendige Cookies können nicht deaktiviert werden, da sie für den Betrieb der Website erforderlich sind.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-orange-900 mb-6 mt-8">Drittanbieter-Cookies</h2>
          
          <p className="text-gray-700 mb-4">
            Unsere Website kann auch Cookies von Drittanbietern verwenden:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Google Analytics:</strong> Zur Analyse des Website-Traffics</li>
            <li><strong>Social Media Plugins:</strong> Für die Integration sozialer Medien</li>
            <li><strong>Affiliate-Partner:</strong> Für die Verfolgung von Empfehlungen</li>
          </ul>

          <h2 className="text-2xl font-bold text-orange-900 mb-6 mt-8">Kontakt</h2>
          
          <p className="text-gray-700 mb-4">
            Bei Fragen zu unserer Cookie-Richtlinie können Sie uns kontaktieren:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>E-Mail: Tier-Check@outlook.de</p>
            <p>Weitere Informationen finden Sie in unserer 
              <Link href="/datenschutz" className="text-orange-600 hover:text-orange-700 font-medium"> Datenschutzerklärung</Link>.
            </p>
          </div>

          <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>Stand: Januar 2024</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}