@@ .. @@
 import './globals.css';
 import type { Metadata } from 'next';
 import { Inter } from 'next/font/google';
+import CookieConsent from './components/CookieConsent';
 
 const inter = Inter({ subsets: ['latin'] });
@@ .. @@
   return (
     <html lang="en">
       <body className={`${inter.className} overflow-x-hidden max-w-full`}>
         {children}
+        <CookieConsent />
       </body>
     </html>
   );
 }