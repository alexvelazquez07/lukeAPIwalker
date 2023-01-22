import React, {useEffect, useState} from "react";
import axios from "axios";

const Result = (props) => {

    const {search} = props;
    const [responseData, setResponseData] = useState("");
    const [responseError, setResponseError] = useState(false);

    useEffect(() => {
        axios
        .get(`http://swapi.dev/api/${search.category}/${search.id}/`)
        .then((response) => {
            setResponseData(response.data);
            setResponseError(false);
        })
        .catch((error) => {
            setResponseError(true);
        });
        }, [search])

    return (
        <div>
    
        {responseError ?
            <>
            <h2>"Estos no son los droides que está buscando" </h2>
            </>
            :
        <ul>
            {Object.entries(responseData).map(([key, value]) => (
                <li>
                    <span>{key.replace("_", " ").split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}:</span>
                    <span>{value}</span>
                </li>
            ))}
        </ul>
    
        }
        </div>
        );
}

export default Result;