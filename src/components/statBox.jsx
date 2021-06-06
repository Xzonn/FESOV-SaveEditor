import React, {Component} from "react";

class StatBox extends Component {

    render(){
        return (
            <React.Fragment>
                <div className="col-xl-4 col-sm-12">
                    <div className="row">
                        <label className="col-2 col-form-label">{this.props.statbox.title}</label>
                        <label className="col-2 col-form-label">{this.props.statbox.currentValue}</label>
                        <div className="col-8">
                            <button disabled={this.props.disabled} onClick={() => this.props.handleStatChange(this.props.statBoxKey, { op: (a) => a + 1, val: null})} className="col btn btn-outline-dark">+</button>
                            <button disabled={this.props.disabled} onClick={() => this.props.handleStatChange(this.props.statBoxKey, { op: (a) => a - 1, val: null})} className="col btn btn-outline-dark">-</button>
                            <button disabled={this.props.disabled} onClick={() => this.props.handleStatChange(this.props.statBoxKey, { op: null, val: this.props.statbox.maxValue})} className="col btn btn-outline-dark">最大</button>
                            <button disabled={this.props.disabled} onClick={() => this.props.handleStatChange(this.props.statBoxKey, { op: null, val: this.props.statbox.minValue})} className="col btn btn-outline-dark">最小</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

}

export default StatBox;