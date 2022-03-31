import * as React from 'react';
import PieChart, {
  Series,
  Label,
  Connector
} from 'devextreme-react/pie-chart';
import Margin from "devextreme-react/chart";

export default class Chart extends React.Component {

  render() {
    const data = [];
    this.props.answers.map(answerData => {
      data.push({answerText: answerData.answer, picked: answerData.picked})
    })
    console.log(data)
    return (
        <PieChart
          id="pie"
          dataSource={data}
          palette="Office"
          title={this.props.question}>
          <Series
            argumentField="answerText"
            valueField="picked"
          >
            <Label visible={true} customizeText={this.formatLabel}>
              <Connector visible={true} width={1}/>
            </Label>

          </Series>
          <Margin  bottom={50}/>
        </PieChart>
    );
  }
  formatLabel=(arg)=> {
    return arg.valueText + " db";
  }
}
