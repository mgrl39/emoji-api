const http = require('http');
const url = require('url');

// Secuencias de emojis
const emojiSequences = {
  agua: ["💧", "🥛", "🚰", "🚚", "🏭", "🚂", "🚢", "🌎", "🚀", "🪐", "🌌", "🧬", "🤖", "🧠"],
  fuego: ["🔥", "🍳", "🥓", "🍔", "🍕", "🌭", "🍖", "🍲", "🍱", "🥘", "🍽️", "🎉", "🍻", "🎆"]
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // 🔥 Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responder a preflight OPTIONS para CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(204); // No Content
    return res.end();
  }

  // Configurar respuesta como texto UTF-8
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  if (path === '/api/v1/emojis') {
    const emoji = parsedUrl.query.emoji;
    
    if (!emoji) {
      return res.end('⚠️ Error: Debes proporcionar un emoji en la consulta. Ejemplo: /api/v1/emojis?emoji=💧');
    }

    // Buscar el siguiente emoji en la secuencia
    let nextEmoji = null;
    for (const type in emojiSequences) {
      const sequence = emojiSequences[type];
      const index = sequence.indexOf(emoji);
      if (index !== -1 && index < sequence.length - 1) {
        nextEmoji = sequence[index + 1];
        break;
      }
    }

    return res.end(nextEmoji || `🔍 No hay evolución para el emoji ${emoji}`);
  } else {
    return res.end('❌ Ruta no encontrada. Intenta con el endpoint correcto: /api/v1/emojis?emoji=💧');
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Servidor ejecutándose en el puerto ' + (process.env.PORT || 3000));
});

