# Archimate and Moderstats models

---

## What is ArchiMate?

----

- An enterprise architecture modeling language
- Published by The Open Group and aligned with TOGAF
- Now in version 3.2 (October 2022)

Note:
ArchiMate distinguishes itself from other languages such as Unified Modeling Language (UML) and Business Process Modeling and Notation (BPMN) by its enterprise modelling scope.
The European Interoperability Reference Architecture (EIRA) uses ArchiMate (and Archi)

----

<img src="full_framework.png">
The ArchiMate framework

Note:
Passive structure: entitiy on which actions are conducted (information objects, physical devices...)
Active structure : entities that display some behavior (business actors, application components...)
Behavior refers to the processes and functions performed by the active structures

----

Archimate is relevant for ModernStats models because it covers all the scope of enterprise architecture (capabilities, business functions, actors and roles...)

For example, CSDA is already expressed in ArchiMate

---

## What is Archi?

----

- Open source software to create ArchiMate models
- Easily and intuitively create all ArchiMate elements, relations and views
- Initially funded by JISC (UK)

Note:
Actively maintained: version 5.5 published in January 2025

---

## Work done

- Relevance for ModernStats models
- GSBPM and GAMSO
- CSDA (principles and specialization)

---

## How to use the models?

- Importing models
  - Very convenient for reuse...
  - ...but the default import behavior is a bit confusing
  - Organised source models are needed (if possible?)
- Examples
  - Le premier ou le deuxième ici : https://github.com/Making-Sense-Info/Suivi-Constances/tree/main/ms23/archi#plan (le deuxième j’aime bien parce qu’il illustre un usage existant - cible).
  - Et le premier ici : https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms23/archi/archi-metier.md#questionnaire-de-suivi
  - Les deux sont bien sûr dans le modèle Archimate de Constances

Note:
"...a bit confusing" -> les modèles importés le sont entièrement et se mélangent allégrement avec les concepts natifs au modèle en cours; le modèle cible est renommé avec le nom du modèle importé
"organised source models" -> mettre en place des dossiers dans les modèles source

---

## Next steps

- Complete GSBPM / GAMSO models (level of detail for textual description?)
- Consolidate CSDA model
- Review models (GSBPM / GAMSO / CSDA)
- Publish on Unece GitHub
- GSIM?
