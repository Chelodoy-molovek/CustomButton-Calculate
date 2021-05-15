import React from "react";
export default class MortageCalc extends React.Component{
    render(){
        return(
            <div>
                <form>
                    сумма:
                    <input type="number"></input>$<br/>
                    ставка:
                    <input type="number"></input>%<br/>
                    срок:
                    <input type="number"></input>лет
                </form>
            </div>
        )
    }
}