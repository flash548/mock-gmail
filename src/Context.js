import React from 'react';

// holds the main context for the app's compos to access


export const DataContext = React.createContext({
    emails: [], // will hold all emails array
    filter: '', // current filter that gets set by the search compo to filter viewable emails
    currentMsgId: -1, // holds the email id message being viewed
});
