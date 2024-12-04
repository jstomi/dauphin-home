'use client'

export default function Architecte() {

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
                                 src="/assets/production/architecte/IMAGE%20TRAILER.jpg"
                                 alt="architecte youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="production-text-container">
                            <div className="production-text">
                                <div className="production-title">ARCHITECTE</div>
                                <div className="production-content">
                                    <div className="content-text">
                                        Court métrage écrit et réalisé par Charlotte Dauphin, sorti en 2022.
                                    </div>
                                    <div className="content-text">
                                        Une femme n’est pas consciente qu’elle est en train de discuter avec Dieu. Le
                                        film s’engage dans
                                        les nuances de sensibilité uniquement présentes dans les échanges intimes à
                                        travers la tentative
                                        d’une femme d’enterrer son chagrin et son incertitude dans la restructuration de
                                        sa maison. Alors
                                        qu’elle s’efforce d’achever la construction de sa maison, malgré le récent
                                        suicide de son conjoint,
                                        la femme se retrouve dans un cycle de questionnement sur son identité et celle
                                        de l’architecte,
                                        s’engageant à son tour dans un jeu périlleux avec la mort.
                                    </div>

                                </div>

                                <div className="production-lines">
                                    <div className="production-line">
                                        <div>RÉALISATION</div>
                                        <div>Charlotte Dauphin</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Société de production</div>
                                        <div>Marignan Films</div>
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

                                    <div id="moreInfos">
                                        <div className="production-line">
                                            <div>Durée</div>
                                            <div>9 minutes</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Dates de sortie</div>
                                            <div>Décembre 2022</div>
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
                                    <img src="/assets/production/architecte/AFFICHE.jpg"/>
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
                            <img src="/assets/production/architecte/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/architecte/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/architecte/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/architecte/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/architecte/IMAGE%205.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
