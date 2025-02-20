import { useState } from 'react';

export const useJobListCardHook = (job) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if(!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    return { showFullDescription, setShowFullDescription, description};
}

const showFullJobDescription = (setShowFullDescription) => {
    setShowFullDescription((prevState) => !prevState)
}

export const onClickJobDescription = (setShowFullDescription) => {
    return (() => showFullJobDescription(setShowFullDescription));
}