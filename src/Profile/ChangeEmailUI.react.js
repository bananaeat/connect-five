import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

async function updateUserEmail(email) {
    const user = await Auth.currentAuthenticatedUser();
  
    await Auth.updateUserAttributes(user, {
      email: email
    })
      .then(() => {
        console.log('a verification code is sent');
      })
      .catch((e) => {
        console.log('failed with error', e);
      });
  }
  
async function verifyEmailValidationCode(code, setSuccess, setError, setShow) {
    await Auth.verifyCurrentUserAttributeSubmit('email', code)
      .then(() => {
        setSuccess(true);
        setError(null);
        setShow(false);
        return true;
      })
      .catch((e) => {
        setError('Verification code is not correct!');
        return false;
      });
  }
  
function ValidationCodeForm(props) {
    const [validationCode, setValidationCode] = useState(null);
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            Verification Code (sent to the new email):
          </Form.Label>
          <Form.Control onChange={(e) => {
                setValidationCode(e.target.value);
              }}
              type="text"
              name="vc" />
        </Form.Group>
        <Button className="mb-3" onClick={() => {
          verifyEmailValidationCode(validationCode, props.setSuccess, props.setError, props.setShow);
        }}>
          Submit
        </Button>
      </Form>
    );
  }

function SuccessModal(props){
  return (<Modal show={props.show} onHide={() => props.setShow(false)}>
    <Modal.Body>
      Email update successful!
    </Modal.Body>
  </Modal>);
}

function handleVerifyEmail(updateUserEmail, newEmail, setShowSendCode, setError){
  if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(newEmail)){
    setError(null);
    updateUserEmail(newEmail);
    setShowSendCode(true);
  } else {
    setError("Invalid new email address!")
  }
}

function ChangeEmailUI(props){
    const [showSendCode, setShowSendCode] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState(null);
    const emailRef = useRef();
    return (<>
              <Modal show={props.show} onHide={() => props.setShow(false)}>
                <Modal.Body >
                    <Form className="mb-3">
                      <Form.Group className="mb-3">
                        <Form.Label>New email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="name@example.com" />
                      </Form.Group>
                      <Button onClick={() => handleVerifyEmail(updateUserEmail, emailRef.current.value, setShowSendCode, setError)}>
                        Update Email
                      </Button>
                    </Form>
                  {showSendCode && <ValidationCodeForm setShow={props.setShow} setSuccess={setShowSuccess} setError={setError}/>}
                  {error && <Alert variant="danger">{error}</Alert>}
                </Modal.Body>
              </Modal>
              <SuccessModal show={showSuccess} setShow={setShowSuccess}/>
            </>);
}

export default ChangeEmailUI;