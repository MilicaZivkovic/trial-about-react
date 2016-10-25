var React = require('react');

var Header =  React.createClass({
    render: function (){
        return (
            <div className="row">
                <div className="col col-sm-8 col-sm-offset-2 col-padded-3x">
                    <h1 className="text title">About Trialbee</h1>
                    <p className="text-center text text-lg"> Trialbee is a dynamic software company with a single purpose of accelerating clinical research. We provide innovative software solutions that optimize the clinical trial process by enabling all stakeholders to easily communicate and collaborate on a joint platform.</p>
                </div>
            </div>

        );
    }
});
module.exports = Header;
