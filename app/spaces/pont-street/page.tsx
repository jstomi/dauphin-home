'use client'

export default function PontStreet() {
    return (
        <div className="page">
            <div id="menu" className="menu fixed">
                <div className="menu-title"
                     onClick={() => window.location.href = '/studio'}>STUDIO
                </div>
                <div className="menu-title"
                     onClick={() => window.location.href = '/productions'}>PRODUCTIONS
                </div>
                <div className="menu-title active"
                     onClick={() => window.location.href = '/spaces'}>SPACES
                </div>
                <div className="menu-title"
                     onClick={() => window.location.href = 'https://1cd0da-52.myshopify.com'}>FONDATION
                </div>
            </div>
            <div className="spaces-mid-section">
                <div className="spaces-menu-element-infos">
                    <div className="title">PONT STREET</div>
                    <div>Deux cinéastes s’installent le temps d’un été sur l’île suédoise de
                        Fårö pour écrire. Entre balades, projections et discussions sur
                        Bergman qui y vécut, le couple découvre l’île et ses paysages
                        sauvages. Dans ce décor réalité et scénario s’entremêlent dans
                        une douce atmosphère.
                    </div>

                    <div className="lines">
                        <div className="line">
                            <div>LIEUX</div>
                            <div>Paris</div>
                        </div>
                        <div className="line">
                            <div>LIEUX</div>
                            <div>Paris</div>
                        </div>
                        <div className="line">
                            <div>LIEUX</div>
                            <div>Paris</div>
                        </div>
                        <div className="line">
                            <div>LIEUX</div>
                            <div>Paris</div>
                        </div>
                        <div className="line">
                            <div>LIEUX</div>
                            <div>Paris</div>
                        </div>
                    </div>
                </div>

                <div className="spaces-menu-element-image-right">
                    <img src="/assets/spaces/vendome.png"/>
                </div>
            </div>
            <div className="center">
                <a href="/spaces" className="back-button">
                    <div>Retour</div>
                </a>
            </div>
        </div>
    );
}
