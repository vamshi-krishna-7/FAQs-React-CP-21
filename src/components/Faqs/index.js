// Write your code here.

import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faq-container">
          <h1 className="faq-head">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(eachFaqItem => (
              <FaqItem faqItemDetails={eachFaqItem} key={eachFaqItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
