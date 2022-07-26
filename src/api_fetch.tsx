const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST({ username, password }: { username: string, password: string }) {
    return {
        method: 'POST',
        url: API_URL + "/jwt-auth/v1/token",
        headers: { 'Content-Type': 'application/json' },
        data: { username, password }
    }
}

export function USER_GET(token: string | null) {
    return {
        method: 'GET',
        url: API_URL + "/api/user",
        headers: { Authorization: "Bearer " + token },
    }
}

export function TOKEN_VALIDATE_POST(token: string) {
    return {
        method: 'POST',
        url: API_URL + "/jwt-auth/v1/token/validate",
        headers: { Authorization: "Bearer " + token },
    }
}

export function USER_POST(username: string, password: string, email: string) {
    return {
        method: 'POST',
        url: API_URL + "/api/user",
        headers: { 'Content-Type': 'application/json' },
        data: {
            username: username,
            password: password,
            email: email
        }
    }
}
