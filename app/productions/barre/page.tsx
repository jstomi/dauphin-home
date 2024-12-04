'use client'

export default function Barre() {

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
                                 src="/assets/production/barre/IMAGE%20TRAIER.jpg"
                                 alt="barre youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="production-text-container">
                            <div className="production-text">
                                <div className="production-title">BARRE</div>
                                <div className="production-content">
                                    <div className="content-text">
                                        Court métrage écrit et réalisé par Charlotte Dauphin, sorti en 2023.
                                    </div>
                                    <div className="content-text">
                                        Dans le court métrage Barre, la sculpture et la danse sont utilisées comme des
                                        dispositifs sémiotiques,
                                        capturant la performance de la danseuse étoile Marie-Agnès Gillot alors qu’elle
                                        s’engage
                                        avec une sculpture. Dans un environnement austère, la chorégraphie offre une
                                        réponse directe
                                        à la profondeur émotionnelle de l’oeuvre d’art et à sa capacité à refléter la
                                        psyché humaine, sa
                                        forme imposante déclenchant une réaction viscérale, communiquée sous forme de
                                        danse.
                                    </div>

                                </div>

                                <div className="production-lines">
                                    <div className="production-line">
                                        <div>RÉALISATION</div>
                                        <div>Charlotte Dauphin</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Poesie et sculpture</div>
                                        <div>Charlotte Dauphin</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Photographie</div>
                                        <div>Remko Schnorr</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Musique</div>
                                        <div>Mirwais Ahmadzai</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Production</div>
                                        <div>Charlotte Dauphin</div>
                                    </div>

                                    <div id="moreInfos">
                                        <div className="production-line">
                                            <div>Société de production</div>
                                            <div>Marignan Films, Rosalie Miller Mann/Mann & Miller</div>
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
                                            <div>Dates de sortie</div>
                                            <div>Septembre 2023</div>
                                        </div>
                                        <div onClick={() => {
                                            //@ts-ignore
                                            document.getElementById("moreInfos").style.display = "none";
                                            //@ts-ignore
                                            document.getElementById("moreInfosToggle").style.display = "flex";
                                        }} id="lessInfosToggle" className="more-infos">
                                            <div>Less infos <div className="more-infos-square"></div></div>
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
                                    <img src="/assets/production/barre/AFFICHE.jpg"/>
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
                            <img src="/assets/production/barre/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/barre/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/barre/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/barre/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/barre/IMAGE%205.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
