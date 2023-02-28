type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    username?: string;
    createdAt?: string;
    updatedAt?: string;
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
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }
}
