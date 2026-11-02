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
 id:"reseau",
 n:"Computer Networking",
 nf:"Réseau informatique",
 e:"🌐",
 en:`
What is a computer network?|Devices connected to share data and resources|A single computer|A type of software license|A storage disk
Which device connects different networks and routes data between them?|Router|Keyboard|Monitor|Printer
Which cable is most common in local networks?|Ethernet (RJ45)|HDMI|Audio jack|Power cord
What does LAN stand for?|Local Area Network|Large Access Node|Linked Area Network|Logical Address Number
What is a star topology?|All devices connect to a central device|Devices connected in a ring|Devices connected by one single cable|Devices with no connection
How many bits are in an IPv4 address?|32|16|64|128
What does DNS do?|Translates names into IP addresses|Encrypts email|Assigns Wi-Fi passwords|Blocks ads
What does DHCP do?|Assigns IP addresses automatically|Stores websites|Cools servers|Prints documents
What does a switch do?|Forwards frames between devices on a LAN|Translates domain names|Stores emails|Provides internet from space
Which port does HTTPS use by default?|443|80|21|25
What does 192.168.1.0/24 mean?|The first 24 bits are the network part|Only 24 hosts exist|It uses port 24|It is version 24
What does NAT do?|Translates private addresses to a public one|Encrypts traffic|Assigns MAC addresses|Blocks all ports
At which OSI layer does a router mainly work?|Network (layer 3)|Physical (layer 1)|Application (layer 7)|Data link (layer 2)
Which protocol is connection-oriented and reliable?|TCP|UDP|ICMP|DNS
What does a VLAN do?|Splits a switch into separate logical networks|Increases Wi-Fi range|Encrypts the disk|Assigns domain names
`,
 fr:`
Qu’est-ce qu’un réseau informatique ?|Des appareils connectés pour partager des données et des ressources|Un seul ordinateur|Un type de licence logicielle|Un disque de stockage
Quel appareil relie des réseaux différents et achemine les données entre eux ?|Le routeur|Le clavier|L’écran|L’imprimante
Quel câble est le plus courant dans les réseaux locaux ?|Ethernet (RJ45)|HDMI|Prise jack audio|Cordon d’alimentation
Que signifie LAN ?|Local Area Network (réseau local)|Large Access Node|Linked Area Network|Logical Address Number
Qu’est-ce qu’une topologie en étoile ?|Tous les appareils sont reliés à un appareil central|Les appareils sont reliés en anneau|Les appareils sont reliés par un seul câble|Les appareils ne sont pas reliés
Combien de bits compte une adresse IPv4 ?|32|16|64|128
Que fait le DNS ?|Il traduit des noms en adresses IP|Il chiffre les e-mails|Il attribue les mots de passe Wi-Fi|Il bloque les publicités
Que fait le DHCP ?|Il attribue automatiquement des adresses IP|Il stocke des sites web|Il refroidit les serveurs|Il imprime des documents
Que fait un commutateur (switch) ?|Il transmet les trames entre les appareils d’un LAN|Il traduit les noms de domaine|Il stocke les e-mails|Il fournit Internet par satellite
Quel port le HTTPS utilise-t-il par défaut ?|443|80|21|25
Que signifie 192.168.1.0/24 ?|Les 24 premiers bits forment la partie réseau|Il n’y a que 24 hôtes|Il utilise le port 24|C’est la version 24
Que fait le NAT ?|Il traduit des adresses privées en une adresse publique|Il chiffre le trafic|Il attribue des adresses MAC|Il bloque tous les ports
À quelle couche OSI un routeur travaille-t-il principalement ?|Réseau (couche 3)|Physique (couche 1)|Application (couche 7)|Liaison de données (couche 2)
Quel protocole est orienté connexion et fiable ?|TCP|UDP|ICMP|DNS
Que fait un VLAN ?|Il sépare un commutateur en plusieurs réseaux logiques|Il augmente la portée du Wi-Fi|Il chiffre le disque|Il attribue des noms de domaine
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

{
 id:"linux",
 n:"Linux",
 e:"🐧",
 en:`
Which command lists the files in a folder?|ls|dir|show|list
Which command shows the current directory?|pwd|cwd|where|path
Which command changes the current directory?|cd|chdir|move|goto
Which command creates a new folder?|mkdir|newdir|md|folder
Which command displays the contents of a file?|cat|print|open|view
What does sudo do?|Runs a command with administrator rights|Deletes a file|Shows disk space|Restarts the network
Which command removes a file?|rm|del|erase|remove
What does chmod do?|Changes file permissions|Changes the owner’s name|Copies a file|Compresses a folder
What does the > symbol do in the command ls > list.txt?|Writes the output into a file|Compares two files|Deletes the file|Runs the command twice
Which command searches for text inside files?|grep|search|seek|look
What does the ps command show?|Running processes|Disk partitions|Network speed|Installed packages
Which file stores the list of users on a Linux system?|/etc/passwd|/etc/users.txt|/home/users|/var/accounts
What does chmod 755 file give?|Full rights to the owner, read and execute to others|Full rights to everyone|Only the owner can read|No one can run it
What is the root directory?|/ (the top of the file system)|/home|/root|/usr
Which command shows free disk space?|df -h|top|ping|whoami
`,
 fr:`
Quelle commande liste les fichiers d’un dossier ?|ls|dir|show|list
Quelle commande affiche le dossier courant ?|pwd|cwd|where|path
Quelle commande change de dossier ?|cd|chdir|move|goto
Quelle commande crée un nouveau dossier ?|mkdir|newdir|md|folder
Quelle commande affiche le contenu d’un fichier ?|cat|print|open|view
Que fait sudo ?|Il exécute une commande avec les droits d’administrateur|Il supprime un fichier|Il affiche l’espace disque|Il redémarre le réseau
Quelle commande supprime un fichier ?|rm|del|erase|remove
Que fait chmod ?|Il modifie les permissions d’un fichier|Il change le nom du propriétaire|Il copie un fichier|Il compresse un dossier
Que fait le symbole > dans la commande ls > liste.txt ?|Il écrit la sortie dans un fichier|Il compare deux fichiers|Il supprime le fichier|Il exécute la commande deux fois
Quelle commande cherche du texte dans des fichiers ?|grep|search|seek|look
Que montre la commande ps ?|Les processus en cours|Les partitions du disque|La vitesse du réseau|Les paquets installés
Quel fichier contient la liste des utilisateurs d’un système Linux ?|/etc/passwd|/etc/users.txt|/home/users|/var/accounts
Que donne chmod 755 fichier ?|Tous les droits au propriétaire, lecture et exécution aux autres|Tous les droits à tout le monde|Seul le propriétaire peut lire|Personne ne peut l’exécuter
Qu’est-ce que le répertoire racine ?|/ (le sommet du système de fichiers)|/home|/root|/usr
Quelle commande affiche l’espace disque libre ?|df -h|top|ping|whoami
`
},
{
 id:"ai",
 n:"AI",
 nf:"IA",
 e:"🧠",
 en:`
What does AI stand for?|Artificial Intelligence|Automatic Internet|Advanced Interface|Applied Integration
What is machine learning?|Learning patterns from data|Writing every rule by hand|Repairing hardware|Browsing the web
Which is an example of AI in daily life?|A voice assistant|A light bulb|A paper map|A screwdriver
What is training data?|Examples used to teach a model|The model’s final answer|The computer’s memory chip|A type of cable
What is a chatbot?|A program that talks with users|A type of keyboard|A video format|An antivirus
What is supervised learning?|Learning from labeled examples|Learning with no data|Learning only from rewards|Learning by copying code
What is a neural network inspired by?|The brain|The sun|The internet|Weather patterns
What does overfitting mean?|The model memorizes training data and fails on new data|The model is too small|The model runs too fast|The data is too clean
What is a classification task?|Predicting a category|Predicting a number only|Drawing images|Cleaning data
Which language is most used for machine learning?|Python|HTML|CSS|Assembly
What is a prompt in generative AI?|The instruction given to the model|The training data|A type of chip|The final output
What does a loss function measure?|How wrong the model’s predictions are|The size of the model|The training time|The number of users
What is reinforcement learning?|Learning by trial and error with rewards|Learning from labeled photos|Memorizing a dictionary|Copying another model
Why split data into training and test sets?|To check performance on unseen data|Only to make training faster|To reduce the file size|To avoid using labels
What is bias in an AI system?|Systematically unfair or skewed results from the data or design|A fast response|An extra layer|A hardware fault
`,
 fr:`
Que signifie IA ?|Intelligence Artificielle|Internet Automatique|Interface Avancée|Intégration Appliquée
Qu’est-ce que l’apprentissage automatique ?|Apprendre des motifs à partir de données|Écrire chaque règle à la main|Réparer du matériel|Naviguer sur le web
Lequel est un exemple d’IA dans la vie quotidienne ?|Un assistant vocal|Une ampoule|Une carte en papier|Un tournevis
Que sont les données d’entraînement ?|Des exemples utilisés pour apprendre à un modèle|La réponse finale du modèle|La puce mémoire de l’ordinateur|Un type de câble
Qu’est-ce qu’un chatbot ?|Un programme qui discute avec les utilisateurs|Un type de clavier|Un format vidéo|Un antivirus
Qu’est-ce que l’apprentissage supervisé ?|Apprendre à partir d’exemples étiquetés|Apprendre sans données|Apprendre uniquement avec des récompenses|Apprendre en copiant du code
De quoi un réseau de neurones s’inspire-t-il ?|Du cerveau|Du soleil|D’Internet|Des schémas météo
Que signifie le surapprentissage (overfitting) ?|Le modèle mémorise les données d’entraînement et échoue sur de nouvelles données|Le modèle est trop petit|Le modèle s’exécute trop vite|Les données sont trop propres
Qu’est-ce qu’une tâche de classification ?|Prédire une catégorie|Prédire uniquement un nombre|Dessiner des images|Nettoyer des données
Quel langage est le plus utilisé en apprentissage automatique ?|Python|HTML|CSS|Assembleur
Qu’est-ce qu’un prompt en IA générative ?|L’instruction donnée au modèle|Les données d’entraînement|Un type de puce|Le résultat final
Que mesure une fonction de perte ?|À quel point les prédictions du modèle sont fausses|La taille du modèle|Le temps d’entraînement|Le nombre d’utilisateurs
Qu’est-ce que l’apprentissage par renforcement ?|Apprendre par essais et erreurs avec des récompenses|Apprendre à partir de photos étiquetées|Mémoriser un dictionnaire|Copier un autre modèle
Pourquoi séparer les données en ensembles d’entraînement et de test ?|Pour vérifier les performances sur des données inconnues|Seulement pour accélérer l’entraînement|Pour réduire la taille du fichier|Pour éviter les étiquettes
Qu’est-ce qu’un biais dans un système d’IA ?|Des résultats systématiquement injustes ou faussés par les données ou la conception|Une réponse rapide|Une couche supplémentaire|Une panne matérielle
`
},
{
 id:"uiux",
 n:"UI/UX",
 e:"🎨",
 en:`
What does UI stand for?|User Interface|Universal Internet|User Integration|Unified Input
What does UX stand for?|User Experience|User Extension|Unique Exchange|Universal Experience
What is a wireframe?|A simple layout sketch of a screen|A final colored design|A type of font|A programming language
Which tool is commonly used for UI design?|Figma|Excel|Notepad|Terminal
What is a button used for?|Letting users take an action|Storing data|Changing the screen size|Printing
What is a prototype?|An interactive model of a design|A finished app|A color palette|A database
What is a color palette?|The set of colors used in a design|A list of fonts|A page layout|A type of image
Why is consistency important in a design?|Users learn the interface faster|It makes pages heavier|It hides content|It removes navigation
What is a user persona?|A fictional profile of a typical user|A real customer’s password|A team member|A type of button
What is white space (negative space)?|Empty space that helps readability|A white background only|Hidden text|A broken layout
What is usability testing?|Watching real users try the product|Testing the server speed|Checking the code syntax|Translating the text
What does WCAG address?|Web accessibility|Server security|Database design|Image compression
What is a user flow?|The path a user takes to complete a task|A type of animation|A color rule|A hosting plan
What is A/B testing?|Comparing two versions to see which performs better|Testing two servers|Checking two languages|Writing two codes
What does visual hierarchy do?|Guides the eye to the most important elements first|Makes all elements equal|Removes images|Adds more colors
`,
 fr:`
Que signifie UI ?|User Interface (interface utilisateur)|Universal Internet|User Integration|Unified Input
Que signifie UX ?|User Experience (expérience utilisateur)|User Extension|Unique Exchange|Universal Experience
Qu’est-ce qu’un wireframe (maquette fil de fer) ?|Un schéma simple de la disposition d’un écran|Un design final en couleurs|Un type de police|Un langage de programmation
Quel outil est couramment utilisé pour le design d’interface ?|Figma|Excel|Bloc-notes|Terminal
À quoi sert un bouton ?|À permettre à l’utilisateur d’effectuer une action|À stocker des données|À changer la taille de l’écran|À imprimer
Qu’est-ce qu’un prototype ?|Un modèle interactif d’un design|Une application terminée|Une palette de couleurs|Une base de données
Qu’est-ce qu’une palette de couleurs ?|L’ensemble des couleurs utilisées dans un design|Une liste de polices|Une mise en page|Un type d’image
Pourquoi la cohérence est-elle importante dans un design ?|L’utilisateur apprend plus vite l’interface|Elle alourdit les pages|Elle cache le contenu|Elle supprime la navigation
Qu’est-ce qu’une persona ?|Un profil fictif d’utilisateur type|Le mot de passe d’un vrai client|Un membre de l’équipe|Un type de bouton
Qu’est-ce que l’espace blanc (espace négatif) ?|Un espace vide qui améliore la lisibilité|Uniquement un fond blanc|Du texte caché|Une mise en page cassée
Qu’est-ce qu’un test d’utilisabilité ?|Observer de vrais utilisateurs essayer le produit|Tester la vitesse du serveur|Vérifier la syntaxe du code|Traduire le texte
Que couvre le WCAG ?|L’accessibilité du web|La sécurité des serveurs|La conception de bases de données|La compression d’images
Qu’est-ce qu’un parcours utilisateur (user flow) ?|Le chemin suivi par un utilisateur pour accomplir une tâche|Un type d’animation|Une règle de couleurs|Une offre d’hébergement
Qu’est-ce qu’un test A/B ?|Comparer deux versions pour voir laquelle fonctionne mieux|Tester deux serveurs|Vérifier deux langues|Écrire deux codes
À quoi sert la hiérarchie visuelle ?|À guider l’œil vers les éléments les plus importants en premier|À rendre tous les éléments égaux|À supprimer les images|À ajouter plus de couleurs
`
},
 {
 id:"video",
 n:"Video Editing",
 nf:"Montage vidéo",
 e:"🎬",
 en:`
What is the timeline in a video editor?|The area where clips are arranged in order|The export button|The list of fonts|The sound card
Which free app, popular for short videos on phones, is owned by ByteDance?|CapCut|Premiere Pro|Final Cut Pro|DaVinci Resolve
What does trimming a clip do?|Shortens it by cutting its start or end|Adds a filter|Changes its file format|Makes it louder
What does FPS stand for?|Frames per second|Files per screen|Format per size|Filters per scene
What is a transition?|An effect between two clips|A type of microphone|A video file format|A font style
Which aspect ratio is typically used for TikTok and Reels?|9:16|16:9|4:3|1:1
What is a keyframe used for?|Changing a property, like position or size, over time|Deleting a clip|Exporting a video|Recording audio
What is B-roll?|Extra footage that supports the main footage|The main interview|A sound effect|A subtitle file
Which video editing software is made by Adobe?|Premiere Pro|DaVinci Resolve|Final Cut Pro|CapCut
What is the purpose of color grading?|Setting the look and mood through color|Removing background noise|Compressing the video|Adding subtitles
Which video editing software is developed by Apple?|Final Cut Pro|Premiere Pro|DaVinci Resolve|Vegas Pro
What does exporting at 1080p mean?|A resolution of 1920 by 1080 pixels|A frame rate of 1080|A file size of 1080 MB|A duration of 1080 seconds
What does a higher bitrate usually mean?|Higher quality and a larger file|Lower quality and a smaller file|Slower playback|Fewer frames
What is a codec?|A method for compressing and decompressing video|A type of camera lens|A color filter|A subtitle style
What is the standard frame rate for cinema?|24 fps|10 fps|90 fps|144 fps
`,
 fr:`
Qu’est-ce que la timeline (ligne de temps) dans un logiciel de montage ?|La zone où les clips sont organisés dans l’ordre|Le bouton d’exportation|La liste des polices|La carte son
Quelle application gratuite, populaire pour les vidéos courtes sur téléphone, appartient à ByteDance ?|CapCut|Premiere Pro|Final Cut Pro|DaVinci Resolve
Que fait le découpage (trim) d’un clip ?|Il le raccourcit en coupant son début ou sa fin|Il ajoute un filtre|Il change son format de fichier|Il augmente le volume
Que signifie FPS ?|Images par seconde (frames per second)|Fichiers par écran|Format par taille|Filtres par scène
Qu’est-ce qu’une transition ?|Un effet entre deux clips|Un type de microphone|Un format de fichier vidéo|Un style de police
Quel format d’image est généralement utilisé pour TikTok et les Reels ?|9:16|16:9|4:3|1:1
À quoi sert une image clé (keyframe) ?|À modifier une propriété, comme la position ou la taille, au fil du temps|À supprimer un clip|À exporter une vidéo|À enregistrer du son
Qu’est-ce que le B-roll ?|Des images supplémentaires qui illustrent les images principales|L’interview principale|Un effet sonore|Un fichier de sous-titres
Quel logiciel de montage vidéo est édité par Adobe ?|Premiere Pro|DaVinci Resolve|Final Cut Pro|CapCut
À quoi sert l’étalonnage des couleurs ?|À définir le style et l’ambiance grâce aux couleurs|À supprimer le bruit de fond|À compresser la vidéo|À ajouter des sous-titres
Quel logiciel de montage vidéo est développé par Apple ?|Final Cut Pro|Premiere Pro|DaVinci Resolve|Vegas Pro
Que signifie une exportation en 1080p ?|Une résolution de 1920 par 1080 pixels|Une cadence de 1080 images par seconde|Un fichier de 1080 Mo|Une durée de 1080 secondes
Que signifie généralement un débit (bitrate) plus élevé ?|Une meilleure qualité et un fichier plus lourd|Une qualité plus faible et un fichier plus léger|Une lecture plus lente|Moins d’images
Qu’est-ce qu’un codec ?|Une méthode de compression et de décompression de la vidéo|Un type d’objectif de caméra|Un filtre de couleur|Un style de sous-titres
Quelle est la cadence standard du cinéma ?|24 images par seconde|10 images par seconde|90 images par seconde|144 images par seconde
`
},
{
 id:"design",
 n:"Graphic Design",
 nf:"Design graphique",
 e:"🖌️",
 en:`
Which software is best known for photo editing?|Adobe Photoshop|Microsoft Excel|Notepad|Visual Studio Code
Which easy online tool is used to make posters and social media designs?|Canva|Wireshark|PuTTY|Arduino IDE
In the traditional art color wheel, which two colors mix to make orange?|Red and yellow|Blue and yellow|Red and blue|Green and yellow
What is typography?|The art of arranging and styling text|The study of colors|A type of image file|A drawing tool
What does a logo mainly represent?|The identity of a brand|A price list|A file size|A password
What does RGB stand for?|Red, Green, Blue|Right, Grid, Border|Raster, Gradient, Blur|Red, Gray, Black
Which color mode is mainly used for printing?|CMYK|RGB|HEX|HSL
Which file format supports transparency?|PNG|JPG|MP3|DOCX
What is the main difference between vector and raster images?|Vector images scale without losing quality|Raster images scale without losing quality|Vector images are always photos|Raster images have no pixels
Which Adobe software is best known for vector graphics?|Illustrator|Premiere Pro|Audition|Lightroom
What is the purpose of a layout grid?|To align and organize elements consistently|To compress images|To change color modes|To add animations
What is kerning?|The spacing between two specific letters|The size of a font|The thickness of a line|The color of text
What does DPI measure?|The density of dots in a printed or digital image|The brightness of a screen|The weight of a font|The speed of a printer
What is contrast in design?|A visible difference between elements, such as light and dark|Using only one color|Making all elements equal|Removing the background
Which is a free, open-source alternative to Photoshop?|GIMP|Illustrator|InDesign|Lightroom
`,
 fr:`
Quel logiciel est surtout connu pour la retouche photo ?|Adobe Photoshop|Microsoft Excel|Bloc-notes|Visual Studio Code
Quel outil en ligne simple permet de créer des affiches et des visuels pour les réseaux sociaux ?|Canva|Wireshark|PuTTY|Arduino IDE
Dans le cercle chromatique traditionnel, quelles deux couleurs donnent de l’orange en se mélangeant ?|Rouge et jaune|Bleu et jaune|Rouge et bleu|Vert et jaune
Qu’est-ce que la typographie ?|L’art d’organiser et de styliser le texte|L’étude des couleurs|Un type de fichier image|Un outil de dessin
Que représente principalement un logo ?|L’identité d’une marque|Une liste de prix|Une taille de fichier|Un mot de passe
Que signifie RVB (RGB) ?|Rouge, Vert, Bleu|Droite, Grille, Bordure|Matriciel, Dégradé, Flou|Rouge, Gris, Noir
Quel mode colorimétrique est surtout utilisé pour l’impression ?|CMJN (CMYK)|RVB (RGB)|HEX|TSL (HSL)
Quel format de fichier prend en charge la transparence ?|PNG|JPG|MP3|DOCX
Quelle est la principale différence entre une image vectorielle et une image matricielle ?|Une image vectorielle peut être agrandie sans perdre en qualité|Une image matricielle peut être agrandie sans perdre en qualité|Les images vectorielles sont toujours des photos|Les images matricielles n’ont pas de pixels
Quel logiciel Adobe est surtout connu pour les graphiques vectoriels ?|Illustrator|Premiere Pro|Audition|Lightroom
À quoi sert une grille de mise en page ?|À aligner et organiser les éléments de façon cohérente|À compresser les images|À changer les modes colorimétriques|À ajouter des animations
Qu’est-ce que le crénage (kerning) ?|L’espacement entre deux lettres précises|La taille d’une police|L’épaisseur d’un trait|La couleur du texte
Que mesure le DPI ?|La densité de points d’une image imprimée ou numérique|La luminosité d’un écran|Le poids d’une police|La vitesse d’une imprimante
Qu’est-ce que le contraste en design ?|Une différence visible entre des éléments, comme le clair et le sombre|Utiliser une seule couleur|Rendre tous les éléments égaux|Supprimer l’arrière-plan
Quelle alternative gratuite et open source à Photoshop existe-t-il ?|GIMP|Illustrator|InDesign|Lightroom
`
},
];
