// Importamos el framework Express
const express = require('express');
// Creamos una instancia de la aplicación Express
const app = express();

// Definimos las líneas evolutivas de los emojis
const emojiSequences = {
    agua: ["💧", "🥛", "🚰", "🚚", "🏭", "🚂", "🚢", "🌎", "🚀", "🪐", "🌌", "🧬", "🤖", "🧠"],
    fuego: ["🔥", "🍳", "🥓", "🍔", "🍕", "🌭", "🍖", "🍲", "🍱", "🥘", "🍽️", "🎉", "🍻", "🎆"]
};

// Función para obtener el próximo emoji en la línea evolutiva
const getNextEmoji = (req, res) => {
	// Extraemos el parametro "emoji" de la URL (query string)
    const emoji = req.query.emoji;

	// Si no se proporciona un emoji, devolvemos un error 400 (Bad Request)
    if (!emoji) return res.status(400).send('Emoji es requerido'); // 🔥 Devuelve texto plano directamente

	// Llamamos a la función que busca el siguiente emoji en la secuencia
    const nextEmoji = findNextEmoji(emoji);

	// Si encontramos el siguiente emoji, devolvemos un 200 (OK) con el emoji en texto plano
    if (nextEmoji) return res.status(200).type('text/plain').send(nextEmoji);
	// Si no hay un emoji siguiente, devolvemos un error 404 (Not Found) en texto plano
    else return res.status(404).type('text/plain').send(`No hay evolución para el emoji: ${emoji}`);
    }
};

// Función para buscar el siguiente emoji en la secuencia
const findNextEmoji = (emoji) => {
	// Recorremos los valores de "emojiSequences" (agua y fuego)
    for (const sequence of Object.values(emojiSequences)) {
		// Buscamos el índice del emoji dentro de la secuencia
        const index = sequence.indexOf(emoji);
		// Si encontramos el emoji y no es el último de la lista
        if (index !== -1 && index < sequence.length - 1) {
			// Retornamos el siguiente emoji en la secuencia
            return sequence[index + 1];
        }
    }
	// Si no se encuentra el emoji o no hay uno siguiente, devolvemos "null"
    return null;
};

// Endpoint HTTP GET para consultar el siguiente emoji
app.get('/api/v1/emojis', getNextEmoji);

// Definimos el puerto en el que va a correr el servidor
// Si existe una variable de entorno PORT; la usa; de lo contrario, usa el puerto 3000
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor y lo ponemos a escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`✅ API corriendo en http://localhost:${PORT}`);
});

// Exportamos la aplicación para que pueda ser usada en tests o en un entorno de producción
module.exports = app;

