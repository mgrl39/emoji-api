const http = require('http');
const url = require('url');

// Secuencias de emojis
const emojiSequences = {
  agua: ["💧", "🥛", "🚰", "🚚", "🏭", "🚂", "🚢", "🌎", "🚀", "🪐", "🌌", "🧬", "🤖", "🧠"],
  fuego: ["🔥", "🍳", "🥓", "🍔", "🍕", "🌭", "🍖", "🍲", "🍱", "🥘", "🍽️", "🎉", "🍻", "🎆"]
};

// Creamos un servidor simple
http.createServer((req, res) => {
  // Parsear la URL para obtener la ruta y los parámetros
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  
  // Configurar la respuesta como texto plano UTF-8
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  
  // Verificar si es el endpoint específico /api/v1/emojis
  if (path === '/api/v1/emojis') {
    const emoji = parsedUrl.query.emoji;
    
    if (!emoji) {
      return res.end('Emoji es requerido. Usa /api/v1/emojis?emoji=💧');
    }
    
    // Buscar el siguiente emoji
    let nextEmoji = null;
    for (const type in emojiSequences) {
      const sequence = emojiSequences[type];
      const index = sequence.indexOf(emoji);
      if (index !== -1 && index < sequence.length - 1) {
        nextEmoji = sequence[index + 1];
        break;
      }
    }
    
    return res.end(nextEmoji || `No hay evolución para ${emoji}`);
  } 
  // Para cualquier otra ruta, mantener el comportamiento anterior
  else {
    const emoji = parsedUrl.query.emoji;
    
    if (!emoji) {
      return res.end('Usa /api/v1/emojis?emoji=X para obtener su evolución');
    }
    
    // Buscar el siguiente emoji
    let nextEmoji = null;
    for (const type in emojiSequences) {
      const sequence = emojiSequences[type];
      const index = sequence.indexOf(emoji);
      if (index !== -1 && index < sequence.length - 1) {
        nextEmoji = sequence[index + 1];
        break;
      }
    }
    
    return res.end(nextEmoji || `No hay evolución para ${emoji}`);
  }
  
}).listen(process.env.PORT || 3000);

console.log('Servidor ejecutándose');

