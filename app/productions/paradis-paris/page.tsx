'use client'

export default function ParadisParis() {

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
                                 src="/assets/production/paradis-paris/IMAGE%20TRAILER.jpg"
                                 alt="paradis paris youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="production-text-container">
                            <div className="production-text">
                                <div className="production-title">{"PARADIS PARIS"}</div>
                                <div className="production-content">
                                    <div className="content-text">
                                        Film français réalisé par Marjane Satrapi et sorti en 2024. Il s’agit d’un film
                                        choral se déroulant à
                                        Paris et mettant en scène divers personnages liés à la mort.
                                    </div>
                                    <div className="content-text">
                                        Paris. Plusieurs personnes liées d’une manière ou d’une autre à la mort vont se
                                        croiser. Ancienne
                                        cantatrice à succès, Giovanna Bianchi est déclarée morte par les médias alors
                                        qu’elle est toujours
                                        bien vivante. Elle va s’apercevoir que peu de personnes vont lui rendre hommage.
                                        De son côté,
                                        l’Anglais Mike défie la mort tous les jours pour son métier de cascadeur.
                                        Dolorès, grand-mère
                                        d’une adolescente, va quant à elle passer un « pacte » avec Dieu. Marie-Cerise,
                                        une adolescente
                                        suicidaire se fait kidnapper et va se confier à son ravisseur alors qu’elle
                                        n’arrivait pas à le faire
                                        avec son psy. Présentateur d’une célèbre émission télévisée criminelle, Édouard
                                        Emmard se
                                        questionne lui aussi sur sa mort.
                                    </div>

                                </div>

                                <div className="production-lines">
                                    <div className="production-line">
                                        <div>RÉALISATION</div>
                                        <div>Marjane Satrapi</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Scénario</div>
                                        <div>Marjane Satrapi et Marie Madinier</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Musique</div>
                                        <div>Pascal Lengagne</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Décors</div>
                                        <div>Florian Sanson</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Costumes</div>
                                        <div>Pascaline Chavanne</div>
                                    </div>

                                    <div id="moreInfos">
                                        <div className="production-line">
                                            <div>Photographie</div>
                                            <div>Maxime Alexandre</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Producteur</div>
                                            <div>Isaac Sharry</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Producteurs exécutifs</div>
                                            <div>François-Xavier Decraene, Mattias Ripa et Amélie Melkonian</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Sociétés de production</div>
                                            <div>Vito Films, Marjane Satrapi Films, Studiocanal et Dauphin Studios</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Société de distribution</div>
                                            <div>Studiocanal (France)</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Pays de production</div>
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
                                            <div>Comédie dramatique, Comédie noire</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Dates de sortie</div>
                                            <div>juin 2024</div>
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
                                    <img src="/assets/production/paradis-paris/AFFICHE.jpg"/>
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
                            <img src="/assets/production/paradis-paris/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/paradis-paris/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/paradis-paris/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/paradis-paris/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/paradis-paris/IMAGE%205.jpg"/>
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
