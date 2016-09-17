var React = require('react');
var ReactDOM = require('react-dom');

var Table = React.createClass({
    mixins: [ReactFireMixin],

    getInitialState: function() {
        return {data: [], fire: {}};
    },

    update: function() {
        //console.log(this.state.data[0]);
        //firebase.database().ref().child('players').child('fdgfdgsdfgs').child('cogbucks').set(100);
    },

    // ran at initialization
    componentDidMount: function() {
        setInterval(this.update, this.props.pollInterval);
        this.bindAsArray(firebase.database().ref().child(this.props.child), 'data');
    },

    render: function() {
        var headerComponents = this.generateHeaders(),
            rowComponents = this.generateRows();

        return (
            <table>
                <thead> {headerComponents} </thead>
                <tbody> {rowComponents} </tbody>
            </table>
        );
    },

    generateHeaders: function() {
        var cols = this.props.cols;  // [{key, label}]

        // generate our header (th) cell components
        return cols.map(function(colData) {
            return <th key={colData.key}> {colData.label} </th>;
        });
    },

    generateRows: function() {
        var cols = this.props.cols,  // [{key, label}]
            data = this.state.data;

        return data.map(function(item) {
            // handle the column data within each row
            var cells = cols.map(function(colData) {

                // colData.key might be "firstName"
                return <td> {item[colData.key]} </td>;
            });
            return <tr key={item.id}> {cells} </tr>;
        });
    }
});

module.exports = Table;