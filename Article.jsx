import React from 'react';
import './Article.css';
import { Button } from 'semantic-ui-react';

function Article(){
    return(
        <div className='logo'>
            <div className='Header'>
                <label>
                    Title:
                    &nbsp;&nbsp;
                    <textarea placeholder="Enter a descriptive title " name='Title' rows={1} cols={100} />
                </label>
            </div>
            <div className='column'>

                <span> Abstract: </span>
                
            </div>
            <div>
            <textarea placeholder="Enter a 1-paragraph abstract "  rows={4} cols={100} />
            </div>

            <div className='line'>
                <label>
                    Article Text:
                </label>
            </div>
            <div>
            <textarea placeholder="Enter a 1-paragraph abstract "  rows={7} cols={100} />
            </div>

            <div className='space'>
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
export default Article;