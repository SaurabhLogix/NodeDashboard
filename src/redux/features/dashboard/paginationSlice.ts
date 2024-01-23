import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
    currentPageNumber: number
}

const initialState: InitialState = {
    currentPageNumber: 1
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPageNumber: (state, action: PayloadAction<number>) => {
            state.currentPageNumber = action.payload;
        },
    }
});

export const {
    setCurrentPageNumber,
} = paginationSlice.actions;
export default paginationSlice.reducer;