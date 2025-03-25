import React from 'react';

import Buttons from "../components/componentsBootstrap/buttons"
import Accordion from "../components/componentsBootstrap/accordion"
import Modal from "../components/componentsBootstrap/modal"
import ScrollSpy from "../components/componentsBootstrap/scrollSpy"
import Spinner from "../components/componentsBootstrap/spinners"

const Components = () => {
    return (
        <>
        <div class="justify-content-center" width="40%">
            <Buttons/>
            <Accordion/>
            <ScrollSpy/>
            <Modal/>
            <Spinner/>
        </div>
        </>
    );
};

export default Components;