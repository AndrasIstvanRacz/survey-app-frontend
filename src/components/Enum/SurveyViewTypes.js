class SurveyViewTypes {

  static Edit = new SurveyViewTypes("edit")
  static Fill = new SurveyViewTypes("fill")
  static Statistics = new SurveyViewTypes("statistics")

  constructor(name) {
    this.name = name
  }
}export default SurveyViewTypes;