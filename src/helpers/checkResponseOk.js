export function checkResponseOk(response) {
    return response.json()
        .then((data) => {
            if (!response.ok) {
                return Promise.reject(data);
            } else {
                return data;
            }
        });
}