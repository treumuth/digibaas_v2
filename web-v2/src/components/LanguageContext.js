import React, {
	createContext,
	useContext,
	useState,
	useEffect,
} from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('ee');

	const changeLanguage = (newLanguage) => {
		i18n.changeLanguage(newLanguage);
		setLanguage(newLanguage);
	};

	useEffect(() => {
		i18n.use(initReactI18next).init({
			resources: {
				// Define your translations here
				en: {
					translation: {
						greeting: 'Hello, World!',
						try_now: 'Try now!',
						landing_title:
							'DATABASE OF TARGET GROUPS\n330 000\nEstonian business contacts',
						landing_content:
							'Digibaas.ee ensures high data accuracy for its users by providing fresh and precise information about target audiences. Regular platform updates ensure that businesses always have access to the most up-to-date data, crucial for successful marketing activities and decision-making.',
						ordering_content:
							"Write to us about your requirements. It's possible that processing large datasets may be challenging for you. We'll find a suitable dataset for you and send you a quote, along with a prepayment invoice if you're interested. After the payment is received, we'll deliver the data. Typically, we provide data via email. For larger datasets, you can download the data through a web link. Please also write to us if you would like an invoice for payment via a payment link.",
						data_quality_content:
							"The company's email address was crucial information for us, so it is always filled in. Phone number, address, and business field may be occasionally empty if the company has not reported them to the Business Register. Most of the time, however, they are filled in. The same data is publicly available in all public registers. If you find that your personal email address is in the database, it means you have marked it as the address of your company (or sole proprietorship). Publishing data about companies (including sole proprietorships) is allowed.",
						// add more translations as needed
					},
				},
				ee: {
					translation: {
						greeting: 'Tere, Maailm!',
						try_now: 'Proovi nüüd!',
						landing_title:
							'SIHTGRUPPIDE ANDMEBAAS\n330 000\nEesti asutuse kontaktid',
						landing_content:
							'Digibaas.ee tagab oma kasutajatele andmete kõrge ajakohasuse, pakkudes värskeid ja täpseid sihtgruppide andmeid. Platvormi regulaarsed uuendused tagavad, et ettevõtted saavad alati ligipääsu kõige aktuaalsematele andmetele, mis on oluline eduka turundustegevuse ja äriotsuste tegemise jaoks.',
						ordering_content:
							'Kirjutage meile oma soovidest. Võimalik, et suurt andmestikku on teil raske töödelda. Leiame teile sobiva andmestiku ning saadame teile pakkumise ja huvi korral ettemaksuarve. Vahetult pärast laekumist anname üle andmed. Tavaliselt anname andmed üle e-postiga. Suuremate andmemahtude korral saate andmed alla laadida veebilingi kaudu. Kirjutage ka siis, kui makselingiga tasumise korral soovite arvet.',
						data_quality_content:
							'Ettevõtte e-posti aadress oli meie jaoks peamise tähtsusega info ning seetõttu on e-post alati täidetud. Telefon, aadress, tegevusvaldkond võivad olla kohati tühjad, kui ettevõte neid pole Äriregistrile teatanud. Enamasti on need siiski täidetud. Samad andmed on avalikult saadaval kõikjal avalikes registrites. Kui leiate, et andmebaasis on teie isiklik e-posti aadress, siis järelikult olete selle märkinud oma ettevõtte (või FIE) aadressiks. Ettevõtete (sh FIE) andmete avaldamine on lubatud.',
						// add more translations as needed
					},
				},
				ru: {
					translation: {
						greeting: 'Привет, Мир!',
						try_now: 'Попробуй!',
						landing_title:
							'БАЗА ДАННЫХ ЦЕЛЕВЫХ ГРУПП\n330 000\nКонтакты эстонских агентств',
						landing_content:
							'Digibaas.ee обеспечивает высокую актуальность данных для своих пользователей, предоставляя свежие и точные данные о целевой аудитории. Регулярные обновления платформы гарантируют, что предприятия всегда могут получить доступ к самой актуальной информации, что важно для успешной маркетинговой деятельности и принятия бизнес-решений.',
						ordering_content:
							'Напишите нам о ваших пожеланиях. Возможно, вам трудно обработать большие наборы данных. Мы найдем для вас подходящий набор данных и вышлем вам предложение, а при интересе - счет на предоплату. Сразу после поступления оплаты мы передадим вам данные. Обычно мы передаем данные по электронной почте. При больших объемах данных вы можете скачать данные по веб-ссылке. Напишите нам также, если вы хотите получить счет при оплате по ссылке.',
						data_quality_content:
							'Электронная почта компании была для нас ключевой информацией, поэтому она всегда заполнена. Телефон, адрес, область деятельности могут быть иногда пустыми, если компания не уведомила об этом в Торговый реестр. В большинстве случаев они, тем не менее, заполнены. Те же данные общедоступны во всех общедоступных реестрах. Если вы обнаружите, что ваш личный адрес электронной почты есть в базе данных, значит, вы указали его как адрес своей компании (или ИП). Публикация данных о компаниях (включая ИП) разрешена.',
						// add more translations as needed
					},
				},
				// Add translations for other languages
			},
			lng: language, // set the default language
			fallbackLng: 'ee', // use the default language if translation is missing
			interpolation: {
				escapeValue: false, // react already safes from xss
			},
		});
	}, [language]);

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	return useContext(LanguageContext);
};
