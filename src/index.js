import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import reportWebVitals from './reportWebVitals';
//Для того чтобы подключать картинки в файл, необходимо сначала их импортировать
// import nothing from './images/Notfing.png'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
