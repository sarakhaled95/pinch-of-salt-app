import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        return <div>
            hello from recipe List
            <Recipe></Recipe>
        </div>;
    }
}