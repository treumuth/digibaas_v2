// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			// Define your translations here
			en: {
				translation: {
					greeting: 'Hello, World!',
					// add more translations as needed
				},
			},
			ee: {
				translation: {
					greeting: 'Tere, Maailm!',
					// add more translations as needed
				},
			},
			ru: {
				translation: {
					greeting: 'Привет, Мир!',
					// add more translations as needed
				},
			},
			// Add translations for other languages
		},
		lng: 'ee', // set the default language
		fallbackLng: 'ee', // use the default language if translation is missing
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
