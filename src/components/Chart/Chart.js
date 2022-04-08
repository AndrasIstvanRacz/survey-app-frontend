import * as React from 'react';
import PieChart, {
  Series,
  Label,
  Connector
} from 'devextreme-react/pie-chart';
import Margin from "devextreme-react/chart";

export default class Chart extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let list = []
    this.props.answers.map(answerData => {
      list.push({answerText: answerData.answer, picked: answerData.picked})
    })
    this.setState({data: list})
  }

  render() {
    return (
        <PieChart
          id="pie"
          dataSource={this.state.data}
          palette="Office"
          sizeGroup="piesGroup"
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
