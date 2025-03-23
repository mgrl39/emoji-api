<div align="center">

<p></p>

<a href="#-introducción">Introducción</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="#-uso">Uso</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="#-licencia">Licencia</a>

![Node.js Badge](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=flat)
![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=white&style=flat)
![GitHub stars](https://img.shields.io/github/stars/mgrl39/emoji-api)
![GitHub issues](https://img.shields.io/github/issues/mgrl39/emoji-api)
![GitHub license](https://img.shields.io/github/license/mgrl39/emoji-api)

</div>

## 🧑‍🚀 Introducción

**Emoji Sequences API** es una API simple desarrollada en **Node.js** que devuelve el siguiente emoji en una secuencia específica basada en una lista predefinida de emojis relacionados con agua y fuego.

- 💧 **Secuencia de agua**: De gotas de agua hasta la inteligencia artificial.  
- 🔥 **Secuencia de fuego**: De fuego hasta celebraciones.  

Esta API está diseñada para facilitar el aprendizaje y la implementación de APIs REST simples en Node.js.

--- 
## 🌍 Uso

### ➡️ Obtener el siguiente emoji en la secuencia:

#### Endpoint:
```http
GET /api/v1/emojis?emoji=💧
```

#### Ejemplo de respuesta:
```json
"🥛"
```

---

### ➡️ Ejemplos de secuencias disponibles:

**Secuencia de agua**:
```text
💧 → 🥛 → 🚰 → 🚚 → 🏭 → 🚂 → 🚢 → 🌎 → 🚀 → 🪐 → 🌌 → 🧬 → 🤖 → 🧠
```

**Secuencia de fuego**:
```text
🔥 → 🍳 → 🥓 → 🍔 → 🍕 → 🌭 → 🍖 → 🍲 → 🍱 → 🥘 → 🍽️ → 🎉 → 🍻 → 🎆
```

---

## 🏗️ Stack

Este proyecto está desarrollado con:

- **Node.js** - Entorno de ejecución para JavaScript.
- **HTTP** - Módulo nativo de Node.js para crear el servidor.
- **JavaScript** - Lenguaje de programación.

---

## 🔑 Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).