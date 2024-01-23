import {FC, useState} from "react";
import classes from "./App.module.scss";
import {Link, Outlet} from "react-router-dom";
import mountainsImage from "@/assets/images/mountains.jpeg";
import ViteIcon from "@/assets/icons/vite.svg";
export const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount(prev => prev + 1);

  const decrease = () => {
    if (!count) return
    setCount(prev => prev - 1)
  }

  if (__PLATFORM__ === 'mobile') return <div> MobileVersion </div>

  return (
    <div data-testid={'app'} className={classes.app}>
      <nav data-testid={'nav-test-id'} className={classes.navigation}>
        <Link to={'/about'}> About </Link>
        <Link to={'/shop'}> Shop </Link>
      </nav>
      <Outlet/>
      <div className={classes.content}>
        <div>
          <ViteIcon style={{color: 'red'}} width={100} height={100}/>
          <img src={mountainsImage} alt="mountain" width={150}/>
        </div>

        <h1> Hello world! {count} </h1>
        <div className={classes.buttons}>
          <button onClick={increase}> Increase</button>
          <button onClick={decrease}> Descrease</button>
        </div>
      </div>
    </div>
  )
};