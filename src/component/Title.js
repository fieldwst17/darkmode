import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";

const Title =()=>{
    // true turn on switch , false turn off switch 
    const {theme,setTheme}= useContext(ThemeContext)

    // ฟังก์ชั่น ToggleSwitch ทำหน้าที่เปลี่ยนแปลง State Theme
    // กำหนดพารามิเตอร์ checked แล้วนำมาเรียกใช้เพื่อนำไปเปลี่ยนค่า State Theme
    const toggleSwitch = (checked) =>{
        setTheme(
            // "ถ้าเงื่อนไขเป็นจริง" ? "แสดงค่าเมื่อเป็นจริง" : "แสดงค่าเมื่อเป็นเท็จ"
            theme === "light" ? "dark" : "light"
        )
    }
    return(
        <header className={theme==="dark"?"dark":"light"}>
            <span>Mode [{theme}]</span>
            <Switch 
                onChange = {toggleSwitch} 
                checked = {theme==="dark"}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#ffa500'}
            />
        </header>
    )
}

export default Title