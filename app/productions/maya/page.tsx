'use client'

export default function Maya() {

    return (
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
                <div id="maya" className="production-section">
                    <div className="production-banner">
                        <iframe width="100%" height="600"
                                src="https://www.youtube.com/embed/aflOWd8e4C0">
                        </iframe>
                    </div>
                    <div className="production-text">
                        <div className="production-title">MAYA</div>
                        <div className="production-content">
                            <div className="content-text">
                                Film français réalisé par Mia Hansen-Løve, sorti en 2018.
                            </div>
                            <div className="content-text">Gabriel, trentenaire, fait partie des deux journalistes
                                enlevés en Syrie. Ils passent quatre mois en
                                captivité et sont libérés en décembre 2012. Après une série d’interrogatoires et
                                d’examens cliniques,
                                il retrouve sa famille, dont son père et Noamie, son ancienne petite amie. Sa mère —
                                avec
                                qui il a coupé les ponts — vit en Inde, pays où il a grandi. Après quelques semaines, il
                                part pour
                                Goa, retrouve sa maison d’enfance, et rencontre une jeune Indienne prénommée Maya.
                            </div>
                        </div>

                        <div className="production-lines">
                            <div className="production-line">
                                <div>RÉALISATION ET SCÉNARIO</div>
                                <div>Mia Hansen-Løve</div>
                            </div>
                            <div className="production-line">
                                <div>PHOTOGRAPHIE</div>
                                <div>Hélène Louvart</div>
                            </div>
                            <div className="production-line">
                                <div>MONTAGE</div>
                                <div>Marion Monnier</div>
                            </div>
                            <div className="production-line">
                                <div>DÉCORS</div>
                                <div>Mila Préli</div>
                            </div>
                            <div className="production-line">
                                <div>COSTUMES</div>
                                <div>Judith de Luze</div>
                            </div>
                        </div>

                        <div className="production-main-image">
                            <img src="/assets/production/maya/AFFICHE.jpg"/>
                        </div>
                        <div className="center">
                            <div className="back-button">
                                <a href="/productions">Retour</a>
                            </div>
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
                    <div className="center">
                        <div className="back-button">
                            <a href="/productions">Retour</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
