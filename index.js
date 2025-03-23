const http = require('http');
const url = require('url');

// Secuencias de emojis
const emojiSequences = {
  agua: ["💧", "🥛", "🚰", "🚚", "🏭", "🚂", "🚢", "🌎", "🚀", "🪐", "🌌", "🧬", "🤖", "🧠"],
  fuego: ["🔥", "🍳", "🥓", "🍔", "🍕", "🌭", "🍖", "🍲", "🍱", "🥘", "🍽️", "🎉", "🍻", "🎆"]
};

// Función para encontrar el siguiente emoji
function findNextEmoji(emoji) {
  for (const sequence in emojiSequences) {
    const emojis = emojiSequences[sequence];
    const index = emojis.indexOf(emoji);
    
    if (index !== -1 && index < emojis.length - 1) {
      return emojis[index + 1];
    }
  }
  return null;
}

// Crear el servidor
const server = http.createServer((req, res) => {
  // Analizar la URL
  const parsedUrl = url.parse(req.url, true);
  
  // Verificar si es la ruta de la API de emojis
  if (parsedUrl.pathname === '/api/v1/emojis') {
    const emoji = parsedUrl.query.emoji;
    
    if (!emoji) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('Emoji es requerido');
    }
    
    const nextEmoji = findNextEmoji(emoji);
    
    if (nextEmoji) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end(nextEmoji);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end(`No hay evolución para el emoji: ${emoji}`);
    }
  } else {
    // Ruta principal
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('API de Emojis funcionando! Usa /api/v1/emojis?emoji=💧 para obtener una evolución');
  }
});

// Puerto predeterminado para Vercel o 3000 para desarrollo local
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

// Para compatibilidad con Vercel
module.exports = server;

