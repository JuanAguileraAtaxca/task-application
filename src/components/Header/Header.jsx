import style from './Header.module.css'; 

const Header = () => {
    return (
        <h1 className={style.HeaderFont + " " + style.HeaderDirection}> Tasks application </h1>
    ); 
}

export default Header; 