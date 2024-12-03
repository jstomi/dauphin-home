'use client'

export default function Productions() {

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
                <div className="grid-production">

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/paradis-paris/IMAGE%201.jpg"/>
                            <a className="hover-text" href="/productions/paradis-paris">
                                <div>Réalisation :</div>
                                <div>Marjane Satrapi</div>
                            </a>
                        </div>
                        <div className="grid-title-line">{"PARADIS PARIS"}</div>
                        <div className="grid-title-line">2024</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/barre/IMAGE%20main.jpg"/>
                            <a className="hover-text" href="/productions/barre">
                                <div>Réalisation :</div>
                                <div>Charlotte Dauphin</div>
                            </a>
                        </div>
                        <div className="grid-title-line">{"BARRE"}</div>
                        <div className="grid-title-line">2023</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/un-beau-matin/IMAGE%201.jpg"/>
                            <a className="hover-text" href="/productions/un-beau-matin">
                                <div>Réalisation et scénario :</div>
                                <div>Mia Hansen-Løve</div>
                            </a>
                        </div>
                        <div className="grid-title-line">UN BEAU MATIN</div>
                        <div className="grid-title-line">2021</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/architecte/IMAGE%202.jpg"/>
                            <a className="hover-text" href="/productions/architecte">
                                <div>Réalisation :</div>
                                <div>Charlotte Dauphin</div>
                            </a>
                        </div>
                        <div className="grid-title-line">ARCHITECTE</div>
                        <div className="grid-title-line">2022</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/bergman/bergman-main.jpg"/>
                            <a className="hover-text" href="/productions/bergman-island">
                                <div>Réalisation et scénario :</div>
                                <div>Mia Hansen-Løve</div>
                            </a>
                        </div>
                        <div className="grid-title-line">BERGMAN ISLAND</div>
                        <div className="grid-title-line">2021</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/lautre/IMAGE%203.jpg"/>
                            <a className="hover-text" href="/productions/lautre">
                                <div>Réalisation :</div>
                                <div>Charlotte Dauphin</div>
                            </a>
                        </div>
                        <div className="grid-title-line">{"L'AUTRE"}</div>
                        <div className="grid-title-line">2020</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/maya/IMAGE%204.jpg"/>
                            <a className="hover-text" href="/productions/maya">
                                <div>Réalisatrice et scénariste :</div>
                                <div>Mia Hansen-Løve</div>
                            </a>
                        </div>
                        <div className="grid-title-line">MAYA</div>
                        <div className="grid-title-line">2018</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/diamant-noir/IMAGE%204.jpg"/>
                            <a className="hover-text" href="/productions/diamant-noir">
                                <div>Réalisation :</div>
                                <div>Arthur Harari</div>
                            </a>
                        </div>
                        <div className="grid-title-line">DIAMANT NOIR</div>
                        <div className="grid-title-line">2016</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image invisible">
                            <img/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
