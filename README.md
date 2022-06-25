# Consume API

- [Consume API](#consume-api)
  - [Project Alias](#project-alias)
  - [Goal](#goal)
  - [Technologies](#technologies)
  - [Roadmap](#roadmap)
    - [1. Initial Setup](#1-initial-setup)
    - [2. Establish basic search](#2-establish-basic-search)
    - [3. Establish advanced search](#3-establish-advanced-search)
    - [4. Enhance card display](#4-enhance-card-display)
    - [5. Enhance advanced search](#5-enhance-advanced-search)
    - [6. Enhance Multiple Results display](#6-enhance-multiple-results-display)
  - [Deployment](#deployment)

## Project Alias

Adrix

## Goal

This project will showcase the ability to create a rich front-end webpage which consumes an established API.

## Technologies

1. Scryfall API
2. React
   - CRA
   - Typescript
   - Material UI
   - Axios
   - Redux
   - React-Router
3. PNPM
4. GitHub

## Roadmap

### 1. Initial Setup

1. Initialize repo
2. Set up pipeline
   - Github hooks
3. Initialize application
   - Install dependencies
   - Configuration
     - Typescript
     - ESLint
     - Prettier
     - Axios
     - Redux
     - React-router
   - Set up models
   - Set up sitemap

### 2. Establish basic search

1. Should be able to search for a card and have its info displayed
2. Pages:
   1. '/' - Home page. Alias '/search'
   2. '/search' - Home page. Alias '/'
   3. '/search/results' - results page (when single card)
      - search in URL is query params
3. Features
   - expected search page features
     1. Page displays a search bar
     2. Page displays a search button
   - Expected card display page features
     1. Application header with simple search bar
     2. Page displays
        - card image
        - card name
        - card mana cost
        - card type
        - card oracle text
        - card p/t or loyalty
        - Card artist credit

### 3. Establish advanced search

1. Should be able to fine-tune search parameters
2. Pages:
   1. '/search/advanced' - Advanced search form
   2. '/search/results' - results page (when multiple cards)
3. Features
   - Expected search page features
     1. Page displays an advanced search button
   - Expected advanced search features
     1. Application header with simple search bar
     2. Page form for advanced search functionality
     3. Fields:
        - Card Name **simple text**
        - mana cost narrowing **simple text**
        - color narrowing **checkboxes**
        - type search **simple text**
        - Text search **simple text**
        - rarity narrowing **checkboxes**
   - Expected results page features
     1. Display cards as clickable list
        - rarity
        - name
        - mana cost

### 4. Enhance card display

1. For a searched card, additional information should be displayed.
2. Pages (no addtl)
3. Features
   - expected single result page features:
     1. Display current displayed card set
     2. display format legalities
     3. display card price
     4. display alternate prints (as list) with prices
     5. display card rulings
     6. display links to other services (tcgplayer, gatherer, etc.)

### 5. Enhance advanced search

1. Advanced search should be expanded
2. Pages (no addtl)
3. Features
   - expected advanced search form features:
     1. Fields:
        - Mana cost narrowing:
          - Clickable wubrg+ symbols
          - CMC switch
        - Type search:
          - Autocompletion of types
          - Split into multiple fields:
            - Supertype
            - Type
            - Subtypes (determined by type)
        - Stats search
          - Power
          - Toughness
          - Loyalty
        - Format search
          - Legal
          - Illegal
          - Banned
        - Artist search
        - Price search?

### 6. Enhance Multiple Results display

1. Multiple results should be enhanced
2. Pages (no addtl)
3. Features
   - display as
     - Images
     - List
       - Expand displayed properties
       - Allow selection of displayed properties
       - Allow saving display preferences locally
     - Full results

## Deployment

Deploy via AWS

- Amplify?
- S3 bucket?
-
