
export type ProgrammingLanguage = {
    id: string,
    language: string,
}

export type Question = {
    title: string,
    programmingLanguageId: string,
    time: string,
    code: string,
    answer: string,
    answerExplanation: string,
    answerAlternative1: string,
    answerAlternative2: string,
    answerAlternative3: string,
    timeStamp?: string,
}