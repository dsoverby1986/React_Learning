import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};

export default ({ id, description, amount, createdAt, note }) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return (
        <tr>
            <td>
                <Link to={`/edit/${id}`}>{ description }</Link>
            </td>
            <td>
                { `$${(amount / 100).toFixed(2)}` }
            </td>
            <td>
                { `${months[month]} ${day}, ${year}` }
            </td>
            <td>
                { note || 'N/A' }
            </td>
        </tr>
    );
};