import React from 'react';
import CreateQuoteForm from './CreateQuoteForm';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class NavigateBar extends React.Component {
    state = {
        isShowingCreateQuoteForm: false
    }

    handleClick = () => this.setState({isShowingCreateQuoteForm: true});
    handleClose = () => this.setState({isShowingCreateQuoteForm: false});


    render() {
        return (
         <Router>
         <div>
            {this.props.children}
            <div>
                <Link to={"create"}>
                    Create Quote
                </Link>
            </div>
         </div>
         </Router>
        )
    }

}

export default NavigateBar;
