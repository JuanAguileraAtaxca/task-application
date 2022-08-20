import style from './Input.module.css';

const Input = ({placeHolder, typeInput}) => {
    return(
        <input className={style.InputDesign} type={typeInput} placeholder={placeHolder}/>
    ); 
}

export default Input; 