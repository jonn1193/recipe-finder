# Recipe Finder

Recipe Finder is a custom front-end React application for searching recipes, viewing meal cards, and saving favorite recipes for later. The app uses TheMealDB API for recipe data and includes simulated backend responses for authentication and saved recipe actions during Stage 1.

## Project Features

- Search recipes using TheMealDB
- Display recipe cards from API response data
- Show a preloader while recipes are loading
- Show an error message if the API request fails
- Show a "Nothing found" message when a search has no results
- Render recipes three at a time with a "Show more" button
- Save and remove recipes using simulated backend responses
- Navigate between the main page and saved recipes page with React Router
- Open and close login/register modals
- Simulate user login, registration, token checking, and logout
- Responsive layout for desktop, tablet, and mobile screens

## Technologies Used

- React
- Vite
- React Router
- JavaScript
- HTML
- CSS
- BEM naming methodology
- TheMealDB API

## API

This project uses TheMealDB API.

API documentation: https://www.themealdb.com/api.php

The recipe search request is handled in:

```text
src/utils/MealDbApi.js
```

Simulated backend responses are handled in:

```text
src/utils/MainApi.js
```

## Project Structure

```text
src/
  components/
  images/
  utils/
  vendor/
```

Component styles are organized alongside their matching component files.

## Running the Project Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Demo / Usage

1. Search for a recipe by ingredient or meal name.
2. View recipe cards returned from TheMealDB.
3. Click "Show more" to reveal additional recipes.
4. Save recipes and view them on the Saved Recipes page.
5. Use the login/register modals to preview the authentication flow.

## Deployment

Deployed site: [Recipe Finder](https://jonn1193.github.io/recipe-finder/)

## Project Pitch Video

Pitch video: _Add video link here_
