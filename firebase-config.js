/* Firebase web-app config (public values; access is protected by firestore.rules). */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDAS7hKgYGXDyI_3TK9y06YmpNPAmz4mWI",
  authDomain: "cloudkitchen-5b259.firebaseapp.com",
  projectId: "cloudkitchen-5b259",
  appId: "1:804038802709:web:c7d6b6b0b8ccec1bdb3d1c"
};

/* App Check (recommended, free): blocks scripted/bot traffic from creating fake accounts or
   orders. Leave as-is to skip - the site works normally either way. To turn it on:
   1. Firebase console > Build > App Check > register a reCAPTCHA v3 site key for this domain.
   2. Paste the site key below, replacing YOUR_RECAPTCHA_SITE_KEY.
   3. Deploy, then in App Check > APIs, set Cloud Firestore to "Enforce". See SETUP.txt. */
window.RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY";
