// Add your JS file or logic here. The HTML exposes the following hooks:
// - #seed-color (input[type=color])
// - #scheme-mode (select)
// - #get-scheme (button)
// - #palette (container where 5 .swatch elements live)

const colorInput = document.getElementById("seed-color");
const selectDropDown = document.getElementById("scheme-mode");
const containerPalette = document.getElementById("palette");
const getSchemeBtn = document.getElementById("get-scheme");

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied to clipboard:", text);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}

// Function to fetch and update colors
function getColorScheme() {
  const hexColor = colorInput.value.slice(1);
  const mode = selectDropDown.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${mode}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      const colors = data.colors;
      const swatches = containerPalette.querySelectorAll(".swatch");

      colors.forEach((color, index) => {
        const currentSwatch = swatches[index];
        const colorBox = currentSwatch.querySelector(".color-box");
        const hexValue = color.hex.value;

        // Remove any existing inline styles and set just the background color
        colorBox.removeAttribute("style");
        colorBox.style.backgroundColor = hexValue;

        const hexButton = currentSwatch.querySelector(".hex");
        hexButton.textContent = hexValue.toUpperCase();

        // Add click listener to the new hex button
        hexButton.addEventListener("click", (e) => {
          copyToClipboard(hexValue);
          const originalText = e.target.textContent;
          e.target.textContent = "Copied!";

          setTimeout(() => {
            e.target.textContent = originalText;
          }, 2000);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching colors:", error);
    });
}

// Add event listeners for all changes
getSchemeBtn.addEventListener("click", getColorScheme);

// Initial color scheme load
getColorScheme();
