# 🧑‍🍳 Recipe Finder App

Welcome to the **Recipe Finder App**, a React-based web application that allows users to search for recipes by name or even by just a single letter. It features secure authentication, a beautiful UI, and real-time recipe data using a public API.

---

## 🚀 Features

- 🔍 **Search Recipes**
  - By **Name** (e.g., "Biryani")
  - By **First Letter** (e.g., "B")
- 👤 **User Authentication**
  - Sign Up & Log In functionality using **Appwrite**
- 🔐 **Protected Routes**
  - Secured using a custom `AuthLayout` component
- 🎨 **UI Styling**
  - Built with **TailwindCSS** for responsive and modern design
- ⚙️ **State Management**
  - Implemented using **Redux Toolkit**
- 🧱 **Backend Integration**
  - Uses **Appwrite** for authentication and database
- ❤️ **(Coming Soon)** Favorites Section to save your best-loved recipes

---

## 📦 Tech Stack

- **Frontend:** React, Redux Toolkit, TailwindCSS
- **Authentication & Database:** Appwrite
- **Routing & Security:** React Router + AuthLayout
- **API:** [TheMealDB API](https://www.themealdb.com/api.php)
---

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/muneebsafdar/Recipe-Finder
cd recipe-finder-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root folder and add your Appwrite credentials:

```env
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
```

4. **Start the app**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🤝 Contributing

Want to make this recipe app even tastier?

- Add a **Favorites section**
- Improve the **UI/UX**
- Add **search filters** like area or category
- Fix bugs or improve performance

Fork it, improve it, and send a pull request. Let's build something delicious together!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

Feel free to reach out via:

- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/muneeb--ur--rehman/)
- **GitHub**: [muneebsafdar](https://github.com/muneebsafdar)

---

**Bon Appétit! 🍽️**
