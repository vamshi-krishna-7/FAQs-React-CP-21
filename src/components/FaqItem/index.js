// Write your code here.

import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isAnsShowed: false}

  onclickPlusMinus = () => {
    this.setState(prevState => ({isAnsShowed: !prevState.isAnsShowed}))
  }

  render() {
    const {isAnsShowed} = this.state
    const {faqItemDetails} = this.props
    const {questionText, answerText} = faqItemDetails

    const plusMinusImgUrl = isAnsShowed
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const plusMinusAlt = isAnsShowed ? 'minus' : 'plus'

    return (
      <li className="faq-list-item">
        <div className="question-btn-container">
          <h1 className="questionText">{questionText}</h1>
          <button
            type="button"
            className="plus-minus-btn"
            onClick={this.onclickPlusMinus}
          >
            <img
              src={plusMinusImgUrl}
              alt={plusMinusAlt}
              className="img-size"
            />
          </button>
        </div>
        {isAnsShowed && (
          <div className="answer-container">
            <hr className="horizon-line" />
            <p className="answerText">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
