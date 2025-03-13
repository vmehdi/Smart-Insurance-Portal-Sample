# Smart Insurance Portal Sample

This project is a Smart Insurance Application Portal built with Next.js. It allows users to apply for various insurance types (Health, Home, Car, Life, etc.) through dynamically generated forms fetched from an API.

## Key Features
-   Dynamic insurance application forms
-   Form structure fetched from an API
-   Dynamically handles fields, conditions, and validations
-   Efficient application management

## Technologies
- **Next.js** – (v15) building the frontend application.
- **Tailwind** – Modern Websites Css.
- **React-Query** – Query API.
- **React-react-table** – Data Table UI.
- **ZOD** – Validation.
- **Jotai** – State Management.
- **react-hook-form** – Form Management Library.

## Features Implemented
### Dynamic Form Generation
- Fetches form structure from an API.
– Forms are fetched from an API and rendered dynamically.
- Supports nested form sections.
- Some fields fetch options from an API based on other field values
- Validation all form fields using ZOD before submission.

### Customizable Table (List View)
- **Customizable Table**: Users can select which columns to display in the applications list
- **Sorting and Filtering**: Applications can be sorted and filtered

### Other Features
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on all device sizes


## Installation & Setup
1. Clone the repository:
  ```
   git clone https://github.com/vmehdi/Smart-Insurance-Portal-Sample.git
   cd your-repository
  ```

2. Install dependencies:
  ```
  bun install
  ```

3. Run in development mode:
  ```
  bun run dev
  ```

4. Build and start in production mode:
  ```
  bun run build
  bun run start
  ```


## Installation

(Provide installation instructions, e.g., using `npm` or `bun`)