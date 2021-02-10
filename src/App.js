import './index.css'
import React from 'react'
import Input from './components/Form/input';
import Select from './components/Form/Select';

const App = () => {
    const [commodity_name, setName] = React.useState('');
    const [commodity_value, setValue] = React.useState('');
    const [action, setAction] = React.useState('');

    return(
        <form>
            <Select options= {['Compra', 'Venda']}
                value={action}
                setValue={setAction}
            />
            <Input id="commodity_name" label="Nome da Mercadoria" value={commodity_name} setValue={setName}/>
            <Input id="commodity_value" label="Valor" value={commodity_value} setValue={setValue}/>
            <button>Adicionar transação</button>
        </form>
    )
}

export default App;
