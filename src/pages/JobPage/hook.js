import { useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

export const useJobPageHook = () => {
    const { id } = useParams();
    const job = useLoaderData();
    const [loading, setLoading] = useState(true);

    return {id, job, loading, setLoading}
}