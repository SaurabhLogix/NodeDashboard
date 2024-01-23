import { apiSlice } from "../../api/apiSlice";
import { CommonResponse } from "../signup/apiSignUp";

interface ForgotPasswordResponse extends CommonResponse { }

const forgotPasswordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        forgotPassword: builder.mutation<ForgotPasswordResponse, string>({
            query: (emailID) => {
                return ({
                    url: `/ForgatePassword?Email=${emailID}`,
                    method: "GET"
                })
            }
        }),
    })
})

export const {
    useForgotPasswordMutation,
} = forgotPasswordApiSlice