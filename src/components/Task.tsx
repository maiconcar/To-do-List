import styles from './Task.module.css';


import {ClipboardBulletListRtl} from '@styled-icons/fluentui-system-regular/ClipboardBulletListRtl'
import {PlusCircle} from '@styled-icons/bootstrap/PlusCircle';
import { Newtask } from './Newtask';



// function HandleCreateTask(){

// }

const tasks = [
    {
        id: 1 ,
        title: 'Terminar o desafio',
        isCmplete: true,
    },

    {
        id: 2 ,
        title: 'Estudar muito para conseguir um bom trabalho',
        isCmplete: false,
    },

    {
        id: 3 ,
        title: 'Desenvolver discord clone até fim  da semana',
        isCmplete: false,
    },
]

export function Task () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.addnewtask}>
                <textarea 
                    name="comment"
                    placeholder="Adicione uma nova tarefa"
                />
                <button type='submit'
                    // onClick={}
                    >
                    Criar <PlusCircle/>
                </button>
            </div>
                <div className={styles.content}>
                    <header>
                        <div className={styles.createtask}>
                            <strong> Tarefas criadas </strong>
                            <span> 0 </span>

                        </div>

                        <div className={styles.donetask}>
                            <strong> Concluidas </strong>
                            <span> 0 </span>

                        </div>
                    </header>  
                    <div className={styles.midlewrapper}>
                        <ClipboardBulletListRtl/>

                        <span> Você ainda não tem tarefas cadastradas </span>
                        <p>Crie tarefas e organize seus itens a fazer </p>


                    </div >
                        <div className={styles.tasklist}>
                           {tasks.map(tasks => {
                            return <Newtask/>
                           })}

                        </div>
                </div>

            

        </div>
            
    );
}