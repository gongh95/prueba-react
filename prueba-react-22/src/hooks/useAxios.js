import axios from "axios"
import { useEffect, useState } from "react"

export function useAxios(arrayDependencias, url) {
    const [data, setData] = useState([])
    const [error, setError] = useState({
        isError: false,
        messagge: ''
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        axios(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                setError({
                    isError: true,
                    messagge: err.message
                });
                console.log(error)
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            })
    }, arrayDependencias)

    return { data, error, isLoading };
}