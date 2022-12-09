import { API, graphqlOperation } from 'aws-amplify';
import { listComments } from '../graphql/queries';
import { onCreateComment } from '../graphql/subscriptions';

import { useEffect, useState } from 'react';

import CommentItem from './CommentItem.react';
import CommentForm from './CommentForm.react';

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
                            title={"Comment "+ c.id}
                            createdAt={c.createdAt}
                            updatedAt={c.updatedAt} 
                            loading={loading}
                            onUpdate={() => {getComments(setComments, setLoading);}}/>;
            })}
        </>
        
    )
}

export default CommentSection;