import React, { useState } from 'react'
import { Pagination } from "react-bootstrap";

function Pages({ count }) {
    const [size, setSize] = useState('5')
    const pageCount = Math.ceil(count / size)
    const pages = []
    const [start, setStart] = useState('0')
    console.log(count)
    console.log(pageCount)
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className="mt-3">
            <Pagination.First />
            {pages.map(page =>
                <Pagination.Item>
                    {page}
                </Pagination.Item>
            )}
            <Pagination.Last />
        </Pagination>
    );
}

export default Pages
