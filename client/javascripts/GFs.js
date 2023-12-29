class GFs {
    static setting = (url, method, data) => {
        return {
            url: url,
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
        }
    }
}