'use client'

export default function Lautre() {

    return (
        <div>
            <div className="page">
                <div id="menu" className="menu fixed">
                    <div className="menu-title"
                         onClick={() => window.location.href = '/studio'}>STUDIO
                    </div>
                    <div className="menu-title active"
                         onClick={() => window.location.href = '/productions'}>PRODUCTIONS
                    </div>
                    <div className="menu-title"
                         onClick={() => window.location.href = '/spaces'}>SPACES
                    </div>
                    <div className="menu-title"
                         onClick={() => window.location.href = 'https://1cd0da-52.myshopify.com'}>FONDATION
                    </div>
                </div>
                <div>
                    <div className="production-section">

                        <div className="production-banner">
                            <img onClick={() => window.open('https://www.youtube.com', "_blank")}
                                 src="/assets/production/lautre/IMAGE%20TRAILER.jpg"
                                 alt="l'autre youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="production-text-container">
                            <div className="production-text">
                                <div className="production-title">{"L'AUTRE"}</div>
                                <div className="production-content">
                                    <div className="content-text">
                                        Film dramatique français écrit et réalisé par Charlotte Dauphin, sorti en 2020.
                                    </div>
                                    <div className="content-text">
                                        Marie est une jeune danseuse de l’Opéra de Paris. Après la mort brutale de son
                                        père le jour de
                                        son trentième anniversaire, elle décide d’arrêter sa pratique artistique et
                                        poursuit une existence de
                                        plus en plus recluse.
                                    </div>

                                </div>

                                <div className="production-lines">
                                    <div className="production-line">
                                        <div>RÉALISATION ET scénario</div>
                                        <div>Charlotte Dauphin</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Décors</div>
                                        <div>Jean-Hugues de Chatillon</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Costumes</div>
                                        <div>Jean-Hugues de Chatillon</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Photographie</div>
                                        <div>Jean-Marc Fabre</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Montage</div>
                                        <div>Sylvie Landra</div>
                                    </div>

                                    <div id="moreInfos">
                                        <div className="production-line">
                                            <div>Musique</div>
                                            <div>Charlotte Reinhardt, James Thierrée et Charlotte Dauphin</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Production</div>
                                            <div>Jean-Luc Ormières, Charlotte Dauphin et Sylvie Landra</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Société de production</div>
                                            <div>Marignan Films</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Sociétés de distribution</div>
                                            <div>Dean Medias</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Pays d’origine</div>
                                            <div>France</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Langue originale</div>
                                            <div>Français</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Format</div>
                                            <div>Couleur</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Genre</div>
                                            <div>Drame</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Durée</div>
                                            <div>77 minutes</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Date de sortie</div>
                                            <div>8 janvier 2020</div>
                                        </div>
                                    </div>

                                </div>

                                <div onClick={() => {
                                    //@ts-ignore
                                    document.getElementById("moreInfos").style.display = "block";
                                    //@ts-ignore
                                    document.getElementById("moreInfosToggle").style.display = "none";
                                }} id="moreInfosToggle" className="more-infos">
                                    <div>More infos <div className="more-infos-square"></div></div>
                                </div>

                                <div className="production-main-image">
                                    <img src="/assets/production/lautre/AFFICHE.jpg"/>
                                </div>

                                <div className="center">
                                    <a href="/productions" className="back-button">
                                        <div>Retour</div>
                                    </a>
                                </div>

                            </div>
                            <div className="watch-now">
                                <div className="title">
                                    <div>WATCH NOW</div>
                                </div>
                                <div>CG CINEMA</div>
                                <div>ARTE FRANCE CINEMA</div>
                                <div>myCANAL</div>
                            </div>
                        </div>


                        <div className="production-image">
                            <img src="/assets/production/lautre/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/lautre/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/lautre/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/lautre/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/lautre/IMAGE%205.jpg"/>
                        </div>

                        <div className="center">
                            <a href="/productions" className="back-button">
                                <div>Retour</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
