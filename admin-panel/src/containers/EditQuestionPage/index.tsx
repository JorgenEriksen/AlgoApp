
import QuestionForm from "../../components/QuestionForm";
import QuestionList from "./components/QuestionList"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageContainer: {
        display: 'flex',
        justifyContent: "space-around",
    },
});



const EditQuestionPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.pageContainer}>
            <div>
                <QuestionForm />
            </div>
            <div>
                <QuestionList />
            </div>
        </div>
    )
}

export default EditQuestionPage;