// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    icon: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
    alt: 'plus',
    isActive: false,
  }

  changeAnswer = () => {
    const {isActive} = this.state
    //  console.log(isActive)
    if (isActive === false) {
      this.setState(prevState => ({
        isActive: !prevState.isActive,
        icon:
          'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
        alt: 'minus',
      }))
    } else {
      this.setState(prevState => ({
        icon: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
        alt: 'plus',
        isActive: !prevState.isActive,
      }))
    }
  }

  render() {
    const {isActive, icon, alt} = this.state
    const {question} = this.props
    const {questionText, answerText} = question

    return (
      <>
        <li className="listContainer">
          <div className="questionContainer">
            <h1>{questionText}</h1>
            <button
              onClick={this.changeAnswer}
              className="button"
              type="button"
            >
              <img className="showImage" src={icon} alt={alt} />
            </button>
          </div>
          {isActive && (
            <div className="hr-line">
              <hr />
              <p className="answer">{answerText}</p>
            </div>
          )}
        </li>
      </>
    )
  }
}

export default FaqItem
