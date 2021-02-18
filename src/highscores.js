import React from 'react';

export default (props) => {
    return(
        <React.Fragment>
            {props.highscores.map((score, i) =>{
                const name = score.name;
                const result = score.scores;
                    return(
                        <tr key={i}>
                            <td>{name}</td>
                            <td>{result}</td>
                        </tr>
                    )
                })}
        </React.Fragment>
    )
}