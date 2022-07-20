import { Trash } from "phosphor-react";
// import { Check2 } from '@styled-icons/bootstrap/Check2';
import styles from './Newtask.module.css'





export function Newtask () {
    return (
        <>
        <div className={styles.newtask}> 
          <input type="checkbox" 
             /> 
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
                repellat ipsum 
             </p>
             {/* retirar a porra da borda não com border none nem outline none */}
             <button 
                title="Deletar comentario">
                 <Trash size={24}/>
              </button>
         </div>
            
    </>
        
    );
}