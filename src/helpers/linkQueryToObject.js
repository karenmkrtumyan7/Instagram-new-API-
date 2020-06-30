export function queryToObject (query) {
    if (!query.search) {};
    
    const queriesKeyValueArray = query.search.substring(1).split("&").map(keyValue => keyValue.split("="));
    return Object.fromEntries(queriesKeyValueArray);
}