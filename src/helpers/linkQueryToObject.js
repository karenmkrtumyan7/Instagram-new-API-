export function queryToObject (query) {
    if (!query.search) return;
    
    const queriesKeyValueArray = query.search.substring(1).split("&").map(keyValue => keyValue.split("="));
    return Object.fromEntries(queriesKeyValueArray);
}