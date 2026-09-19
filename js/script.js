(function(){
  const dropdown = document.getElementById('languageDropdown');
  const trigger = document.getElementById('languageTrigger');
  const menu = document.getElementById('languageMenu');
  const current = document.getElementById('languageCurrent');
  const flag = document.getElementById('languageFlag');
  const options = Array.from(document.querySelectorAll('.language-option'));

  const dictionaries = {"en":{"language":"Language","eyebrow":"Your cinematic destination","visit":"Visit Site","how":"How It Works","explore":"Explore categories","pick":"Pick a genre and start exploring","trending":"Trending","trending_p":"Popular titles and fresh discoveries.","comedy":"Comedy","comedy_p":"Light, fun and entertaining picks.","horror":"Horror","horror_p":"Dark stories for a late-night watch.","romance":"Romance","romance_p":"Stories built around love and emotion.","goal":"Our goal","simple":"Simple","simple_p":"Clean discovery","fast":"Fast","fast_p":"Built for browsing","responsive":"Responsive","responsive_p":"Any device","intro":"FilmyFly gives movie fans a cleaner way to explore titles, genres and movie-related information from around the web — with a fast, modern interface built for every screen.","experience":"The FilmyFly experience","simpler":"A simpler way to discover movies online.","about_intro":"FilmyFly is a modern movie discovery website designed to help visitors find movie-related information and publicly available resources across the web. The interface keeps the important things easy to find, so browsing feels quick instead of complicated.","external_disclaimer":"FilmyFly does not directly host movie files on its own servers. Instead, it can organize and surface information or links that are publicly available online. Third-party pages are operated independently and may change at any time.","getting_started":"How to get started","getting_started_p":"Start from the homepage and explore the available categories. If a search feature is enabled on your version of the site, enter a movie title or related keyword to find a relevant result faster. Select a title to view the information available for that movie.","understanding":"Understanding external resources","understanding_p":"Links to third-party websites are outside the control of FilmyFly. A link shown on this website does not by itself mean that FilmyFly owns, operates or endorses the destination. Always review the destination website's own terms, privacy policy and applicable copyright rules before using it.","designed":"Designed for every screen","designed_p":"The responsive layout is optimized for smartphones, tablets, laptops and desktop computers. Navigation, typography, cards and spacing automatically adapt to smaller screens for a smoother browsing experience.","goal_heading":"Our goal","goal_p":"Our goal is straightforward: make movie discovery feel clean, fast and enjoyable. We focus on clear organization, useful information and a polished interface that helps visitors spend less time searching and more time discovering something worth watching.","public_resources":"Public resources","public_resources_p":"Organized links and information from publicly accessible online sources.","mobile_ready":"Mobile ready","mobile_ready_p":"A responsive experience for phones, tablets and desktop screens.","fast_interface":"Fast interface","fast_interface_p":"Lightweight layout with modern visual effects and simple navigation.","footer_tagline":"Discover more. Browse smarter.","privacy":"Privacy","privacy_policy":"Privacy Policy","privacy_intro":"We respect your privacy. FilmyFly may use cookies and similar technologies to improve website functionality, understand how visitors use the site, and provide a better browsing experience.","cookies":"Cookies","cookies_p":"Cookies can remember preferences and help us understand general site usage. You can manage or disable cookies through your browser settings.","information":"Information","information_p":"We do not ask you to provide unnecessary personal information simply to browse this website. Third-party services or linked websites may have their own privacy policies.","updates":"Updates","updates_p":"This Privacy Policy may be updated when the website's features or practices change.","got_it":"Got it","cookie_text":"We use cookies to improve your experience and analyze site traffic.","accept":"Accept","close":"Close","browse_mood":"Browse your mood","advertisement":"Advertisement","opening_site":"Opening site","redirecting":"Redirecting in 10 seconds"},"bn":{"language":"ভাষা","eyebrow":"আপনার সিনেম্যাটিক গন্তব্য","visit":"সাইট ভিজিট করুন","how":"কীভাবে কাজ করে","explore":"ক্যাটাগরি দেখুন","pick":"একটি জেনার বেছে নিয়ে শুরু করুন","trending":"ট্রেন্ডিং","trending_p":"জনপ্রিয় সিনেমা ও নতুন আবিষ্কার।","comedy":"কমেডি","comedy_p":"হালকা, মজার ও বিনোদনমূলক পছন্দ।","horror":"হরর","horror_p":"রাতের জন্য ভয়ংকর গল্প।","romance":"রোমান্স","romance_p":"ভালোবাসা ও আবেগকে ঘিরে গল্প।","goal":"আমাদের লক্ষ্য","simple":"সহজ","simple_p":"সহজে খুঁজে দেখুন","fast":"দ্রুত","fast_p":"ব্রাউজিংয়ের জন্য তৈরি","responsive":"রেসপন্সিভ","responsive_p":"যেকোনো ডিভাইসে","intro":"FilmyFly সিনেমাপ্রেমীদের জন্য সিনেমার টাইটেল, জেনার এবং ওয়েবের বিভিন্ন মুভি-সম্পর্কিত তথ্য আরও সহজভাবে দেখার সুযোগ দেয়—প্রতিটি স্ক্রিনের জন্য তৈরি দ্রুত ও আধুনিক ইন্টারফেসের মাধ্যমে।","experience":"FilmyFly-এর অভিজ্ঞতা","simpler":"অনলাইনে সিনেমা আবিষ্কারের আরও সহজ উপায়।","about_intro":"FilmyFly একটি আধুনিক মুভি ডিসকভারি ওয়েবসাইট, যা দর্শকদের ওয়েবে সিনেমা-সম্পর্কিত তথ্য এবং সর্বসাধারণের জন্য উন্মুক্ত রিসোর্স খুঁজে পেতে সাহায্য করে। ইন্টারফেসটি গুরুত্বপূর্ণ বিষয়গুলো সহজে খুঁজে পাওয়ার মতো করে তৈরি, তাই ব্রাউজিং দ্রুত ও ঝামেলামুক্ত লাগে।","external_disclaimer":"FilmyFly নিজস্ব সার্ভারে সরাসরি কোনো মুভি ফাইল হোস্ট করে না। পরিবর্তে, অনলাইনে প্রকাশ্য তথ্য বা লিংকগুলো সংগঠিত ও উপস্থাপন করা হতে পারে। তৃতীয় পক্ষের পেজগুলো স্বাধীনভাবে পরিচালিত হয় এবং যেকোনো সময় পরিবর্তিত হতে পারে।","getting_started":"কীভাবে শুরু করবেন","getting_started_p":"হোমপেজ থেকে শুরু করে উপলভ্য ক্যাটাগরিগুলো দেখুন। আপনার সাইটের সংস্করণে সার্চ সুবিধা চালু থাকলে দ্রুত ফল পেতে মুভির নাম বা সম্পর্কিত কীওয়ার্ড লিখুন। কোনো টাইটেল নির্বাচন করলে সেই মুভি সম্পর্কে উপলভ্য তথ্য দেখতে পারবেন।","understanding":"বাহ্যিক রিসোর্স বোঝা","understanding_p":"তৃতীয় পক্ষের ওয়েবসাইটের লিংক FilmyFly-এর নিয়ন্ত্রণের বাইরে। এই সাইটে কোনো লিংক দেখানো মানেই FilmyFly সেই সাইটের মালিক, পরিচালনাকারী বা সমর্থক—এমন নয়। ব্যবহার করার আগে গন্তব্য সাইটের শর্তাবলি, প্রাইভেসি পলিসি এবং প্রযোজ্য কপিরাইট নিয়ম দেখে নিন।","designed":"সব স্ক্রিনের জন্য তৈরি","designed_p":"রেসপন্সিভ লেআউটটি স্মার্টফোন, ট্যাবলেট, ল্যাপটপ ও ডেস্কটপের জন্য অপ্টিমাইজ করা। ছোট স্ক্রিনে আরও স্বচ্ছন্দ ব্রাউজিংয়ের জন্য নেভিগেশন, টাইপোগ্রাফি, কার্ড ও স্পেসিং স্বয়ংক্রিয়ভাবে মানিয়ে যায়।","goal_heading":"আমাদের লক্ষ্য","goal_p":"আমাদের লক্ষ্য সহজ: মুভি আবিষ্কারকে পরিষ্কার, দ্রুত ও আনন্দদায়ক করা। আমরা পরিষ্কার সংগঠন, দরকারি তথ্য এবং পরিপাটি ইন্টারফেসে গুরুত্ব দিই, যাতে দর্শক কম সময় খুঁজে এবং বেশি সময় পছন্দের কিছু আবিষ্কার করতে পারেন।","public_resources":"পাবলিক রিসোর্স","public_resources_p":"সর্বসাধারণের জন্য উন্মুক্ত অনলাইন উৎসের সংগঠিত লিংক ও তথ্য।","mobile_ready":"মোবাইল প্রস্তুত","mobile_ready_p":"ফোন, ট্যাবলেট ও ডেস্কটপের জন্য রেসপন্সিভ অভিজ্ঞতা।","fast_interface":"দ্রুত ইন্টারফেস","fast_interface_p":"আধুনিক ভিজ্যুয়াল ইফেক্ট ও সহজ নেভিগেশনসহ হালকা লেআউট।","footer_tagline":"আরও আবিষ্কার করুন। আরও স্মার্টভাবে ব্রাউজ করুন।","privacy":"গোপনীয়তা","privacy_policy":"প্রাইভেসি পলিসি","privacy_intro":"আমরা আপনার গোপনীয়তাকে সম্মান করি। ওয়েবসাইটের কার্যকারিতা উন্নত, দর্শকদের ব্যবহার বোঝা এবং আরও ভালো ব্রাউজিং অভিজ্ঞতার জন্য FilmyFly কুকি ও অনুরূপ প্রযুক্তি ব্যবহার করতে পারে।","cookies":"কুকি","cookies_p":"কুকি আপনার পছন্দ মনে রাখতে এবং সাধারণ সাইট ব্যবহার বুঝতে সাহায্য করতে পারে। ব্রাউজার সেটিংস থেকে কুকি পরিচালনা বা বন্ধ করতে পারেন।","information":"তথ্য","information_p":"শুধু এই ওয়েবসাইট ব্রাউজ করার জন্য আমরা অপ্রয়োজনীয় ব্যক্তিগত তথ্য চাই না। তৃতীয় পক্ষের সার্ভিস বা লিংক করা সাইটের নিজস্ব প্রাইভেসি পলিসি থাকতে পারে।","updates":"আপডেট","updates_p":"ওয়েবসাইটের ফিচার বা কার্যপ্রণালী পরিবর্তিত হলে এই প্রাইভেসি পলিসি আপডেট হতে পারে।","got_it":"বুঝেছি","cookie_text":"আপনার অভিজ্ঞতা উন্নত করতে এবং সাইট ট্রাফিক বিশ্লেষণ করতে আমরা কুকি ব্যবহার করি।","accept":"গ্রহণ করুন","close":"বন্ধ করুন","browse_mood":"আপনার পছন্দ অনুযায়ী ব্রাউজ করুন","advertisement":"বিজ্ঞাপন","opening_site":"সাইট খোলা হচ্ছে","redirecting":"১০ সেকেন্ডের মধ্যে রিডাইরেক্ট হবে"},"hi":{"language":"भाषा","eyebrow":"आपका सिनेमैटिक डेस्टिनेशन","visit":"साइट देखें","how":"यह कैसे काम करता है","explore":"श्रेणियाँ देखें","pick":"एक शैली चुनें और शुरुआत करें","trending":"ट्रेंडिंग","trending_p":"लोकप्रिय टाइटल और नई खोजें।","comedy":"कॉमेडी","comedy_p":"हल्के, मज़ेदार और मनोरंजक विकल्प।","horror":"हॉरर","horror_p":"देर रात देखने के लिए डरावनी कहानियाँ।","romance":"रोमांस","romance_p":"प्यार और भावनाओं पर आधारित कहानियाँ।","goal":"हमारा लक्ष्य","simple":"सरल","simple_p":"आसान खोज","fast":"तेज़","fast_p":"ब्राउज़िंग के लिए बनाया गया","responsive":"रिस्पॉन्सिव","responsive_p":"हर डिवाइस पर","intro":"FilmyFly फिल्म प्रेमियों को वेब पर फिल्मों के टाइटल, शैलियों और फिल्म से जुड़ी जानकारी को आसानी से देखने का तरीका देता है—हर स्क्रीन के लिए बने तेज और आधुनिक इंटरफेस के साथ।","experience":"FilmyFly का अनुभव","simpler":"ऑनलाइन फिल्में खोजने का एक आसान तरीका।","about_intro":"FilmyFly एक आधुनिक मूवी डिस्कवरी वेबसाइट है, जो दर्शकों को वेब पर फिल्मों से जुड़ी जानकारी और सार्वजनिक रूप से उपलब्ध संसाधन खोजने में मदद करती है। इंटरफ़ेस को इस तरह बनाया गया है कि जरूरी चीज़ें आसानी से मिलें और ब्राउज़िंग तेज़ व सरल रहे।","external_disclaimer":"FilmyFly अपने सर्वर पर सीधे कोई मूवी फ़ाइल होस्ट नहीं करता। इसके बजाय, यह ऑनलाइन उपलब्ध सार्वजनिक जानकारी या लिंक को व्यवस्थित और प्रदर्शित कर सकता है। थर्ड-पार्टी पेज स्वतंत्र रूप से संचालित होते हैं और कभी भी बदल सकते हैं।","getting_started":"कैसे शुरू करें","getting_started_p":"होमपेज से शुरुआत करें और उपलब्ध श्रेणियां देखें। यदि आपके साइट संस्करण में सर्च सुविधा उपलब्ध है, तो जल्दी परिणाम पाने के लिए फिल्म का नाम या संबंधित कीवर्ड दर्ज करें। किसी टाइटल को चुनकर उस फिल्म की उपलब्ध जानकारी देखें।","understanding":"बाहरी संसाधनों को समझना","understanding_p":"थर्ड-पार्टी वेबसाइटों के लिंक FilmyFly के नियंत्रण से बाहर हैं। इस साइट पर कोई लिंक दिखने का अर्थ यह नहीं है कि FilmyFly उस वेबसाइट का मालिक, संचालक या समर्थक है। उपयोग से पहले गंतव्य वेबसाइट की शर्तें, गोपनीयता नीति और लागू कॉपीराइट नियम देखें।","designed":"हर स्क्रीन के लिए डिज़ाइन किया गया","designed_p":"रिस्पॉन्सिव लेआउट स्मार्टफोन, टैबलेट, लैपटॉप और डेस्कटॉप के लिए अनुकूलित है। बेहतर ब्राउज़िंग के लिए नेविगेशन, टाइपोग्राफी, कार्ड और स्पेसिंग छोटी स्क्रीन पर अपने आप अनुकूलित होते हैं।","goal_heading":"हमारा लक्ष्य","goal_p":"हमारा लक्ष्य सरल है: फिल्म खोज को साफ, तेज और आनंददायक बनाना। हम स्पष्ट संगठन, उपयोगी जानकारी और एक बेहतर इंटरफ़ेस पर ध्यान देते हैं ताकि दर्शक कम समय खोजने और अधिक समय कुछ देखने लायक खोजने में बिताएं।","public_resources":"सार्वजनिक संसाधन","public_resources_p":"सार्वजनिक रूप से उपलब्ध ऑनलाइन स्रोतों से व्यवस्थित लिंक और जानकारी।","mobile_ready":"मोबाइल के लिए तैयार","mobile_ready_p":"फोन, टैबलेट और डेस्कटॉप के लिए रिस्पॉन्सिव अनुभव।","fast_interface":"तेज़ इंटरफ़ेस","fast_interface_p":"आधुनिक विज़ुअल इफेक्ट और सरल नेविगेशन वाला हल्का लेआउट।","footer_tagline":"और खोजें। बेहतर ब्राउज़ करें।","privacy":"गोपनीयता","privacy_policy":"गोपनीयता नीति","privacy_intro":"हम आपकी गोपनीयता का सम्मान करते हैं। FilmyFly वेबसाइट की कार्यक्षमता सुधारने, उपयोग समझने और बेहतर ब्राउज़िंग अनुभव देने के लिए कुकीज़ और समान तकनीकों का उपयोग कर सकता है।","cookies":"कुकीज़","cookies_p":"कुकीज़ आपकी पसंद याद रखने और साइट के सामान्य उपयोग को समझने में मदद कर सकती हैं। आप ब्राउज़र सेटिंग्स से इन्हें प्रबंधित या बंद कर सकते हैं।","information":"जानकारी","information_p":"सिर्फ इस वेबसाइट को ब्राउज़ करने के लिए हम अनावश्यक व्यक्तिगत जानकारी नहीं मांगते। थर्ड-पार्टी सेवाओं या लिंक की गई वेबसाइटों की अपनी गोपनीयता नीतियां हो सकती हैं।","updates":"अपडेट","updates_p":"वेबसाइट की सुविधाएं या प्रक्रियाएं बदलने पर यह गोपनीयता नीति अपडेट की जा सकती है।","got_it":"समझ गया","cookie_text":"आपके अनुभव को बेहतर बनाने और साइट ट्रैफिक का विश्लेषण करने के लिए हम कुकीज़ का उपयोग करते हैं।","accept":"स्वीकार करें","close":"बंद करें","browse_mood":"अपनी पसंद के अनुसार ब्राउज़ करें","advertisement":"विज्ञापन","opening_site":"साइट खोली जा रही है","redirecting":"10 सेकंड में रीडायरेक्ट किया जाएगा"},"es":{"language":"Idioma","eyebrow":"Tu destino cinematográfico","visit":"Visitar sitio","how":"Cómo funciona","explore":"Explorar categorías","pick":"Elige un género y empieza","trending":"Tendencias","trending_p":"Títulos populares y nuevos descubrimientos.","comedy":"Comedia","comedy_p":"Opciones ligeras, divertidas y entretenidas.","horror":"Terror","horror_p":"Historias oscuras para ver de noche.","romance":"Romance","romance_p":"Historias sobre amor y emociones.","goal":"Nuestro objetivo","simple":"Simple","simple_p":"Descubrimiento fácil","fast":"Rápido","fast_p":"Creado para navegar","responsive":"Adaptable","responsive_p":"Cualquier dispositivo","intro":"FilmyFly ofrece a los amantes del cine una forma más sencilla de explorar títulos, géneros e información relacionada con películas en la web, con una interfaz rápida y moderna para cualquier pantalla.","experience":"La experiencia FilmyFly","simpler":"Una forma más sencilla de descubrir películas online.","about_intro":"FilmyFly es un sitio moderno para descubrir películas, diseñado para ayudar a los visitantes a encontrar información relacionada con películas y recursos disponibles públicamente en la web. La interfaz mantiene lo importante al alcance para que navegar sea rápido y sencillo.","external_disclaimer":"FilmyFly no aloja directamente archivos de películas en sus propios servidores. Puede organizar y mostrar información o enlaces disponibles públicamente en línea. Las páginas de terceros son independientes y pueden cambiar en cualquier momento.","getting_started":"Cómo empezar","getting_started_p":"Empieza en la página de inicio y explora las categorías disponibles. Si tu versión del sitio tiene búsqueda, introduce un título o palabra clave para encontrar resultados más rápido. Selecciona un título para ver la información disponible.","understanding":"Cómo entender los recursos externos","understanding_p":"Los enlaces a sitios de terceros están fuera del control de FilmyFly. Mostrar un enlace no significa que FilmyFly sea propietario, operador o patrocinador del destino. Revisa sus términos, política de privacidad y normas de copyright antes de usarlo.","designed":"Diseñado para todas las pantallas","designed_p":"El diseño adaptable está optimizado para móviles, tabletas, portátiles y ordenadores. La navegación, tipografía, tarjetas y espacios se adaptan automáticamente a pantallas pequeñas.","goal_heading":"Nuestro objetivo","goal_p":"Nuestro objetivo es sencillo: hacer que descubrir películas sea limpio, rápido y agradable. Nos centramos en una organización clara, información útil y una interfaz cuidada para que pases menos tiempo buscando y más tiempo descubriendo algo interesante.","public_resources":"Recursos públicos","public_resources_p":"Enlaces e información organizados de fuentes online disponibles públicamente.","mobile_ready":"Listo para móviles","mobile_ready_p":"Experiencia adaptable para teléfonos, tabletas y ordenadores.","fast_interface":"Interfaz rápida","fast_interface_p":"Diseño ligero con efectos modernos y navegación sencilla.","footer_tagline":"Descubre más. Navega mejor.","privacy":"Privacidad","privacy_policy":"Política de privacidad","privacy_intro":"Respetamos tu privacidad. FilmyFly puede usar cookies y tecnologías similares para mejorar la funcionalidad, entender el uso del sitio y ofrecer una mejor experiencia.","cookies":"Cookies","cookies_p":"Las cookies pueden recordar preferencias y ayudar a entender el uso general del sitio. Puedes gestionarlas o desactivarlas desde tu navegador.","information":"Información","information_p":"No te pedimos información personal innecesaria para navegar por este sitio. Los servicios o sitios de terceros pueden tener sus propias políticas de privacidad.","updates":"Actualizaciones","updates_p":"Esta política de privacidad puede actualizarse cuando cambien las funciones o prácticas del sitio.","got_it":"Entendido","cookie_text":"Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio.","accept":"Aceptar","close":"Cerrar","browse_mood":"Explora según tu estilo","advertisement":"Publicidad","opening_site":"Abriendo el sitio","redirecting":"Redirigiendo en 10 segundos"},"fr":{"language":"Langue","eyebrow":"Votre destination cinéma","visit":"Visiter le site","how":"Comment ça marche","explore":"Explorer les catégories","pick":"Choisissez un genre et commencez","trending":"Tendances","trending_p":"Titres populaires et nouvelles découvertes.","comedy":"Comédie","comedy_p":"Sélections légères, amusantes et divertissantes.","horror":"Horreur","horror_p":"Histoires sombres pour une soirée.","romance":"Romance","romance_p":"Histoires autour de l’amour et des émotions.","goal":"Notre objectif","simple":"Simple","simple_p":"Découverte facile","fast":"Rapide","fast_p":"Conçu pour naviguer","responsive":"Responsive","responsive_p":"Tout appareil","intro":"FilmyFly offre aux cinéphiles une façon plus simple d’explorer les titres, les genres et les informations liées aux films sur le web, avec une interface rapide et moderne conçue pour tous les écrans.","experience":"L’expérience FilmyFly","simpler":"Une façon plus simple de découvrir des films en ligne.","about_intro":"FilmyFly est un site moderne de découverte de films conçu pour aider les visiteurs à trouver des informations sur les films et des ressources accessibles au public sur le web. L’interface met l’essentiel en évidence pour rendre la navigation rapide et simple.","external_disclaimer":"FilmyFly n’héberge pas directement de fichiers de films sur ses propres serveurs. Il peut organiser et présenter des informations ou des liens accessibles publiquement en ligne. Les pages tierces sont indépendantes et peuvent changer à tout moment.","getting_started":"Comment commencer","getting_started_p":"Commencez par la page d’accueil et explorez les catégories disponibles. Si la recherche est activée, saisissez un titre de film ou un mot-clé pour trouver plus rapidement un résultat pertinent. Sélectionnez un titre pour voir les informations disponibles.","understanding":"Comprendre les ressources externes","understanding_p":"Les liens vers des sites tiers échappent au contrôle de FilmyFly. Afficher un lien ne signifie pas que FilmyFly possède, exploite ou recommande la destination. Consultez ses conditions, sa politique de confidentialité et les règles de copyright applicables.","designed":"Conçu pour tous les écrans","designed_p":"La mise en page responsive est optimisée pour les smartphones, tablettes, ordinateurs portables et de bureau. La navigation, la typographie, les cartes et les espacements s’adaptent automatiquement aux petits écrans.","goal_heading":"Notre objectif","goal_p":"Notre objectif est simple : rendre la découverte de films claire, rapide et agréable. Nous privilégions une organisation claire, des informations utiles et une interface soignée pour passer moins de temps à chercher et plus de temps à découvrir.","public_resources":"Ressources publiques","public_resources_p":"Liens et informations organisés provenant de sources accessibles au public.","mobile_ready":"Adapté au mobile","mobile_ready_p":"Une expérience responsive pour téléphones, tablettes et ordinateurs.","fast_interface":"Interface rapide","fast_interface_p":"Une mise en page légère avec des effets modernes et une navigation simple.","footer_tagline":"Découvrez plus. Naviguez plus intelligemment.","privacy":"Confidentialité","privacy_policy":"Politique de confidentialité","privacy_intro":"Nous respectons votre vie privée. FilmyFly peut utiliser des cookies et technologies similaires pour améliorer le site, comprendre son utilisation et offrir une meilleure expérience.","cookies":"Cookies","cookies_p":"Les cookies peuvent mémoriser vos préférences et aider à comprendre l’utilisation générale du site. Vous pouvez les gérer ou les désactiver dans votre navigateur.","information":"Informations","information_p":"Nous ne demandons pas d’informations personnelles inutiles pour simplement parcourir ce site. Les services ou sites tiers peuvent avoir leurs propres politiques de confidentialité.","updates":"Mises à jour","updates_p":"Cette politique peut être mise à jour lorsque les fonctionnalités ou pratiques du site changent.","got_it":"Compris","cookie_text":"Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.","accept":"Accepter","close":"Fermer","browse_mood":"Parcourez selon votre humeur","advertisement":"Publicité","opening_site":"Ouverture du site","redirecting":"Redirection dans 10 secondes"},"de":{"language":"Sprache","eyebrow":"Dein Kino-Ziel","visit":"Website besuchen","how":"So funktioniert es","explore":"Kategorien entdecken","pick":"Wähle ein Genre und starte","trending":"Trends","trending_p":"Beliebte Titel und neue Entdeckungen.","comedy":"Komödie","comedy_p":"Leichte, lustige und unterhaltsame Auswahl.","horror":"Horror","horror_p":"Dunkle Geschichten für die späte Nacht.","romance":"Romantik","romance_p":"Geschichten über Liebe und Gefühle.","goal":"Unser Ziel","simple":"Einfach","simple_p":"Einfache Entdeckung","fast":"Schnell","fast_p":"Zum Browsen entwickelt","responsive":"Responsiv","responsive_p":"Jedes Gerät","intro":"FilmyFly bietet Filmfans eine übersichtliche Möglichkeit, Filmtitel, Genres und filmbezogene Informationen aus dem Web zu entdecken – mit einer schnellen, modernen Oberfläche für jeden Bildschirm.","experience":"Das FilmyFly-Erlebnis","simpler":"Eine einfachere Möglichkeit, Filme online zu entdecken.","about_intro":"FilmyFly ist eine moderne Website zur Filmentdeckung, die Besuchern hilft, filmbezogene Informationen und öffentlich zugängliche Ressourcen im Web zu finden. Die Oberfläche hält Wichtiges leicht auffindbar, damit das Browsen schnell und unkompliziert bleibt.","external_disclaimer":"FilmyFly hostet keine Filmdateien direkt auf eigenen Servern. Stattdessen können öffentlich verfügbare Informationen oder Links organisiert und angezeigt werden. Seiten Dritter werden unabhängig betrieben und können sich jederzeit ändern.","getting_started":"So starten Sie","getting_started_p":"Beginnen Sie auf der Startseite und erkunden Sie die verfügbaren Kategorien. Wenn die Suche aktiviert ist, geben Sie einen Filmtitel oder ein passendes Stichwort ein. Wählen Sie einen Titel, um verfügbare Informationen zu sehen.","understanding":"Externe Ressourcen verstehen","understanding_p":"Links zu Websites Dritter liegen außerhalb der Kontrolle von FilmyFly. Ein angezeigter Link bedeutet nicht, dass FilmyFly die Zielseite besitzt, betreibt oder unterstützt. Prüfen Sie vor der Nutzung deren Bedingungen, Datenschutzrichtlinie und geltende Urheberrechtsregeln.","designed":"Für jeden Bildschirm entwickelt","designed_p":"Das responsive Layout ist für Smartphones, Tablets, Laptops und Desktop-Computer optimiert. Navigation, Typografie, Karten und Abstände passen sich automatisch an kleinere Bildschirme an.","goal_heading":"Unser Ziel","goal_p":"Unser Ziel ist einfach: Filmentdeckung sauber, schnell und angenehm zu machen. Wir setzen auf klare Organisation, nützliche Informationen und eine hochwertige Oberfläche, damit Besucher weniger suchen und mehr entdecken.","public_resources":"Öffentliche Ressourcen","public_resources_p":"Organisierte Links und Informationen aus öffentlich zugänglichen Online-Quellen.","mobile_ready":"Mobil optimiert","mobile_ready_p":"Responsive Nutzung auf Smartphones, Tablets und Desktop-Geräten.","fast_interface":"Schnelle Oberfläche","fast_interface_p":"Leichtes Layout mit modernen Effekten und einfacher Navigation.","footer_tagline":"Mehr entdecken. Smarter browsen.","privacy":"Datenschutz","privacy_policy":"Datenschutzerklärung","privacy_intro":"Wir respektieren Ihre Privatsphäre. FilmyFly kann Cookies und ähnliche Technologien verwenden, um Funktionen zu verbessern, die Nutzung zu verstehen und ein besseres Erlebnis zu bieten.","cookies":"Cookies","cookies_p":"Cookies können Einstellungen speichern und helfen, die allgemeine Nutzung der Website zu verstehen. Sie können Cookies in Ihren Browsereinstellungen verwalten oder deaktivieren.","information":"Informationen","information_p":"Wir verlangen keine unnötigen persönlichen Daten, nur um diese Website zu nutzen. Dienste oder verlinkte Websites Dritter können eigene Datenschutzrichtlinien haben.","updates":"Aktualisierungen","updates_p":"Diese Datenschutzerklärung kann aktualisiert werden, wenn sich Funktionen oder Praktiken der Website ändern.","got_it":"Verstanden","cookie_text":"Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und den Website-Traffic zu analysieren.","accept":"Akzeptieren","close":"Schließen","browse_mood":"Nach Stimmung stöbern","advertisement":"Werbung","opening_site":"Website wird geöffnet","redirecting":"Weiterleitung in 10 Sekunden"},"ar":{"language":"اللغة","eyebrow":"وجهتك السينمائية","visit":"زيارة الموقع","how":"كيف يعمل","explore":"استكشف الفئات","pick":"اختر نوعًا وابدأ الاستكشاف","trending":"الرائج","trending_p":"عناوين شائعة واكتشافات جديدة.","comedy":"كوميديا","comedy_p":"اختيارات خفيفة وممتعة وترفيهية.","horror":"رعب","horror_p":"قصص مظلمة لمشاهدة ليلية.","romance":"رومانسية","romance_p":"قصص عن الحب والمشاعر.","goal":"هدفنا","simple":"بسيط","simple_p":"اكتشاف سهل","fast":"سريع","fast_p":"مصمم للتصفح","responsive":"متجاوب","responsive_p":"أي جهاز","intro":"يمنح FilmyFly عشاق الأفلام طريقة أكثر سهولة لاستكشاف العناوين والأنواع والمعلومات المتعلقة بالأفلام عبر الويب، من خلال واجهة سريعة وحديثة مصممة لكل شاشة.","experience":"تجربة FilmyFly","simpler":"طريقة أبسط لاكتشاف الأفلام عبر الإنترنت.","about_intro":"FilmyFly هو موقع حديث لاكتشاف الأفلام، يساعد الزوار في العثور على معلومات متعلقة بالأفلام وموارد متاحة للعامة عبر الويب. يحافظ التصميم على سهولة الوصول إلى المهم، لتصبح التصفح أسرع وأبسط.","external_disclaimer":"لا يستضيف FilmyFly ملفات الأفلام مباشرة على خوادمه. بل يمكنه تنظيم وعرض معلومات أو روابط متاحة للعامة عبر الإنترنت. تعمل صفحات الجهات الخارجية بشكل مستقل وقد تتغير في أي وقت.","getting_started":"كيف تبدأ","getting_started_p":"ابدأ من الصفحة الرئيسية واستكشف الفئات المتاحة. إذا كانت ميزة البحث مفعلة، أدخل عنوان فيلم أو كلمة مفتاحية للعثور على نتيجة أسرع. اختر عنوانًا لعرض المعلومات المتاحة.","understanding":"فهم الموارد الخارجية","understanding_p":"الروابط إلى مواقع الجهات الخارجية خارج نطاق تحكم FilmyFly. ظهور رابط هنا لا يعني أن FilmyFly يملك الموقع أو يديره أو يؤيده. راجع شروط الموقع وسياسة الخصوصية وقواعد حقوق النشر قبل الاستخدام.","designed":"مصمم لكل شاشة","designed_p":"تم تحسين التصميم المتجاوب للهواتف والأجهزة اللوحية وأجهزة الكمبيوتر المحمولة والمكتبية. تتكيف عناصر التنقل والخطوط والبطاقات والمسافات تلقائيًا مع الشاشات الصغيرة.","goal_heading":"هدفنا","goal_p":"هدفنا بسيط: جعل اكتشاف الأفلام نظيفًا وسريعًا وممتعًا. نركز على التنظيم الواضح والمعلومات المفيدة وواجهة مصقولة لتقليل وقت البحث وزيادة وقت الاكتشاف.","public_resources":"موارد عامة","public_resources_p":"روابط ومعلومات منظمة من مصادر متاحة للعامة عبر الإنترنت.","mobile_ready":"جاهز للجوال","mobile_ready_p":"تجربة متجاوبة للهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.","fast_interface":"واجهة سريعة","fast_interface_p":"تصميم خفيف مع مؤثرات حديثة وتنقل بسيط.","footer_tagline":"اكتشف المزيد. تصفح بذكاء.","privacy":"الخصوصية","privacy_policy":"سياسة الخصوصية","privacy_intro":"نحترم خصوصيتك. قد يستخدم FilmyFly ملفات تعريف الارتباط وتقنيات مشابهة لتحسين وظائف الموقع وفهم استخدامه وتقديم تجربة تصفح أفضل.","cookies":"ملفات تعريف الارتباط","cookies_p":"يمكن لملفات تعريف الارتباط حفظ التفضيلات والمساعدة في فهم الاستخدام العام للموقع. يمكنك إدارتها أو تعطيلها من إعدادات المتصفح.","information":"المعلومات","information_p":"لا نطلب معلومات شخصية غير ضرورية لمجرد تصفح الموقع. قد تكون للخدمات أو المواقع التابعة لجهات خارجية سياسات خصوصية خاصة بها.","updates":"التحديثات","updates_p":"قد يتم تحديث سياسة الخصوصية عند تغير ميزات الموقع أو ممارساته.","got_it":"فهمت","cookie_text":"نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة المرور على الموقع.","accept":"قبول","close":"إغلاق","browse_mood":"تصفح حسب مزاجك","advertisement":"إعلان","opening_site":"جارٍ فتح الموقع","redirecting":"سيتم التحويل خلال 10 ثوانٍ"},"zh":{"language":"语言","eyebrow":"您的电影天地","visit":"访问网站","how":"如何运作","explore":"探索分类","pick":"选择类型并开始探索","trending":"热门","trending_p":"热门影片与新发现。","comedy":"喜剧","comedy_p":"轻松、有趣且娱乐性十足的选择。","horror":"恐怖","horror_p":"适合深夜观看的黑暗故事。","romance":"爱情","romance_p":"围绕爱情与情感展开的故事。","goal":"我们的目标","simple":"简单","simple_p":"轻松发现","fast":"快速","fast_p":"为浏览而设计","responsive":"响应式","responsive_p":"任何设备","intro":"FilmyFly 为电影爱好者提供更简洁的方式来探索网络上的电影名称、类型和相关信息，并配备适用于各种屏幕的快速现代界面。","experience":"FilmyFly 体验","simpler":"更简单地在线发现电影。","about_intro":"FilmyFly 是一个现代电影发现网站，帮助访客在网络上查找电影相关信息和公开可用资源。界面让重要内容更容易找到，让浏览变得快速而简单。","external_disclaimer":"FilmyFly 不会直接在自己的服务器上托管电影文件，而是可以整理和展示网上公开可用的信息或链接。第三方页面独立运营，可能随时发生变化。","getting_started":"如何开始","getting_started_p":"从首页开始，浏览可用分类。如果你使用的版本启用了搜索功能，可以输入电影名称或相关关键词，更快找到结果。选择一个标题即可查看可用信息。","understanding":"了解外部资源","understanding_p":"第三方网站链接不受 FilmyFly 控制。网站显示链接并不代表 FilmyFly 拥有、运营或认可目标网站。使用前请查看目标网站的条款、隐私政策和适用的版权规则。","designed":"为所有屏幕而设计","designed_p":"响应式布局针对手机、平板、笔记本电脑和台式机进行了优化。导航、字体、卡片和间距会自动适应小屏幕，让浏览更加顺畅。","goal_heading":"我们的目标","goal_p":"我们的目标很简单：让电影发现变得清晰、快速且愉快。我们注重清晰的组织、有用的信息和精致的界面，让访客少花时间搜索，多花时间发现值得观看的内容。","public_resources":"公共资源","public_resources_p":"来自公开可访问在线来源的整理链接和信息。","mobile_ready":"移动端就绪","mobile_ready_p":"适用于手机、平板和桌面的响应式体验。","fast_interface":"快速界面","fast_interface_p":"轻量布局、现代视觉效果和简单导航。","footer_tagline":"发现更多。更聪明地浏览。","privacy":"隐私","privacy_policy":"隐私政策","privacy_intro":"我们尊重您的隐私。FilmyFly 可能使用 Cookie 和类似技术来改善网站功能、了解访客使用方式并提供更好的浏览体验。","cookies":"Cookie","cookies_p":"Cookie 可以记住偏好并帮助我们了解网站的一般使用情况。您可以通过浏览器设置管理或禁用 Cookie。","information":"信息","information_p":"仅浏览本网站时，我们不会要求您提供不必要的个人信息。第三方服务或链接网站可能有自己的隐私政策。","updates":"更新","updates_p":"当网站功能或做法发生变化时，本隐私政策可能会更新。","got_it":"知道了","cookie_text":"我们使用 Cookie 来改善您的体验并分析网站流量。","accept":"接受","close":"关闭","browse_mood":"按你的心情浏览","advertisement":"广告","opening_site":"正在打开网站","redirecting":"将在 10 秒后跳转"},"ja":{"language":"言語","eyebrow":"あなたのシネマティックな場所","visit":"サイトを見る","how":"使い方","explore":"カテゴリーを探索","pick":"ジャンルを選んで探索を始める","trending":"トレンド","trending_p":"人気作品と新しい発見。","comedy":"コメディ","comedy_p":"軽快で楽しいエンターテインメント作品。","horror":"ホラー","horror_p":"深夜に楽しめるダークな物語。","romance":"ロマンス","romance_p":"愛と感情を描いた物語。","goal":"私たちの目標","simple":"シンプル","simple_p":"簡単に発見","fast":"高速","fast_p":"ブラウジング向け","responsive":"レスポンシブ","responsive_p":"あらゆるデバイス","intro":"FilmyFly は、映画ファンがウェブ上の作品タイトル、ジャンル、映画関連情報をより簡単に探せるようにします。あらゆる画面に対応した高速でモダンなインターフェースを備えています。","experience":"FilmyFly の体験","simpler":"オンラインで映画をもっと簡単に見つける方法。","about_intro":"FilmyFly は、ウェブ上の映画関連情報や一般公開されているリソースを見つけやすくする、現代的な映画発見サイトです。重要な情報を見つけやすく整理し、すばやくシンプルに閲覧できます。","external_disclaimer":"FilmyFly は映画ファイルを自社サーバーに直接ホストしていません。オンラインで公開されている情報やリンクを整理して表示する場合があります。第三者のページは独立して運営されており、いつでも変更される可能性があります。","getting_started":"はじめ方","getting_started_p":"ホームページから始め、利用可能なカテゴリーを探索してください。検索機能が有効な場合は、映画タイトルや関連キーワードを入力すると、より早く結果を見つけられます。タイトルを選択すると、その映画で利用できる情報を確認できます。","understanding":"外部リソースについて","understanding_p":"第三者サイトへのリンクは FilmyFly の管理外です。リンクが表示されているだけで、FilmyFly がそのサイトを所有、運営、推奨していることを意味しません。利用前に対象サイトの利用規約、プライバシーポリシー、適用される著作権ルールを確認してください。","designed":"すべての画面に対応","designed_p":"レスポンシブレイアウトはスマートフォン、タブレット、ノートパソコン、デスクトップ向けに最適化されています。ナビゲーション、文字、カード、余白は小さな画面に自動で適応します。","goal_heading":"私たちの目標","goal_p":"目標はシンプルです。映画の発見を見やすく、速く、楽しいものにすることです。分かりやすい整理、役立つ情報、洗練されたインターフェースにより、検索時間を減らして新しい作品を見つける時間を増やします。","public_resources":"公開リソース","public_resources_p":"一般公開されているオンラインソースから整理したリンクと情報。","mobile_ready":"モバイル対応","mobile_ready_p":"スマートフォン、タブレット、デスクトップに対応したレスポンシブ体験。","fast_interface":"高速インターフェース","fast_interface_p":"モダンな視覚効果とシンプルなナビゲーションを備えた軽量レイアウト。","footer_tagline":"もっと発見。もっとスマートに閲覧。","privacy":"プライバシー","privacy_policy":"プライバシーポリシー","privacy_intro":"プライバシーを尊重しています。FilmyFly はサイト機能の改善、利用状況の理解、より良い閲覧体験の提供のために Cookie などの技術を使用する場合があります。","cookies":"Cookie","cookies_p":"Cookie は設定を記憶し、サイトの一般的な利用状況を理解するのに役立ちます。ブラウザ設定から管理または無効化できます。","information":"情報","information_p":"このサイトを閲覧するだけで不要な個人情報を求めることはありません。第三者サービスやリンク先には独自のプライバシーポリシーがある場合があります。","updates":"更新","updates_p":"サイトの機能や運用が変わった場合、このプライバシーポリシーを更新することがあります。","got_it":"了解","cookie_text":"快適な利用とサイトトラフィックの分析のために Cookie を使用します。","accept":"同意する","close":"閉じる","browse_mood":"気分に合わせて探す","advertisement":"広告","opening_site":"サイトを開いています","redirecting":"10秒後に移動します"}};

  const meta = {
    en:{name:"English",flag:"🇺🇸"},
    bn:{name:"বাংলা",flag:"🇧🇩"},
    hi:{name:"हिन्दी",flag:"🇮🇳"},
    es:{name:"Español",flag:"🇪🇸"},
    fr:{name:"Français",flag:"🇫🇷"},
    de:{name:"Deutsch",flag:"🇩🇪"},
    ar:{name:"العربية",flag:"🇦🇪"},
    zh:{name:"中文",flag:"🇨🇳"},
    ja:{name:"日本語",flag:"🇯🇵"}
  };

  if (!dropdown || !trigger || !menu || !current || !flag) return;

  const safeStorage = {
    get(key, fallback = null){
      try { return localStorage.getItem(key) ?? fallback; } catch(e) { return fallback; }
    },
    set(key, value){
      try { localStorage.setItem(key, value); } catch(e) {}
    }
  };

  function closeDropdown(){
    dropdown.classList.remove('open');
    trigger.setAttribute('aria-expanded','false');
  }

  function openDropdown(){
    dropdown.classList.add('open');
    trigger.setAttribute('aria-expanded','true');
  }

  function applyLanguage(lang){
    const selected = dictionaries[lang] ? lang : 'en';
    const dict = dictionaries[selected];
    const info = meta[selected] || meta.en;

    document.documentElement.lang = selected;
    document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    current.textContent = info.name;
    flag.textContent = info.flag;

    options.forEach(function(option){
      const active = option.dataset.lang === selected;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-selected', active ? 'true' : 'false');
      option.tabIndex = active ? 0 : -1;
    });

    safeStorage.set('ff-language', selected);
  }

  options.forEach(function(option){
    option.addEventListener('click', function(){
      applyLanguage(this.dataset.lang);
      closeDropdown();
      trigger.focus();
    });
  });

  trigger.addEventListener('click', function(e){
    e.stopPropagation();
    if (dropdown.classList.contains('open')) {
      closeDropdown();
    } else {
      openDropdown();
      const active = options.find(option => option.getAttribute('aria-selected') === 'true');
      if (active) active.focus();
    }
  });

  document.addEventListener('click', function(e){
    if (!dropdown.contains(e.target)) closeDropdown();
  }, {passive:true});

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      closeDropdown();
      return;
    }

    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === trigger) {
      e.preventDefault();
      dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
      return;
    }

    if (!dropdown.classList.contains('open')) return;

    const index = options.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && index >= 0) {
      e.preventDefault();
      options[(index + 1) % options.length].focus();
    } else if (e.key === 'ArrowUp' && index >= 0) {
      e.preventDefault();
      options[(index - 1 + options.length) % options.length].focus();
    } else if (e.key === 'Home' && index >= 0) {
      e.preventDefault();
      options[0].focus();
    } else if (e.key === 'End' && index >= 0) {
      e.preventDefault();
      options[options.length - 1].focus();
    }
  });

  const saved = safeStorage.get('ff-language', 'en');
  applyLanguage(dictionaries[saved] ? saved : 'en');
})();

(function(){
  const cookie = document.getElementById('cookie');
  const accept = document.getElementById('accept');
  const closeCookie = document.getElementById('close');
  const privacyModal = document.getElementById('privacyModal');
  const privacyClose = document.getElementById('privacyClose');
  const privacyOk = document.getElementById('privacyOk');
  const privacyBackdrop = document.getElementById('privacyBackdrop');

  const safeGet = key => {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  };
  const safeSet = (key, value) => {
    try { localStorage.setItem(key, value); } catch(e) {}
  };

  if (!cookie || !accept || !closeCookie || !privacyModal) return;

  if (!safeGet('ff-cookie')) cookie.classList.add('show');

  function openPrivacy(){
    privacyModal.classList.add('show');
    privacyModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    if (privacyClose) privacyClose.focus();
  }

  function closePrivacy(){
    privacyModal.classList.remove('show');
    privacyModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.documentElement.style.overflow = '';
  }

  accept.addEventListener('click', function(){
    safeSet('ff-cookie','1');
    cookie.classList.remove('show');
    openPrivacy();
  });

  closeCookie.addEventListener('click', function(){
    cookie.classList.remove('show');
  });

  if (privacyClose) privacyClose.addEventListener('click', closePrivacy);
  if (privacyOk) privacyOk.addEventListener('click', closePrivacy);
  if (privacyBackdrop) privacyBackdrop.addEventListener('click', closePrivacy);

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && privacyModal.classList.contains('show')) closePrivacy();
  });
})();

document.querySelectorAll('.genre').forEach(function(card){
  card.addEventListener('pointermove', function(e){
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  }, {passive:true});
});

document.addEventListener('DOMContentLoaded', function(){
  const visitSite = document.getElementById('visitSite');
  const visitLoader = document.getElementById('visitLoader');
  const visitPercent = document.getElementById('visitPercent');
  const ringProgress = document.getElementById('ringProgress');

  if (!visitSite || !visitLoader || !visitPercent || !ringProgress) return;

  let progressFrame = null;
  let redirectTimer = null;

  function stopVisitProgress(){
    if (progressFrame !== null) {
      cancelAnimationFrame(progressFrame);
      progressFrame = null;
    }
    if (redirectTimer !== null) {
      clearTimeout(redirectTimer);
      redirectTimer = null;
    }
  }

  function resetVisitLoader(){
    stopVisitProgress();
    visitLoader.classList.remove('show');
    visitLoader.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    visitPercent.textContent = '0%';
    ringProgress.style.strokeDashoffset = '314.159';
  }

  window.addEventListener('pageshow', function(event){
    document.body.classList.remove('modal-open');
    document.documentElement.style.overflow = '';
    if (event.persisted) resetVisitLoader();
  });

  window.addEventListener('pagehide', stopVisitProgress, {passive:true});

  visitSite.addEventListener('click', function(event){
    event.preventDefault();
    event.stopImmediatePropagation();

    const destination = 'https://tryfreelink.sbs'; // Replace with your destination URL
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const duration = 10000;
    const startedAt = performance.now();

    stopVisitProgress();

    visitLoader.classList.add('show');
    visitLoader.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    ringProgress.style.strokeDasharray = circumference + ' ' + circumference;
    ringProgress.style.strokeDashoffset = circumference;
    visitPercent.textContent = '0%';

    function updateProgress(now){
      const elapsed = Math.min(now - startedAt, duration);
      const ratio = elapsed / duration;
      const percent = Math.floor(ratio * 100);

      visitPercent.textContent = percent + '%';
      ringProgress.style.strokeDashoffset = String(circumference * (1 - ratio));

      if (elapsed < duration) {
        progressFrame = requestAnimationFrame(updateProgress);
      } else {
        progressFrame = null;
        visitPercent.textContent = '100%';
        ringProgress.style.strokeDashoffset = '0';

        redirectTimer = setTimeout(function(){
          redirectTimer = null;
          window.location.href = destination;
        }, 250);
      }
    }

    progressFrame = requestAnimationFrame(updateProgress);
  });
});

window.addEventListener('wheel', function(){}, {passive:true});
