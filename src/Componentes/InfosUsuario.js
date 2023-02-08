import React from "react";

export function InfosUsuario(){
    const nome = "Lucas Vogel"
    const img = "https://www.discordavatars.com/wp-content/uploads/2020/05/477592459761811466.jpg"
                
        return (
                <div className="info">Autor do Vídeo: {nome}<br></br>
                <img src={img} width="50px" alt=""/>
                </div>

                    
    )
}