import React from "react";

const Nav = () => {
    return (
        <>
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/componentsBtsrp" className="hover:text-gray-200">
                            Ejemplos de componentes
                        </a>
                    </li>
                    <li>
                        <a href="/card" className="hover:text-gray-200">
                            Card con info
                        </a>
                    </li>
                    <li>
                        <a href="/calculator" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/todoList" className="hover:text-gray-200">
                            "To do" List
                        </a>
                    </li>
                    <li>
                        <a href="/formStudents" className="hover:text-gray-200">
                            Formulario de estudiantes
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Nav;