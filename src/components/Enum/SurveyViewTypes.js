class SurveyViewTypes {

  static Modify = new SurveyViewTypes("modify")
  static Fill = new SurveyViewTypes("fill")
  static Statistics = new SurveyViewTypes("statistics")

  constructor(name) {
    this.name = name
  }
}export default SurveyViewTypes;