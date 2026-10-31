// QUESTIONS FOR THE PLACEMENT TESTS
//
// Each topic is one block between { and },
// Each question is ONE line, written like this:
//   Question | Correct answer | Wrong answer | Wrong answer | Wrong answer
// - The correct answer ALWAYS goes first (the website shuffles the answers).
// - Use the | sign only to separate the parts. Never inside a question or answer.
// - Each topic needs exactly 15 lines: the first 5 basic, the next 5 intermediate, the last 5 advanced.
// - en = English questions. fr = French questions (optional: if you leave fr out, English is used).
// - To ADD a topic: copy a whole block, paste it after the last block, then change id, n, e and the questions.
//   The id must be unique, in lowercase, without spaces (for example: electronics).
// - Do not delete the backtick characters or the commas at the ends.

const TOPICS=[
{
 id:"robotics",
 n:"Robotics",
 nf:"Robotique",
 e:"🤖",
 en:`
What does a motor driver do?|Lets a controller power a motor|Stores program code|Measures light|Cools the board
Which sensor measures distance with sound?|Ultrasonic sensor|Photoresistor|Thermistor|Gyroscope
What is the usual brain of a small robot?|A microcontroller|A wheel|A resistor|A breadboard
Which unit measures voltage?|Volt|Ampere|Ohm|Hertz
Why put a resistor in series with an LED?|To limit the current|To make it blink|To increase voltage|To store energy
What does PWM mainly control on a DC motor?|Its average speed|Its direction only|Its temperature|Its wire length
What does an H-bridge allow?|Reversing motor direction|Measuring temperature|Wireless control|Storing power
A servo motor is mainly used for?|Precise angle positioning|Generating power|Measuring distance|Storing data
What does a gyroscope measure?|Rotation rate|Distance|Light|Sound
A 5 V source across a 220 Ω resistor gives about?|23 mA|2.3 mA|230 mA|2.3 A
What does a PID controller do?|Corrects error using proportional, integral and derivative terms|Encrypts commands|Converts AC to DC|Stores sensor data
What is odometry?|Estimating position from wheel movement|Measuring battery life|Counting program lines|Detecting colors
Why add a flyback diode across a motor?|To absorb voltage spikes|To make it faster|To reduce weight|To filter sound
What does an encoder provide?|Rotation count or position feedback|More torque|A wireless link|Higher voltage
In a line follower, what usually reads the line?|Infrared reflectance sensors|Microphones|Servos|Batteries
`,
 fr:`
Que fait un pilote de moteur (driver) ?|Il permet à un contrôleur d’alimenter un moteur|Il stocke le code du programme|Il mesure la lumière|Il refroidit la carte
Quel capteur mesure la distance avec le son ?|Le capteur à ultrasons|La photorésistance|La thermistance|Le gyroscope
Quel est généralement le cerveau d’un petit robot ?|Un microcontrôleur|Une roue|Une résistance|Une plaque d’essai
Quelle unité mesure la tension ?|Le volt|L’ampère|L’ohm|Le hertz
Pourquoi placer une résistance en série avec une LED ?|Pour limiter le courant|Pour la faire clignoter|Pour augmenter la tension|Pour stocker de l’énergie
Que contrôle principalement la PWM sur un moteur à courant continu ?|Sa vitesse moyenne|Son sens uniquement|Sa température|La longueur de ses fils
Que permet un pont en H ?|Inverser le sens du moteur|Mesurer la température|Un contrôle sans fil|Stocker de l’énergie
À quoi sert surtout un servomoteur ?|Positionner précisément un angle|Produire de l’énergie|Mesurer une distance|Stocker des données
Que mesure un gyroscope ?|La vitesse de rotation|La distance|La lumière|Le son
Une source de 5 V aux bornes d’une résistance de 220 Ω donne environ ?|23 mA|2,3 mA|230 mA|2,3 A
Que fait un régulateur PID ?|Il corrige l’erreur avec des termes proportionnel, intégral et dérivé|Il chiffre les commandes|Il convertit le courant alternatif en continu|Il stocke les données des capteurs
Qu’est-ce que l’odométrie ?|Estimer la position à partir du mouvement des roues|Mesurer l’autonomie de la batterie|Compter les lignes d’un programme|Détecter les couleurs
Pourquoi ajouter une diode de roue libre aux bornes d’un moteur ?|Pour absorber les pics de tension|Pour l’accélérer|Pour réduire son poids|Pour filtrer le son
Que fournit un encodeur ?|Le comptage ou la position de rotation|Plus de couple|Une liaison sans fil|Une tension plus élevée
Dans un robot suiveur de ligne, qu’est-ce qui lit généralement la ligne ?|Des capteurs infrarouges à réflexion|Des microphones|Des servomoteurs|Des batteries
`
},


{
 id:"network",
 n:"Networking (Réseau)",
 nf:"Réseaux",
 e:"🌐",
 en:`
What does IP stand for?|Internet Protocol|Internal Program|Input Port|Intranet Provider
Which device connects different networks?|Router|Keyboard|Monitor|Speaker
What does Wi-Fi provide?|Wireless network access|Electric power|Disk storage|Printing only
Which cable is common in local networks?|Ethernet|HDMI|Audio jack|Power cord
What is a LAN?|A network in a small area|A global network|A type of virus|A web browser
How many bits are in an IPv4 address?|32|16|64|128
What does DNS do?|Translates names into IP addresses|Encrypts email|Assigns Wi-Fi passwords|Blocks ads
What does DHCP do?|Assigns IP addresses automatically|Stores websites|Cools servers|Prints documents
Which port does HTTPS use by default?|443|80|21|25
What does a switch do?|Forwards frames between devices on a LAN|Translates domain names|Stores emails|Provides internet from space
What does 192.168.1.0/24 mean?|The first 24 bits are the network part|Only 24 hosts exist|It uses port 24|It is version 24
Which protocol is connection-oriented and reliable?|TCP|UDP|ICMP|DNS
What does NAT do?|Translates private addresses to a public one|Encrypts traffic|Assigns MAC addresses|Blocks all ports
At which OSI layer does a router mainly work?|Network (layer 3)|Physical (layer 1)|Application (layer 7)|Data link (layer 2)
What does ARP do?|Maps an IP address to a MAC address|Maps names to IPs|Encrypts packets|Assigns subnets
`,
 fr:`
Que signifie IP ?|Internet Protocol (protocole Internet)|Internal Program|Input Port|Intranet Provider
Quel appareil relie des réseaux différents ?|Le routeur|Le clavier|L’écran|Le haut-parleur
Que fournit le Wi-Fi ?|Un accès réseau sans fil|De l’électricité|Du stockage|Uniquement l’impression
Quel câble est courant dans les réseaux locaux ?|Ethernet|HDMI|Prise jack audio|Cordon d’alimentation
Qu’est-ce qu’un LAN ?|Un réseau sur une petite zone|Un réseau mondial|Un type de virus|Un navigateur web
Combien de bits compte une adresse IPv4 ?|32|16|64|128
Que fait le DNS ?|Il traduit des noms en adresses IP|Il chiffre les e-mails|Il attribue les mots de passe Wi-Fi|Il bloque les publicités
Que fait le DHCP ?|Il attribue automatiquement des adresses IP|Il stocke des sites web|Il refroidit les serveurs|Il imprime des documents
Quel port le HTTPS utilise-t-il par défaut ?|443|80|21|25
Que fait un commutateur (switch) ?|Il transmet les trames entre les appareils d’un LAN|Il traduit les noms de domaine|Il stocke les e-mails|Il fournit Internet par satellite
Que signifie 192.168.1.0/24 ?|Les 24 premiers bits forment la partie réseau|Il n’y a que 24 hôtes|Il utilise le port 24|C’est la version 24
Quel protocole est orienté connexion et fiable ?|TCP|UDP|ICMP|DNS
Que fait le NAT ?|Il traduit des adresses privées en une adresse publique|Il chiffre le trafic|Il attribue des adresses MAC|Il bloque tous les ports
À quelle couche OSI un routeur travaille-t-il principalement ?|Réseau (couche 3)|Physique (couche 1)|Application (couche 7)|Liaison de données (couche 2)
Que fait l’ARP ?|Il associe une adresse IP à une adresse MAC|Il associe des noms à des IP|Il chiffre les paquets|Il attribue des sous-réseaux
`
},

{
 id:"python",
 n:"Python",
 e:"🐍",
 en:`
Which function prints text?|print()|echo()|write()|show()
Which symbol starts a comment?|#|//|REM|%
What is the type of 3.14?|float|int|str|bool
What does len("abc") return?|3|2|4|"abc"
Which creates a list?|[1, 2, 3]|(1, 2, 3)|{1, 2, 3}|list: 1, 2, 3
What does range(3) produce?|0, 1, 2|1, 2, 3|0, 1, 2, 3|3 only
What does "a" * 3 give?|aaa|a3|3a|An error
Which keyword defines a function?|def|func|function|fn
What does items[-1] give?|The last item|The first item|An error|The length
Which structure handles errors?|try / except|catch / throw|error / handle|if / error
What is a dictionary?|A collection of key-value pairs|An ordered list of numbers only|A text file|A loop
What does [x*x for x in range(3)] give?|[0, 1, 4]|[1, 4, 9]|[0, 1, 2]|[0, 2, 4]
What does self refer to in a class method?|The current instance|The parent class|A global variable|The module
Which keyword makes a generator produce values lazily?|yield|return|break|pass
What does the with statement help manage?|Resources such as files|Loop counters|Variable types|Imports
`,
 fr:`
Quelle fonction affiche du texte ?|print()|echo()|write()|show()
Quel symbole commence un commentaire ?|#|//|REM|%
Quel est le type de 3.14 ?|float|int|str|bool
Que renvoie len("abc") ?|3|2|4|"abc"
Qu’est-ce qui crée une liste ?|[1, 2, 3]|(1, 2, 3)|{1, 2, 3}|list: 1, 2, 3
Que produit range(3) ?|0, 1, 2|1, 2, 3|0, 1, 2, 3|3 seulement
Que donne "a" * 3 ?|aaa|a3|3a|Une erreur
Quel mot-clé définit une fonction ?|def|func|function|fn
Que donne items[-1] ?|Le dernier élément|Le premier élément|Une erreur|La longueur
Quelle structure gère les erreurs ?|try / except|catch / throw|error / handle|if / error
Qu’est-ce qu’un dictionnaire ?|Une collection de paires clé-valeur|Une liste ordonnée de nombres uniquement|Un fichier texte|Une boucle
Que donne [x*x for x in range(3)] ?|[0, 1, 4]|[1, 4, 9]|[0, 1, 2]|[0, 2, 4]
À quoi se réfère self dans une méthode de classe ?|À l’instance courante|À la classe parente|À une variable globale|Au module
Quel mot-clé permet à un générateur de produire des valeurs paresseusement ?|yield|return|break|pass
À quoi sert l’instruction with ?|À gérer des ressources comme les fichiers|Aux compteurs de boucle|Aux types de variables|Aux imports
`
},

{
 id:"c",
 n:"C",
 e:"⚙️",
 en:`
Which header is needed for printf?|stdio.h|stdlib.h|math.h|string.h
What is the entry point of a C program?|main()|start()|begin()|run()
What ends a statement in C?|;|.|:|,
Which type stores whole numbers?|int|float|double|void
What does // start?|A comment|A loop|A macro|A string
What does &x give?|The address of x|The value of x|The size of x|A copy of x
What is the index of the first array element?|0|1|-1|It depends on the type
What does strlen("hi") return?|2|3|1|0
What does the * mean in int *p?|p is a pointer to int|p is an int|p multiplies|p is an array
Which loop always runs at least once?|do ... while|for|while|foreach
What does malloc do?|Allocates memory on the heap|Frees memory|Prints text|Compiles code
What happens if you forget free() after malloc?|A memory leak|A syntax error|Nothing, ever|A faster program
What does sizeof(int) typically return on a modern PC?|4|1|2|16
What is a segmentation fault?|An invalid memory access|A syntax error|A slow loop|A missing header
What does const char *s mean?|A pointer to characters that should not be modified|A constant pointer to int|An array of ints|A function
`,
 fr:`
Quel en-tête faut-il pour printf ?|stdio.h|stdlib.h|math.h|string.h
Quel est le point d’entrée d’un programme C ?|main()|start()|begin()|run()
Qu’est-ce qui termine une instruction en C ?|;|.|:|,
Quel type stocke des nombres entiers ?|int|float|double|void
Que commence // ?|Un commentaire|Une boucle|Une macro|Une chaîne
Que donne &x ?|L’adresse de x|La valeur de x|La taille de x|Une copie de x
Quel est l’indice du premier élément d’un tableau ?|0|1|-1|Cela dépend du type
Que renvoie strlen("hi") ?|2|3|1|0
Que signifie le * dans int *p ?|p est un pointeur vers un int|p est un int|p multiplie|p est un tableau
Quelle boucle s’exécute toujours au moins une fois ?|do ... while|for|while|foreach
Que fait malloc ?|Il alloue de la mémoire sur le tas|Il libère la mémoire|Il affiche du texte|Il compile le code
Que se passe-t-il si on oublie free() après malloc ?|Une fuite de mémoire|Une erreur de syntaxe|Rien, jamais|Un programme plus rapide
Que renvoie généralement sizeof(int) sur un PC moderne ?|4|1|2|16
Qu’est-ce qu’une erreur de segmentation ?|Un accès mémoire invalide|Une erreur de syntaxe|Une boucle lente|Un en-tête manquant
Que signifie const char *s ?|Un pointeur vers des caractères qui ne doivent pas être modifiés|Un pointeur constant vers un int|Un tableau d’entiers|Une fonction
`
},

{
 id:"html",
 n:"HTML",
 e:"🧱",
 en:`
What does HTML stand for?|HyperText Markup Language|HighText Machine Language|Hyperlink Tool Markup Language|Home Tool Markup Language
Which tag makes the biggest heading?|<h1>|<head>|<big>|<title>
Which tag creates a link?|<a>|<link>|<url>|<href>
Which tag inserts an image?|<img>|<image>|<pic>|<src>
Which tag makes a paragraph?|<p>|<para>|<text>|<br>
Which attribute gives an image its alternative text?|alt|title|caption|name
Which tag makes an unordered list?|<ul>|<ol>|<li>|<list>
What does <br> do?|Line break|Bold text|New page|Border
Which element holds the visible page content?|<body>|<head>|<meta>|<title>
Which tag creates a table row?|<tr>|<td>|<th>|<row>
What is <meta name="viewport"> for?|Controlling layout on mobile screens|Adding a title|Linking a script|Setting the language
Which is a semantic element?|<article>|<div>|<span>|<b>
Which input type hides what is typed?|password|secret|hidden|text-hide
What does the lang attribute on <html> help with?|Accessibility and translation|Page speed|Colors|Images
What does defer do on a script tag?|Runs it after the document is parsed|Blocks parsing|Disables it|Loads it twice
`,
 fr:`
Que signifie HTML ?|HyperText Markup Language|HighText Machine Language|Hyperlink Tool Markup Language|Home Tool Markup Language
Quelle balise crée le plus grand titre ?|<h1>|<head>|<big>|<title>
Quelle balise crée un lien ?|<a>|<link>|<url>|<href>
Quelle balise insère une image ?|<img>|<image>|<pic>|<src>
Quelle balise crée un paragraphe ?|<p>|<para>|<text>|<br>
Quel attribut donne à une image son texte alternatif ?|alt|title|caption|name
Quelle balise crée une liste à puces ?|<ul>|<ol>|<li>|<list>
Que fait <br> ?|Un saut de ligne|Du texte en gras|Une nouvelle page|Une bordure
Quel élément contient le contenu visible de la page ?|<body>|<head>|<meta>|<title>
Quelle balise crée une ligne de tableau ?|<tr>|<td>|<th>|<row>
À quoi sert <meta name="viewport"> ?|Contrôler l’affichage sur les écrans mobiles|Ajouter un titre|Lier un script|Définir la langue
Lequel est un élément sémantique ?|<article>|<div>|<span>|<b>
Quel type d’input masque ce qui est tapé ?|password|secret|hidden|text-hide
À quoi sert l’attribut lang sur <html> ?|À l’accessibilité et à la traduction|À la vitesse de la page|Aux couleurs|Aux images
Que fait defer sur une balise script ?|Il l’exécute après l’analyse du document|Il bloque l’analyse|Il la désactive|Il la charge deux fois
`
},

{
 id:"english",
 n:"English",
 nf:"Anglais",
 e:"🇬🇧",
 en:`
She ___ a student.|is|are|am|be
What is the plural of "child"?|children|childs|childes|childrens
I ___ coffee every morning.|drink|drinks|drinking|drunk
What is the opposite of "big"?|small|tall|wide|long
There ___ two books on the table.|are|is|be|was
Yesterday I ___ to the market.|went|go|gone|goes
I have lived here ___ 2020.|since|for|from|during
If it rains, we ___ at home.|will stay|stayed|would stayed|staying
He is ___ than his brother.|taller|more tall|tallest|most tall
She asked me where ___.|I lived|did I live|do I live|I do live
By next year, I ___ my studies.|will have finished|will finish|finish|am finishing
If I ___ you, I would apply.|were|am|was being|will be
The new rule will ___ all students.|affect|effect|affects|effects
Hardly had he arrived ___ it started to rain.|when|than|then|that
She suggested ___ early.|leaving|to leave|leave|left
`
},

{
 id:"french",
 n:"Français",
 e:"🇫🇷",
 en:`
« Je ___ étudiant. »|suis|es|est|sont
Quel est le féminin de « ami » ?|amie|amiee|amite|amine
« Nous ___ au cinéma. »|allons|allez|vont|vais
Quel est le contraire de « grand » ?|petit|haut|long|large
« ___ maison est belle. »|La|Le|Les|Un
« Hier, je ___ au marché. »|suis allé|vais|irai|aller
Quel est le pluriel de « cheval » ?|chevaux|chevals|chevales|chevaus
« Il faut que tu ___ demain. »|viennes|viens|venir|venais
« Elle ___ ses devoirs avant de sortir. »|a fini|est finie|ont fini|finir
« Je ne ___ rien. »|vois|voir|voit|voyons
« Si j’avais le temps, je ___. »|viendrais|viendrai|viens|venais
« Les fleurs que j’ai ___ sont belles. »|cueillies|cueilli|cueillis|cueillie
« Bien que tu ___ fatigué, viens. »|sois|es|seras|étais
Quel mot est synonyme de « néanmoins » ?|cependant|donc|ainsi|car
« Quoique » est suivi de quel mode ?|Le subjonctif|L’indicatif futur|L’impératif|L’infinitif
`
},
];
