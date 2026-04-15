import { Button } from "../buttons/button";

export function navBar(): HTMLElement {
  const navBar = document.createElement('div');
  navBar.className = "nav-bar"

  const homeButton = Button("Home");
  const projectsButton = Button("Projects");
  const blogButton = Button("Blog");
  const contactButton = Button("Contact");

  navBar.append(homeButton, projectsButton, blogButton, contactButton)
  
  return navBar
}