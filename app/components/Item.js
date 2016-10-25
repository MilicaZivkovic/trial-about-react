var React = require('react');

var Item = React.createClass({
    render: function (){
        return (
            <div className="col col-sm-4 col-padded">
                  <img className="offering-image omorfia-image" src={this.props.item.imageSrc} alt="Our services"/>
                  <div className="offering-info-box">
                    <h3>{this.props.item.title}</h3>
                    <p>{this.props.item.description}</p>
                    <a className="btn btn-primary offering-box-button-link" href={this.props.item.link}>{this.props.item.buttonLabel}</a>
                  </div>
            </div>
        );
    }
});
module.exports = Item;
