function createStars() {
  const starsContainer = document.querySelector('.stars');
  const numberOfStars = 200;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random size
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random animation duration
    star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);

    starsContainer.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', createStars);
