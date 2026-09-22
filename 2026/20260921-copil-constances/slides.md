# Constances

**Comité de pilotage**

_21/09/2026_

---

## Agenda (1/2)

- Travaux estivaux _25'_
  - Paraclinique
  - Données additionnelles
  - Jeux de données
  - Recodage
  - Questionnaires

---

## Agenda (2/2)

- Vision synoptique _20'_
  - Présentation du dashboard
  - Priorités et points bloquants
  - Démarche qualité
- Points divers _5'_
  - Formation
- Administratif _5'_


---

## Travaux estivaux

---

### Paraclinique

- Construction d'un [instrument pour l'examen de santé](https://mekong.colectica.org/item/fr.inserm.constances/c6cf63ec-c8db-3822-94c8-7ad27e9b2fa2)
- [Documentation des choix opérés](https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms23/perimetre/paraclinique.md)
  -  Des questions en suspens

---

### Données additionnelles

- [Documentation du modèle proposé](https://github.com/Making-Sense-Info/Mekong/blob/main/doc/extra-sources-data-model.md#target-model) (🎯costrat juin 2026)
- [Application de gestion](https://adastra.making-sense.info)

---

### Jeux de données

- Construction de jeux de données correspondant aux tables de l'entrepôt
  - Table [`AQ_MODVIE_ALIM`](https://mekong.colectica.org/item/fr.inserm.constances/3131ac62-891b-357b-845f-aafc2d2dbcdc)
  - Variable [`AQ_ALIM_BoufDomine`](https://mekong.colectica.org/item/fr.inserm.constances/c7f9d29f-8f2e-3473-9de1-c13ed78fe0e5)
- Objectif SNDS simplifié (cf. priorités plus bas)

---

### Recodage

- Documentation en VTL des traitements associés aux recodages et aux calculs
  - [`AQ_ALIM_BoufDomine_n`](https://mekong.colectica.org/item/fr.inserm.constances/50856c40-0b5f-377f-ad7a-588e5862c016)
  - [`Dans Aqueduc`](https://aqueduc.constances.fr/variable_table.php?var=AQ_ALIM_BoufDomine_n)
  - L'[instruction de génération](https://mekong.colectica.org/item/fr.inserm.constances/e0507021-4955-35fc-b911-e51217cf2637)
  - La [classe de recodage](https://mekong.colectica.org/item/fr.inserm.constances/c969b352-77fc-3725-b5e4-0b66d1f61d6a)


---

### Questionnaires

- Changement d'environnement Pogues ; correction d'un bug par MS
- Amélioration du support côté Mekong

---

## Vision synoptique

---

### Dashboard

- [Document à visée panoramique](https://github.com/Making-Sense-Info/Suivi-Constances/blob/main/ms23/perimetre/synoptique.md), un dashboard pour le projet

---

### Priorités et points bloquants

- Documentation des jeux de données
- Gestion des concepts

Note:
Outillage de la gestion, sujet 2027

---

### Démarche qualité

- Production d'un rapport qualité...
- ...pour la mise en œuvre d'une démarche qualité

---

#### Rapport

- Un document texte organisé en sujets, comme :
  - des variables sans concept
  - des variables sans question
  - des incohérences dans les modalités des listes de codes entre le français et l'anglais
  - etc.
- À faire évoluer au besoin
- Intégrer au processus de conversion vers DDI Lifecycle

---

#### Démarche

- Démarche d'amélioration continue
- Basée sur Deming PDCA

---

#### Démarche qualité

[![](https://mermaid.ink/img/pako:eNpFkctugzAQRX8FzYpIJCIvHl5UQrCtxCLqovLGAhOsGE80MWrSJB-U78iPlYDbejVXx_fMYq5QYS2BQaPxq2oFWW9XcMONN7zSL7UwsykUfoFuzP28ldXBpczPKjv763jz-dutJIWkTsIqNDevcIYR7UgoKztp7M3LnW8EH88HqUZVrpQ5-8iy7vnQg9KxEgLYk6qBWeplAJ2kTrwiXF8tDrYdNnBgw0iy7s_zCjUSh2DCWlywtxOX-sCBm_ugPArzidj9Wgn7fQusEfo0pP5YCysLJfYk_r9IU0vKsTcW2DIcFcCucAa2TRdhFEWrcB0m6SpJ4gAuwKLNIk3jOFwtk-1mvU7iewDf485wkcTbAGStLNL7dJTxNvcfqTOB8Q?type=png)](https://mermaid.live/edit#pako:eNo9kctuwjAQRX8lmlWQAkp55OFFpSjZVsoCdVF5YyWGWDgeNDgqFPggvoMfq0ncejXXR_fMYq7QYCuBwU7jd9MJssG24oabwL06rLUwsylUYYV-LMOyk83BpyIsGjv77wTz-futJoWkTsIqNLeg8oYRbUkoK3tp7C0ovW8En88HqZ1qfKnw9pEV_fOhndKzGiLYk2qBWRpkBL2kXrwiXF8tDrZzGzgwN5Jsh_O8QY3EIZqwFhcc7MSlPnDg5u6UR2G-EPs_K-Gw74DthD65NBxbYWWlxJ5E__9L0rSSShyMBbYZFcCucHYhX8RJkizjVZzlyyxLI7gAS9aLPE_TePmWbdarVZbeI_gZd8aLLHUC2SqL9DEdZbzN_ReymYIQ)


---

## Formation

- Formation Jeux de données DDI Lifecycle le 14 octobre
- Avec introduction à DCAT et cie.

---

## Administratif

- Nouveau bon de commande ?
- Organisation des prochaines réunions
  - Copil distanciel 2eme semaine de novembre
  - Costrat autour du 15 décembre 
    - Option le 4 décembre
