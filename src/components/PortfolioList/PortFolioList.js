import React from 'react'
import './PortFolioList.scss'
export default function PortFolioList({title,active,setSelected,id}) {
    return (
        <li 
            className={active ? "portfoliolist active" 
                        : "portfoliolist"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
