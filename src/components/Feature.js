import React from 'react';

const Feature = (props) => {

    const { icon,
        titleBold,
        titleNormal,
        content,
        child,
        buttonText } = props.feature;
    return (
        
            <div className= {'frst' + ' ' + child} >
                <div className="icon-class">
                    <i className={icon}></i>
                </div>
                <h4><b>{titleBold}</b> <i>{titleNormal}</i></h4>
                <p>{content}</p>

                <button type="button" className="button-first-container">{buttonText}</button>
            </div>

    )
}

export default Feature;