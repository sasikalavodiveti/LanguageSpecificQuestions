import React, { Component } from 'react';
import LanguagesList from '../components/LanguagesList';
import questionsList from '../mockJson/questionsList.json';
import './QuestionsContainer.scss';

class QuestionsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageType: questionsList,
            selectedLanguages: [],
            filteredQuestions: []
        }
    }
    onCheckChange = (e) => {
        const selectedCheckboxName = e.target.name;
        const { selectedLanguages } = this.state;
        const getCurrentItemIndex = selectedLanguages.indexOf(selectedCheckboxName);
        if (getCurrentItemIndex === -1) {
            selectedLanguages.push(selectedCheckboxName);
        } else {
            selectedLanguages.splice(getCurrentItemIndex, 1);
        }
        // console.log(selectedLanguages);

        let { languageType } = this.state;
        const getfilteredQuestions = languageType.filter((currentItem, index) => {
            if (selectedLanguages.indexOf(currentItem.type) >= 0) {
                return currentItem;
            }
        });

        console.log(getfilteredQuestions);
        this.setState({
            filteredQuestions: getfilteredQuestions
        })
    }

    render() {
        return (
            <div className='questions_container' >
                <div className='languages_list'>
                    <LanguagesList handleLanguageChange={this.onCheckChange} />
                </div>
                <div className='questions_list'>
                    {this.state.filteredQuestions && this.state.filteredQuestions.length > 0 && (
                        this.state.filteredQuestions.map((item, index) => {
                            return (
                                <div className="language_questions" key={index}>
                                    <h2 className="language_heading">{item.type}</h2>
                                    {item.questionsList.map((q, i) =>
                                        <div className="question_details" key={i}>
                                            <h4>{q.question}</h4>
                                            <h6>{q.answer}</h6>
                                        </div>)}
                                </div>
                            )
                        })
                    )
                    }
                </div>
            </div>
        )
    }

}

export default QuestionsContainer;