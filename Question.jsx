import React from 'react';
import './Question.css';
import { Button } from 'semantic-ui-react';

function Question(){
    return(
        <div className='module'>
            <div className='header'>
                <label>
                    Title:
                    &nbsp;&nbsp;
                    <textarea placeholder="start your question with how , what , why , etc.." name='Title' rows={1} cols={100} />
                </label>
            </div>
            <div className='Tutorial'>
                <label> Describe your problem: </label>
            </div>
            <div>
            <textarea placeholder="" name='description' rows={10} cols={100} />
            </div>

            <div className='web'>
                <label>
                    Tags:
                    &nbsp;
                    <textarea placeholder="please add upto 3 tags to describe what your question is about. e.g., java" name='Tags' rows={1} cols={80} />
                </label>
            </div>
            <div className='center-button'>
        <Button class="button">
          Post
        </Button>
      </div>
    </div>
  );
}

export default Question;