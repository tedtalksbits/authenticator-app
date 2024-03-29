type User = {
    id?: number;
    password: string;
    username: string;
    createdAt?: string;
    updatedAt?: string;
    role_id: '0' | '100' | '400';
};

type UserLogin = {
    username: string;
    password: string;
};

export class UserApi {
    static async getAllUsers() {
        try {
            const response = await fetch('http://localhost:5004/users');
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    static async getUserById(id: number) {
        try {
            const response = await fetch(`http://localhost:5004/users/${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    static async createUser(user: User) {
        try {
            const response = await fetch('http://localhost:5004/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
                credentials: 'include',
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }
    static async createUserWithRole(user: User) {
        try {
            const response = await fetch('http://localhost:5004/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
                credentials: 'include',
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    static async loginUser(user: UserLogin) {
        try {
            const response = await fetch('http://localhost:5004/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
                credentials: 'include',
            });
            console.log(response.headers);
            return await response.json();
        } catch (error) {
            return error;
        }
    }
}
