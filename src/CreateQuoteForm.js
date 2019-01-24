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
                    <label> Content
                       <textarea />
                    </label>
                    </div>
                    <div>
                    <label> Original Author
                       <input />
                    </label>
                    </div>
                    <div>
                    <label> Submitter
                       <input />
                    </label>
                    </div>
                   <button>Submit</button>
                 </form>
                 <button onClick={this.props.onClose}>close</button>
               </Modal>
        );
    }

}

export default CreateQuoteForm;
