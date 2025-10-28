# 🎨 Color Scheme Generator

![Color Scheme Generator Preview](/assets/the-color-scheme-generator.netlify.app_(Readme).png)


A sophisticated color scheme generator built with modern web technologies.

[![Demo](https://img.shields.io/badge/View-Demo-blue.svg)](#demo-)
[![Features](https://img.shields.io/badge/View-Features-green.svg)](#features-)
[![Stack](https://img.shields.io/badge/View-Stack-orange.svg)](#stack-%EF%B8%8F)
[![Info](https://img.shields.io/badge/View-Info-red.svg)](#info-)

## Demo 🚀

[Try the Color Scheme Generator](https://the-color-scheme-generator.netlify.app/) - Create beautiful color palettes in seconds!

## Features 🌈

- **Dynamic Color Schemes**: Generate schemes from any color
- **Multiple Modes**: Monochrome, analogous, complementary, and more
- **One-Click Copy**: Instant color code copying
- **Responsive Design**: Perfect on all devices
- **Real-time Preview**: See changes instantly
- **Flexible Formats**: HEX and RGB support

## Stack 🛠️

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **API**: The Color API integration
- **Design**: Custom responsive UI
- **Standards**: Semantic HTML, BEM CSS

## Info 📖

### Color Engine 🎨

```javascript
async function getColorScheme(color, mode) {
  const baseColor = color.replace("#", "");
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=${mode}`
  );
  const data = await response.json();
  return data.colors.map((color) => color.hex.value);
}
```

### Quick Copy 📋

```javascript
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => showCopyFeedback())
    .catch((err) => console.error("Failed to copy:", err));
}
```

## Get Started 🏁

1. Clone the project:

   ```bash
   git clone https://github.com/yourusername/color-scheme-generator.git
   ```

2. Open `index.html`
3. Start creating!

## Contribute 🤝

Your ideas and contributions are welcome! Feel free to:

- Submit a pull request
- Open an issue
- Share feedback

## License 📄

MIT License - Feel free to use and adapt! See [LICENSE](LICENSE) for details.

## Credits 🙏

- Design inspiration: [Scrimba](https://scrimba.com)
- Color magic by [The Color API](https://www.thecolorapi.com)

## Developer 👩‍💻

Created by Illona

[![Portfolio](https://img.shields.io/badge/Portfolio-View-blueviolet.svg)][portfolio]
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)][linkedin]
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black.svg)][github]

[portfolio]: https://oceaniccodes.netlify.app/
[linkedin]: https://www.linkedin.com/in/illonaaddae
[github]: https://github.com/illonaaddae

---

![Built with 🎨](https://img.shields.io/badge/Built_with_🎨-for_the_love_of_color-lightgrey.svg)
