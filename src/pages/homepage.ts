import { Button } from "../components/buttons/button";
import imageLol from '../assets/image.png'

export function homePage(): HTMLElement {
  const container = document.createElement('div');
	container.className = "container";

	const block = document.createElement('div');
	block.className = "block"

	const image = document.createElement('img');
	image.src = imageLol;

	const textBlock = document.createElement('h2');
	textBlock.textContent = "I'm very handsome."

	const textBlock2 = document.createElement('p');
	textBlock2.textContent = "No one can match my power."

	const textTitle = document.createElement('h1');
	textTitle.textContent = "Very professional web developer"

	block.append(image, textBlock, textBlock2);
	container.append(block,textTitle)

	return container;
}