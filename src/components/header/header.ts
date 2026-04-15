import { navBar } from "./nav-bar";

export function Header(): HTMLElement {
    const container = document.createElement('header');
    container.className = "header";

    const title = document.createElement('h1');
    title.textContent = "MisterCyclone";

    const navigationBar = navBar();

    container.append(title, navigationBar);

    // header.innerHTML = `
    //   <div class="header">
    //     <h1>Alfie Skinner / MisterCyclone</h1>
    //     <div class="nav-bar">
    //       <button>Home<i class="fa fa-home"></i></button>
    //       <button>Projects<i class="fa fa-briefcase"></i></button>
    //       <button>Blog <i class="fa fa-pencil"></i> </button>
    //       <button>Contact<i class="fa fa-envelope"></i></button>
    //     </div>
    //   </div>
    //   `

    return container
}