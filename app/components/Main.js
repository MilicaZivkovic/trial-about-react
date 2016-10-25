var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');
var ListItems = require('./ListItems');

var Main = React.createClass({
    render: function(){
        return (<div>
                    <Header/>
                    <ListItems/>
                </div>);
    }
});
ReactDOM.render(<Main />, document.getElementById('app'));
