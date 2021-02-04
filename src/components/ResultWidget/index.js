import React from 'react'
import Widget from "../Widget"
import PropTypes from 'prop-types'; 


export default function ResultWidget({results}){
    return (
      <Widget>
          <Widget.Header>
             Seu resultado!
            </Widget.Header>
            <Widget.Content>
                <p>
                    {`Voce acertou ${results.filter((x) => x == true).length} perguntas`}
                </p>
            </Widget.Content>
        </Widget>
    )
}

ResultWidget.prototype ={
    results: PropTypes.array.isRequired,
}
