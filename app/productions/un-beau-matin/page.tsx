'use client'

export default function UnBeauMatin() {

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
                                 src="/assets/production/un-beau-matin/IMAGE%20TRAILER.jpg"
                                 alt="un beau matin youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="production-text-container">
                            <div className="production-text">
                                <div className="production-title">UN BEAU MATIN</div>
                                <div className="production-content">
                                    <div className="content-text">
                                        Film français réalisé par Mia Hansen-Løve et sorti en 2021.
                                    </div>
                                    <div className="content-text">
                                        Sandra vit seule avec sa fille de huit ans dans un petit appartement parisien.
                                        Alors que son père
                                        s’enfonce dans une maladie dégénérative et qu’elle doit s’engager dans un
                                        parcours du combattant
                                        entre hôpitaux et Ehpads pour l’installer en lieu sûr, elle fait la rencontre
                                        inattendue de Clément,
                                        un ami perdu de vue avec qui s’ouvre une relation passionnée, mais incertaine.
                                    </div>

                                </div>

                                <div className="production-lines">
                                    <div className="production-line">
                                        <div>Réalisatrice et scénariste</div>
                                        <div>Mia Hansen-Løve</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Photographie</div>
                                        <div>Denis Lenoir</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Montage</div>
                                        <div>Marion Monnier</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Direction de production</div>
                                        <div>Julien Flick</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Production</div>
                                        <div>Philippe Martin et David Thion</div>
                                    </div>

                                    <div id="moreInfos">
                                        <div className="production-line">
                                            <div>Sociétés de production</div>
                                            <div>Les Films Pelléas, Razor Films et Arte France Cinéma</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Langue originale</div>
                                            <div>Français</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Genre</div>
                                            <div>Drame, Romance</div>
                                        </div>

                                        <div className="production-line">
                                            <div>Dates de sortie</div>
                                            <div>Mai 2022 (Festival de Cannes 2022)</div>
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
                                    <img src="/assets/production/un-beau-matin/AFFICHE.jpg"/>
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
                            <img src="/assets/production/un-beau-matin/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/un-beau-matin/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/un-beau-matin/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/un-beau-matin/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/un-beau-matin/IMAGE%205.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
