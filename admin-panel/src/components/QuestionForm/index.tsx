import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
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

  const [titleInput, setTitleInput] = useState("");
  const [codeInput, setcodeInput] = useState("");
  const [trueAnswerInput, setTrueAnswerInput] = useState("");
  const [altOneInput, setaltOneInput] = useState("");
  const [altTwoInput, setaltTwoInput] = useState("");
  const [altThreeInput, setaltThreeInput] = useState("");
  const [timeInput, setTimeInput] = useState("10");

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

  // functions
  const submitQuestion = () => {
    console.log("Running from submitQuestion() call");
  }

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
            label="Question Title"
            placeholder="Enter the question"
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div>
          <TextField
            placeholder="code here"
            multiline
            onChange={(e) => setcodeInput(e.target.value)}
            minRows={20}
            maxRows={40}
          />
        </div>
        <div>
          <TextField
            label="True answer"
            placeholder="type answer here"
            onChange={(e) => setTrueAnswerInput(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Answer alternative 1"
            placeholder="type answer here"
            onChange={(e) => setaltOneInput(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Answer alternative 2"
            placeholder="type answer here"
            onChange={(e) => setaltTwoInput(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Answer alternative 3"
            placeholder="type answer here"
            onChange={(e) => setaltThreeInput(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Time to answer"
            type="number"
            inputProps={{ min: 10, max: 180, step: "10" }} // these parameters might need to be discussed at a later stage, works for now.
            // error check here for negative values and values not in a "10" step.
            placeholder="Time in seconds"
            onChange={(e) => setTimeInput(e.target.value)}
          />
        </div>
        <div>
          <Button
            color="default"
            size="large"
            variant="contained"
            onClick={() => submitQuestion()}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;
