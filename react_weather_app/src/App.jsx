import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Appwrap = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px solid black;

    .appContentWrap {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        border: 1px solid blue;
        padding: 20px;
    }
`;

const ResultWrap = styled.div`
    margin-top: 60px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 9px;
`;

function App() {
    const [location, setLocation] = useState("");
    const [result, setResult] = useState({});
    const API_KEY = "829bcee313d551fbf9fd3b5ab92d05ae";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    

    const searchWeather = async (e) => {
        if (e.key === "Enter") {
            try {
                const data = await axios({
                    method: "get",
                    url: url,
                });
                console.log(data);
                setResult(data)
            } catch (err) {
                alert(err);
            }
        }
    };
    
    return (
        <Appwrap>
            <div className="appContentWrap">
                <input
                    type="text"
                    placeholder="도시를 입력하세요"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={searchWeather}
                />
                <ResultWrap>
                    <div className="city">{result.data.name}</div>
                    <div className="temp">{result}</div>
                    <div className="sky">{result}</div>
                </ResultWrap>
            </div>
        </Appwrap>
    );
}

export default App;
