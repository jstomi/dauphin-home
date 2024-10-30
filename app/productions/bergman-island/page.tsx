'use client'

export default function BergmanIsland() {

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
                    <div id="bergman" className="production-section">

                        <div className="production-banner">
                            <iframe width="100%" height="500"
                                    src="https://www.youtube.com/embed/nrlVHVid-20">
                            </iframe>
                        </div>
                        <div className="production-text">
                            <div className="production-title">BERGMAN ISLAND</div>
                            <div className="production-content">
                                <div className="content-text">
                                    Film suédo-germano-belgo-français réalisé par Mia Hansen-Løve sorti en 2021.
                                </div>
                                <div className="content-text">
                                    Deux cinéastes s’installent le temps d’un été sur l’île suédoise de
                                    Fårö pour écrire. Entre balades, projections et discussions sur
                                    Bergman qui y vécut, le couple découvre l’île et ses paysages
                                    sauvages. Dans ce décor réalité et scénario s’entremêlent dans
                                    une douce atmosphère.
                                </div>

                            </div>

                            <div className="production-lines">
                                <div className="production-line">
                                    <div>RÉALISATION ET SCÉNARIO</div>
                                    <div>Mia Hansen-Løve</div>
                                </div>
                                <div className="production-line">
                                    <div>PHOTOGRAPHIE</div>
                                    <div>Denis Lenoir</div>
                                </div>
                                <div className="production-line">
                                    <div>MONTAGE</div>
                                    <div>Marion Monnier</div>
                                </div>
                                <div className="production-line">
                                    <div>DÉCORS</div>
                                    <div>Béatrice Strand</div>
                                </div>
                                <div className="production-line">
                                    <div>COSTUMES</div>
                                    <div>Judith de Luze</div>
                                </div>
                            </div>

                            <div onClick={() => {
                                document.getElementById("moreInfos").style.display = "flex";
                                document.getElementById("moreInfosToggle").style.display = "none";
                                document.getElementsByClassName("production-lines")[0].style.display = "none";
                            }} id="moreInfosToggle" className="more-infos">
                                <div>More infos <div className="more-infos-square"></div></div>
                            </div>
                            <div id="moreInfos" className="more-infos-content">
                                <div className="more-infos-content-line">
                                    <div>Titre</div>
                                    <div>Bergman Island</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Réalisation et scénario</div>
                                    <div>Mia Hansen-Løve</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Photographie</div>
                                    <div>Denis Lenoir</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Montage</div>
                                    <div>Marion Monnier</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Décors</div>
                                    <div>Béatrice Strand</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Costumes</div>
                                    <div>Judith de Luze</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Musique</div>
                                    <div>Raphaël Hamburger</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Son</div>
                                    <div>Paul Heymans</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Production</div>
                                    <div>Marc Brégain, Julie Viez</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Sociétés de production</div>
                                    <div>CG Cinéma, Arte France Cinéma et Barnstormer Productions</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Société de distribution</div>
                                    <div>Les Films du losange</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Pays de production</div>
                                    <div>France - Belgique - Allemagne - Suède</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Langue originale</div>
                                    <div>Anglais</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Durée</div>
                                    <div>112 minutes</div>
                                </div>
                                <div className="more-infos-content-line">
                                    <div>Dates de sortie</div>
                                    <div>juillet 2021 (Festival de Cannes 2021)</div>
                                </div>

                            </div>

                            <div className="production-main-image">
                                <img src="/assets/production/bergman/affiche.webp"/>
                            </div>

                            <div className="center">
                                <div className="back-button">
                                    <a href="/productions">Retour</a>
                                </div>
                            </div>


                        </div>
                        <div className="production-image">
                            <img src="/assets/production/bergman/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/bergman/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/bergman/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/bergman/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/bergman/IMAGE%205.jpg"/>
                        </div>

                        <div className="center">
                            <div className="back-button">
                                <a href="/productions">Retour</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
