import { type Profile, type BlogPost } from "../types";

export const profile: Profile = {
    name: "Oguzhan",
    education: "Programmeren · AP Hogeschool",
    company: "Deskdrive",
    location: "Langestraat 97/3, 2240 Zandhoven",
    role: "Software developer",
    linkedin: "https://www.linkedin.com/in/oguzhan-güner-910681339",
    github: "https://github.com/s158897",
    photo: "oguzhan.jpeg",
};

// Zet nieuwe weken bovenaan. Nieuwe tags verschijnen automatisch in het filter.
// Optioneel per post (foto's staan in public):
// photos: [{ src: "/week-3.jpg", alt: "Beschrijving van de foto", caption: "Kort bijschrift" }],
// codeBlocks: [{ title: "Mijn oplossing", language: "Java", code: "...", explanation: "Waarom dit werkte" }],
export const posts: BlogPost[] = [
    {
        slug: "week-6",
        number: "06",
        category: "Development",
        tags: ["Code", "Wins", "Lessons learned"],
        title: "Week 6: QR-scannen, zoeken en wizardknoppen",
        excerpt: "Deze week heb ik de wizard uitgebreid en gewerkt aan herbruikbare componenten en het onderhoud van DeskDrive Mobile.",
        time: "2 min",
        color: "rose",
        sections: [
            [
                "Wat heb ik gedaan?",
                "Ik heb een QR-scanner aan de interventiewizard toegevoegd en een herbruikbare zoekbalk gemaakt voor verschillende lijsten en detailtabs. Ook heb ik wizardknoppen aan de backend gekoppeld, met laadstatus, foutmeldingen en bescherming tegen dubbel klikken. Verder heb ik packages bijgewerkt en het versienummer op de homepagina gezet."
            ],
            [
                "Wat heb ik geleerd?",
                "Ik heb geleerd hoe knoppen via JSON vanuit de backend ingesteld kunnen worden en hoe gescande waarden en knopacties naar de API gaan. Daarnaast heb ik onderzocht hoe de app kan controleren of er een nieuwere versie in de stores staat. Ook heb ik meer geleerd over Android-buildoptimalisatie met R8 en het controleren van dependencies."
            ],
            [
                "Waar liep ik tegenaan?",
                "De wizard ging bij sommige keuzevelden meteen naar de volgende stap. Ik heb onderzocht hoe de selectie eerst opgeslagen kan worden, zodat de gebruiker zelf op Volgende klikt. Een Android-testbuild werd geblokkeerd doordat het Expo-account geen projecttoegang had. Daardoor kon ik de nieuwe optimalisatiescore nog niet controleren."
            ],
        ]
    },
    {
        slug: "week-5",
        number: "05",
        category: "Development",
        tags: ["Code", "Wins", "Lessons learned"],
        title: "Week 5: De wizard, navigatie en een Expo-update",
        excerpt: "Van 19 tot en met 23 oktober heb ik DeskDrive Mobile verder verbeterd, van handtekeningen in de wizard tot de terugnavigatie.",
        time: "2 min",
        color: "sand",
        sections: [
            [
                "Wat heb ik gedaan?",
                "Ik heb opmerkingen toegevoegd aan verschillende schermen en de documenten- en handtekeningtabs hersteld. In de wizard zijn bestaande foto's en bijlagen nu zichtbaar en kun je een handtekening invoeren. Daarnaast heb ik tellers vooraf laten laden met maximaal twee API-aanvragen tegelijk, Maestro-testbestanden toegevoegd en Expo bijgewerkt van SDK 57 naar 58."
            ],
            [
                "Wat heb ik geleerd?",
                "Ik heb meer geleerd over het spreiden van API-aanvragen en het consistent maken van navigatie in React Native. Bij de Expo-update moest ik ook dependencies en compatibiliteitscode aanpassen. Daarna heb ik de Android- en iOS-bundels gecontroleerd. Met Maestro heb ik verder gewerkt aan het voorbereiden van automatische tests."
            ],
            [
                "Waar liep ik tegenaan?",
                "De opstartnavigatie op Android en de terugknoppen werkten niet overal zoals verwacht. Gebruikers kwamen soms onbedoeld op het homescherm terecht. Ik heb de terugnavigatie gelijkgetrokken en die doorverwijzing opgelost. Ook werd de wizardlijst niet altijd vernieuwd; die wordt nu opnieuw opgehaald wanneer je de lijst opent."
            ],
        ]
    },
    {
        slug: "week-4",
        number: "04",
        category: "Development",
        tags: ["Code", "Wins", "Lessons learned"],
        title: "Week 4: Slimmer zoeken en automatisch testen",
        excerpt: "Zoektechnieken vergelijken voor ingesproken bedrijfsnamen, kennismaken met Selenium/Htmx en verder werken aan de planning.",
        time: "2 min",
        color: "green",
        sections: [
            [
                "Wat heb ik gedaan?",
                "Ik heb een proof of concept gemaakt voor zoeken met spraakherkenning. In PostgreSQL vergeleek ik onder andere pg_trgm, fonetische zoekmethodes en Levenshtein op ongeveer 10.000 records. Ook heb ik Selenium uitgeprobeerd op een HTMX-testpagina, pull-to-refresh toegevoegd aan de planning en met mijn partner branches samengevoegd."
            ],
            [
                "Wat heb ik geleerd?",
                "Niet elke zoekmethode werkt even goed bij verkeerd herkende bedrijfsnamen. Door nauwkeurigheid én snelheid te vergelijken, kon ik mijn keuzes beter onderbouwen. Ik heb meer geleerd over database-indexen en hoe ik met Selenium handmatige tests kan automatiseren. Daarnaast heb ik onderzocht hoe ik een JAR bouw en de geheugenfunctie overdraag aan de microservice van mijn partner."
            ],
            [
                "Waar liep ik tegenaan?",
                "Ik had geen rechtstreekse toegang tot de DeskDrive-database en backend. Daarom heb ik een aparte PostgreSQL-testomgeving opgezet. Bij de planning bleken taken voor andere resources wel opgeslagen, maar niet aanwezig in het API-antwoord. Ook moest ik bij het samenvoegen van onze branches meerdere mergeconflicten oplossen."
            ],
        ]
    },
    {
        slug: "week-3",
        number: "03",
        category: "Development",
        tags: ["Code", "Wins", "Fails", "Lessons learned"],
        title: "Week 3: Formulieren, planning en API-debugging",
        excerpt: "Verder bouwen aan DeskDrive Mobile met React Native en Expo. Deze week zat er vooral veel test- en debugwerk tussen.",
        time: "2 min",
        color: "rose",
        sections: [
            [
                "Wat heb ik gedaan?",
                "Ik heb de formuliervelden verder uitgewerkt en getest, zoekcategorieën aan gebruikersrechten gekoppeld en een persoonsfilter aan de planning toegevoegd. Ook heb ik opmerkingen bij taken en klanten toegevoegd en het aanmaken van taken aan de API gekoppeld. Verder heb ik de datum- en uurkiezers op iPhone en de leesbaarheid van de velden verbeterd."
            ],
            [
                "Wat heb ik geleerd?",
                "Ik heb geleerd om eerst te controleren wat de API echt terugstuurt. Een decimal-veld kwam bijvoorbeeld soms als integer binnen. Door veldtypes, request-URL's en responses te loggen, kon ik gerichter zoeken. Ook heb ik geleerd om lege resultaten apart af te handelen van ophaalfouten."
            ],
            [
                "Waar liep ik tegenaan?",
                "Expo bleef soms hangen bij het opstarten en de planning gaf niet altijd de verwachte gegevens terug. Ik heb een crash bij lege offertes opgelost en gezorgd dat een planningkaart de juiste taak opent. Bij offertes heb ik een laadindicator en een knop om opnieuw te proberen toegevoegd."
            ],
        ]
    },
    {
        slug: "week-2",
        number: "02",
        category: "Development",
        tags: ["Code", "Wins", "Fails", "Lessons learned"],
        title: "Week 2: Claude, Figma Make en React Native",
        excerpt: "Verder met de databasekoppeling, AI-mock-ups en herbruikbare formuliervelden voor de mobiele app.",
        time: "2 min",
        color: "sand",
        sections: [
            [
                "Wat heb ik gedaan?",
                "Ik heb de DomainDatabaseTool voor Claude en PostgreSQL getest in Docker/Linux en conversation memory toegevoegd met Conversation, Message en een conversationId. Daarnaast heb ik Figma Make onderzocht en in React Native met TypeScript aparte componenten gemaakt voor datum, datum/tijd, integer, decimal, upload en handtekening."
            ],
            [
                "Wat heb ik geleerd?",
                "Ik heb geleerd hoe ik gesprekken en berichten aan elkaar koppel en Expo-packages gebruik voor datum- en uploadvelden. In Figma Make heb ik bekeken hoe je met prompts en bestaande designs interfaces maakt en exporteert, en waar de beperkingen zitten bij meerdere schermen. Ook controleer ik nu beter welke code echt in de Docker-image zit."
            ],
            [
                "Waar liep ik tegenaan?",
                "Van de 62 tests slaagden er 60; bij twee ontbrak de DOMAIN_ID. Mijn lokale Windows-wijzigingen zaten ook nog niet in de Linux Docker-image. Bij het handtekeningveld bewoog de pagina tijdens het tekenen. Dat heb ik opgelost door het scrollen tijdelijk uit te schakelen."
            ],
        ]
    },
    {
        slug: "week-1",
        number: "01",
        category: "Stageleven",
        tags: ["Code", "Lessons learned", "Wins"],
        title: "Week 1: RLS, Docker en een eerste WebView",
        excerpt: "Een ontwikkelomgeving opzetten, klantgegevens afschermen en een eerste formulier in React Native maken.",
        time: "1 min",
        color: "green",
        sections: [
            [
                "Wat heb ik gedaan?",
                "Ik heb gewerkt aan de Linux/Ubuntu-omgeving en een herbruikbare Docker-container met PostgreSQL. Ik heb tabellen en relaties onderzocht, rollen en RLS-policies ingesteld en de toegang per klantdomein getest. Daarnaast heb ik een HTML-formulier in een React Native WebView gemaakt en de ingevulde gegevens via postMessage ontvangen."
            ],
            [
                "Wat heb ik geleerd?",
                "Ik heb geleerd hoe USING en WITH CHECK de toegang tot klantgegevens beperken en hoe een mappingtabel gebruikers aan hun domain_id koppelt. Ook heb ik gewerkt met session_user, current_user en SECURITY DEFINER. Via Docker Compose kan ik de instellingen per klant aanpassen en secrets apart houden."
            ],
            [
                "Waar liep ik tegenaan?",
                "Het bepalen van het juiste klantdomein vroeg extra uitzoekwerk: welke databasegebruiker is actief en hoe koppel ik die aan de juiste gegevens? Hiervoor heb ik de gebruikerskoppelingen en een functie voor het ophalen van het domein onderzocht. Ook heb ik bekeken hoe RLS-policies automatisch uit tabelrelaties kunnen worden opgebouwd."
            ],
        ]
    },
];





