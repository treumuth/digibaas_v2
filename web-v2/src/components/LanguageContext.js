import React, {
	createContext,
	useContext,
	useState,
	useEffect,
} from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Center, Box, Loader } from '@mantine/core';

const LanguageContext = createContext({
	language: 'ee', // Provide a default value for language
	changeLanguage: () => {}, // Provide a default empty function for changeLanguage
});

const loadTranslations = async (language) => {
	// Simulate loading translations
	return new Promise((resolve) => {
		setTimeout(() => {
			// Assume we're returning a translations object here
			resolve({
				key: 'value', // Replace with actual translation key-value pairs
			});
		}, 1000);
	});
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('ee');
	const [translationsLoaded, setTranslationsLoaded] = useState(false);

	const changeLanguage = (newLanguage) => {
		console.log(`Changing language to: ${newLanguage}`); // For debugging
		setLanguage(newLanguage);
		setTranslationsLoaded(false);
	};

	useEffect(() => {
		loadTranslations(language).then((translations) => {
			i18n
				.use(initReactI18next)
				.init({
					resources: {
						en: {
							translation: {
								navigation: {
									blog: 'Blog',
									createPackage: 'Create Package',
									about: 'About Us',
									contact: 'Contact',
								},
								data_date: 'Data as of May 31, 2023',
								try_now: 'Try now!',
								landing_title:
									'DATABASE OF TARGET GROUPS\n330 000\nEstonian business contacts',
								landing_content:
									'Digibaas.ee ensures high data accuracy for its users by providing fresh and precise information about target audiences. Regular platform updates ensure that businesses always have access to the most up-to-date data, crucial for successful marketing activities and decision-making.',
								ordering_title: 'Ordering',
								ordering_content:
									"Write to us about your requirements. It's possible that processing large datasets may be challenging for you. We'll find a suitable dataset for you and send you a quote, along with a prepayment invoice if you're interested. After the payment is received, we'll deliver the data. Typically, we provide data via email. For larger datasets, you can download the data through a web link. Please also write to us if you would like an invoice for payment via a payment link.",
								data_quality_content:
									"The company's email address was crucial information for us, so it is always filled in. Phone number, address, and business field may be occasionally empty if the company has not reported them to the Business Register. Most of the time, however, they are filled in. The same data is publicly available in all public registers. If you find that your personal email address is in the database, it means you have marked it as the address of your company (or sole proprietorship). Publishing data about companies (including sole proprietorships) is allowed.",
								data_quality_title: 'Data Quality',
								database_desc_title: 'Database Description',
								database_desc_list: [
									'registration number;',
									'legal entity name;',
									'email addresses (separated by commas);',
									'phone numbers (separated by commas);',
									'address;',
									'main business activity name in Estonian;',
									'national taxes;',
									'labor taxes;',
									'turnover;',
									"board member's name and personal code;",
									'number of employees;',
									'related court decisions;',
								],

								// add more translations as needed
							},
						},
						ee: {
							translation: {
								navigation: {
									blog: 'Blogi',
									createPackage: 'Koosta pakk',
									about: 'Meist',
									contact: 'Kontakt',
								},
								data_date: 'Andmed on seisuga 31. mai 2023',
								try_now: 'Proovi nüüd!',
								landing_title:
									'SIHTGRUPPIDE ANDMEBAAS\n330 000\nEesti asutuse kontaktid',
								landing_content:
									'Digibaas.ee tagab oma kasutajatele andmete kõrge ajakohasuse, pakkudes värskeid ja täpseid sihtgruppide andmeid. Platvormi regulaarsed uuendused tagavad, et ettevõtted saavad alati ligipääsu kõige aktuaalsematele andmetele, mis on oluline eduka turundustegevuse ja äriotsuste tegemise jaoks.',
								ordering_title: 'Tellimine',
								ordering_content:
									'Kirjutage meile oma soovidest. Võimalik, et suurt andmestikku on teil raske töödelda. Leiame teile sobiva andmestiku ning saadame teile pakkumise ja huvi korral ettemaksuarve. Vahetult pärast laekumist anname üle andmed. Tavaliselt anname andmed üle e-postiga. Suuremate andmemahtude korral saate andmed alla laadida veebilingi kaudu. Kirjutage ka siis, kui makselingiga tasumise korral soovite arvet.',
								data_quality_content:
									'Ettevõtte e-posti aadress oli meie jaoks peamise tähtsusega info ning seetõttu on e-post alati täidetud. Telefon, aadress, tegevusvaldkond võivad olla kohati tühjad, kui ettevõte neid pole Äriregistrile teatanud. Enamasti on need siiski täidetud. Samad andmed on avalikult saadaval kõikjal avalikes registrites. Kui leiate, et andmebaasis on teie isiklik e-posti aadress, siis järelikult olete selle märkinud oma ettevõtte (või FIE) aadressiks. Ettevõtete (sh FIE) andmete avaldamine on lubatud.',
								data_quality_title: 'Andmete Kvaliteet',
								database_desc_title: 'Andmebaasi Kirjeldus',
								database_desc_list: [
									'registrikood;',
									'juriidilise isiku nimi;',
									'e-posti aadressid (eraldatud komaga);',
									'telefoninumbrid (eraldatud komaga);',
									'aadress;',
									'peamise tegevusvaldkonna nimetus eesti keeles;',
									'riiklikud maksud;',
									'tööjõumaksud;',
									'käive;',
									'juhatuse liikme nimi ja isikukood;',
									'töötajate arv;',
									'seotud kohtulahendid;',
								],

								// add more translations as needed
							},
						},
						ru: {
							translation: {
								navigation: {
									blog: 'Блог',
									createPackage: 'Создать пакет',
									about: 'О нас',
									contact: 'Контакт',
								},
								data_date: 'Данные по состоянию на 31 мая 2023 года',
								try_now: 'Попробуй!',
								landing_title:
									'БАЗА ДАННЫХ ЦЕЛЕВЫХ ГРУПП\n330 000\nКонтакты эстонских агентств',
								landing_content:
									'Digibaas.ee обеспечивает высокую актуальность данных для своих пользователей, предоставляя свежие и точные данные о целевой аудитории. Регулярные обновления платформы гарантируют, что предприятия всегда могут получить доступ к самой актуальной информации, что важно для успешной маркетинговой деятельности и принятия бизнес-решений.',
								ordering_title: 'Заказ',
								ordering_content:
									'Напишите нам о ваших пожеланиях. Возможно, вам трудно обработать большие наборы данных. Мы найдем для вас подходящий набор данных и вышлем вам предложение, а при интересе - счет на предоплату. Сразу после поступления оплаты мы передадим вам данные. Обычно мы передаем данные по электронной почте. При больших объемах данных вы можете скачать данные по веб-ссылке. Напишите нам также, если вы хотите получить счет при оплате по ссылке.',
								data_quality_content:
									'Электронная почта компании была для нас ключевой информацией, поэтому она всегда заполнена. Телефон, адрес, область деятельности могут быть иногда пустыми, если компания не уведомила об этом в Торговый реестр. В большинстве случаев они, тем не менее, заполнены. Те же данные общедоступны во всех общедоступных реестрах. Если вы обнаружите, что ваш личный адрес электронной почты есть в базе данных, значит, вы указали его как адрес своей компании (или ИП). Публикация данных о компаниях (включая ИП) разрешена.',
								data_quality_title: 'Качество данных',
								database_desc_title: 'Andmebaasi Kirjeldus',
								database_desc_list: [
									'регистрационный номер;',
									'наименование юридического лица;',
									'электронные адреса (разделенные запятыми);',
									'телефонные номера (разделенные запятыми);',
									'адрес;',
									'наименование основной отрасли деятельности на эстонском;',
									'национальные налоги;',
									'трудовые налоги;',
									'оборот;',
									'имя и личный код члена совета директоров;',
									'количество сотрудников;',
									'связанные судебные решения;',
								],

								// add more translations as needed
							},
						},
						// Add translations for other languages
					},
					lng: language,
					fallbackLng: 'ee',
					interpolation: { escapeValue: false },
				})
				.then(() => setTranslationsLoaded(true)); // Set loading state to true after loading translations
		});
	}, [language]);

	if (!translationsLoaded) {
		return (
			<Center style={{ height: '100vh' }}>
				<Loader />
			</Center>
		);
	}

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
