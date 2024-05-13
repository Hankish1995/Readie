import Reac, { useState } from 'react'
import './tasks.css'

const DropPlace = ({ handleChangeTaskStatus, setMove_position, current }) => {
    const [active, setActive] = useState(false)
    const handleSaveName = () => {
        setMove_position(current)
    }
    return (
        <section onDragEnter={() => { setActive(true); handleSaveName() }} onDragLeave={() => { setActive(false); handleChangeTaskStatus() }} className={active ? 'show_drop' : 'hide_drop'}>DropPlace</section>
    )
}

export default DropPlace