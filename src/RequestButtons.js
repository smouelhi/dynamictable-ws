/** @jsx React.DOM */

var ReqButton = React.createClass({
	render: function(){
		return (
			<button className={this.props.className} type="button" onClick={this.props.onclickHandler} style={{"margin-right":"5"}}>{this.props.title}</button>
			);
	}
});

var RequestButtons = React.createClass({
	changeData: function(dataNew){
		// i = 1;
		// table.setState({data : dataNew});
		this.props.handler(dataNew);
	},
	render: function(){
		var self = this;
		return (
			<div>
				<ReqButton title={"Reload"} className={"btn"} onclickHandler={this.changeData.bind(self, data)}/>
				<ReqButton title={"Add Feb"} className={"btn"} onclickHandler={this.changeData.bind(self, data2)}/>
				<ReqButton title={"Update cells"} className={"btn"} onclickHandler={this.changeData.bind(self, data3)}/>
				<ReqButton title={"Drilldown US"} className={"btn"} onclickHandler={this.changeData.bind(self, data9)}/>
				<ReqButton title={"Rem Jap"} className={"btn"} onclickHandler={this.changeData.bind(self, data4)}/>
				<ReqButton title={"Rem Feb/Add Jap"} className={"btn"} onclickHandler={this.changeData.bind(self, data5)}/>
				<ReqButton title={"Double CJ"} className={"btn"} onclickHandler={this.changeData.bind(self, data6)}/>
				<ReqButton title={"Double CJ2"} className={"btn"} onclickHandler={this.changeData.bind(self, data7)}/>
				<ReqButton title={"Rem USA Jap"} className={"btn"} onclickHandler={this.changeData.bind(self, data8)}/>
			</div>
			);
	}
});

