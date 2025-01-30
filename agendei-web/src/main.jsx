import React from "react";
import ReactDOM from "react-dom/client";

const nome = "icaro";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <h1>Agendei-web</h1>
        <h1>Agendei-{nome}</h1>
    </React.StrictMode>
);