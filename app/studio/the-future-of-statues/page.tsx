'use client'

export default function BergmanIsland() {

    return (
        <div>
            <div className="page">
                <div id="menu" className="menu fixed">
                    <div className="menu-title active"
                         onClick={() => window.location.href = '/studio'}>STUDIO
                    </div>
                    <div className="menu-title"
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
                                 src="/assets/studio/the-future-of-statues/the-future-of-statues-yt.png"
                                 alt="the future of statues youtube preview"/>
                            <img className="production-banner-play-button" src="/assets/play.png"/>
                        </div>
                        <div className="studio-text">
                            <div className="studio-title">THE FUTURE OF STATUES (2024)</div>
                            <div className="studio-content">
                                <div className="content-text">
                                    {"Absence is presence is absence. The imprint of the human body is reflected by the epic light and sculptural artifacts (jewellery) installation. Where the body's absence becomes palpable.The installation explores an archeology of the future, where the viewer experiences his ownshadow."}
                                </div>
                                <div className="content-text">
                                    The silhouettes of onlookers and passersby are reflected in a linear array of
                                    fluorescent light.
                                    Depending on where a person stands, the resolution of their reflection varies in the
                                    abstract minimalism
                                    of its form. Through the viewer’s physical position in space, the piece explores how
                                    much information is necessary for self-recognition, made manifest in light and
                                    shadow. The human
                                    body is united with the entire surrounding space, in one spectral, sensory
                                    experience.
                                </div>

                                <div className="studio-lines">
                                    <div className="studio-line">
                                        <div>Performance</div>
                                        <div></div>
                                    </div>
                                    <div className="studio-line">
                                        <div>Director</div>
                                        <div></div>
                                    </div>
                                    <div className="studio-line">
                                        <div>Sculture</div>
                                        <div></div>
                                    </div>
                                    <div className="studio-line">
                                        <div>Choreographer</div>
                                        <div>Charlotte Dauphin</div>
                                    </div>
                                    <div className="studio-line">
                                        <div>Performers</div>
                                        <div>Charlotte Dauphin, Manon Galy, Marie-Agnès Gillot</div>
                                    </div>
                                    <div className="studio-line">
                                        <div>Location</div>
                                        <div>Musée de l’Orangerie, Paris</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="studio-details-images">
                            <img src="/assets/studio/the-future-of-statues/1.png"/>
                            <img src="/assets/studio/the-future-of-statues/2.png"/>
                            <img src="/assets/studio/the-future-of-statues/3.png"/>
                            <img src="/assets/studio/the-future-of-statues/4.png"/>
                            <img src="/assets/studio/the-future-of-statues/5.png"/>
                            <img src="/assets/studio/the-future-of-statues/6.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
