import { ProgrammingLanguage } from "../types";

const getProgrammingLanguagesFromAPI = async () => {
  const url = `${process.env.REACT_APP_APIURL}/ProgrammingLanguage`;
  console.log(url);
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json() as Array<ProgrammingLanguage>;
    return data;
  }
  return null 
};

export { getProgrammingLanguagesFromAPI};
