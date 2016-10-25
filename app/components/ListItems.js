var React = require('react');
var Item = require('./Item');

var ListItems = React.createClass({
    getDefaultProps: function(){
        return {
            items: [{
                        id: 0,
                        imageSrc: 'https://trialbee.com/assets/content/our-services-e81bc3525e637cee2a5bfdd6e563bf1f.png',
                        title: 'Our services',
                        description: 'Trialbee is an independent software and service provider specialized in clinical research applications. We are experts of e-recruitment, study retention and EDC solutions.',
                        buttonLabel: 'Services',
                        link: 'https://trialbee.com/services'
                    },
                    {
                        id: 1,
                        imageSrc: 'https://trialbee.com/assets/content/customer-says-b40eb25c9a6b52e92c85b6610ae77cea.png',
                        title: 'Customers say',
                        description: 'Working with Trialbee really simplified our efforts finding patients. Trialbee opened new channels for patient recruitment and helped us increase the recruitment rates',
                        buttonLabel: 'Contact us',
                        link: 'https://trialbee.com/contact'},
                    {
                        id: 2,
                        imageSrc: 'https://trialbee.com/assets/content/unique-2bdf5a5a51f1f314f25ee41c1230e3c7.png',
                        title: 'Our goal',
                        description: 'Trialbee is a dynamic software company with a single purpose of accelerating clinical trials. Our mission is to help bring groundbreaking treatments to the patients faster.',
                        buttonLabel: 'About us',
                        link: 'https://trialbee.com/about/index'
                    }]
        };
    },
    render: function (){
        return (
            <div className="row">
                 {this.props.items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
        );
    }
});
module.exports = ListItems;
