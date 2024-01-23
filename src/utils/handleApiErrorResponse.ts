export function handleApiErrorResponse(error: any): { status: number, message: string } {
    if (error?.status && error?.data && error.data?.message) {
        return {
            status: error.data?.responseCode,
            message: error.data?.message
        }
    }
    else if (error?.code && error?.message) {
        return {
            status: error.code,
            message: error.message
        }
    }
    else {
        return {
            status: 500,
            message: "Something went wrong!"
        }
    }
}
