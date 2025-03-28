import React from "react";

const Nav = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/ComponentsBtsrp">Componentes Bootstrap</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Calculator">Calculadora</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Card">Card</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/TodoList">Lista "To do"</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="FormStudents">Formulario de estudiantes</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    );
};

export default Nav;