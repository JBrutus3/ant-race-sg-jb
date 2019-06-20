
import React , { memo } from 'react';

const Loading = memo(function Loading() {
    return (
        <div className="loader">
            <img className="loader__image" src="/images/loader.gif" alt='loading' />
        </div>
    );
});

export default Loading;