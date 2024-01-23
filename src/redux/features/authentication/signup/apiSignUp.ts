import { apiSlice } from "../../api/apiSlice";

export interface SignUpParams {
    firstName: string;
    lastName: string;
    emailID: string;
    username: string;
    password: string;
}

export interface CommonResponse {
    responseStatus: boolean;
    responseCode: number;
    keyName: string;
    title: string;
    message: string;
}

export interface SignUpResponse extends CommonResponse { }


const signUpApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation<SignUpResponse, SignUpParams>({
            query: (data) => {
                return ({
                    url: "/SignUp",
                    method: "POST",
                    body: data
                })
            }
        }),
    })
})

export const {
    useSignUpMutation,
} = signUpApiSlice;