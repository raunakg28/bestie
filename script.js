// Typewriter Effect
const title = document.querySelector(".title");
const text = "Click the Balloons! 🎈";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    title.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust speed here
  }
}

typeWriter();

// Cursor Effects
document.addEventListener("mousemove", function (e) {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor-effect");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  document.body.appendChild(cursor);

  setTimeout(() => {
    cursor.remove();
  }, 1000);
});

// Fireworks Effect
function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = Math.random() * 100 + "vw";
  firework.style.top = Math.random() * 100 + "vh";
  document.body.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1000);
}

setInterval(createFirework, 200); // Create a firework every 500ms

// Surprise Message Popup
