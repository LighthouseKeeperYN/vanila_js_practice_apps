class EasyHTTP {
    get(url) {
        return new Promise((resolve) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }
}