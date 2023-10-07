import { useEffect, useState } from "react"


const useMobiles = () => {
    const [mobiles, setMobiles] = useState([])
    const [loading, setLoading] = useState('')
    useEffect(() => {
        fetch(`http://localhost:3000/mobiles`)
        .then(res => res.json())
        .then(data => setMobiles(data))
        setLoading(false)
    },[])
    return [mobiles,loading]
}

export default useMobiles