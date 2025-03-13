# Memory Game

## Overview
This project is a simple memory game built with React and TypeScript. The goal of the game is to click on every image without clicking the same image twice. The game fetches GIFs from the Giphy API based on user input.
(live site)[https://yskim308memory.netlify.app/]

---

## File Structure

### Root Files

#### `App.tsx`
This is the main component of the app, responsible for the game's logic and rendering. Key functions include:

- **onSearchSubmit(data: SearchBarData)**: Updates the search data and resets the game count and clicked cards when the user submits a new search.
- **onCardClick(card: CardObject)**: Handles what happens when a card is clicked:
  - If the card was already clicked, it triggers a "Game Over" screen.
  - If all unique cards are clicked, it triggers a "Game Won" screen.
  - Otherwise, it shuffles the cards and updates the clicked cards and game count.
- **useEffect hook**: Fetches GIFs from the Giphy API whenever `searchData` changes.

#### `types.ts`
Defines the TypeScript interfaces used throughout the app:
- **CardObject**: Represents a card (GIF) with `url`, `desc`, and `id`.
- **CardProps**: Props for the `Card` component.
- **GiphyObject**: Structure of the Giphy API response.
- **GameHeaderProps**: Props for the `GameHeader` component.
- **SearchBarData**: Stores search `query` and `limit`.
- **SearchBarProps**: Props for the `SearchBar` component.

#### `utils.ts`
Contains utility functions:
- **getGifs(search: string, gifNumber: string): Promise<CardObject[]>**: Fetches GIFs from the Giphy API or falls back to default data if the API request fails.
- **processJson(gifs: GiphyObject, cardArray: CardObject[])**: Processes the Giphy API response and populates the `cardArray`.
- **shuffleCards(cards: CardObject[])**: Implements the Fisher-Yates shuffle algorithm to randomize card order.

#### `main.tsx`
The entry point of the app:
- Uses React's `createRoot()` to render the `App` component within a `StrictMode` wrapper.

---

### Components

#### `Card.tsx`
Displays individual cards:
- **handleClick(card: CardObject)**: Called when a card is clicked, passing the card data back to the parent component.
- **useState for hovered**: Handles hover effects.

#### `GameOver.tsx`
- **GameOver()**: Displays the "Game Over" screen.
- **GameWon()**: Displays the "Game Won" screen.

#### `Layout.tsx`
Contains UI components for the game layout:

- **Header()**: Displays the game title and instructions.
- **SearchBar({ handleSubmit }: SearchBarProps)**: Allows users to input a search query and select the number of cards. Calls `handleSubmit` with the form data.
- **handleChange(e: ChangeEvent<HTMLInputElement>)**: Updates the search data as users type.
- **onSubmit(e: FormEvent)**: Prevents the default form submission and passes search data to the parent component.
- **GameHeader({ count }: GameHeaderProps)**: Displays the current count of correctly clicked cards.
- **Footer()**: Contains GitHub and LinkedIn links.

---

## How to Run the Project
1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run dev
```
3. Open the app in your browser, usually at `http://localhost:3000`

---

## Dependencies
- React
- TypeScript
- TailwindCSS

---

## Features
- Search for GIFs using the Giphy API
- Dynamic grid layout for cards
- Hover effects and animations
- Victory and defeat screens

---

## Future Improvements
- Add difficulty levels (adjust number of cards dynamically)
- Improve mobile responsiveness
- Optimize API requests with debouncing

---
