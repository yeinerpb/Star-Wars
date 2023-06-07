import React from 'react';
import Card from './shared/Card';
import LoadingSpinner from './shared/LoadingSpinner';
import Error from './shared/Error';

function Home() {
    return (
        <div>
            <h1>Welcome to the Star Wars App!</h1>
            <Card title="Some Title" description="Some description" />
            <LoadingSpinner />
            <Error message="An error occurred." />
        </div>
    );
}

export default Home;
