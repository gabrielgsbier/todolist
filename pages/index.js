import {Div1, Tit2, ButtonI} from './styled-comp'
import {useRouter} from 'next/router';

export default function Index() {
    const roteamento = useRouter();
    
return (
  <Div1 >
  <header>
  <Tit2>Organize seu dia a dia com<br></br>
         To Do List by NextJS </Tit2>
  
  </header>
  <ButtonI onClick={() => roteamento.push('/todolist')}>Ir ao To Do List</ButtonI>

  </Div1>
)
}
