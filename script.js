document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.typewriter');
  const text = title.textContent;
  title.textContent = '';

  let i = 0;
  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 75);
    }
  }
  type();
});
