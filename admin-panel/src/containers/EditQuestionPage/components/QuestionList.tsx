import { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ProgrammingLanguage, Question } from "../../../types";
import { getProgrammingLanguagesFromAPI } from "../../../utils/apiRequests";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

const QuestionList = () => {
  const classes = useStyles();
  // question list contains title, language, number of alternatives and timestamp
  const [questionList, setQuestionList] = useState<Question[]>([]);

  const [allProgrammingLanguages, setAllProgrammingLanguages] = useState<
    ProgrammingLanguage[]
  >([]);

  useEffect(() => {
    const getProgrammingLanguages = async () => {
      const data = await getProgrammingLanguagesFromAPI();
      console.log(data);
      if (data) {
        setAllProgrammingLanguages(data);
      }
    };

    const getQuestionList = async () => {
      const url = `${process.env.REACT_APP_APIURL}/Question`;
      console.log(url);
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setQuestionList(data);
      } else {
        console.log("error");
      }
    };

    getProgrammingLanguages();
    getQuestionList();
  }, []);

  return (
    <TableContainer component={Paper}>
      {}
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Language ID</TableCell>
            <TableCell align="right">Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questionList.map((row, index) => (
            <TableRow key={row.title}>
              {console.log(row)}
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                {allProgrammingLanguages.length > 0
                  ? allProgrammingLanguages[
                      parseInt(row.programmingLanguageId) - 1
                    ].language
                  : ""}
              </TableCell>
              <TableCell align="right">{row.answer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuestionList;
