import React from 'react';
import languageListJson from '../mockJson/LanguageList.json';
import './LanguagesList.scss';

function LanguagesList(props) {
    return (
        <div className='lang_list_container'>
            {languageListJson.map((item, index) => {
                return (
                    <div className="language_name" key={index.toString()} 
                        onChange={(e)=>props.handleLanguageChange(e)}>
                        <input
                            className="form-check-input"
                            value={item.languageName}
                            type="checkbox"
                            name={item.languageName}
                            id={`${item.languageName}_${index}`}
                        />
                        <p className="display_name">{item.languageName}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default LanguagesList;