'use client'

export default function Vendome() {
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
                    <div className="title">VENDOME</div>
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
                </div>
                <div className="slider-container">
                    <input type="radio" id="slide1" name="slider" defaultChecked/>
                    <label htmlFor="slide1" className="slider-button"></label>
                    <input type="radio" id="slide2" name="slider"/>
                    <label htmlFor="slide2" className="slider-button"></label>
                    <input type="radio" id="slide3" name="slider"/>
                    <label htmlFor="slide3" className="slider-button"></label>
                    <div className="slider-images">
                        <img src="/assets/spaces/vendome.png" id="image1" className="slide"/>
                        <img src="/assets/spaces/vendome2.png" id="image2" className="slide"/>
                        <img src="/assets/spaces/vendome.png" id="image3" className="slide"/>
                    </div>
                </div>


            </div>
        </div>
    );
}
