import React from "react";

const Components = () => {
    return (
        <>
        <div class="m-4">
            <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                <a class="nav-link" href="#scrollspyHeading1">First</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#scrollspyHeading2">Second</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                    <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                </ul>
                </li>
            </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
            <h4 id="scrollspyHeading1">First heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque temporibus nemo laboriosam obcaecati in veniam harum, doloribus asperiores labore necessitatibus a debitis porro, facere blanditiis impedit maxime mollitia dolores!</p>
            <h4 id="scrollspyHeading2">Second heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eligendi quisquam distinctio vel saepe ab eum ipsam. Non officiis quod vitae necessitatibus, sit quis quibusdam repellat assumenda nam cumque fugiat.</p>
            <h4 id="scrollspyHeading3">Third heading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odio, adipisci tenetur quia hic autem deserunt animi, dolores officia reprehenderit amet veniam. Tempora autem expedita, quae recusandae numquam nostrum error!</p>
            <h4 id="scrollspyHeading4">Fourth heading</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil corrupti tempore similique culpa impedit voluptas a non, doloribus ullam iusto dolore quae quia consequatur laborum et fuga quas nemo.</p>
            <h4 id="scrollspyHeading5">Fifth heading</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nam, exercitationem reprehenderit numquam est vero deserunt tempore fugit voluptatum, assumenda cupiditate a quasi recusandae beatae perferendis magnam fugiat optio ipsa?</p>
            </div>
        </div>
        </>
    );
};

export default Components;