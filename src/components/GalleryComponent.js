import React, {Component} from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gallery: props.gallery,
            active: {ebony: true, jade: true, denim: true}
        };
    }

    renderGalleryItem(item) {
        return(
            <img className="artItem" src={"./images/gallery/"+item.image} alt={item.name}>
            </img>
        );
    }

    renderNull() {
        return(
            <>
            </>
        )
    }

    renderEbony() {
        const ebonyGallery = this.state.gallery.filter(item => {
            return (item.glaze=="ebony");
        }).map(item => {
            return this.renderGalleryItem(item);
        });
        
        return(
            <>
                <div className="row mt-5 mb-3">
                    <div className="col">
                        <h3>Ebony</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery">
                        {ebonyGallery}
                    </div>
                </div>
            </>
        )
    }

    renderJade() {
        const jadeGallery = this.state.gallery.filter(item => {
            return (item.glaze=="jade");
        }).map(item => {
            return this.renderGalleryItem(item);
        });
        
        return(
            <>
                <div className="row mt-5 mb-3">
                    <div className="col">
                        <h3>Jade</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery">
                        {jadeGallery}
                    </div>
                </div>
            </>
        )
    }

    renderDenim() {
        const denimGallery = this.state.gallery.filter(item => {
            return (item.glaze=="denim");
        }).map(item => {
            return this.renderGalleryItem(item);
        });
        
        return(
            <>
                <div className="row mt-5 mb-3">
                    <div className="col">
                        <h3>Denim</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col gallery">
                        {denimGallery}
                    </div>
                </div>
            </>
        )
    }

    toggleFilter(glaze) {
        const newActive = {...this.state.active, [glaze]: !this.state.active[glaze]};
        this.setState({...this.state, active:newActive});
    }

    render() {

        return (
            <div className="container mb-4">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Functional Ware</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <ButtonGroup type="checkbox" className="col-md-8  mx-auto" id="glazeCheckboxes">
                        <Button type="checkbox" onClick={() => this.toggleFilter("ebony")} className={"btn-ebony" + ((this.state.active.ebony) ? " active" : "")}>
                            Ebony
                        </Button>
                        <Button type="checkbox" onClick={() => this.toggleFilter("jade")} className={"btn-jade" + ((this.state.active.jade) ? " active" : "")}>
                            Jade
                        </Button>
                        <Button type="checkbox" onClick={() => this.toggleFilter("denim")} className={"btn-denim" + ((this.state.active.denim) ? " active" : "")}>
                            Denim
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="row mt-3">
                    <div className="col gallery">
                        {((this.state.active.ebony) ? this.renderEbony() : this.renderNull())}
                        {((this.state.active.jade) ? this.renderJade() : this.renderNull())}
                        {((this.state.active.denim) ? this.renderDenim() : this.renderNull())}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;