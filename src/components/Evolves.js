import React from 'react';

import {Button} from '@salutejs/plasma-ui';

export default function Header(){
    return (
        <header>
            <div className="btn-group">
                <Button view="primary">1</Button>
                <Button view="primary">2</Button>
                <Button view="primary">3</Button>
                <Button view="primary">4</Button>
                <Button view="primary">5</Button>
                <Button view="primary">6</Button>
            </div>
        </header>
    )
}

