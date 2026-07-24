import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type LanguageCode =
  | "en" | "ha" | "ig" | "yo" | "fr" | "de" | "es" | "it" | "pt"
  | "zh" | "ja" | "ko" | "hi" | "ar" | "ru" | "tr" | "nl" | "sv"
  | "no" | "da" | "pl" | "el" | "th" | "vi" | "id" | "ms" | "sw"
  | "uk" | "cs" | "hu" | "ro" | "fi" | "he";

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag?: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "ha", label: "Hausa", nativeLabel: "Harshen Hausa" },
  { code: "ig", label: "Igbo", nativeLabel: "Asụsụ Igbo" },
  { code: "yo", label: "Yoruba", nativeLabel: "Èdè Yorùbá" },
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "de", label: "German", nativeLabel: "Deutsch" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "it", label: "Italian", nativeLabel: "Italiano" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português" },
  { code: "zh", label: "Chinese", nativeLabel: "中文" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語" },
  { code: "ko", label: "Korean", nativeLabel: "한국어" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe" },
  { code: "nl", label: "Dutch", nativeLabel: "Nederlands" },
  { code: "sv", label: "Swedish", nativeLabel: "Svenska" },
  { code: "no", label: "Norwegian", nativeLabel: "Norsk" },
  { code: "da", label: "Danish", nativeLabel: "Dansk" },
  { code: "pl", label: "Polish", nativeLabel: "Polski" },
  { code: "el", label: "Greek", nativeLabel: "Eλληνικά" },
  { code: "th", label: "Thai", nativeLabel: "ไทย" },
  { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia" },
  { code: "ms", label: "Malay", nativeLabel: "Bahasa Melayu" },
  { code: "sw", label: "Swahili", nativeLabel: "Kiswahili" },
  { code: "uk", label: "Ukrainian", nativeLabel: "Українська" },
  { code: "cs", label: "Czech", nativeLabel: "Čeština" },
  { code: "hu", label: "Hungarian", nativeLabel: "Magyar" },
  { code: "ro", label: "Romanian", nativeLabel: "Română" },
  { code: "fi", label: "Finnish", nativeLabel: "Suomi" },
  { code: "he", label: "Hebrew", nativeLabel: "עברית" },
];

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    home: "Home", shop: "Shop", about: "About", account: "Account",
    searchPlaceholder: "Search products, brands, categories...",
    selectCurrency: "Select Currency", selectLanguage: "Select Language",
    myProfile: "My Profile", orders: "Orders", inbox: "Inbox",
    becomeSeller: "Become a Seller", settings: "Settings", logout: "Logout",
    welcome: "Welcome to Loditojo!", login: "Login", createAccount: "Create Account"
  },
  ha: {
    home: "Gida", shop: "Kasuwa", about: "Game da Mu", account: "Asusu",
    searchPlaceholder: "Nemi kayayyaki, alama, rukuni...",
    selectCurrency: "Zaɓi Kudi", selectLanguage: "Zaɓi Harshe",
    myProfile: "Bayanai na", orders: "Oda na", inbox: "Akwatin saƙo",
    becomeSeller: "Zama Mai Sayarwa", settings: "Saituna", logout: "Fita",
    welcome: "Barka da zuwa Loditojo!", login: "Shiga", createAccount: "Bulla Asusu"
  },
  ig: {
    home: "Ulọ", shop: "Ahịa", about: "Mba Anyị", account: "Akaụntụ",
    searchPlaceholder: "Chọọ ngwaahịa, akara, ụdị...",
    selectCurrency: "Pịa Ego", selectLanguage: "Pịa Asụsụ",
    myProfile: "Profaịlụ m", orders: "Iwu m gasị", inbox: "Inbọks",
    becomeSeller: "Gbochie Onye na-ere ahịa", settings: "Nseta", logout: "Pụọ",
    welcome: "Nnọọ na Loditojo!", login: "Banye", createAccount: "Mepụta Akaụntụ"
  },
  yo: {
    home: "Ile", shop: "Oja", about: "Nipa Wa", account: "Akọọlẹ",
    searchPlaceholder: "Wa awọn ọja, pọ pọ, awọn ẹka...",
    selectCurrency: "Yan Owo", selectLanguage: "Yan Èdè",
    myProfile: "Abala Mi", orders: "Awọn Aṣẹ Mi", inbox: "Àpótí Inbọọksi",
    becomeSeller: "Di Oníṣòwò", settings: "Àwọn Ètò", logout: "Abe jade",
    welcome: "Ẹ ku abọ si Loditojo!", login: "Wọle", createAccount: "Ṣẹda Akọọlẹ"
  },
  fr: {
    home: "Accueil", shop: "Boutique", about: "À propos", account: "Compte",
    searchPlaceholder: "Rechercher des produits...",
    selectCurrency: "Sélect. devise", selectLanguage: "Sélect. langue",
    myProfile: "Mon profil", orders: "Commandes", inbox: "Boîte de réc.",
    becomeSeller: "Devenir vendeur", settings: "Paramètres", logout: "Déconnexion",
    welcome: "Bienvenue sur Loditojo !", login: "Connexion", createAccount: "Créer un compte"
  },
  es: {
    home: "Inicio", shop: "Tienda", about: "Nosotros", account: "Cuenta",
    searchPlaceholder: "Buscar productos...",
    selectCurrency: "Seleccionar moneda", selectLanguage: "Seleccionar idioma",
    myProfile: "Mi perfil", orders: "Pedidos", inbox: "Bandeja de entrada",
    becomeSeller: "Ser vendedor", settings: "Ajustes", logout: "Cerrar sesión",
    welcome: "¡Bienvenido a Loditojo!", login: "Iniciar sesión", createAccount: "Crear cuenta"
  },
  de: {
    home: "Startseite", shop: "Shop", about: "Über uns", account: "Konto",
    searchPlaceholder: "Produkte suchen...",
    selectCurrency: "Währung wählen", selectLanguage: "Sprache wählen",
    myProfile: "Mein Profil", orders: "Bestellungen", inbox: "Posteingang",
    becomeSeller: "Verkäufer werden", settings: "Einstellungen", logout: "Abmelden",
    welcome: "Willkommen bei Loditojo!", login: "Anmelden", createAccount: "Konto erstellen"
  },
  it: {
    home: "Home", shop: "Negozio", about: "Chi siamo", account: "Account",
    searchPlaceholder: "Cerca prodotti, marchi...",
    selectCurrency: "Seleziona Valuta", selectLanguage: "Seleziona Lingua",
    myProfile: "Il mio profilo", orders: "Ordini", inbox: "Messaggi",
    becomeSeller: "Diventa un venditore", settings: "Impostazioni", logout: "Esci",
    welcome: "Benvenuto su Loditojo!", login: "Accedi", createAccount: "Crea un account"
  },
  pt: {
    home: "Início", shop: "Loja", about: "Sobre", account: "Conta",
    searchPlaceholder: "Pesquisar produtos, marcas...",
    selectCurrency: "Selecionar Moeda", selectLanguage: "Selecionar Idioma",
    myProfile: "Meu Perfil", orders: "Pedidos", inbox: "Caixa de Entrada",
    becomeSeller: "Tornar-se Vendedor", settings: "Configurações", logout: "Sair",
    welcome: "Bem-vindo ao Loditojo!", login: "Entrar", createAccount: "Criar Conta"
  },
  zh: {
    home: "首页", shop: "商店", about: "关于我们", account: "账户",
    searchPlaceholder: "搜索商品、品牌...",
    selectCurrency: "选择货币", selectLanguage: "选择语言",
    myProfile: "个人资料", orders: "我的订单", inbox: "收件箱",
    becomeSeller: "成为卖家", settings: "设置", logout: "退出登录",
    welcome: "欢迎来到 Loditojo！", login: "登录", createAccount: "注册账户"
  },
  ja: {
    home: "ホーム", shop: "ショップ", about: "概要", account: "アカウント",
    searchPlaceholder: "商品を検索...",
    selectCurrency: "通貨を選択", selectLanguage: "言語を選択",
    myProfile: "マイプロフィール", orders: "注文履歴", inbox: "受信トレイ",
    becomeSeller: "出品者になる", settings: "設定", logout: "ログアウト",
    welcome: "Loditojoへようこそ！", login: "ログイン", createAccount: "アカウント作成"
  },
  ko: {
    home: "홈", shop: "쇼핑", about: "소개", account: "계정",
    searchPlaceholder: "상품 검색...",
    selectCurrency: "통화 선택", selectLanguage: "언어 선택",
    myProfile: "내 프로필", orders: "주문 내역", inbox: "받은 편지함",
    becomeSeller: "판매자 등록", settings: "설정", logout: "로그아웃",
    welcome: "Loditojo에 오신 것을 환영합니다!", login: "로그인", createAccount: "계정 생성"
  },
  hi: {
    home: "होम", shop: "दुकान", about: "हमारे बारे में", account: "खाता",
    searchPlaceholder: "उत्पाद खोजें...",
    selectCurrency: "मुद्रा चुनें", selectLanguage: "भाषा चुनें",
    myProfile: "मेरी प्रोफाइल", orders: "ऑर्डर", inbox: "इनबॉक्स",
    becomeSeller: "विक्रेता बनें", settings: "सेटिंग्स", logout: "लॉग आउट",
    welcome: "Loditojo में आपका स्वागत है!", login: "लॉग इन", createAccount: "खाता बनाएं"
  },
  ar: {
    home: "الرئيسية", shop: "المتجر", about: "من نحن", account: "الحساب",
    searchPlaceholder: "البحث عن المنتجات...",
    selectCurrency: "اختر العملة", selectLanguage: "اختر اللغة",
    myProfile: "ملفي الشخصي", orders: "طلباتي", inbox: "الوارد",
    becomeSeller: "كن بائعاً", settings: "الإعدادات", logout: "تسجيل الخروج",
    welcome: "مرحباً بك في Loditojo!", login: "تسجيل الدخول", createAccount: "إنشاء حساب"
  },
  ru: {
    home: "Главная", shop: "Магазин", about: "О нас", account: "Аккаунт",
    searchPlaceholder: "Поиск товаров...",
    selectCurrency: "Выберите валюту", selectLanguage: "Выберите язык",
    myProfile: "Мой профиль", orders: "Заказы", inbox: "Входящие",
    becomeSeller: "Стать продавцом", settings: "Настройки", logout: "Выйти",
    welcome: "Добро пожаловать в Loditojo!", login: "Войти", createAccount: "Создать аккаунт"
  },
  tr: {
    home: "Anasayfa", shop: "Mağaza", about: "Hakkımızda", account: "Hesap",
    searchPlaceholder: "Ürün ara...",
    selectCurrency: "Para Birimi Seç", selectLanguage: "Dil Seç",
    myProfile: "Profilim", orders: "Siparişlerim", inbox: "Gelen Kutusu",
    becomeSeller: "Satıcı Ol", settings: "Ayarlar", logout: "Çıkış Yap",
    welcome: "Loditojo'ya Hoş Geldiniz!", login: "Giriş Yap", createAccount: "Hesap Oluştur"
  },
  nl: {
    home: "Home", shop: "Winkel", about: "Over ons", account: "Account",
    searchPlaceholder: "Zoek producten...",
    selectCurrency: "Selecteer valuta", selectLanguage: "Selecteer taal",
    myProfile: "Mijn profiel", orders: "Bestellungen", inbox: "Postvak in",
    becomeSeller: "Word verkoper", settings: "Instellingen", logout: "Uitloggen",
    welcome: "Welkom bij Loditojo!", login: "Inloggen", createAccount: "Account aanmaken"
  },
  sv: {
    home: "Hem", shop: "Butik", about: "Om oss", account: "Konto",
    searchPlaceholder: "Sök produkter...",
    selectCurrency: "Välj valuta", selectLanguage: "Välj språk",
    myProfile: "Min profil", orders: "Beställningar", inbox: "Inbox",
    becomeSeller: "Bli säljare", settings: "Inställningar", logout: "Logga ut",
    welcome: "Välkommen till Loditojo!", login: "Logga in", createAccount: "Skapa konto"
  },
  no: {
    home: "Hjem", shop: "Butikk", about: "Om oss", account: "Konto",
    searchPlaceholder: "Søk produkter...",
    selectCurrency: "Velg valuta", selectLanguage: "Velg språk",
    myProfile: "Min profil", orders: "Bestillinger", inbox: "Innboks",
    becomeSeller: "Bli selger", settings: "Innstillinger", logout: "Log ut",
    welcome: "Velkommen til Loditojo!", login: "Logg inn", createAccount: "Opprett konto"
  },
  da: {
    home: "Hjem", shop: "Butik", about: "Om os", account: "Konto",
    searchPlaceholder: "Søg produkter...",
    selectCurrency: "Vælg valuta", selectLanguage: "Vælg sprog",
    myProfile: "Min profil", orders: "Ordrer", inbox: "Indbakke",
    becomeSeller: "Bliv sælger", settings: "Indstillinger", logout: "Log ud",
    welcome: "Velkommen til Loditojo!", login: "Log ind", createAccount: "Opret konto"
  },
  pl: {
    home: "Strona główna", shop: "Sklep", about: "O nas", account: "Konto",
    searchPlaceholder: "Szukaj produktów...",
    selectCurrency: "Wybierz walutę", selectLanguage: "Wybierz język",
    myProfile: "Mój profil", orders: "Zamówienia", inbox: "Skrzynka",
    becomeSeller: "Zostań sprzedawcą", settings: "Ustawienia", logout: "Wyloguj się",
    welcome: "Witamy w Loditojo!", login: "Zaloguj się", createAccount: "Utwórz konto"
  },
  el: {
    home: "Αρχική", shop: "Κατάστημα", about: "Σχετικά", account: "Λογαριασμός",
    searchPlaceholder: "Αναζήτηση προϊόντων...",
    selectCurrency: "Επιλογή νομίσματος", selectLanguage: "Επιλογή γλώσσας",
    myProfile: "Το προφίλ μου", orders: "Παραγγελίες", inbox: "Eισερχόμενα",
    becomeSeller: "Γίνετε πωλητής", settings: "Ρυθμίσεις", logout: "Αποσύνδεση",
    welcome: "Καλώς ορίσατε στο Loditojo!", login: "Σύνδεση", createAccount: "Δημιουργία λογαριασμού"
  },
  th: {
    home: "หน้าแรก", shop: "ร้านค้า", about: "เกี่ยวกับเรา", account: "บัญชี",
    searchPlaceholder: "ค้นหาสินค้า...",
    selectCurrency: "เลือกสกุลเงิน", selectLanguage: "เลือกภาษา",
    myProfile: "โปรไฟล์ของฉัน", orders: "คำสั่งซื้อ", inbox: "กล่องข้อความ",
    becomeSeller: "สมัครเป็นผู้ขาย", settings: "การตั้งค่า", logout: "ออกจากระบบ",
    welcome: "ยินดีต้อนรับสู่ Loditojo!", login: "เข้าสู่ระบบ", createAccount: "สร้างบัญชี"
  },
  vi: {
    home: "Trang chủ", shop: "Cửa hàng", about: "Giới thiệu", account: "Tài khoản",
    searchPlaceholder: "Tìm kiếm sản phẩm...",
    selectCurrency: "Chọn tiền tệ", selectLanguage: "Chọn ngôn ngữ",
    myProfile: "Hồ sơ của tôi", orders: "Đơn hàng", inbox: "Hộp thư",
    becomeSeller: "Trở thành người bán", settings: "Cài đặt", logout: "Đăng xuất",
    welcome: "Chào mừng đến với Loditojo!", login: "Đăng nhập", createAccount: "Tạo tài khoản"
  },
  id: {
    home: "Beranda", shop: "Toko", about: "Tentang Kami", account: "Akun",
    searchPlaceholder: "Cari produk...",
    selectCurrency: "Pilih Mata Uang", selectLanguage: "Pilih Bahasa",
    myProfile: "Profil Saya", orders: "Pesanan", inbox: "Kotak Masuk",
    becomeSeller: "Menjadi Penjual", settings: "Pengaturan", logout: "Keluar",
    welcome: "Selamat datang di Loditojo!", login: "Masuk", createAccount: "Buat Akun"
  },
  ms: {
    home: "Laman Utama", shop: "Kedai", about: "Perihal Kami", account: "Akaun",
    searchPlaceholder: "Cari produk...",
    selectCurrency: "Pilih Mata Wang", selectLanguage: "Pilih Bahasa",
    myProfile: "Profil Saya", orders: "Pesanan", inbox: "Peti Masuk",
    becomeSeller: "Menjadi Penjual", settings: "Tetapan", logout: "Log Keluar",
    welcome: "Selamat datang ke Loditojo!", login: "Log Masuk", createAccount: "Daftar Akaun"
  },
  sw: {
    home: "Nyumbani", shop: "Duka", about: "Kuhusu Sisi", account: "Akaunti",
    searchPlaceholder: "Tafuta bidhaa...",
    selectCurrency: "Chagua Sarafu", selectLanguage: "Chagua Lugha",
    myProfile: "Profaili Yangu", orders: "Orodha ya Oda", inbox: "Kikasha",
    becomeSeller: "Muuza Duka", settings: "Mipangilio", logout: "Ondoka",
    welcome: "Karibu Loditojo!", login: "Ingia", createAccount: "Tengeneza Akaunti"
  },
  uk: {
    home: "Головна", shop: "Магазин", about: "Про нас", account: "Акаунт",
    searchPlaceholder: "Пошук товарів...",
    selectCurrency: "Оберіть валюту", selectLanguage: "Оберіть мову",
    myProfile: "Мій профіль", orders: "Замовлення", inbox: "Вхідні",
    becomeSeller: "Стати продавцем", settings: "Налаштування", logout: "Вийти",
    welcome: "Ласкаво просимо до Loditojo!", login: "Увійти", createAccount: "Створити акаунт"
  },
  cs: {
    home: "Domů", shop: "Obchod", about: "O nás", account: "Účet",
    searchPlaceholder: "Hledat produkty...",
    selectCurrency: "Vybrat měnu", selectLanguage: "Vybrat jazyk",
    myProfile: "Můj profil", orders: "Objednávky", inbox: "Příchozí",
    becomeSeller: "Stát se prodejcem", settings: "Nastavení", logout: "Odhlásit se",
    welcome: "Vítejte v Loditojo!", login: "Přihlásit se", createAccount: "Vytvořit účet"
  },
  hu: {
    home: "Kezdőlap", shop: "Bolt", about: "Rólunk", account: "Fiók",
    searchPlaceholder: "Termékek keresése...",
    selectCurrency: "Pénznem kiválasztása", selectLanguage: "Nyelv kiválasztása",
    myProfile: "Profilom", orders: "Rendelések", inbox: "Bejövő",
    becomeSeller: "Legyen eladó", settings: "Beállítások", logout: "Kijelentkezés",
    welcome: "Üdvözöljük a Loditojo-nál!", login: "Bejelentkezés", createAccount: "Fiók létrehozása"
  },
  ro: {
    home: "Acasă", shop: "Magazin", about: "Despre noi", account: "Cont",
    searchPlaceholder: "Căutați produse...",
    selectCurrency: "Selectați moneda", selectLanguage: "Selectați limba",
    myProfile: "Profilul meu", orders: "Comenzi", inbox: "Mesaje",
    becomeSeller: "Devino vânzător", settings: "Setări", logout: "Deconectare",
    welcome: "Bun venit la Loditojo!", login: "Autentificare", createAccount: "Creează cont"
  },
  fi: {
    home: "Etusivu", shop: "Kauppa", about: "Tietoa meistä", account: "Tili",
    searchPlaceholder: "Etsi tuotteita...",
    selectCurrency: "Valitse valuutta", selectLanguage: "Valitse kieli",
    myProfile: "Oma profiili", orders: "Tilaukset", inbox: "Saapuneet",
    becomeSeller: "Ryhdy myyjäksi", settings: "Asetukset", logout: "Kirjaudu ulos",
    welcome: "Tervetuloa Loditojolle!", login: "Kirjaudu sisään", createAccount: "Luo tili"
  },
  he: {
    home: "בית", shop: "חנות", about: "אודות", account: "חשבון",
    searchPlaceholder: "חפש מוצרים...",
    selectCurrency: "בחר מטבע", selectLanguage: "בחר שפה",
    myProfile: "הפרופיל שלי", orders: "הזמנות", inbox: "דואר נכנס",
    becomeSeller: "הפוך למוכר", settings: "הגדרות", logout: "התנתק",
    welcome: "ברוכים הבאים ל-Loditojo!", login: "התחבר", createAccount: "צור חשבון"
  }
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  supportedLanguages: LanguageOption[];
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("app_language") as LanguageCode;
    return saved && translations[saved] ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("app_language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};