import React from 'react';
import loadjs from 'loadjs';

const REMOTE_CONFIG_URL = '/config.js';

const App = () => {
    const [loadedJs, setLoadedJs] = React.useState(false);
    if (!loadjs.isDefined('config')) {
        loadjs([REMOTE_CONFIG_URL], 'config', function () {
        setLoadedJs(true);
        });
    }
    if (!loadedJs) {
        return 'loading';
    }
    return <div>app in user {window?.env?.userAgent}</div>
}

export default App;