import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';



const QuestionPanel = () => {
    const APIURL = 'https://localhost:44377/api';
    const [allProgrammingLanguages, setAllProgrammingLanguages] = useState([]);
    const [programmingLanguageInput, setProgrammingLanguageInput] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const getProgrammingLanguages = async () => {
            const url = `${APIURL}/ProgrammingLanguage`;
            let response = await fetch(url);
            if (response.ok) {
                let data = await response.json();
                setErrorMessage("");
                setAllProgrammingLanguages(data);
                console.log(data)
            } else {
                setErrorMessage("Something went wrong. Please check your internett connection")
            }


            //let response = await fetch('https://localhost:44377/api/Quiz/1')
            //response = await response.json();
            console.log(JSON.stringify(response))
        }

        getProgrammingLanguages();
    }, [])

    return (
        <div>
            <h2>Admin Panel</h2>
            {
                /*
                <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={programmingLanguageInput}
                onChange={(e) => setProgrammingLanguageInput(e.target.value)}
                helperText="Please select your currency"
                variant="outlined"
            >
                        {allProgrammingLanguages.map((item) => (
                <MenuItem key={item.language} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
                */
            }


            <TextField
                placeholder="code here"
                multiline
                minRows={20}
                maxRows={40}
            />
        </div>
    );
}

export default QuestionPanel;