import React, { FunctionComponent } from 'react';

interface GifProps {
    title: string,
    url: string,
    username: string,
    user_profile: string
}

const Gif: FunctionComponent<GifProps> = (props: GifProps) => {
    return (
        <div className="card">
            <img className="card-image" src={props.url} alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="card-links">
                        <p className="card-text">{props.username}</p>
                        <a 
                            href={props.user_profile}
                                className="card-btn"
                                target="_blank"
                        >
                            Ir al perfil
                        </a>
                    </div>
                 </div>
         </div>
    )   
}

export default Gif