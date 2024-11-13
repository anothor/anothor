        try {
            var endPoint = "https://uat.api.booking.ezzenhotel.com/api/v1/login";
            var body = {
                username: "ezeen_cms",
                password: "?v#FRW?4b1997$W9n1Uj",
                role: "FRONT_API"
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic Q0xJRU5UX0lEOjY3MzA3OGUzYzdiZmQ0NDFhN2UzYThjOQ=='
                },
                body: JSON.stringify(body)
            };
            
            fetch(endPoint, options)
                .then(response => response.json())
                .then(response => {
                    // console.log(response.token)
                    // return response.token;
                }).catch((error) => {
                    console.log(error)
                });
        } catch (err) {
            console.log(err);
        }
