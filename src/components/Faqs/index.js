// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="appContainer">
      <div className="cardContainer">
        <h1 className="heading">FAQs</h1>
        <ul className="container">
          {faqsList.map(eachFaq => (
            <FaqItem question={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
