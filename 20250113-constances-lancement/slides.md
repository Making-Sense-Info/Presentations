# Constances

## Réunion du 13 janvier 2024

---

## Épisodes précédents

Note:
Time 15'

----

- Commande initiale : prise de connaissance
- MAPA : expérimentation et première approche stratégique

----

### Premiers enseignements

- Faisabilité de DDI
    - Spécification des concepts
    - Distinction questions / variables
- Intérêt d'une approche globale FAIR
- Utilité des standards
    - Exemple : GSBPM
- Apport de l'IA (LLM)
- Synergies à entretenir (CASD, GIDE, ANS, FC...)

----

### Premiers enseignements (organisation)

- Points de satisfaction
    - Expertise des correspondants
    - Bon contact entre les équipes
- Points d'amélioration
    - Multiplicité des acteurs
    - Difficulté d'identifier les bons interlocuteurs
    - Maîtrise des délais de réponse

----

### Premiers enseignements (organisation)

- Point d'attention
  - Organisation du travail en distanciel
  - Information sur les travaux en cours

Note:
Data management plan

---

## Bilan MAPA

&#x1F449; <a href="https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms13/livrables/ms13-d8.md" target="_blank">rapport final</a>

Note:
Timing 30'

----

### Les prestations

- Plan d'Assurance Qualité
- Dossier d'état des lieux
- Référentiel d'interopérabilité
- Dix prototypes
- Plan de standardisation
- Dossier de réversibilité
- Rapport final

Note:
État des lieux :
- MS6, volumétrie variables, existence concepts
- MS13, procédure de nettoyage

----

### Focus

- <a href="https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms13/livrables/ms13-d3.md" target="_blank">Référentiel d'intéropérabilité</a>
- Prototypes
  - <a href="https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms13/livrables/ms13-p4/ms13-p4-p2.md" target="_blank">Provenance</a>
  - <a href="https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms13/livrables/ms13-p4/ms13-p4-p6.md" target="_blank">LLMs</a> 
  - <a href="https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms13/livrables/ms13-p4/ms13-p4-p7.md" target="_blank">OMOP</a>

Note:
LLM -> Kilimandjaro

----

### Vision GSBPM

&#x1F449; <a href="https://statswiki.unece.org/spaces/GSBPM/pages/113083140/Clickable+GSBPM+v5.1" target="_blank">Le GSBPM</a>

----

- **Conception**, **Construction**, 
  - DDI-Lifecycle documente les instruments de collecte et les jeux de données externes (SNDS)
  - Autres standards (<a href="https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms13/livrables/ms13-p4/ms13-p4-p8.md" target="_blank">SSN</a> pour les examens des CES)
- **Collecte**
  - Rétro-documentation des questionnaires existants
  - Production des questionnaires à partir du modèle DDI ?

----

- **Traitement** 
  - DDI-L voire CDI pour les variables dérivées et les agrégats  
  - VTL a un rôle à jouer comme spécification exécutable (+ autres standards pour la provenance)
- **Diffusion**
  - Les outils de catalogage + DCAT (<a href="https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms13/livrables/ms13-p4/ms13-p4-p3.md" target="_blank">prototype 3</a>)
  - Standards du monde de la santé (FHIR)

---

## Mekong

<img src="mekong-sunset.jpg" />

---

## La vision stratégique

Note:
Timing 5'

----

- Rendre les métadonnées actives
- Mettre l’utilisateur au centre
- Développer l'ouverture

----

### Rendre les métadonnées actives

----

![](active-metadata.svg)

----

### Mettre l'Utilisateur au centre

- Identifier les utilisateurs
- Les associer au projet (communication, démo, etc.)

----

### Développer l'ouverture

- Collaboration internationale
- Communication ouverte vers l'extérieur
- Solutions et développements open source

---

## Les grandes étapes

Note:
Timing 15'

----

- Mise en place des fondations
- Définition et priorisation des cas d'application
- Construction de la plateforme
- Formations
- Communication

----

![étapes mekong](constances-etapes-macro.svg)

----

![étapes fondations](constances-etapes-fondations.svg)

----

![étapes cas](constances-etapes-cas.svg)

----

![étapes plateforme](constances-etapes-plateforme.svg)

----

![étapes formation communication](constances-etapes-form-com.svg)

---

## Les fondations


Note:
15'

----

### Le Plan d'Assurance Qualité

 - Un <a href="https://github.com/Making-Sense-Info/Suivi-Constances/tree/main/ms23/paq" target="_blank">document</a> décrivant nos modalités d'organisation
 - Une base pour démarrer notre collaboration...
 - ...qui doit rester vivante

----

### Périmètre

![constances-gsbpm](constances-gsbpm.png)

----

### Périmètre &#128172; 

- Briques élémentaires
    - Concepts, variables, listes de codes, études
- Éléments verticaux
    - Questionnaires, tables, jeux de données
- Éléments horizontaux
    - Processus, traitements
- ...et les standards associés


----

### L'architecture

- Objectifs
    - Définir le cycle de vie de la métadonnée
    - Définir le ou les référentiels
    - Identifier les points d’interaction avec le reste du système d’information de Constances
    - Proposer les solutions logicielles adaptées
- Utilisation de standards

---

## Le plan de standardisation

Note:
Timing 20'

----

### Cas d'application FAIR

Des cas d'utilisation métier x des cibles de standardisation.

Note:
Utilisation du référentiel d'interopérabilité

----

#### Objectif

> Décrire les exigences fonctionnelles d’un système en adoptant le point de vue et le langage de l’utilisateur
final

----

#### Exemple

> Documenter les variables des questionnaires en DDI Lifecycle.

> Documenter le processus lié au SNDS en DDI CDI

----

#### Priorisation &#128172;

- La documentation des études et séries d’étude
- La collecte par questionnaire*
- La collecte des données cliniques et leur transmission à la biobanque
- L’acquisition et l’intégration de données externes
- La transformation des données
- La mise à disposition auprès des équipes de recherche
- Le suivi de la qualité


---

## La formation

Note:
Timing 5'

----

- Cycle régulier à mettre en place
  - Coller aux cas d'application
- Formations et supports par Making Sense
- 1ère proposition
  - DDI Lifecycle, introduction (mai 2025 ?)
  - DDI Lifecycle, avancé (septembre 2025 ?)
  - Web sémantique et standards associés (début 2026)
  - DDI CDI, VTL (courant 2026)

Note:
Formations également pour Making Sense sur certain standards notamment du domaine de la santé

---

## La communication

Note:
Timing 10'

----

### Présentation du projet 

- Webinaires réguliers
  - Identifier le public, les canaux de communication
- Conférences
  - EDDI, IASSIST
  - Évènements du domaine de la santé ?
- Autres rendez-vous
  - Comité Constances, club utilisateurs, etc.

Note:
FHIR devdays, input Constances
Collaboration reporting ANR

----

### Collaborations

- Cohortes (France Cohortes, Closer)
- Initiatives FAIR (Codata, GoFair)
- Partenaires de Constances (SAGES, Gide)

---

## L'organisation

Note:
Timing 30'

----

- Les rôles
- Les réunions
- La documentation du projet
- Les livrables

Note:
Préciser les attentes particulières par rapport à l'objet de la prestation

----

### Les rôles

&#x1F449; cf. <a href="https://github.com/Making-Sense-Info/Suivi-Constances/tree/main/ms23/paq#organisation-générale" target="_blank">PAQ</a>

----

### Les réunions régulières

- Un comité stratégique semestriel &#x1F3E2;
- Un comité de pilotage mensuel &#x1F3E2; / &#x1F5A5; 
- Un point hebdomadaire de suivi &#x1F5A5; 

&#x1F449; cf. <a href="https://github.com/Making-Sense-Info/Suivi-Constances/tree/main/ms23/paq#typologie-des-réunions" target="_blank">PAQ</a>

----

### Le suivi du projet

- Inspiration agilité

&#x1F449; cf. <a href="https://github.com/Making-Sense-Info/Suivi-Constances/tree/main/ms23/paq#suivi-de-projet" target="_blank">PAQ</a>

----

### La documentation du projet

- Dans le dépôt Github
  - Compte rendus
  - Documents de travail
  - Outil de suivi (Kanban)

----

### Les livrables &#128172;

- Documents, supports de formation, notes d'installation
- Code, configuration

---

## Prochaines étapes

Note:
Timing 15'

----

- Point administratif
- Mise en place de l'organisation (cf. PAQ)
- Prochains comités
- Définition du périmètre

Note:
PA : 
- unités d'oeuvre, plan de charge, factures
- Suivi des temps ?