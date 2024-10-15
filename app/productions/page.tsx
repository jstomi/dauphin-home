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
                            <img src="/assets/production/maya/maya-main.jpg"/>
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
                            <img src="/assets/production/diamant-noir/diamant-main.jpg"/>
                            <a className="hover-text" href="/productions/diamant-noir">
                                <div>Réalisation :</div>
                                <div>Arthur Harari</div>
                            </a>
                        </div>
                        <div className="grid-title-line">DIAMANT NOIR</div>
                        <div className="grid-title-line">2016</div>
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
                </div>
            </div>
        </div>
    );
}
