import { useRouter } from 'next/router'
import React from 'react'

function DemoSecond() {
    const Router = useRouter();
    return (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div onClick={() => { Router.push("/") }} style={{ border: "2px solid black", padding: "6px 4px", borderRadius: "10px", cursor: "pointer", userSelect: "none" }}>
                DemoSecond
            </div>
        </div>
    )
}

export default DemoSecond