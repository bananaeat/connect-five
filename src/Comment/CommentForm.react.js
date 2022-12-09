import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useRef } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations';
import "./Comment.css"

async function onSubmitComment(textareaRef){
    const comment = {content: textareaRef.current.value};
    if(textareaRef.current.value != null)
        await API.graphql(graphqlOperation(createComment, {input: comment}));
}

function CommentForm(props) {
    const commentRef = useRef(null);
    return (
        <Card className="commentInputCard">
            <Card.Body>
                <Form onSubmit={!props.loading ? event => {event.preventDefault(); props.setLoading(true); onSubmitComment(commentRef);} : null}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="comment">Comment</Form.Label>
                        <Form.Control 
                                ref={commentRef}
                                as="textarea"
                                rows={6}
                                id="comment"
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={props.loading}>
                        {props.loading ? "Loading..." : "Submit"}
                    </Button>  
                </Form>
            </Card.Body>
        </Card>
    );
}

export default CommentForm;