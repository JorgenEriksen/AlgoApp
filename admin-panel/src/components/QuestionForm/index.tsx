import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core';
import { ProgrammingLanguage } from "../../types";

const useStyles = makeStyles((theme) => ({
    newQuestionFormContainer: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

const QuestionPanel = () => {
  const [allProgrammingLanguages, setAllProgrammingLanguages] = useState<
    ProgrammingLanguage[]
  >([]);
  const [programmingLanguageInput, setProgrammingLanguageInput] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();

  // runs once when component is loaded
  useEffect(() => {
    const getProgrammingLanguages = async () => {
      const url = `${process.env.REACT_APP_APIURL}/ProgrammingLanguage`;
      console.log(url);
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setErrorMessage("");
        setAllProgrammingLanguages(data);
        setProgrammingLanguageInput(data[0].id);
      } else {
        setErrorMessage(
          "Something went wrong. Please check your internet connection"
        );
      }

      //let response = await fetch('https://localhost:44377/api/Quiz/1')
      //response = await response.json();
      console.log(JSON.stringify(response));
    };

    getProgrammingLanguages();
  }, []);

  return (
    <div >
      <div className={classes.newQuestionFormContainer}>
        <h2>Admin Panel</h2>

        <div>
            <TextField
            id="outlined-select-currency"
            select
            label="Programming Language"
            value={programmingLanguageInput}
            onChange={(e) => setProgrammingLanguageInput(e.target.value)}
            helperText="Please select your currency"
            variant="outlined"
            >
            {allProgrammingLanguages.map((item) => (
                <MenuItem key={item.language} value={item.id}>
                {item.language}
                </MenuItem>
            ))}
            </TextField>
        </div>

        <div>
            <TextField
            placeholder="code here"
            multiline
            onChange={(e) => console.log(e.target.value)}
            minRows={20}
            maxRows={40}
            />
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;
