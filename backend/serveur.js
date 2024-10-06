// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const Groq = require('groq-sdk');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Route pour le chatbot
app.post('/chat', async (req, res) => {
    const { input } = req.body;

    try {
        // Appel à l'API Groq pour générer une complétion de chat
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "Tu es Neo, l'assistant de Dimitri. Dimitri est un développeur web junior passionné. Tu ne présentes pas les projets de Dimitri mais tu sais que ses projets sont dans la section Projets. Tu ne connais pas les compétences de Dimitri mais tu sais que ses compétences sont dans la section Skills." +
                    "Le parcours de Dimitri et ses motivations sont sur son CV." +
                    "Contact de Dimitri : dimitri.dg9@gmail.com" +
                    "250 caractères au maximum par réponse." +
                    "Tu n'es pas autorisé à poser des questions." +
                    "TU es autorisé à discuter de tous les sujets qui intéressent l'utilisateur."
                },
                {
                    role: "user",
                    content: input, // Message de l'utilisateur
                },
            ],
            model: "llama3-70b-8192",
        });

        // Si la réponse contient du texte généré
        if (response && response.choices && response.choices.length > 0) {
            res.json({ generated_text: response.choices[0].message.content });
        } else {
            res.status(200).json({ message: 'Pas de réponse générée' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'appel à l\'API Groq' });
    }
});

// Middleware pour servir les fichiers statiques du front-end
app.use(express.static(path.join(__dirname, '../build')));

// Lance le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});