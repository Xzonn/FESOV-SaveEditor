import React, {Component} from "react";

class DropDown extends Component {

    render(){
        return (
            <React.Fragment>
                <label className="col-xl-1 col-md-2 col-xs-4 col-form-label">{this.props.dropdown.title}</label>
                <div className="col-xl-2 col-md-4 col-xs-8">
                    <select onChange={this.props.onChange} value={this.props.dropdown.selected} disabled={this.props.disabled}  className="form-select">
                        <option value="">-----</option>
                        {this.props.dropdown.options.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </div>
            </React.Fragment>
        );
    };

}

export default DropDown;