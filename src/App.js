import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import Input from './components/Form/input';

const App = () => {
    const [commodity_name, setName] = React.useState('');
    const [commodity_value, setValue] = React.useState('');

    return(
        <form>
            <Input id="commodity_name" label="Nome da Mercadoria" value={commodity_name} setValue={setName}/>
            <Input id="commodity_value" label="Valor" value={commodity_value} setValue={setValue}/>
        </form>
    )
}

export default App;
