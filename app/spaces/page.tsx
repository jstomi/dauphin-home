'use client'

export default function Spaces() {

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
            <div className="section SPACES">
                <div className="spaces-menu">
                    <div className="spaces-menu-element">
                        <a className="spaces-menu-element-title" href="/spaces/marignan">MARIGNAN</a>
                        <div className="spaces-menu-element-city">Paris</div>

                    </div>

                    <div className="spaces-menu-element">
                        <a className="spaces-menu-element-title raye" href="/spaces/pont-street">PONT STREET</a>
                        <div className="spaces-menu-element-city">Londres</div>

                    </div>

                    <div className="spaces-menu-element">
                        <a className="spaces-menu-element-title" href="/spaces/theoule">THEOULE</a>
                        <div className="spaces-menu-element-city">Theoule-sur-mer</div>

                        <div className="spaces-menu-element-image">
                            <img src="/assets/spaces/theoule.png"/>
                        </div>
                    </div>

                    <div className="spaces-menu-element">
                        <a className="spaces-menu-element-title raye" href="/spaces/vendome">VENDOME</a>
                        <div className="spaces-menu-element-city">Paris</div>
                        <div className="spaces-menu-element-image">
                            <img src="/assets/spaces/vendome.png"/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
