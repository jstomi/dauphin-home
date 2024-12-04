'use client'

export default function Maya() {

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
                                 src="/assets/production/maya/IMAGE%20TRAILER.jpg"
                                 alt="maya youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="production-text-container">
                            <div className="production-text">
                                <div className="production-title">MAYA</div>
                                <div className="production-content">
                                    <div className="content-text">
                                        Film français réalisé par Mia Hansen-Løve, sorti en 2018.
                                    </div>
                                    <div className="content-text">
                                        Gabriel, trentenaire, fait partie des deux journalistes enlevés en Syrie. Ils
                                        passent quatre mois en
                                        captivité et sont libérés en décembre 2012. Après une série d’interrogatoires et
                                        d’examens cliniques,
                                        il retrouve sa famille, dont son père et Noamie, son ancienne petite amie. Sa
                                        mère — avec
                                        qui il a coupé les ponts — vit en Inde, pays où il a grandi. Après quelques
                                        semaines, il part pour
                                        Goa, retrouve sa maison d’enfance, et rencontre une jeune Indienne prénommée
                                        Maya.
                                    </div>

                                </div>

                                <div className="production-lines">
                                    <div className="production-line">
                                        <div>Réalisatrice et scénariste</div>
                                        <div>Mia Hansen-Løve</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Assistants réalisateurs</div>
                                        <div>Tarik Afifi et Céline Bailbled</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Genre</div>
                                        <div>Drame, Romance</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Directrice de la photographie</div>
                                        <div>Hélène Louvart</div>
                                    </div>
                                    <div className="production-line">
                                        <div>Monteuse</div>
                                        <div>Marion Monnier</div>
                                    </div>

                                    <div id="moreInfos">
                                        <div className="production-line">
                                            <div>Décors</div>
                                            <div>Mila Préli</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Cheffe costumière</div>
                                            <div>Judith de Luze</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Son</div>
                                            <div>Vincent Vatoux</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Scripte</div>
                                            <div>Clémentine Schaeffer</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Producteurs</div>
                                            <div>Philippe Martin, David Thion</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Société de production</div>
                                            <div>Les Films Pelléas, Arte France Cinéma, Razor Film Produktion</div>
                                        </div>
                                        <div className="production-line">
                                            <div>SOFICA</div>
                                            <div>Cinémage 12</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Société de distribution</div>
                                            <div>Les Films du Losange</div>
                                        </div>
                                        <div className="production-line">
                                            <div>Dates de sortie</div>
                                            <div>Décembre 2018</div>
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
                                    <img src="/assets/production/maya/AFFICHE.jpg"/>
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
                            <img src="/assets/production/maya/IMAGE%201.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/maya/IMAGE%202.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/maya/IMAGE%203.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/maya/IMAGE%204.jpg"/>
                        </div>
                        <div className="production-image">
                            <img src="/assets/production/maya/IMAGE%205.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
