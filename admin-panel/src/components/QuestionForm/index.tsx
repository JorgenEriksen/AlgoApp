import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { FormControl, makeStyles } from '@material-ui/core';
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
  const [numAlternatives, setNumAlternatives] = useState("3");

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
    };

    getProgrammingLanguages();
  }, []);

  // functions

  const clearForm = () => {
    setTitleInput("")
    setcodeInput("")
    setTrueAnswerInput("")
    setaltOneInput("")
    setaltTwoInput("")
    setaltThreeInput("")
    setTimeInput("")
    setNumAlternatives("")
  }

  const submitQuestion = async () => {
    if (!isFormValid()) {
      alert("Form is not valid")
      return
    }

    const response = await fetch("https://localhost:5001/api/ProgrammingLanguage",
      { // API does not handle yet.
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: titleInput,
          formInput: codeInput,
          trueAnswer: trueAnswerInput,
          alternative1: altOneInput,
          alternative2: altTwoInput,
          alternative3: altThreeInput,
          formTimeInput: timeInput,
        })
      });

    clearForm();
    alert("Is valid")
  }

  const isFormValid = () => {
    if (titleInput.length < 1) {
      alert("Not valid1")
      return false
    }
    if (codeInput.length < 1) {
      alert("Not valid2")
      return false
    }
    if (trueAnswerInput.length < 1) {
      alert("Not valid3")
      return false
    }

    if (parseInt(numAlternatives) > 0 && altOneInput.length < 1) {
      alert("Not valid4")
      return false
    }
    if (parseInt(numAlternatives) > 1 && altTwoInput.length < 1) {
      alert("Not valid5")
      return false
    }
    if (parseInt(numAlternatives) > 2 && altThreeInput.length < 1) {
      alert("Not valid6")
      return false
    }

    if (timeInput.toString().slice(-1) !== '0' || parseInt(timeInput) < 0) {
      alert("Not valid7")
      return false
    }
    return true
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
            value={titleInput}
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
            value={codeInput}
          />
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Amount of alternatives</FormLabel>
            <RadioGroup aria-label="Amount of alternatives" name="alternatives" value={numAlternatives}
              onChange={(e) => {
                setNumAlternatives(e.target.value)
              }}>
              <FormControlLabel value="0" control={<Radio color="primary" />} label="0 (take user input)" />
              <FormControlLabel value="1" control={<Radio color="primary" />} label="1" />
              <FormControlLabel value="2" control={<Radio color="primary" />} label="2" />
              <FormControlLabel value="3" control={<Radio color="primary" />} label="3" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <TextField
            label="True answer"
            placeholder="type answer here"
            onChange={(e) => setTrueAnswerInput(e.target.value)}
            value={trueAnswerInput}
          />
        </div>
        <div>
          <TextField
            disabled={parseInt(numAlternatives) === 0}
            label="Answer alternative 1"
            placeholder="type answer here"
            onChange={(e) => setaltOneInput(e.target.value)}
            value={altOneInput}
          />
        </div>
        <div>
          <TextField
            disabled={parseInt(numAlternatives) < 2}
            label="Answer alternative 2"
            placeholder="type answer here"
            onChange={(e) => setaltTwoInput(e.target.value)}
            value={altTwoInput}
          />
        </div>
        <div>
          <TextField
            disabled={parseInt(numAlternatives) < 3}
            label="Answer alternative 3"
            placeholder="type answer here"
            onChange={(e) => setaltThreeInput(e.target.value)}
            value={altThreeInput}
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
            value={timeInput}
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
