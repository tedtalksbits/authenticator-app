import Cookies from 'js-cookie';
import axios from 'axios';
type Account = {
    username?: string;
    password?: string;
    website?: string;
    logo?: string;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
};

export class AccountApi {
    static async getAllAccounts(id: string) {
        try {
            const response = await fetch(`http://localhost:5004/accounts?userId=${id}`, {
                credentials: 'include',
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }

    // static async getAccountById(id: number) {
    //     try {
    //         const response = await fetch(`http://localhost:5004/accounts/${id}`);
    //         return await response.json();
    //     } catch (error) {
    //         return error;
    //     }
    // }

    static async createAccount(account: Account) {
        const cookies = Cookies.get();

        console.log(cookies);

        try {
            const response = await fetch('http://localhost:5004/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(account),
                credentials: 'include',
            });
            return await response.json();
        } catch (error) {
            return error;
        }
    }
}
