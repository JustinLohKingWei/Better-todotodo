import '../../styles/ListBox.css'
import { taskProps } from '../../data/taskProps'

function ListBoxItem({task,notes,completed}:taskProps) {

    return(
        <div className='listBoxItem-root'>
            <div className='listBoxItem-task'>
                <div>{task}</div></div>
            <div className='listBoxItem-notes'><div>{notes}</div></div>
            <div className='listBoxItem-completed'><div>{completed}</div></div>
        </div>
    )
    
}

export default ListBoxItem