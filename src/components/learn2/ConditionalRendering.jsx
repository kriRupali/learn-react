import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [toggle, setToggle] = useState(true)
    const handleUpdate = () => setToggle(!toggle)

    return (
        <>
            {/* <div>{toggle ? "True Update" : "False Update"}</div> */}
            <button onClick={handleUpdate}>{toggle ? "Hide" : "Show"}</button>

            {toggle ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, placeat autem. Quaerat inventore at repellendus architecto iusto a omnis cum, aspernatur harum vel repellat eum numquam, ipsa enim ab labore?</p> : null}
        </>
    )
}

export default ConditionalRendering