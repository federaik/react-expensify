import React from 'react';

const ExpenseListItem = ({id, name, desc}) => (
    <div>
        {id} - <strong>{name}</strong> - {desc}
    </div>
)

export default ExpenseListItem;
