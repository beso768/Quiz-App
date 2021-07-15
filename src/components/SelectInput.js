import React from 'react'

export default function SelectInput({label,onChange,value,uniqueItems}) {
    return (
        <>
            <label forhtml={label}>choose {label}:
                <select name={label} onChange={onChange} value={value} >
                    <option>All</option>
                    {
                        uniqueItems && uniqueItems.map((item,index) => <option key={index}> {item}</option>)
                    }
                </select>
             </label>
        </>
    )
}



