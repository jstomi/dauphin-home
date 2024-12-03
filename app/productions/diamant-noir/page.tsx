'use client'

export default function DiamantNoir() {

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
                                 src="/assets/production/diamant-noir/IMAGE%20TRAILER.jpg"
                                 alt="diamant noir youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="production-text-container">
                            <div className="production-text">
                                <div className="production-title">DIAMANT NOIR</div>
                                <div className="production-content">
                                    <div className="content-text">
                                        Film dramatique franco-belge réalisé par Arthur Harari, sorti en 2016.
                                        Nommé deux fois aux César, le film reçoit en 2017 celui du meilleur espoir masculin pour Niels
                                        Schneider.
                                    </div>
                                    <div className="content-text">
                                        Pier Ulmann vit de petits boulots et de cambriolages qu’il commet avec Kevin pour le compte de
                                        Rachid. Un jour, il apprend la mort de son père dont il n’avait plus de nouvelles depuis plusieurs
                                        années. Pier décide de se venger du mauvais traitement de son père par son grand-père et son
                                        oncle. Il renoue alors avec sa famille paternelle qui travaille dans le milieu des diamantaires à
                                        Anvers.
                                    </div>

                                </div>

                                <div className="production-lines">
                                    <div className="production-line">
                                        <div>RÉALISATION</div>
                                        <div>Arthur Harari</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Scénario</div>
                                        <div>Arthur Harari, Vincent Poymiro, Olivier Seror et Agnès Feuvre</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Musique</div>
                                        <div>Olivier Marguerit</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Montage</div>
                                        <div>Laurent Sénéchal</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Photographie</div>
                                        <div>Tom Harari</div>
                                    </div>

                                    <div id="moreInfos">
                                        <div className="production-line">
                                            <div>Décors</div>
                                            <div>Véronique Sacrez</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Costumes</div>
                                            <div>Sophie Lifshitz</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Producteurs</div>
                                            <div>David Thion et Philippe Martin</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Production</div>
                                            <div>Les Films Pelléas</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Coproduction</div>
                                            <div>Savage Film, Frakas Productions, France 2 Cinéma, Jouror Productions, Proximus
                                            </div>
                                        </div>
                                        <div className="production-line">
                                            <div>Distribution</div>
                                            <div>Ad Vitam Distribution</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Pays d’origine</div>
                                            <div>France - Belgique</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Durée</div>
                                            <div>115 minutes</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Genre</div>
                                            <div>Drame</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Dates de sortie</div>
                                            <div>juin 2016</div>
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
                                    <img src="/assets/production/diamant-noir/AFFICHE.jpg"/>
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
                            <img src="/assets/production/diamant-noir/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/diamant-noir/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/diamant-noir/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/diamant-noir/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/diamant-noir/IMAGE%205.jpg"/>
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
