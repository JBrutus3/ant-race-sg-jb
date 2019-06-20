import axios from 'axios';

export function fetchAnts() {
    const queryParams = '{ ants {name length weight color } }';

    return axios({
        url: `https://antserver-blocjgjbpw.now.sh/graphql?query=${queryParams}`,
        method: 'get',
    }).then(({ data }) => {
        return data;
    });
}