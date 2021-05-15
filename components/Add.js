import React from "react";
import CustomButton from "./CustomButton"
import MortageCalc from "./MortageCalc"
export default class Add extends React.Component {
    render() {
        return (
            <div>
                <CustomButton text="button" warnMessage="warning" hint="tutu vash text" />
                <MortageCalc />
            </div>

        )
    }
}