import { apiSlice } from "../../api/apiSlice";
import { CommonResponse } from "../signup/apiSignUp";

interface ResetPasswordParams {
    emailID: string;
    password: string;
}

interface ResetPasswordResponse extends CommonResponse { }

const resetPasswordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        resetPassword: builder.mutation<ResetPasswordResponse, ResetPasswordParams>({
            query: (data) => {
                return ({
                    url: `/ResetPassword?Email=${data.emailID}&Password=${data.password}`,
                    method: "GET"
                })
            }
        }),
    })
})

export const {
    useResetPasswordMutation,
} = resetPasswordApiSlice