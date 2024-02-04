import GenerateCardList from "./components/GenerateCardList"
import data from './data.json';

const App = () => {
    return(
    <>
        <GenerateCardList data={data} />
    </>)
}

export default App