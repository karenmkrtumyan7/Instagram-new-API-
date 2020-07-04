export function checkResponseOk(response) {
    console.log(response)
    return response.json()
        .then((data) => {
            if (!response.ok) {
                return Promise.reject(data);
            } else {
                return data;
            }
        });
}