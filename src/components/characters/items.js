import React from 'react';

const Posts = ({ items, loading }) => {
    if (loading) {
        return <Spinner / >
    }

    return ( <
        ul className = 'list-group mb-4' > {
            items.map(items => ( <
                li key = { items.id }
                className = 'list-group-item' > { items.title } <
                /li>
            ))
        } <
        /ul>
    );
};

export default Posts;