import React from 'react';
import Modal from 'react-modal';


class CreateQuoteForm extends React.Component {
    render() {
        return (
               <Modal
                 isOpen={true}
                 onRequestClose={this.props.onClose}
               >

                 <h2>Create A New Quote</h2>
                 <form>
                    <div>
                    <label> Content </label>
                       <textarea />
                    </div>
                    <div>
                    <label> Original Author </label>
                       <input />
                    </div>
                    <div>
                    <label> Date </label>
                       <input />
                    </div>
                    <div>
                    <label> Location </label>
                       <input />
                    </div>
                    <div>
                    <label> Submitter </label>
                       <input />
                    </div>
                   <button>Submit</button>
                   <button onClick={this.props.onClose}>close</button>
                 </form>
               </Modal>
        );
    }
}

export default CreateQuoteForm;
