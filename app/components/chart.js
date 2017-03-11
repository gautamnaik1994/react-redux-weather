import React from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    // var sum = data.reduce((acc, val) => { return acc + val; }, 0);
    // return sum / data.length;
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={50} width={100} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>    
            <div>{average(props.data)} {props.units}</div>
        </div>  
    );
}