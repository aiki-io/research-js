class EasyHttp {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async delete(url) {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            });
            return await 'resource deleted'
    }
}