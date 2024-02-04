import GenerateCardList from "./components/GenerateCardList/GenerateCardList"
import data from './data.json';

const App = () => {
    return (
        <>
            <GenerateCardList data={data} />
        </>)
}

export default App