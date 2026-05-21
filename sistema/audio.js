const audios = [

    {

        title:
        "AUDIO RECUPERADO #1",

        file:
        "audio1.mp3",

        description:
        "Conversación informal. El menor no presenta alteraciones emocionales luego del ruido detectado.",

        notes:[

            "“No parece sorprendido.”",

            "“La reacción emocional es inusualmente baja.”",

            "“Continúa hablando después del ruido.”"
        ]
    },

    {

        title:
        "AUDIO RECUPERADO #2",

        file:
        "audio2.mp3",

        description:
        "Se detectan pausas extensas y comportamiento emocional inconsistente.",

        notes:[

            "“Menciona que ‘ya pasó antes’.”",

            "“No solicita ayuda.”",

            "“Permanece tranquilo durante toda la grabación.”"
        ]
    },

    {

        title:
        "AUDIO RECUPERADO #3",

        file:
        "audio3.mp3",

        description:
        "Archivo parcialmente corrupto. Interferencias detectadas.",

        notes:[

            "“Se escucha respiración secundaria.”",

            "“El menor baja la voz al final.”",

            "“Últimos segundos posiblemente eliminados.”"
        ]
    }

];

let currentAudio = 0;

const player =
document.getElementById("audioPlayer");

const source =
player.querySelector("source");

const title =
document.getElementById("audioTitle");

const description =
document.getElementById("audioDescription");

const notesContainer =
document.getElementById("notesContainer");

const button =
document.getElementById("nextAudioBtn");

button.addEventListener("click", ()=>{

    currentAudio++;

    if(currentAudio >= audios.length){

        currentAudio = 0;
    }

    const audio =
    audios[currentAudio];

    title.textContent =
    audio.title;

    source.src =
    audio.file;

    player.load();

    description.textContent =
    audio.description;

    notesContainer.innerHTML = "";

    audio.notes.forEach(note=>{

        const div =
        document.createElement("div");

        div.className =
        "transcript";

        div.textContent =
        note;

        notesContainer.appendChild(div);
    });
});