'use client';

import React, { useState } from 'react'
import { Button, Row } from '@bootstrap';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { setCurrentPageNumber } from '@/redux/features/dashboard/paginationSlice';

type CustomPaginationProps = {
    dataLength: number
    limit: number
}

export default function CustomPagination({ dataLength, limit }: CustomPaginationProps) {
    const dispatch = useAppDispatch();
    const { currentPageNumber } = useAppSelector(state => state.pagination);

    const [currentPage, setCurrentPage] = useState(currentPageNumber);

    const totalPages = Math.ceil(dataLength / limit);
    const endResultNumber = currentPage * limit;
    const startResultNumber = (endResultNumber - limit) + 1;

    const previousPage = () => {
        dispatch(setCurrentPageNumber(currentPage - 1))
        setCurrentPage((prev) => prev - 1)
    }

    const nextPage = () => {
        dispatch(setCurrentPageNumber(currentPage + 1))
        setCurrentPage((prev) => prev + 1)
    }

    return (
        <Row className="align-items-center mt-2 py-2 px-2 gy-2 text-center text-sm-start">
            <div className="col-sm">
                <div className="text-muted">Showing <span className="fw-semibold">{startResultNumber}</span> of <span className="fw-semibold">{endResultNumber > dataLength ? dataLength : endResultNumber}</span> Results</div>
            </div>
            <div className="col-sm-auto">
                <ul className="pagination pagination-separated mb-0 justify-content-center justify-content-sm-start">
                    <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                        <Button
                            variant="link"
                            className="page-link"
                            onClick={previousPage}
                        >
                            Previous
                        </Button>
                    </li>

                    {
                        [...Array(totalPages)].map((_, index) => {
                            const page = index + 1;

                            return (
                                <React.Fragment key={index}>
                                    <li className="page-item">
                                        <Button
                                            variant="link"
                                            className={page === currentPage ? "page-link active" : "page-link"}
                                            onClick={() => {
                                                dispatch(setCurrentPageNumber(page))
                                                setCurrentPage(page)
                                            }}
                                        >
                                            {page}
                                        </Button>
                                    </li>
                                </React.Fragment>

                            )
                        })
                    }

                    <li className={currentPage === totalPages ? "page-item disabled" : "page-item"} >
                        <Button
                            variant="link"
                            className="page-link"
                            onClick={nextPage}
                        >
                            Next
                        </Button>
                    </li>
                </ul>
            </div>
        </Row >
    )
}
