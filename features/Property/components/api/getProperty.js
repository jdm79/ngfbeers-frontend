import {axios} from '@/lib/axios';

export const getPropertyDetail = async (id) => {
    const {data} = await axios.get('/properties/detail', {
        params: {externalID: id}
    });
    return data;
}