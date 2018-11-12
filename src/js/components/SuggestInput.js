import React from 'react';
import Autosuggest from 'react-autosuggest';

export default class SuggestInput extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            value: this.props.value,
            suggestions: [],
            loading: false,
            noSuggestions: false
        };

        this.fetchTimeout = props.fetchTimeout ? this.fetchTimeout : 350;
        this.onChange = this.onChange.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
    }

    onChange (event, { newValue, method }) {

        this.setState({value: newValue});
    }

    onSuggestionSelected (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {

        var self = this;
        self.props.onChange(suggestionValue, self.props.name, suggestion.id);
    }

    onSuggestionsFetchRequested ({ value, reason }) {

        var self = this;

        if (this.fetchTimer) {
            clearTimeout(this.fetchTimer);
            this.fetchTimer = null;
        }

        if (!value) {
            self.setState({ suggestions: this.props.default, noSuggestions: false, loading: false })
            return;
        }

        this.fetchTimer = setTimeout(function(){

            self.fetchItems(value);

        }, this.fetchTimeout);
    }

    fetchItems (q) {

        var self = this;

        self.setState({loading: true});

        const fetcher = this.props.fetcher();
        fetcher(q).then((data) => {
            const isInputBlank = q.trim() === '';
            const noSuggestions = !isInputBlank && data.items.length === 0;
            self.setState({ suggestions: data.items, noSuggestions: noSuggestions, loading: false });

        }).catch( (error) => {

            //console.log(error);
            self.setState({ loading: false });
        });
    }

    onSuggestionsClearRequested () {

        this.setState({
            suggestions: []
        });
    };

    shouldRenderSuggestions() {

        return true;
    }

    getSuggestionValue(suggestion) {

        return suggestion.text;
    }

    renderSuggestion(suggestion) {

        return (
            <div>{suggestion.text}<span>{suggestion.region}</span></div>
        )
    }

    render () {
        const { value, suggestions, loading, noSuggestions } = this.state;
        const inputProps = {
            name: this.props.name,
            autoComplete: 'nope',
            placeholder: this.props.placeholder,
            value,
            required: 'required',
            onChange: this.onChange
        };
        const cl = 'suggest' + (loading ? ' suggest--loading' : '');

        return (
            <div className={cl}>
                <Autosuggest
                    key={this.props.name}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    shouldRenderSuggestions={this.shouldRenderSuggestions}
                    renderSuggestion={this.renderSuggestion}
                    onSuggestionSelected={this.onSuggestionSelected}
                    focusInputOnSuggestionClick={true}
                    alwaysRenderSuggestions={false}
                    inputProps={inputProps} />

                { noSuggestions && <div className="no-suggestions">Ничего не найдено</div>}
            </div>
        );
    }
}

