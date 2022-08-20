import style from './Button.module.css';

const Button = ({value}) => {
    return (
        <input className={style.ButtonDesign} type="submit" value={value} />
    );
}

export default Button; 