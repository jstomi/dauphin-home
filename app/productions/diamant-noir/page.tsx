'use client'

export default function DiamantNoir() {

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
                <div id="diamant" className="production-section">

                    <div className="production-banner">
                        <iframe width="100%" height="500"
                                src="https://www.youtube.com/embed/tH9GZmnE0OA">
                        </iframe>
                    </div>
                    <div className="production-text">
                        <div className="production-title">DIAMANT NOIR</div>
                        <div className="production-content">
                            <div className="content-text">Film dramatique franco-belge réalisé par Arthur Harari, sorti
                                en 2016.
                            </div>
                            <div className="content-text"> Pier Ulmann vit de petits boulots et de cambriolages qu’il
                                commet avec Kevin pour le compte
                                de
                                Rachid. Un jour, il apprend la mort de son père dont il n’avait plus de nouvelles depuis
                                plusieurs
                                années. Pier décide de se venger du mauvais traitement de son père par son grand-père et
                                son
                                oncle. Il renoue alors avec sa famille paternelle qui travaille dans le milieu des
                                diamantaires à
                                Anvers.
                            </div>

                        </div>

                        <div className="production-lines">
                            <div className="production-line">
                                <div>RÉALISATION ET SCÉNARIO</div>
                                <div>Arthur Harari</div>
                            </div>
                            <div className="production-line">
                                <div>PHOTOGRAPHIE</div>
                                <div>Tom Harari</div>
                            </div>
                            <div className="production-line">
                                <div>MONTAGE</div>
                                <div>Laurent Sénéchal</div>
                            </div>
                            <div className="production-line">
                                <div>DÉCORS</div>
                                <div>Véronique Sacrez</div>
                            </div>
                            <div className="production-line">
                                <div>COSTUMES</div>
                                <div>Sophie Lifshitz</div>
                            </div>
                        </div>

                        <div className="production-main-image">
                            <img src="/assets/production/diamant-noir/AFFICHE.jpg"/>
                        </div>

                        <div className="center">
                            <div className="back-button">
                                <a href="/productions">Retour</a>
                            </div>
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
                        <div className="back-button">
                            <a href="/productions">Retour</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
