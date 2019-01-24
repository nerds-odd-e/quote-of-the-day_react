import React from 'react';
import CreateQuoteForm from './CreateQuoteForm';

class NavigateBar extends React.Component {
    state = {
        isShowingCreateQuoteForm: false
    }

    handleClick = () => this.setState({isShowingCreateQuoteForm: true});
    handleClose = () => this.setState({isShowingCreateQuoteForm: false});


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Create Quote
                </button>
                {this.state.isShowingCreateQuoteForm &&
                 <CreateQuoteForm onClose={this.handleClose}/>}
            </div>
        )
    }

}

export default NavigateBar;
