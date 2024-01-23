import { apiSlice } from "../../api/apiSlice";
import { CommonResponse } from "../signup/apiSignUp";

export interface LoginParams {
    emailID: string;
    password: string;
}

export interface LoginResponse extends CommonResponse {
    accountID: string;
    userID: string;
    emailID: string;
    password: boolean;
    firstName: string;
    lastName: string;
    userName: string;
    isActive: boolean;

}

const loginApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginParams>({
            query: (data) => {
                return ({
                    url: `/Login?Email=${data.emailID}&Password=${data.password}`,
                    method: "GET"
                })
            },

        }),
    })
})

export const {
    useLoginMutation,
} = loginApiSlice;