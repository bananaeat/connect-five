import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Placeholder from 'react-bootstrap/Placeholder';
import { API } from "aws-amplify";
import { deleteComment } from "../graphql/mutations";
import { useState } from 'react';
import "./Comment.css"


const placeholderComment = (<Card className="commentItem">
                                <Placeholder as={Card.Header} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Card.Body} animation="glow">
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={12} />
                                        <Placeholder xs={12} />
                                        <Placeholder xs={7} />
                                    </Placeholder>
                                </Placeholder>
                            </Card>);



function CommentItem(props){
    const [updating, setUpdating] = useState(false);
    async function onClickDelete(){
        setUpdating(true);
        const commentDetail = {
            id: props.id
        };
        const deletedComment = await API.graphql({ query: deleteComment, variables: {input: commentDetail}});
        props.onUpdate();
    }

    return (props.loading || updating) ? placeholderComment : (
        <Card className="commentItem">
            <Card.Header className="commentTitle">
                <div>{props.title}</div>
                <CloseButton className="commentDeleteButton" onClick={() => {onClickDelete();}}/>
            </Card.Header>
            <Card.Body>
                <Card.Text className="commentContent">
                    {props.content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CommentItem;