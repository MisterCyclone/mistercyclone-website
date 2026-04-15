export function Button(label: string): HTMLButtonElement {

    const button = document.createElement('button');
    button.className = "button";
    button.textContent = label
    
    return button
}