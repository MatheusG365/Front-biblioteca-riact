import css from './Input.module.css';

export default function Input({label, tipo, id = ""}){
    return (
        <div>
            <label>{label}</label>
            <input type={tipo} id={id} className={css.input}/>
        </div>
    )
}

