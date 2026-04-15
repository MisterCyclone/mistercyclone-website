type CardProps = {
  title: string;
  content: string;
}

export function Card({title, content}: CardProps): HTMLElement {
	const card = document.createElement('div');
	card.className = "block"

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;

  const cardContent = document.createElement('p');
  cardContent.textContent = content;

  card.append(cardTitle, cardContent);

  return card;
}