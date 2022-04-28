class SurveyViewTypes {

  static Edit = new SurveyViewTypes("edit")
  static Fill = new SurveyViewTypes("fill")
  static Statistics = new SurveyViewTypes("statistics")
  static Share = new SurveyViewTypes("share")

  constructor(name) {
    this.name = name
  }
}export default SurveyViewTypes;