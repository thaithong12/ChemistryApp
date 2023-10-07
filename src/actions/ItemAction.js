
// function search
export const searchItem = (dataSearch, count = 0) => {
    return {
        type: 'SEARCH_ACTION',
        payload: { data: dataSearch, check: count },
    };
};