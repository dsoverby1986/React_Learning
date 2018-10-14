import React from 'react';

export default ({ description = '', amount, createdAt }) => (
    <tr>
        <td>{ description }</td>
        <td>{ amount }</td>
        <td>{ createdAt }</td>
    </tr>
);