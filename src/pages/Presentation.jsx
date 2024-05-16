
import "../style/Presentation.css"

export const Presentation = () => {
    const videoUrl = 'https://www.youtube.com/embed/Jvb3gcVTfDg';
    
    return (
        <>
            <div className="About">
                <div className="About-Text">
                    <h2 className="About-Text title">About the Project</h2>
                <p className="Text">
                    This project was created with the purpose of exploring a bit of the history of the series Rick And Morty. Here you can discover information about its characters, episodes, and locations.
                </p>
                <p className="Text">
                    Explore our application to immerse yourself in the Rick and Morty universe and discover more about the characters, episodes, and locations that make this series a cultural phenomenon.
                </p>
                <p className="Text">
                    Get ready for an adventure filled with humor, action, and reflection!
                </p>
            </div>
                <h2 className="About-Text title video">See the intro</h2>
                <div className="About-Video">
                <iframe
                    width="660" // Ancho del reproductor de video
                    height="415" // Altura del reproductor de video
                    src={videoUrl} // URL del video de YouTube
                    title="YouTube video player" // Título del iframe
                    frameBorder="0" // Sin bordes alrededor del reproductor
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permisos
                    allowFullScreen // Permitir pantalla completa
                ></iframe>
                </div>
            </div>

        
        </>
    )
}