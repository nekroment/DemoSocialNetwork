import profileReducer, { addPostActionCreator } from './profileReducer.js';
import React from 'react';


test('length of posts should be incremented', () => {
    let state = {
        post: [
            { id: 1, post: 'Idi Na Huj' },
            { id: 2, post: 'Sam idi' },
            { id: 3, post: 'Net ty' },
            { id: 4, post: '...' }],
        profile: null,
        status:''
    }
    let action=addPostActionCreator('testim');
    let newState=profileReducer(state,action);

    expect(newState.post.length).toBe(5);
  });