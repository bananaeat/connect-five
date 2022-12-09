import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations';
import { useRef } from 'react'

async function onSubmitComment(textareaRef){
    const comment = {content: textareaRef.current.value};
    console.log(comment);
    if(textareaRef.current.value != null)
        await API.graphql(graphqlOperation(createComment, {input: comment}));
}

function CommentForm() {
    const commentRef = useRef(null);
    return (
        <Form onSubmit={() => {onSubmitComment(commentRef)}}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="comment">Comment</Form.Label>
                <Form.Control 
                        ref={commentRef}
                        as="textarea"
                        rows={6}
                        id="comment"
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>  
        </Form>
    );
}

function CommentSection() {
    return (
        <CommentForm />
    )
}

export default CommentSection;