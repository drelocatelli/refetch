import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

function Example() {
    const queryClient = useQueryClient();
    const [intervalMs, setIntervalMs] = useState(1500);

    const { status, data, error, isFetching } = useQuery(
        'data',
        async () => {
            const res = await axios.get('/api/hello')
            return res.data;
        }, {
        refetchInterval: intervalMs
    }
    );

    if (status === 'error') return <span>Error</span>

    if(isFetching || status === 'loading') {
        return <span style={{color: 'red'}}>Loading...</span>;
    }

    return (
        <div>
            {data.name}
        </div>
    );

}


const api = () => {
    return <Example />
}

export default api;