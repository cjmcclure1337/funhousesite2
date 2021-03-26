import React, {Component} from 'react';



class Art extends Component {
    constructor(props) {
        super(props);

        this.state = {
            art: props.art
        };
    }

    renderArtItem(item) {
        return(
            <img className="artItem" src={"./images/art/"+item.image} alt={item.name}>
            </img>
        )
    }

    render() {

        const artGallery = this.state.art.map(item => this.renderArtItem(item));

        return (
            <div className="container mb-4">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Art Ware</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col gallery">
                        {artGallery}
                    </div>
                </div>
            </div>
        );
    }
}

export default Art;