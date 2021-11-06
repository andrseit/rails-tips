import AutocompleteHelper from "./autocompleteHelper";

export default function () {
    const form = $('#post-form')
    const tagsContainer = $('#tags-container')

    const autocompleteHelper = new AutocompleteHelper(form, tagsContainer)
    autocompleteHelper.createAutocomplete()
    autocompleteHelper.addSavedLabels($('.saved-label'))
}
