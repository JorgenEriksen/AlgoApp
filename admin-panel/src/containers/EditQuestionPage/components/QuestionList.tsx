import { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Question } from "../../../types"


const useStyles = makeStyles({
    table: {
        width: "100%",
    },
});

const QuestionList = () => {

    const classes = useStyles();
    // question list contains title, language, number of alternatives and timestamp
    const [questionList, setQuestionList] = useState<
        Question[]
    >([]);


    function createData(title: string, language: string, alternatives: number, timestamp: string) {
        return { title, language, alternatives, timestamp };
    }

    const rows = [
        createData('What is x at the end of the loop?', "C++", 4, Date.now().toString()),
        createData('What is missing from this code snippet?', "Haskell", 4, Date.now().toString()),
        createData('What should x be for val to be 15?', "Javascript", 4, Date.now().toString()),
    ];

    useEffect(() => {
        const getQuestionList = async () => {
            const url = `${process.env.REACT_APP_APIURL}/Question`;
            console.log(url);
            let response = await fetch(url);
            if (response.ok) {
                let data = await response.json();
                setQuestionList(data);
            } else {
                console.log("error") // lol hack
            }
        };

        getQuestionList();
    }, []);



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Language</TableCell>
                        <TableCell align="right">Alternatives</TableCell>
                        <TableCell align="right">Timestamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.language}</TableCell>
                            <TableCell align="right">{row.alternatives}</TableCell>
                            <TableCell align="right">{row.timestamp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default QuestionList;