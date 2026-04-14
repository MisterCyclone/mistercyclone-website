import './style.css'; // We'll style this later
import logo from './assets/vite.svg'; // This will cause a TypeScript error — we'll fix it soon

function greet(name: string): void {
  const heading = document.createElement('h1');
  heading.textContent = `Hello, ${name}!`;
  document.body.appendChild(heading);

  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'Project Logo';
  img.style.width = '200px';

  document.body.appendChild(img);
}

greet('TypeScript + Vite');