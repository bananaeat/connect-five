import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations';
import { listComments } from '../graphql/queries';
import { onCreateComment } from '../graphql/subscriptions';

import { useEffect, useRef, useState } from 'react';

import CommentItem from './CommentItem.react';

async function onSubmitComment(textareaRef){
    const comment = {content: textareaRef.current.value};
    console.log(comment);
    if(textareaRef.current.value != null)
        await API.graphql(graphqlOperation(createComment, {input: comment}));
}

function CommentForm(props) {
    const commentRef = useRef(null);
    return (
        <Form onSubmit={!props.loading ? () => {props.setLoading(true); onSubmitComment(commentRef);} : null}>
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
    );
}

async function getComments(setComments, setLoading){
    const comments = (await API.graphql(graphqlOperation(listComments))).data.listComments.items;
        comments.sort((c1, c2) => {
            return c1.createdAt.localeCompare(c2.createdAt);
        })
        setComments(comments);
        setLoading(false);
}

function CommentSection() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to creation of Comment
        API.graphql(
            graphqlOperation(onCreateComment)
        ).subscribe({
            next: (commentData) => {
                getComments(setComments, setLoading);
            }
        });

        // Load comments once after loading the page
        getComments(setComments, setLoading);
    }, []);
    return (
        <>
            <CommentForm loading={loading} setLoading={setLoading}/>
            {comments.map((c, i) => {
                return <CommentItem 
                            key={c.id}
                            id={c.id} 
                            content={c.content} 
                            title={"Comment created at " + c.createdAt + ", updated at " + c.updatedAt} 
                            loading={loading}
                            onUpdate={() => {getComments(setComments, setLoading);}}/>;
            })}
        </>
        
    )
}

export default CommentSection;