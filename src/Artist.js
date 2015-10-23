'use strict'

import React from 'react';

//export default React.createClass({

var Artist = React.createClass({

	displayName: 'Artist',

	render: function(){
		return (
			<span>Artist name: {this.props.name}</span>
		);
	}

});

console.log(document.getElementById('app'));

if(document.getElementById('app') != null){
	React.render(<Artist name="Run the Jewels" />, document.getElementById('app'));
}

export default Artist;